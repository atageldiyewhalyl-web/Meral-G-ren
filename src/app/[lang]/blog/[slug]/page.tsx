import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageShell } from "@/components/PageShell";
import { SITE, getDictionary, isLang } from "@/content";
import type { Lang, Post, PostBlock } from "@/content/types";
import { altLanguages, localePath, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string; slug: string }> };

function findPost(lang: Lang, slug: string) {
  return getDictionary(lang).blog.posts.find((post) => post.slug === slug);
}

// Slugs are shared across languages; `lang` comes from the parent layout.
export function generateStaticParams() {
  return getDictionary("de").blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const post = findPost(lang, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: localePath(lang, `/blog/${slug}`),
      languages: altLanguages(`/blog/${slug}`),
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.iso,
      modifiedTime: post.updated ?? post.iso,
      images: [post.image],
    },
  };
}

function faqEntries(post: Post) {
  for (const block of post.body) {
    if (typeof block === "object" && "faq" in block) return block.faq;
  }
  return [];
}

function jsonLd(lang: Lang, slug: string, post: Post) {
  const url = `${SITE.url}${localePath(lang, `/blog/${slug}`)}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      inLanguage: lang,
      datePublished: post.iso,
      dateModified: post.updated ?? post.iso,
      image: `${SITE.url}${post.image}`,
      mainEntityOfPage: url,
      articleSection: post.category,
      author: { "@type": "Person", name: SITE.person },
      publisher: {
        "@type": "LegalService",
        name: SITE.name,
        url: SITE.url,
      },
    },
  ];
  const faq = faqEntries(post);
  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function Block({ block }: { block: PostBlock }) {
  if (typeof block === "string") {
    return <p className={`lead ${styles.paragraph}`}>{block}</p>;
  }
  if ("h2" in block) {
    return <h2 className={`h3 ${styles.h2}`}>{block.h2}</h2>;
  }
  if ("h3" in block) {
    return <h3 className={`h4 ${styles.h3}`}>{block.h3}</h3>;
  }
  if ("note" in block) {
    return (
      <aside className={styles.note} role="note">
        {block.note}
      </aside>
    );
  }
  if ("list" in block) {
    return (
      <ul className={styles.list}>
        {block.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if ("table" in block) {
    return (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          {block.table.caption ? <caption>{block.table.caption}</caption> : null}
          <thead>
            <tr>
              {block.table.head.map((cell, i) => (
                <th key={i} scope="col">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if ("faq" in block) {
    return (
      <div className={styles.faq}>
        {block.faq.map((item, i) => (
          <details key={i} className={styles.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    );
  }
  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const post = findPost(lang, slug);
  if (!post) notFound();

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow={t.page.blog.eyebrow}
      title={post.title}
      lead={post.excerpt}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang, slug, post)) }}
      />
      <article className={styles.article}>
        <p className={styles.meta}>
          {post.category} · <time dateTime={post.iso}>{post.date}</time>
        </p>
        {post.body.map((block, index) => (
          <Block key={index} block={block} />
        ))}
        <p className="note">{t.page.postDisclaimer}</p>
        <Link href={routes.blog(lang)} className={`btn btn--secondary ${styles.back}`}>
          {t.page.allPosts}
        </Link>
      </article>
    </PageShell>
  );
}
