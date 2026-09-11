import Image from "next/image";

import styles from "./Partner.module.css";
import { SITE } from "@/content";
import type { Dictionary } from "@/content/types";

/**
 * Cooperation partner for Turkish law.
 *
 * One card, split into a light panel that explains the cooperation and a navy
 * rail that carries his details — so the block reads as a single object rather
 * than two floating boxes. The heading comes first in the DOM, and the rail's
 * only focusable element is the outbound link, so visual and focus order agree.
 *
 * Every fact in the rail — bar admissions, the court listing, offices and
 * languages, and the portrait — is taken from the partner's own published
 * site; nothing is inferred. His photograph sits at the head of the rail and
 * dissolves into the navy, so the copy below it always has a clean ground.
 */
export function Partner({ t }: { t: Dictionary }) {
  const p = t.partner;

  return (
    <section aria-labelledby="partner-title" className={styles.compactSection}>
      <div className={styles.compactInner}>
        <div className={`${styles.compactCard} reveal`}>
          <aside className={styles.compactProfile}>
            <div className={styles.compactPortrait}>
              <Image
                src="/images/partner-dogru-portrait.webp"
                alt={p.person}
                width={1026}
                height={1179}
                sizes="(max-width: 899px) 220px, 240px"
                className={styles.compactPhoto}
              />
            </div>
            <div className={styles.compactIdentity}>
              <h3 className={`h4 ${styles.compactFirm}`}>{p.firm}</h3>
              <p className={styles.compactPerson}>{p.person}</p>
              <p className={styles.compactMeta}>{p.locations}</p>
              <p className={styles.compactMeta}>{p.languages}</p>
            </div>
          </aside>

          <div className={styles.compactCopy}>
            <p className={`eyebrow ${styles.compactLabel}`}>{p.label}</p>
            <h2 id="partner-title" className={`h2 ${styles.compactTitle}`}>
              {p.title}
            </h2>
            <p className={styles.compactText}>{p.text}</p>

            <ul className={styles.compactAreas} aria-label={p.areasLabel}>
              {p.areas.map((area, index) => (
                <li key={area} className={styles.compactArea}>
                  <span>{`0${index + 1}`}</span>
                  {area}
                </li>
              ))}
            </ul>

            <a href={SITE.partnerUrl} target="_blank" rel="noopener noreferrer" className={styles.compactCta}>
              {p.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
