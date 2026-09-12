import styles from "./Reviews.module.css";
import type { Dictionary } from "@/content/types";

export function Reviews({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="reviews-title" className={styles.section}>
      <div className="container">
        <div className={`${styles.heading} reveal`}>
          <p className={`eyebrow ${styles.label}`}>{t.reviews.label}</p>
          <h2 id="reviews-title" className={`h2 ${styles.title}`}>
            {t.reviews.title}
          </h2>
          <p className={styles.note}>{t.reviews.note}</p>
        </div>

        <div className={`${styles.grid} reveal`}>
          {t.reviews.items.map((review, index) => (
            <figure key={`${review.name}-${index}`} className={styles.card}>
              <div className={styles.stars} aria-label="5 von 5 Sternen">
                <span aria-hidden="true">★★★★★</span>
              </div>
              <blockquote>{`„${review.quote}“`}</blockquote>
              <figcaption>
                <span className={styles.rule} aria-hidden="true" />
                <strong>{review.name}</strong>
                <span>{review.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
