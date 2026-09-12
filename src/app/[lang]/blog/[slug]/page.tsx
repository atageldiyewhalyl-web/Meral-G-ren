import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./page.module.css";
import { BlogCTA } from "@/components/BlogCTA";
import { BlogStickyCTA } from "@/components/BlogStickyCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCta } from "@/components/PostCta";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE, getDictionary, isLang } from "@/content";
import type { Dictionary, Lang, Post, PostBlock } from "@/content/types";
import { buildNav } from "@/lib/nav";
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

/** Every string a block carries, for a word count → estimated read time. */
function wordCount(body: PostBlock[]): number {
  let words = 0;
  const add = (s: string) => {
    words += s.trim().split(/\s+/).filter(Boolean).length;
  };
  for (const block of body) {
    if (typeof block === "string") add(block);
    else if ("h2" in block) add(block.h2);
    else if ("h3" in block) add(block.h3);
    else if ("note" in block) add(block.note);
    else if ("list" in block) block.list.forEach(add);
    else if ("table" in block) {
      block.table.head.forEach(add);
      block.table.rows.forEach((row) => row.forEach(add));
    } else if ("faq" in block) {
      block.faq.forEach((item) => {
        add(item.q);
        add(item.a);
      });
    }
  }
  return words;
}

function readTimeLabel(lang: Lang, words: number): string {
  const minutes = Math.max(1, Math.round(words / 200));
  if (lang === "tr") return `${minutes} dk okuma`;
  if (lang === "en") return `${minutes} min read`;
  return `${minutes} Min. Lesezeit`;
}

/** Copy for the three conversion touchpoints on the page, tied to the post's
    practice area so the pitch reads as specific rather than generic. */
