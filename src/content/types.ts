export type Lang = "de" | "tr" | "en";

/** German is the primary language and is served from the root. */
export const LANGS: Lang[] = ["de", "tr", "en"];

/**
 * The locales this build actually serves.
 *
 * English is kept in the source so the translation stays typed and reviewable,
 * and it is browsable in development, but production ships German and Turkish
 * only: `proxy.ts` stops treating /en as a locale prefix, so English URLs fall
 * through to the 404, and the switch, sitemap and hreflang tags omit it.
 */
export const PUBLIC_LANGS: Lang[] =
  process.env.NODE_ENV === "production" ? ["de", "tr"] : LANGS;

export type AreaSlug =
  | "zivilrecht"
  | "arbeitsrecht"
  | "auslaenderrecht"
  | "familienrecht"
  | "verkehrsrecht";

/** A practice area. Used both as a landing-page card and as a full sub-page. */
export interface Area {
  slug: AreaSlug;
  /** Display number on the landing card: "01", "02", "03". */
  num: string;
  title: string;
  /** Short teaser on the landing card. */
  text: string;
  /** Lead paragraph in the sub-page header. */
  lead: string;
  topics: string[];
  how: string;
  /** ---- full sub-page ---- */
  /** Duotone illustration for the sub-page hero. */
  illustration: string;
  /** Serif headline in the sub-page hero. */
  headline: string;
  /** Italic lead paragraph under the hero. */
  intro: string;
  /** Three short tag chips beside the intro. */
  chips: string[];
  /** Cards under "Womit wir Ihnen helfen". */
  services: { icon: string; title: string; text: string }[];
  /** One highlighted sub-topic; `postSlug` links to a blog post ("" = no link). */
  highlight: { eyebrow: string; title: string; text: string; postSlug: string };
}

/**
 * A single block in an article body. A bare string is a paragraph; the object
 * forms add structure (headings, a callout, a bullet list, a table, an FAQ).
 * The blog post page renders these and derives the Article + FAQPage schema.
 */
export type PostBlock =
  | string
  | { h2: string }
  | { h3: string }
  | { note: string }
  | { list: string[] }
  | { table: { caption?: string; head: string[]; rows: string[][] } }
  | { faq: { q: string; a: string }[] };

