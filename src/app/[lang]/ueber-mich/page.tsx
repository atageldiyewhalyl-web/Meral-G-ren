import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageFooter } from "@/components/PageFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary, isLang, SITE } from "@/content";
import { altLanguages, localePath, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.about.title,
    description: t.about.page.lead,
    alternates: {
      canonical: localePath(lang, "/ueber-mich"),
      languages: altLanguages("/ueber-mich"),
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const a = t.about;
  const p = a.page;
  const nav = [
    { label: t.nav.home, href: routes.home(lang) },
    { label: t.nav.about, href: routes.about(lang) },
    { label: t.nav.areas, href: routes.areasAnchor(lang) },
    { label: t.nav.blog, href: routes.blog(lang) },
    { label: t.nav.contact, href: "#kontakt" },
  ];

  return (
    <div className={styles.page}>
      <SiteHeader
        lang={lang}
        nav={nav}
        cta={t.cta}
        menuLabel={t.menuLabel}
        navLabel={t.navLabel}
        languageLabel={t.languageLabel}
        homeHref={routes.home(lang)}
      />

      <main>
        <header className={styles.hero}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.crumb}>
              <Link href={routes.home(lang)}>{t.page.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{a.label}</span>
            </nav>
            <h1 className={`display ${styles.title}`}>{a.title}</h1>
            <p className={styles.lead}>{p.lead}</p>
            <Link href={routes.contact(lang)} className={`btn btn--primary ${styles.heroCta}`}>
              {t.cta}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <section className={styles.feature} aria-hidden="true">
          <span className={styles.ghost}>{p.wordmark}</span>
          <div className={styles.frame}>
            <Image
              src="/images/about-meral-portrait.webp"
              alt=""
              width={1000}
              height={1250}
              sizes="(max-width: 700px) 88vw, 460px"
              className={styles.portrait}
              priority
            />
          </div>
        </section>

        <section className={styles.pull}>
          <div className="container">
            <p className={styles.pullText}>
              <span className={styles.pullMuted}>{p.pull.before}</span>
              <mark className={styles.pullMark}>{p.pull.mark}</mark>
              <span className={styles.pullMuted}>{p.pull.after}</span>
            </p>
          </div>
        </section>

        <section className={styles.facts}>
          <div className="container">
            <ul className={styles.factsGrid}>
              {p.facts.map((fact) => (
                <li key={fact.label} className={styles.fact}>
                  <span className={styles.factValue}>{fact.value}</span>
                  <span className={styles.factLabel}>{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.prose}>
          <div className="container">
            {p.sections.map((section, index) => (
              <article key={section.heading} className={styles.block}>
                <span aria-hidden="true" className={styles.blockNum}>
                  {`0${index + 1}`}
                </span>
                <div className={styles.blockBody}>
                  <h2 className={`h3 ${styles.blockHeading}`}>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className={styles.blockText}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`onDark ${styles.closing}`}>
          <Image
            src="/images/about-meral-desk.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={80}
            className={styles.closingImg}
          />
          <div aria-hidden="true" className={styles.closingScrim} />
          <div className={`container ${styles.closingInner}`}>
            <h2 className={`h2 ${styles.closingTitle}`}>{p.closingTitle}</h2>
            <p className={styles.closingText}>{p.asideText}</p>
            <div className={styles.closingActions}>
              <Link href={routes.contact(lang)} className="btn btn--onDark">
                {t.cta}
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <PageFooter lang={lang} t={t} />
    </div>
  );
}
