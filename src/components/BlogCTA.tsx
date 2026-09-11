import styles from "./BlogCTA.module.css";
import { WhatsAppLead } from "./WhatsAppLead";
import type { Dictionary, Lang } from "@/content/types";

type Props = {
  lang: Lang;
  t: Dictionary;
  eyebrow: string;
  title: string;
  text: string;
};

/**
 * A conversion card dropped inline in a blog post's body — an accent bar,
 * a short pitch, and the same WhatsApp lead-capture used across the site.
 * Two of these sit inside every post so the offer never depends on the
 * reader making it all the way to the bottom.
 */
export function BlogCTA({ lang, t, eyebrow, title, text }: Props) {
  return (
    <aside className={styles.card}>
      <div className={styles.bar} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.action}>
          <WhatsAppLead lang={lang} t={t} compact />
        </div>
      </div>
    </aside>
  );
}
