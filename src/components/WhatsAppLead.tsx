"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import styles from "./WhatsAppLead.module.css";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

type Props = {
  lang: Lang;
  t: Dictionary;
  /** Drop the helper line under the button — for tight spots like a CTA card
      or the sticky bar, where the surrounding copy already sets context. */
  compact?: boolean;
  /** "onDark" swaps the navy fill for an off-white one, for buttons that sit
      on a dark card or bar (the default navy button has no contrast there). */
  variant?: "default" | "onDark";
};

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  area: string;
  foundVia: string;
  message: string;
};

type WhatsAppLeadDetail = Partial<FormState>;

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  area: "",
  foundVia: "",
  message: "",
};

const WA_NUMBER = SITE.whatsapp.replace(/\D/g, "");

function greeting(lang: Lang): [string, string, string, string] {
  if (lang === "tr") {
    return ["Merhaba,", "Adım", "Konu", "Durumum kısaca:"];
  }
  if (lang === "en") {
    return ["Hello,", "My name is", "Topic", "My situation in brief:"];
  }
  return ["Guten Tag,", "mein Name ist", "Thema", "Mein Anliegen in Kürze:"];
}

function buildMessage(form: FormState, areaLabel: string, lang: Lang, pageUrl: string) {
  const [hi, nameIntro, topic, brief] = greeting(lang);
  const name = `${form.firstName} ${form.lastName}`.trim();
  return [
    hi,
    "",
    `${nameIntro} ${name}.`,
    `${topic}: ${areaLabel}`,
    "",
    brief,
    form.message,
    "",
    form.foundVia ? `(${form.foundVia})` : "",
    pageUrl,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

export function openWhatsAppLead(detail: WhatsAppLeadDetail = {}) {
  window.dispatchEvent(new CustomEvent<WhatsAppLeadDetail>("open-whatsapp-lead", { detail }));
}

export function WhatsAppLeadProvider({ lang, t }: { lang: Lang; t: Dictionary }) {
  const c = t.contact;
  const w = c.wa;
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const uid = useId();

  useEffect(() => {
    const openWithDetail = (detail: WhatsAppLeadDetail = {}) => {
      setForm((current) => ({ ...current, ...detail }));
      setFailed(false);
      setOpen(true);
    };

    const onOpen = (event: Event) => {
      openWithDetail((event as CustomEvent<WhatsAppLeadDetail>).detail);
    };

    const onWhatsAppAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.("a[href^='https://wa.me/'], a[href^='http://wa.me/']") as
        | HTMLAnchorElement
        | null;
      if (!link) return;

      event.preventDefault();
      const url = new URL(link.href);
      openWithDetail({
        area: url.searchParams.get("area") || "",
        foundVia: url.searchParams.get("source") || "",
        message: url.searchParams.get("text") || "",
      });
    };

    window.addEventListener("open-whatsapp-lead", onOpen);
    document.addEventListener("click", onWhatsAppAnchorClick, true);

    return () => {
      window.removeEventListener("open-whatsapp-lead", onOpen);
      document.removeEventListener("click", onWhatsAppAnchorClick, true);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((s) => ({ ...s, [key]: e.target.value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const el = event.currentTarget;
    if (!el.reportValidity()) return;

    setBusy(true);
    setFailed(false);

    const areaLabel =
      t.areas.items.find((a) => a.slug === form.area)?.title ?? form.area;
    const pageUrl = typeof window !== "undefined" ? window.location.href : SITE.url;

    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      area: form.area,
      foundVia: form.foundVia,
      message: form.message.trim(),
      consent: true,
      lang,
      source: "whatsapp",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (error) {
      console.error("[whatsapp-lead] submit failed", error);
      setBusy(false);
      setFailed(true);
      return;
    }

    const text = encodeURIComponent(buildMessage(form, areaLabel, lang, pageUrl));
    window.location.assign(`https://wa.me/${WA_NUMBER}?text=${text}`);
  }

  const dialog =
    open &&
    createPortal(
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${uid}-title`}
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label={w.close}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>

            <p className={styles.eyebrow}>{w.eyebrow}</p>
            <h2 id={`${uid}-title`} className={styles.title}>
              {w.title}
            </h2>
            <p className={styles.intro}>{w.intro}</p>

            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>{w.firstName}</span>
                  <input
                    required
                    autoComplete="given-name"
                    className={styles.input}
                    value={form.firstName}
                    onChange={set("firstName")}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>{w.lastName}</span>
                  <input
                    required
                    autoComplete="family-name"
                    className={styles.input}
                    value={form.lastName}
                    onChange={set("lastName")}
                  />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>{w.phone}</span>
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className={styles.input}
                    value={form.phone}
                    onChange={set("phone")}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>{c.email}</span>
                  <input
                    required
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className={styles.input}
                    value={form.email}
                    onChange={set("email")}
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>{c.area}</span>
                <select
                  required
                  className={styles.select}
                  value={form.area}
                  onChange={set("area")}
                >
                  <option value="" disabled>
                    {c.areaPlaceholder}
                  </option>
                  {t.areas.items.map((a) => (
                    <option key={a.slug} value={a.slug}>
                      {a.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{w.foundVia}</span>
                <select
                  required
                  className={styles.select}
                  value={form.foundVia}
                  onChange={set("foundVia")}
                >
                  <option value="" disabled>
                    {w.foundViaPlaceholder}
                  </option>
                  {w.foundViaOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{c.message}</span>
                <textarea
                  required
                  rows={4}
                  className={styles.textarea}
                  value={form.message}
                  onChange={set("message")}
                />
              </label>

              <p className={styles.privacy}>
                {w.privacy}{" "}
                <Link href={routes.privacy(lang)} target="_blank">
                  {c.consentLink}
                </Link>
              </p>

              {failed && (
                <p role="alert" className={styles.error}>
                  {w.error}
                </p>
              )}

              <button type="submit" className={styles.submit} disabled={busy}>
                {busy ? w.submitting : w.submit}
              </button>
            </form>
          </div>
        </div>,
      document.body,
    );

  return dialog;
}

export function WhatsAppLead({ lang, t, compact = false, variant = "default" }: Props) {
  const c = t.contact;

  return (
    <>
      <button
        type="button"
        className={variant === "onDark" ? `${styles.trigger} ${styles.triggerOnDark}` : styles.trigger}
        onClick={() => openWhatsAppLead()}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1 14.64-11.6 9.36 9.36 0 0 1 2.76 6.68 9.43 9.43 0 0 1-9.42 9.34zM20.06 3.9A11.32 11.32 0 0 0 2.05 17.5L.5 23.5l6.14-1.6a11.32 11.32 0 0 0 5.42 1.38h.01a11.34 11.34 0 0 0 8-19.38z"
          />
        </svg>
        {c.whatsapp}
      </button>
      {!compact && (
        <p
          className={
            variant === "onDark" ? `${styles.triggerNote} ${styles.triggerNoteOnDark}` : styles.triggerNote
          }
        >
          {c.whatsappNote}
        </p>
      )}
    </>
  );
}
