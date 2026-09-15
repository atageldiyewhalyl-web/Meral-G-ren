import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fontVariables } from "../fonts";
import "../globals.css";
import { WhatsAppLeadProvider } from "@/components/WhatsAppLead";
import { getDictionary, isLang, SITE } from "@/content";
import { PUBLIC_LANGS, type Lang } from "@/content/types";
import { altLanguages, localePath } from "@/lib/routes";

export function generateStaticParams() {
  return PUBLIC_LANGS.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

/**
 * Default social preview. A file-convention `opengraph-image` inside app/[lang]
 * resolves to "/-/opengraph-image.jpg" — Next's placeholder for the unresolved
 * dynamic segment — which is both unshareable and dependent on an undocumented
 * internal. A plain asset in public/ gives one stable URL for every locale, and
 * pages that own a better image (blog posts) still override it.
 */
const OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Rechtsanwältin Meral Gören, Rechtsanwaltskanzlei in Mannheim",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(SITE.url),
    title: { default: t.meta.title, template: `%s – ${SITE.shortName}` },
    description: t.meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: altLanguages("/"),
    },
    openGraph: {
      type: "website",
      siteName: `${SITE.shortName} – ${SITE.name}`,
      title: t.meta.title,
      description: t.meta.description,
      locale: t.meta.locale,
      alternateLocale: PUBLIC_LANGS.filter((other) => other !== lang).map(
        (other) => getDictionary(other as Lang).meta.locale,
      ),
      url: localePath(lang),
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [OG_IMAGE],
    },
    // Explicit index/follow plus the richer Google-specific directives: allow
    // full-length snippets and large image previews, which is what an answer
    // engine needs in order to quote the page at all.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} data-theme="grey" className={fontVariables}>
      <body>
        {children}
        <WhatsAppLeadProvider lang={lang} t={t} />
      </body>
    </html>
  );
}
