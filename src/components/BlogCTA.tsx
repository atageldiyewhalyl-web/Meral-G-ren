import styles from "./BlogCTA.module.css";
import { AreaServiceIcon } from "./AreaServiceIcon";
import { WhatsAppLead } from "./WhatsAppLead";
import type { Dictionary, Lang } from "@/content/types";

type Props = {
  lang: Lang;
  t: Dictionary;
  icon: string;
  eyebrow: string;
  title: string;
  text: string;
};

/**
 * A conversion card dropped inline in a blog post's body — an icon badge, a
 * short pitch, and the same WhatsApp lead-capture used across the site, on a
 * dark card so it reads as a distinct offer rather than another paragraph.
 * Two of these sit inside every post so the offer never depends on the
 * reader making it all the way to the bottom.
 */
export function BlogCTA({ lang, t, icon, eyebrow, title, text }: Props) {
  return (
    <aside className={styles.card}>
      <div className={styles.bar} aria-hidden="true" />
      <div className={styles.body}>
        <span className={styles.badge} aria-hidden="true">
          <AreaServiceIcon icon={icon} />
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
