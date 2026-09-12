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
  const sentinelRef = useRef<HTMLDivElement>(null);
  const mobileMenuId = useId();

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

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className={styles.sentinel} />
      <header
        className={styles.header}
        data-at-top={atTop}
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
            <div className={styles.mobileMenu}>
              <input
                id={mobileMenuId}
                type="checkbox"
                aria-label={menuLabel}
                className={styles.menuToggle}
              />
              <label htmlFor={mobileMenuId} className={styles.burger}>
                <span />
                <span />
                <span />
              </label>
              <nav
                id="mobile-menu"
                aria-label={navLabel}
                className={styles.menu}
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
