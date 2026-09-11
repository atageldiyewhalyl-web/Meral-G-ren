import styles from "./BlogStickyCTA.module.css";
import { WhatsAppLead } from "./WhatsAppLead";
import type { Dictionary, Lang } from "@/content/types";

type Props = {
  lang: Lang;
  t: Dictionary;
  title: string;
  sub: string;
};

/**
 * Stays pinned to the bottom of the viewport for the length of the article,
 * then scrolls away with the footer — a `position: sticky` bottom bar rather
 * than `fixed`, so it never permanently covers the page's real contact block.
 * Render it as the last child of the post's <main>.
 */
export function BlogStickyCTA({ lang, t, title, sub }: Props) {
  return (
    <div className={styles.bar}>
      <div className={styles.accentLine} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.title}>{title}</p>
          <p className={styles.sub}>{sub}</p>
        </div>
        <div className={styles.action}>
          <WhatsAppLead lang={lang} t={t} compact variant="onDark" />
        </div>
      </div>
    </div>
  );
}
