"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { LangSwitch } from "./LangSwitch";
import { Logo } from "./Logo";
import type { Lang } from "@/content/types";
import type { NavItem } from "@/lib/nav";

type SiteHeaderProps = {
  lang: Lang;
  nav: NavItem[];
  cta: string;
  menuLabel: string;
  navLabel: string;
  languageLabel: string;
  homeHref: string;
};

/** Landing-page header: full navigation, language switch and CTA. */
export function SiteHeader({
  lang,
  nav,
  cta,
  menuLabel,
  navLabel,
  languageLabel,
  homeHref,
}: SiteHeaderProps) {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // The bar is clear while the page sits at the top, over the hero photograph,
  // and fills in once that scrolls away. A probe element is cheaper and
  // smoother than a scroll listener — the browser reports the crossing itself.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) =>
      setAtTop(entry.isIntersecting),
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // While the panel covers the viewport, Escape closes it and the page behind
  // it must not scroll — otherwise the background slides under the menu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className={styles.sentinel} />
      <header
        className={styles.header}
        // The panel is always the filled bar, never the transparent hero state.
        data-at-top={atTop && !open}
      >
        <div className={styles.inner}>
          <Logo href={homeHref} />

          <nav aria-label={navLabel} className={styles.nav}>
            {nav.map((item) => (
              <div key={item.href} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className={styles.dropdown}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownLink}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <LangSwitch current={lang} label={languageLabel} />
            <Link href="#kontakt" className={`btn ${styles.cta}`}>
              {cta}
            </Link>
          </div>

          <div className={styles.mobileActions}>
            <LangSwitch current={lang} label={languageLabel} />
            <button
              type="button"
              className={styles.burger}
              aria-label={menuLabel}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((wasOpen) => !wasOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/*
        The panel lives outside <header> on purpose. The header carries
        `backdrop-filter`, and in WebKit — iOS Safari, and therefore every
        browser on iOS — a backdrop-filter makes the element a containing block
        for `position: fixed` descendants. Nested inside, the panel resolved its
        `top`/`bottom` against the 68px-tall bar instead of the viewport and
        collapsed to zero height: it opened, but was invisible on every iPhone
        while working fine on desktop Chromium, which does not apply that rule.
        Kept as a sibling, the viewport is its containing block again.
      */}
      <nav
        id={menuId}
        aria-label={navLabel}
        className={styles.menu}
        data-open={open}
        hidden={!open}
        // Routing happens on the client without unmounting the header, so the
        // panel would otherwise stay open over the page just navigated to.
        // One handler on the container covers every link and the CTA.
        onClick={() => setOpen(false)}
      >
        <div className={styles.menuInner}>
          {nav.map((item) => (
            <div key={item.href} className={styles.menuGroup}>
              <Link href={item.href} className={styles.menuLink}>
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.menuChildren}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.menuChildLink}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="#kontakt" className={`btn ${styles.menuCta}`}>
            {cta}
          </Link>
        </div>
      </nav>
    </>
  );
}
