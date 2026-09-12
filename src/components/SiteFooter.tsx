import Link from "next/link";
import styles from "./SiteFooter.module.css";
import { Logo } from "./Logo";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";
import { buildNav } from "@/lib/nav";
import { routes } from "@/lib/routes";

type FooterLink = { label: string; href: string; external?: boolean };

/** Landing-page footer: brand block, three link columns and a legal bar. */
export function SiteFooter({ lang, t }: { lang: Lang; t: Dictionary }) {
  const streetLine = SITE.streetExtra
    ? `${SITE.street}, ${SITE.streetExtra}`
    : SITE.street;
  const cityLine = `${SITE.postalCode} ${SITE.city}`;
  const columns: { title: string; links: FooterLink[] }[] = [
    { title: t.footer.navTitle, links: buildNav(lang, t) },
    {
      title: t.footer.areasTitle,
      links: t.areas.items.map((area) => ({
        label: area.title,
        href: routes.area(lang, area.slug),
      })),
    },
    {
      title: t.footer.contactTitle,
      links: [
        { label: `${t.footer.callLink}: ${SITE.phone}`, href: SITE.phoneHref },
        { label: SITE.email, href: SITE.emailHref },
        { label: t.footer.waLink, href: SITE.whatsapp, external: true },
        { label: t.footer.formLink, href: "#kontakt" },
        { label: t.footer.route, href: SITE.maps, external: true },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo href="#start" size="lg" />
            <p className={`h3 ${styles.blurb}`}>{t.footer.blurb}</p>
            <div className={styles.contact}>
              <p>{streetLine} · {cityLine}</p>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              <a href={SITE.emailHref}>{SITE.email}</a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.columns}>
            {columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h2 className={styles.columnTitle}>{column.title}</h2>
                <ul className={styles.list}>
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.href}`}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legalLinks}>
            <Link href={routes.imprint(lang)}>{t.footer.imprint}</Link>
            <Link href={routes.privacy(lang)}>{t.footer.privacy}</Link>
          </div>
          <a
            className={styles.madeBy}
            href="https://nuell-agentur.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.madeBy} <span>nüll</span>
          </a>
          <p className={styles.copyright}>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
