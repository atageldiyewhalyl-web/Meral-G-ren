import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import styles from "./page.module.css";
import { AreaServiceIcon } from "@/components/AreaServiceIcon";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppLead } from "@/components/WhatsAppLead";
import { Why } from "@/components/sections/Why";
import { getDictionary, isLang, SITE } from "@/content";
import type { Lang } from "@/content/types";
import { buildNav } from "@/lib/nav";
import { breadcrumbNode, graph, serviceNode } from "@/lib/schema";
import { altLanguages, localePath, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string; slug: string }> };

const AREA_HERO_IMAGES: Partial<Record<string, string>> = {
  arbeitsrecht: "/images/areas/service-hero-arbeitsrecht.webp",
  auslaenderrecht: "/images/areas/service-hero-auslaenderrecht.webp",
  familienrecht: "/images/areas/service-hero-familienrecht.webp",
};

function findArea(lang: Lang, slug: string) {
  return getDictionary(lang).areas.items.find((area) => area.slug === slug);
}

function endingCopy(lang: Lang, areaTitle: string) {
  if (lang === "tr") {
    return {
      nextLabel: "Sonraki adım",
      nextTitle: "Dosyanızı değerlendirelim",
      nextText: `${areaTitle} konusunda durumunuzu kısaca anlatın. Size nasıl yardımcı olabileceğimizi birlikte netleştirelim.`,
      nextCta: "WhatsApp'tan ulaşın",
      relatedLabel: "Diğer konular",
      relatedTitle: "İlgili hizmetler",
      proofLabel: "Güven veren deneyim",
      proofFacts: ["Karlsruhe Barosu", "2008'den bu yana avukat", "Almanca & Türkçe"],
      proofTitle: "Hukuki sorularınızda net ve kişisel destek",
      proofText:
        "Dosyanız ilk değerlendirmeden sonuca kadar dikkatle ele alınır. Türkçe ve Almanca iletişimle, sürecin nerede olduğunu ve bir sonraki adımı açıkça bilirsiniz.",
    };
  }

  if (lang === "en") {
    return {
      nextLabel: "Next step",
      nextTitle: "Let us assess your case",
      nextText: `Briefly tell us what is happening in ${areaTitle}. We will clarify how we can support you and what should happen next.`,
      nextCta: "Message on WhatsApp",
      relatedLabel: "Other topics",
      relatedTitle: "Related services",
      proofLabel: "Trusted experience",
      proofFacts: ["Rechtsanwaltskammer Karlsruhe", "Admitted since 2008", "German & Turkish"],
      proofTitle: "Clear, personal support for your legal questions",
      proofText:
        "Your matter is handled carefully from the first assessment through to the next concrete step. Communication is available in German and Turkish, so you always know where things stand.",
    };
  }

  return {
    nextLabel: "Nächster Schritt",
    nextTitle: "Lassen Sie uns Ihren Fall einschätzen",
    nextText: `Schildern Sie kurz, worum es im Bereich ${areaTitle} geht. Wir klären gemeinsam, wie wir Sie unterstützen können und welcher nächste Schritt sinnvoll ist.`,
    nextCta: "Per WhatsApp schreiben",
    relatedLabel: "Weitere Themen",
    relatedTitle: "Ähnliche Rechtsgebiete",
    proofLabel: "Erfahrung, die trägt",
    proofFacts: ["Rechtsanwaltskammer Karlsruhe", "Zugelassen seit 2008", "Deutsch & Türkisch"],
    proofTitle: "Klare, persönliche Unterstützung bei rechtlichen Fragen",
    proofText:
      "Ihr Anliegen wird vom ersten Überblick bis zum nächsten konkreten Schritt sorgfältig begleitet. Die Kommunikation ist auf Deutsch und Türkisch möglich, damit Sie jederzeit wissen, woran Sie sind.",
  };
}

