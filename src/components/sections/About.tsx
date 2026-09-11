import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

export function About({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="about-title"
      className={`anchor section section--dark onDark ${styles.section}`}
    >
      <div className={styles.media}>
        <Image
          src="/images/about-meral-desk.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
        />
      </div>
      <div aria-hidden="true" className={styles.scrim} />

      <div className="container">
        <div className={`${styles.inner} reveal`}>
          <div className={styles.copy}>
            <p className="eyebrow">{t.about.label}</p>
            <h2 id="about-title" className={`h2 ${styles.title}`}>
              {t.about.title}
            </h2>
            <p className={`lead ${styles.p1}`}>{t.about.p1}</p>
            <p className={`lead ${styles.p2}`}>{t.about.p2}</p>
            <div className={styles.actions}>
              <Link href={routes.about(lang)} className="btn btn--onDark">
                {t.about.more}
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#kontakt" className="btn btn--ghost">
                {t.about.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
