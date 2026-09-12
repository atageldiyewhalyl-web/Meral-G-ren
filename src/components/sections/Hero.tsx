import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { SITE } from "@/content";
import type { Dictionary } from "@/content/types";

export function Hero({ t }: { t: Dictionary }) {
  const featuredAreas = t.areas.items.slice(0, 5);

  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      <div className={styles.media}>
        <Image
          src="/images/hero-lady-justice-statue.png"
          alt=""
          fill
          priority
          sizes="(max-width: 899px) 100vw, 42vw"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.label}`}>{t.hero.label}</p>
          <h1 id="hero-title" className={`display ${styles.title}`}>
            {t.hero.title.lead}{" "}
            <span className={styles.accent}>{t.hero.title.accent}</span>
          </h1>
          <p className={`lead ${styles.text}`}>{t.hero.text}</p>
          <div className={styles.actions}>
            <Link href="#kontakt" className="btn btn--primary">
              {t.cta}
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              {t.hero.whatsapp}
            </a>
          </div>
        </div>

        <aside className={styles.rail} aria-label={t.areas.label}>
          <div className={styles.areaList}>
            {featuredAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`#${area.slug}`}
                className={index === 0 ? styles.areaActive : styles.area}
              >
                <span aria-hidden="true">↗</span>
                <strong>{area.title}</strong>
                <em className={styles.areaDescription}>{area.lead}</em>
              </Link>
            ))}
          </div>

          <div className={styles.stats} aria-label={t.areas.title}>
            <div>
              <span>{t.areas.items.length}</span>
              <p>{t.areas.label}</p>
            </div>
            <div>
              <span>2</span>
              <p>Deutsch · Türkisch</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