export function generateStaticParams() {
  return getDictionary("de").areas.items.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const area = findArea(lang, slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.intro,
    alternates: {
      canonical: localePath(lang, `/rechtsgebiete/${slug}`),
      languages: altLanguages(`/rechtsgebiete/${slug}`),
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const area = findArea(lang, slug);
  if (!area) notFound();

  const p = t.page;
  const others = t.areas.items.filter((item) => item.slug !== area.slug);
  const ending = endingCopy(lang, area.title);
  const heroStyle = {
    "--area-hero-image": `url("${AREA_HERO_IMAGES[area.slug] ?? "/images/areas/service-hero-meral.webp"}")`,
  } as CSSProperties;
  return (
    <div className={styles.page}>
      <JsonLd
        data={graph(
          serviceNode(lang, area),
          breadcrumbNode(
            lang,
            [{ name: area.title, path: `/rechtsgebiete/${area.slug}` }],
            t,
          ),
        )}
      />
      <SiteHeader
        lang={lang}
        nav={buildNav(lang, t)}
        cta={t.cta}
        menuLabel={t.menuLabel}
        navLabel={t.navLabel}
        languageLabel={t.languageLabel}
        homeHref={routes.home(lang)}
      />

      <main>
        {/* Hero */}
        <header className={styles.hero} style={heroStyle}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav aria-label="Breadcrumb" className={styles.crumb}>
                <Link href={routes.home(lang)}>{t.page.home}</Link>
                <span aria-hidden="true">/</span>
                <Link href={routes.areasAnchor(lang)}>{p.areaEyebrow}</Link>
                <span aria-hidden="true">/</span>
                <span>{area.title}</span>
              </nav>
              <p className={styles.eyebrow}>{area.title}</p>
              <h1 className={`display ${styles.title}`}>{area.headline}</h1>
              <p className={styles.lead}>{area.lead}</p>
              <div className={styles.heroCta}>
                <WhatsAppLead lang={lang} t={t} />
              </div>
              <ul className={styles.trust}>
                {p.areaTrust.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div aria-hidden="true" className={styles.heroArt} />
          </div>
        </header>

        {/* Intro */}
        <section className={styles.intro}>
          <div className={`container ${styles.introGrid}`}>
            <p className={styles.introText}>{area.intro}</p>
            <ul className={styles.chips}>
              {area.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className={styles.services}>
          <div className="container">
            <h2 className={`h2 ${styles.sectionTitle}`}>{p.areaServicesTitle}</h2>
            <ul className={styles.serviceGrid}>
              {area.services.map((service) => (
                <li key={service.title} className={styles.serviceCard}>
                  <span aria-hidden="true" className={styles.serviceIcon}>
                    <AreaServiceIcon icon={service.icon} />
                  </span>
                  <h3 className={`h4 ${styles.serviceTitle}`}>{service.title}</h3>
                  <p className={styles.serviceText}>{service.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Why t={t} />

        {/* Steps */}
        <section className={styles.steps}>
          <div className="container">
            <h2 className={`h2 ${styles.sectionTitle}`}>{p.areaStepsTitle}</h2>
            <ol className={styles.stepList}>
              {p.areaSteps.map((step, index) => (
                <li key={step.title} className={styles.step}>
                  <span aria-hidden="true" className={styles.stepNum}>
                    {`0${index + 1}`}
                  </span>
                  <h3 className={`h4 ${styles.stepTitle}`}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kontakt" className={styles.ending}>
          <div className="container">
            <div className={styles.conversionPanel}>
              <div>
                <p className={styles.goldEyebrow}>{ending.nextLabel}</p>
                <h2 className={styles.conversionTitle}>{ending.nextTitle}</h2>
                <p className={styles.conversionText}>{ending.nextText}</p>
              </div>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.conversionButton}
              >
                {ending.nextCta}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.relatedServices}>
              <div>
                <p className={styles.goldEyebrow}>{ending.relatedLabel}</p>
                <h2 className={styles.relatedHeading}>{ending.relatedTitle}</h2>
              </div>
              <nav aria-label={p.otherAreas} className={styles.relatedChips}>
                {others.map((other) => (
                  <Link key={other.slug} href={routes.area(lang, other.slug)}>
                    {other.title}
                  </Link>
                ))}
              </nav>
            </div>

            <aside className={styles.proofPanel}>
              <div className={styles.proofFacts}>
                <p className={styles.goldEyebrow}>{ending.proofLabel}</p>
                <ul>
                  {ending.proofFacts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.proofCopy}>
                <h2>{ending.proofTitle}</h2>
                <p>{ending.proofText}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} t={t} />
    </div>
  );
}
