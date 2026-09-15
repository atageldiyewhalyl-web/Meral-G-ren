import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { SITE } from "@/content";
import { LANGS, type Lang } from "@/content/types";

export type Lead = {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  lang: string;
  source: string;
  /** How the visitor says they found the Kanzlei — the attribution signal that
      lets nüll show which channel produced the enquiry. Empty for the plain
      contact form; set by the WhatsApp lead-capture modal. */
  foundVia: string;
  submittedAt: string;
};

export type ValidationResult =
  | { ok: true; lead: Lead }
  | { ok: false; errors: string[] };

const MAX = { name: 120, email: 160, phone: 40, area: 60, message: 5000, foundVia: 60 };
const DEFAULT_NOTIFY_TO = "halyl@xn--nll-hoa.com";
const DEFAULT_NOTIFY_FROM = "Meral Gören Website <anfrage@forms.xn--nll-hoa.com>";

function str(value: unknown, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/** Server-side validation — never trust the browser's `required` attributes. */
export function validateLead(input: unknown): ValidationResult {
  const errors: string[] = [];
  const raw = (input ?? {}) as Record<string, unknown>;

  const name = str(raw.name, MAX.name);
  const email = str(raw.email, MAX.email);
  const phone = str(raw.phone, MAX.phone);
  const area = str(raw.area, MAX.area);
  const message = str(raw.message, MAX.message);
  const lang = LANGS.includes(raw.lang as Lang) ? (raw.lang as Lang) : "de";

  if (name.length < 2) errors.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push("email");
  if (!area) errors.push("area");
  if (message.length < 10) errors.push("message");
  // The consent checkbox is a legal requirement (Art. 6(1)(a) GDPR), not a nicety.
  if (raw.consent !== "on" && raw.consent !== true) errors.push("consent");

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    lead: {
      name,
      email,
      phone,
      area,
      message,
      lang,
      source: str(raw.source, 60) || "website",
      foundVia: str(raw.foundVia, MAX.foundVia),
      submittedAt: new Date().toISOString(),
    },
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function splitName(name: string): { firstName: string; lastName: string } {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return { firstName: name, lastName: "—" };
  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1) ?? "—",
  };
}

function getSupabase() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

function renderMail(lead: Lead): string {
  return [
    `Neue Anfrage über ${SITE.url}`,
    "",
    `Name:         ${lead.name}`,
    `E-Mail:       ${lead.email}`,
    `Telefon:      ${lead.phone || "—"}`,
    `Rechtsgebiet:  ${lead.area}`,
    `Gefunden über: ${lead.foundVia || "—"}`,
    `Sprache:      ${lead.lang}`,
    `Kanal:        ${lead.source}`,
    `Eingegangen:  ${lead.submittedAt}`,
    "",
    "Nachricht:",
    lead.message,
  ].join("\n");
}

