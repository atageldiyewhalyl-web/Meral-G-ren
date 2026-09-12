import Image from "next/image";
import Link from "next/link";
import styles from "./FinalCta.module.css";
import { WhatsAppLead } from "../WhatsAppLead";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

export function FinalCta({ lang, t }: { lang: Lang; t: Dictionary }) {
  const cta = t.finalCta;

  return (
    <section id="kontakt" aria-labelledby="final-cta-title" className={`onDark ${styles.section}`}>
      <div className={styles.inner}>
        <div className={styles.portrait} aria-hidden="true">
          <Image
            src="/images/about-meral-portrait.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 210px, 190px"
          />
        </div>

        <div className={styles.copy}>
          <p className={`eyebrow ${styles.label}`}>{cta.label}</p>
          <h2 id="final-cta-title" className={styles.title}>
            {cta.title}
          </h2>
          <p className={styles.support}>{cta.text}</p>
        </div>

        <aside className={styles.aside}>
          <h3>{cta.listTitle}</h3>
          <ul>
            {cta.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className={styles.actions}>
          <p className={styles.note}>{cta.note}</p>
          <h3>{cta.bottomTitle}</h3>
          <p>{cta.panelText}</p>
          <Link href={routes.contact(lang)} className={styles.primary}>
            {cta.primary}
          </Link>
          <WhatsAppLead lang={lang} t={t} compact variant="onDark" />
        </div>
      </div>
    </section>
  );
}
