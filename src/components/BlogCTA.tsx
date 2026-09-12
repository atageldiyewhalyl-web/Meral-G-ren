import Image from "next/image";
import styles from "./BlogCTA.module.css";
import { WhatsAppLead } from "./WhatsAppLead";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";

type Props = {
  lang: Lang;
  t: Dictionary;
  eyebrow: string;
  title: string;
  text: string;
};

/**
 * A conversion strip dropped inline in a blog post's body — Meral's portrait, a
 * short pitch, and the same WhatsApp lead-capture used across the site, on the
 * same navy band as the closing PostCta so the offer reads as one recurring
 * invitation. Two of these sit inside every post, so converting never depends
 * on the reader making it all the way to the bottom. The portrait does the work
 * a generic icon could not: it puts a named lawyer behind the ask.
 */
export function BlogCTA({ lang, t, eyebrow, title, text }: Props) {
  return (
    <aside className={styles.card}>
      <div className={styles.bar} aria-hidden="true" />
      <div className={styles.body}>
        <span className={styles.portrait}>
          <Image src="/images/about-meral-portrait.webp" alt={SITE.person} fill sizes="96px" />
        </span>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.action}>
          <WhatsAppLead lang={lang} t={t} compact variant="onDark" />
        </div>
      </div>
    </aside>
  );
}
