import Image from "next/image";
import styles from "./PostCta.module.css";
import { WhatsAppLead } from "./WhatsAppLead";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";

/**
 * The thin strip that closes every article.
 *
 * `line` is written for the individual post, so the last thing a reader sees
 * speaks to what they just read rather than to law in general. The credentials
 * beside it are reused from `page.areaTrust` — all of them verifiable from the
 * Impressum, so the strip carries trust without making a claim the Kanzlei
 * would have to stand behind.
 *
 * Carries `id="kontakt"`, which the header's contact link targets on articles.
 */
export function PostCta({ lang, t, line }: { lang: Lang; t: Dictionary; line: string }) {
  return (
    <section id="kontakt" aria-labelledby="post-cta-line" className={`onDark ${styles.strip}`}>
      <div className={styles.rule} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Her face next to the closing line: the piece is signed, not issued
            by an anonymous "Kanzlei". The byline repeats the two facts that
            carry the most weight and are checkable in the Impressum. */}
        <figure className={styles.author}>
          <span className={styles.portrait}>
            <Image
              src="/images/about-meral-portrait.webp"
              alt={SITE.person}
              fill
              sizes="96px"
            />
          </span>
          <figcaption className={styles.byline}>
            <strong>{SITE.person}</strong>
            <span>{t.page.postCta.role}</span>
          </figcaption>
        </figure>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t.page.postCta.eyebrow}</p>
          <p id="post-cta-line" className={styles.line}>
            {line}
          </p>
          <ul className={styles.trust}>
            {t.page.areaTrust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <WhatsAppLead lang={lang} t={t} compact variant="onDark" />
          <a href={SITE.phoneHref} className={styles.call}>
            {t.page.postCta.call} {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