export interface Post {
  slug: string;
  /** Localised display label, e.g. "Zivilrecht" / "Medeni Hukuk". */
  category: string;
  /** Stable, language-independent link to the practice area (for the area
      page cross-link and the on-page CTA copy). */
  areaSlug: AreaSlug;
  /** Machine-readable date for <time datetime>. */
  iso: string;
  /** Localised display date. */
  date: string;
  /** Optional last-updated date (ISO), shown when the piece was revised. */
  updated?: string;
  title: string;
  excerpt: string;
  /** One closing line written for this post specifically — the reason a reader
      of *this* article should get in touch, shown in the trust strip at the
      end. Generic copy belongs in `page.postCta`, not here. */
  ctaLine: string;
  body: PostBlock[];
  /** Path under /public. */
  image: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPage {
  eyebrow: string;
  title: string;
  lead: string;
  sections: LegalSection[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    /** og:locale */
    locale: string;
  };
  cta: string;
  menuLabel: string;
  /** aria-label for the main navigation landmark. */
  navLabel: string;
  /** aria-label for the language switch group. */
  languageLabel: string;
  nav: {
    home: string;
    about: string;
    areas: string;
    blog: string;
    contact: string;
  };
  hero: {
    label: string;
    /** Split so the closing phrase can be emphasised against the rest. */
    title: { lead: string; accent: string };
    text: string;
    whatsapp: string;
  };
  areas: {
    label: string;
    title: string;
    text: string;
    more: string;
    /** Screen-reader prefix: "Mehr erfahren zu <Titel>". */
    moreTo: string;
    /** Closing line before the consultation CTA under the grid. */
    ctaText: string;
    items: Area[];
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    /** Training and focus areas — her own account. */
    background: string;
    cta: string;
    /** Link from the homepage teaser to the dedicated page. */
    more: string;
    /** The standalone /ueber-mich page. */
    page: {
      lead: string;
      /** Oversized ghost word set behind the portrait. */
      wordmark: string;
      /** Large statement; `mark` is the emphasised clause. */
      pull: { before: string; mark: string; after: string };
      /** Four figures under the statement. */
      facts: { value: string; label: string }[];
      sections: { heading: string; body: string[]; image: string }[];
      /** Heading over the closing image band. */
      closingTitle: string;
      asideText: string;
    };
  };
  why: {
    /** Eyebrow above the heading, as in every other section. */
    label: string;
    title: string;
    /** Closing line before the consultation CTA under the grid. */
    ctaText: string;
    items: { title: string; text: string }[];
  };
  reviews: {
    label: string;
    title: string;
    note: string;
    items: { quote: string; name: string; context: string }[];
  };
  blog: {
    label: string;
    title: string;
    all: string;
    more: string;
    moreTo: string;
    posts: Post[];
  };
  contact: {
    label: string;
    title: string;
    text: string;
    name: string;
    email: string;
    phone: string;
    area: string;
    areaPlaceholder: string;
    message: string;
    consentA: string;
    consentLink: string;
    consentB: string;
    submit: string;
    sending: string;
    error: string;
    addressLabel: string;
    country: string;
    route: string;
    phoneLabel: string;
    whatsapp: string;
    whatsappNote: string;
    hoursLabel: string;
    hours: string;
    hoursNote: string;
    /** WhatsApp lead-capture modal — details reach the office (and nüll) before
        the chat opens, so every enquiry is recorded and attributable. */
    wa: {
      eyebrow: string;
      title: string;
      intro: string;
      firstName: string;
      lastName: string;
      phone: string;
      foundVia: string;
      foundViaPlaceholder: string;
      foundViaOptions: string[];
      privacy: string;
      submit: string;
      submitting: string;
      error: string;
      close: string;
    };
  };
  finalCta: {
    label: string;
    title: string;
    text: string;
    panelText: string;
    listTitle: string;
    items: string[];
    note: string;
    primary: string;
    bottomLabel: string;
    bottomTitle: string;
    bottomText: string;
  };
  footer: {
    blurb: string;
    navTitle: string;
    areasTitle: string;
    contactTitle: string;
    imprint: string;
    privacy: string;
    copyright: string;
    callLink: string;
    waLink: string;
    formLink: string;
    route: string;
    /** Agency credit in the legal bar — links to the studio that built the site. */
    madeBy: string;
  };
  /** Cooperation partner for Turkish law. Facts are his own published ones. */
  partner: {
    label: string;
    title: string;
    text: string;
    firm: string;
    person: string;
    bio: string;
    locationsLabel: string;
    locations: string;
    languagesLabel: string;
    languages: string;
    areasLabel: string;
    areas: string[];
    cta: string;
  };
  cookie: {
    title: string;
    text: string;
    acceptAll: string;
    necessaryOnly: string;
    customize: string;
    save: string;
    necessary: string;
    necessaryText: string;
    stats: string;
    statsText: string;
  };
  /** Copy that only appears on sub-pages. */
  page: {
    home: string;
    more: string;
    allPosts: string;
    backHome: string;
    areaEyebrow: string;
    areaTopics: string;
    areaHow: string;
    areaAside: string;
    otherAreas: string;
    /** Sub-page section titles + the shared three-step process. */
    areaServicesTitle: string;
    areaStepsTitle: string;
    areaSteps: { title: string; text: string }[];
    areaWhyTitle: string;
    areaNextTitle: string;
    areaNextText: string;
    areaRelated: string;
    areaTrust: string[];
    /** Shown under every article — general information, not advice. */
    postDisclaimer: string;
    /** Copy for the thin trust strip that closes every article. The trust
        points themselves are reused from `areaTrust`. */
    postCta: { eyebrow: string; call: string; role: string };
    legalNote: string;
    blog: { eyebrow: string; title: string; lead: string };
    danke: {
      eyebrow: string;
      title: string;
      lead: string;
      body: string;
      urgent: string;
    };
    impressum: LegalPage;
    datenschutz: LegalPage;
  };
}