function renderHtmlMail(lead: Lead): string {
  const rows = [
    ["Name", lead.name],
    ["E-Mail", lead.email],
    ["Telefon", lead.phone || "—"],
    ["Rechtsgebiet", lead.area],
    ["Gefunden über", lead.foundVia || "—"],
    ["Sprache", lead.lang],
    ["Kanal", lead.source],
    ["Eingegangen", lead.submittedAt],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#1c1f22;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">Neue Anfrage über die Website</h1>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #dfe3ea;padding:10px;font-weight:700;background:#f3f5f8;width:180px">${escapeHtml(label)}</td>
                <td style="border:1px solid #dfe3ea;padding:10px">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px">Nachricht</h2>
      <p style="white-space:pre-wrap;background:#f8f9fb;border:1px solid #dfe3ea;padding:14px">${escapeHtml(lead.message)}</p>
    </div>
  `;
}

function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

async function storeLead(lead: Lead): Promise<string | null> {
  const supabase = getSupabase();
  if (!supabase) {
    console.warn(
      "[lead] no Supabase transport configured — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY",
      process.env.NODE_ENV === "production" ? "" : lead,
    );
    return null;
  }

  const { firstName, lastName } = splitName(lead.name);
  const { data, error } = await supabase
    .from("lead_anfragen")
    .insert({
      first_name: firstName,
      last_name: lastName,
      phone: lead.phone,
      email: lead.email,
      service: lead.area,
      source: lead.foundVia || lead.source,
      situation: lead.message,
      language: lead.lang,
      page_url: SITE.url,
      notify_emails: process.env.LEAD_NOTIFY_TO ?? DEFAULT_NOTIFY_TO,
      status: "new",
    })
    .select("id")
    .single();

  if (error) throw error;
  return typeof data?.id === "string" ? data.id : null;
}

async function markLeadEmailStatus(
  leadId: string | null,
  status: "email_sent" | "email_failed",
  emailError?: string,
) {
  if (!leadId) return;
  const supabase = getSupabase();
  if (!supabase) return;

  const update =
    status === "email_sent"
      ? { status, email_sent_at: new Date().toISOString(), email_error: null }
      : { status, email_error: (emailError ?? "Email delivery failed").slice(0, 1000) };

  const { error } = await supabase.from("lead_anfragen").update(update).eq("id", leadId);
  if (error) console.error("[lead] failed to update email status", error);
}

async function sendLeadEmail(lead: Lead, leadId: string | null): Promise<boolean> {
  if (!isResendConfigured()) {
    console.warn(
      "[lead] no Resend transport configured — set RESEND_API_KEY and RESEND_FROM",
      process.env.NODE_ENV === "production" ? "" : lead,
    );
    return false;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const viaWhatsApp = lead.source === "whatsapp";
  const recipient = process.env.LEAD_NOTIFY_TO ?? DEFAULT_NOTIFY_TO;
  const from = process.env.RESEND_FROM ?? process.env.LEAD_NOTIFY_FROM ?? DEFAULT_NOTIFY_FROM;

  const { error } = await resend.emails.send({
    to: [recipient],
    cc: process.env.LEAD_NOTIFY_CC ? [process.env.LEAD_NOTIFY_CC] : undefined,
    from,
    replyTo: lead.email,
    subject: `${viaWhatsApp ? "[WhatsApp] " : ""}Anfrage über die Website: ${lead.name} (${lead.area})`,
    text: renderMail(lead),
    html: renderHtmlMail(lead),
    headers: leadId ? { "X-Lead-Id": leadId } : undefined,
  });

  if (error) {
    await markLeadEmailStatus(leadId, "email_failed", JSON.stringify(error));
    throw new Error(`Resend delivery failed: ${JSON.stringify(error)}`);
  }

  await markLeadEmailStatus(leadId, "email_sent");
  return true;
}

/**
 * Delivers a lead to the Kanzlei.
 *
 * Returns false when neither Supabase nor Resend is configured. The caller
 * turns that into an error response rather than a confirmation — telling a
 * prospective client "we got your message" when nobody received it is worse
 * than showing the phone number.
 */
export async function deliverLead(lead: Lead): Promise<boolean> {
  let leadId: string | null = null;
  let storeError: unknown = null;
  let emailError: unknown = null;

  try {
    leadId = await storeLead(lead);
  } catch (error) {
    storeError = error;
    console.error("[lead] Supabase storage failed", error);
  }

  let emailed = false;
  try {
    emailed = await sendLeadEmail(lead, leadId);
  } catch (error) {
    emailError = error;
    console.error("[lead] Resend email failed", error);
  }

  if (!leadId && !emailed && (storeError || emailError)) {
    throw new Error(
      `Lead delivery failed: ${[
        storeError ? "supabase" : "",
        emailError ? "resend" : "",
      ]
        .filter(Boolean)
        .join(", ")}`,
    );
  }

  return Boolean(leadId || emailed);
}
