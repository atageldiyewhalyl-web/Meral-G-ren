import Image from "next/image";
import Link from "next/link";
import styles from "./BlogTeaser.module.css";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

export function BlogTeaser({ lang, t }: { lang: Lang; t: Dictionary }) {
  const posts = t.blog.posts.slice(0, 3);

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className={`anchor ${styles.section}`}
    >
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <div>
            <p className={`eyebrow ${styles.eyebrow}`}>{t.blog.label}</p>
            <h2 id="blog-title" className={`h2 ${styles.heading}`}>
              {t.blog.title}
            </h2>
          </div>
          <Link href={routes.blog(lang)} className={`linkArrow ${styles.allLink}`}>
            {t.blog.all}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={`${styles.layout} reveal`}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div className={styles.frame}>
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 699px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <div className={styles.body}>
                <p className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span aria-hidden="true"> · </span>
                  <time dateTime={post.iso}>{post.date}</time>
                </p>
                <h3 className={`h3 ${styles.title}`}>{post.title}</h3>
                <p className={`body ${styles.excerpt}`}>{post.excerpt}</p>
                <Link
                  href={routes.post(lang, post.slug)}
                  aria-label={`${t.blog.moreTo} ${post.title}`}
                  className={`linkArrow ${styles.more}`}
                >
                  {t.blog.more}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