function ctaCopy(lang: Lang, areaTitle: string) {
  if (lang === "tr") {
    return {
      inline1: {
        eyebrow: "Kişisel değerlendirme",
        title: "Bu durum sizi de mi ilgilendiriyor?",
        text: `${areaTitle} alanındaki her dosyanın kendi süreleri ve incelikleri vardır. Durumunuzu kısaca anlatın, nasıl yardımcı olabileceğimizi birlikte netleştirelim.`,
      },
      inline2: {
        eyebrow: "Sonraki adım",
        title: "Dosyanızı birlikte değerlendirelim",
        text: "Kısaca ne olduğunu yazın; size hangi adımların anlamlı olduğunu söyleyelim.",
      },
      bottomEyebrow: "Sonraki adım",
      bottomTitle: "Durumunuzu bize anlatın.",
      bottomText: `${areaTitle} dahil tüm hukuki sorularınızda bize ulaşabilirsiniz — Almanca veya Türkçe. Kısa sürede dönüş yaparız.`,
      sticky: { title: `${areaTitle}: Durumunuzu anlatın`, sub: "Ücretsiz ön değerlendirme, WhatsApp üzerinden" },
      related: "Diğer yazılar",
      areaLink: `${areaTitle} sayfasına git`,
    };
  }
  if (lang === "en") {
    return {
      inline1: {
        eyebrow: "A quick, personal read",
        title: "Does this sound like your situation?",
        text: `Every case in the area of ${areaTitle} has its own deadlines and quirks. Tell us briefly what is going on and we will say how we can help.`,
      },
      inline2: {
        eyebrow: "Next step",
        title: "Let us assess your case",
        text: "Briefly describe what is happening. We will tell you which step makes sense next.",
      },
      bottomEyebrow: "Next step",
      bottomTitle: "Tell us what's going on.",
      bottomText: `You can reach out for any legal question, including in the area of ${areaTitle} — in German or Turkish. We get back to you promptly.`,
      sticky: { title: `${areaTitle}: tell us your situation`, sub: "Free first read, over WhatsApp" },
      related: "More articles",
      areaLink: `Go to ${areaTitle}`,
    };
  }
  return {
    inline1: {
      eyebrow: "Kurz eingeordnet",
      title: "Betrifft Sie das gerade?",
      text: `Jeder Fall im Bereich „${areaTitle}" hat eigene Fristen und Besonderheiten. Schildern Sie uns kurz Ihre Situation – wir sagen Ihnen, wie wir helfen können.`,
    },
    inline2: {
      eyebrow: "Nächster Schritt",
      title: "Lassen Sie uns Ihren Fall einschätzen",
      text: "Schildern Sie kurz, worum es geht. Wir sagen Ihnen, welcher nächste Schritt sinnvoll ist.",
    },
    bottomEyebrow: "Nächster Schritt",
    bottomTitle: "Schildern Sie uns Ihren Fall.",
    bottomText: `Sie können sich bei allen rechtlichen Fragen an uns wenden – auch im Bereich „${areaTitle}" – auf Deutsch oder Türkisch. Wir melden uns zeitnah.`,
    sticky: { title: `${areaTitle}: Fall schildern`, sub: "Kostenlose Ersteinschätzung per WhatsApp" },
    related: "Weitere Beiträge",
    areaLink: `Mehr zu ${areaTitle}`,
  };
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

/** Renders the body with two BlogCTA cards worked in: one right after the
    opening callout (or ~30% in if there isn't one), one just before the FAQ
    block (or ~75% in) — so the offer appears while interest is still warm,
    not only after the reader has already left. */
function ArticleBody({
  post,
  lang,
  t,
  copy,
}: {
  post: Post;
  lang: Lang;
  t: Dictionary;
  copy: ReturnType<typeof ctaCopy>;
}) {
  const blocks = post.body;
  const noteIndex = blocks.findIndex((b) => typeof b !== "string" && "note" in b);
  const faqIndex = blocks.findIndex((b) => typeof b !== "string" && "faq" in b);
  const cta1After = noteIndex >= 0 ? noteIndex : Math.floor(blocks.length * 0.3);
  // The FAQ is introduced by its own heading. Anchoring on the FAQ block alone
  // would drop the card between that heading and the questions it announces, so
  // step back over the heading and place the card ahead of the whole section.
  const beforeFaq = faqIndex > 0 ? blocks[faqIndex - 1] : undefined;
  const headingBeforeFaq =
    beforeFaq !== undefined &&
    typeof beforeFaq !== "string" &&
    ("h2" in beforeFaq || "h3" in beforeFaq);
  const cta2Before =
    faqIndex >= 0
      ? faqIndex - (headingBeforeFaq ? 1 : 0)
      : Math.floor(blocks.length * 0.75);

  const nodes: ReactNode[] = [];
  blocks.forEach((block, index) => {
    if (index === cta2Before && cta2Before !== cta1After + 1) {
      nodes.push(
        <BlogCTA
          key="cta-2"
          lang={lang}
          t={t}
          eyebrow={copy.inline2.eyebrow}
          title={copy.inline2.title}
          text={copy.inline2.text}
        />,
      );
    }
    nodes.push(<Block key={index} block={block} />);
    if (index === cta1After) {
      nodes.push(
        <BlogCTA
          key="cta-1"
          lang={lang}
          t={t}
          eyebrow={copy.inline1.eyebrow}
          title={copy.inline1.title}
          text={copy.inline1.text}
        />,
      );
    }
  });
  return <>{nodes}</>;
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const post = findPost(lang, slug);
  if (!post) notFound();

  const area = t.areas.items.find((item) => item.slug === post.areaSlug);
  const copy = ctaCopy(lang, area?.title ?? post.category);
  const readTime = readTimeLabel(lang, wordCount(post.body));
  const related = t.blog.posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className={styles.page}>
      <SiteHeader
        lang={lang}
        nav={buildNav(lang, t)}
        cta={t.cta}
        menuLabel={t.menuLabel}
        navLabel={t.navLabel}
        languageLabel={t.languageLabel}
        homeHref={routes.home(lang)}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang, slug, post)) }}
      />

      <main className={styles.main}>
        {/* Full-bleed photo hero */}
        <header className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image src={post.image} alt="" fill sizes="100vw" className={styles.heroImage} priority />
          </div>
          <div className={styles.heroInner}>
            <nav aria-label="Breadcrumb" className={styles.crumb}>
              <Link href={routes.home(lang)}>{t.page.home}</Link>
              <span aria-hidden="true">/</span>
              <Link href={routes.blog(lang)}>{t.page.blog.eyebrow}</Link>
              <span aria-hidden="true">/</span>
              <span className={styles.crumbCurrent}>{post.title}</span>
            </nav>

            <p className={styles.category}>
              <span aria-hidden="true" className={styles.rule} />
              {post.category}
              <span aria-hidden="true" className={styles.rule} />
            </p>

            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.meta}>
              <span>{SITE.person}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.iso}>{post.date}</time>
              <span aria-hidden="true">·</span>
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        <div className={styles.body}>
          <article className={styles.article}>
            <ArticleBody post={post} lang={lang} t={t} copy={copy} />
            <p className="note">{t.page.postDisclaimer}</p>
          </article>

          <PostCta lang={lang} t={t} line={post.ctaLine} />

          {related.length > 0 && (
            <nav aria-label={copy.related} className={styles.related}>
              <p className={styles.relatedLabel}>{copy.related}</p>
              {/* Real cards rather than a text list: these are the only internal
                  links out of an article, so they have to compete with the back
                  button for the reader's next click. Mirrors the blog index. */}
              <ul className={styles.relatedGrid}>
                {related.map((p) => (
                  <li key={p.slug} className={styles.relatedCard}>
                    <Link href={routes.post(lang, p.slug)} className={styles.relatedMedia}>
                      <Image
                        src={p.image}
                        alt=""
                        width={600}
                        height={375}
                        sizes="(max-width: 720px) 100vw, 33vw"
                        className={styles.relatedImage}
                      />
                      <span className={styles.relatedCategory}>{p.category}</span>
                    </Link>
                    <div className={styles.relatedBody}>
                      <time dateTime={p.iso} className={styles.relatedDate}>
                        {p.date}
                      </time>
                      <h2 className={styles.relatedTitle}>
                        <Link href={routes.post(lang, p.slug)}>{p.title}</Link>
                      </h2>
                      <p className={styles.relatedExcerpt}>{p.excerpt}</p>
                      <span className={styles.relatedMore} aria-hidden="true">
                        {t.blog.more} <span>&rarr;</span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <Link href={routes.blog(lang)} className={`btn btn--secondary ${styles.back}`}>
            {t.page.allPosts}
          </Link>
        </div>

        <BlogStickyCTA lang={lang} t={t} title={copy.sticky.title} sub={copy.sticky.sub} />
      </main>

      <SiteFooter lang={lang} t={t} />
    </div>
  );
}
