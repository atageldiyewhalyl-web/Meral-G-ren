import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getDictionary, isLang } from "@/content";
import { altLanguages, localePath, routes } from "@/lib/routes";
import { blogNode, breadcrumbNode, graph } from "@/lib/schema";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.page.blog.title,
    description: t.page.blog.lead,
    alternates: {
      canonical: localePath(lang, "/blog"),
      languages: altLanguages("/blog"),
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow={t.page.blog.eyebrow}
      title={t.page.blog.title}
      lead={t.page.blog.lead}
    >
      <JsonLd
        data={graph(
          blogNode(lang, t),
          breadcrumbNode(lang, [{ name: t.page.blog.eyebrow, path: "/blog" }], t),
        )}
      />
      <div className={styles.grid}>
        {t.blog.posts.map((post, index) => (
          <article key={post.slug} className={styles.card}>
            <Link href={routes.post(lang, post.slug)} className={styles.mediaLink}>
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 899px) 50vw, 25vw"
                className={styles.cardImage}
                priority={index === 0}
              />
              <span className={styles.category}>{post.category}</span>
            </Link>
            <div className={styles.cardBody}>
              <p className={styles.meta}>
                <time dateTime={post.iso}>{post.date}</time>
              </p>
              <h2 className={`h3 ${styles.title}`}>{post.title}</h2>
              <p className={`body ${styles.excerpt}`}>{post.excerpt}</p>
              <Link
                href={routes.post(lang, post.slug)}
                className={`linkArrow ${styles.link}`}
              >
                {t.page.more}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
