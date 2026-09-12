import { SITE } from "@/content";
import type { Area, Dictionary, Lang, Post } from "@/content/types";
import { localePath } from "@/lib/routes";

/**
 * Structured data for the whole site.
 *
 * Everything is emitted as a single `@graph` per page with stable `@id`s, so
 * the Kanzlei, the person and the website are described once and referenced by
 * pointer everywhere else. That is what lets a search or answer engine resolve
 * "who wrote this article" to the same entity as "who runs this firm" instead
 * of treating each page's copy as a separate business.
 *
 * Nothing in here is invented: every value traces to `SITE` (the Impressum) or
 * to the dictionaries. Claims the Kanzlei has not supplied — a review rating,
 * opening hours, social profiles — are deliberately absent rather than guessed,
 * and are marked below so they can be filled in when the data exists.
 */

export const ID = {
  organization: `${SITE.url}/#organization`,
  person: `${SITE.url}/#person`,
  website: `${SITE.url}/#website`,
} as const;

type Node = Record<string, unknown>;

const absolute = (path: string) => `${SITE.url}${path}`;

/** Locale code in the form Schema.org/OG expect ("de-DE"). */
function localeTag(lang: Lang): string {
  return lang === "de" ? "de-DE" : lang === "tr" ? "tr-TR" : "en-GB";
}

/* ------------------------------------------------------------------ entities */

/**
 * The Kanzlei as a business.
 *
 * NOTE — deliberately omitted until the Kanzlei supplies verified values:
 *   `openingHoursSpecification`  needs the actual opening hours
 *   `sameAs`                     needs the Google Business Profile / directory URLs
 *   `aggregateRating`            needs the real rating value and review count;
 *                                inventing these is a policy violation and, for a
 *                                law firm, a reputational risk
 */
export function organizationNode(t: Dictionary): Node {
  return {
    "@type": ["LegalService", "LocalBusiness"],
    "@id": ID.organization,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: t.meta.description,
    telephone: SITE.phoneE164,
    faxNumber: SITE.fax,
    email: SITE.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetExtra ? `${SITE.street}, ${SITE.streetExtra}` : SITE.street,
      postalCode: SITE.postalCode,
      addressLocality: SITE.city,
      addressCountry: SITE.countryCode,
    },
    // Approximate coordinates for R1 2-3, 68161 Mannheim. Worth confirming
    // against the Google Business Profile pin once that profile exists, since
    // the map pin and this value should agree exactly.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.4875,
      longitude: 8.466,
    },
    hasMap: SITE.maps,
    areaServed: [
      { "@type": "AdministrativeArea", name: SITE.city },
      { "@type": "Country", name: "Deutschland" },
    ],
    availableLanguage: ["German", "Turkish"],
    knowsLanguage: ["de", "tr"],
    founder: { "@id": ID.person },
    employee: { "@id": ID.person },
    knowsAbout: t.areas.items.map((area) => area.title),
    makesOffer: t.areas.items.map((area) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: area.title,
        serviceType: area.title,
        provider: { "@id": ID.organization },
      },
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: ["German", "Turkish"],
    },
  };
}

/**
 * Meral Gören as a person.
 *
 * For a YMYL subject like law, the author entity carries most of the E-E-A-T
 * weight: qualification, admitting authority, and date of admission are what
 * separate a lawyer's article from a content-farm page on the same topic.
 * Every claim here is stated in the Impressum or the about page.
 */
export function personNode(t: Dictionary): Node {
  return {
    "@type": "Person",
    "@id": ID.person,
    name: SITE.person,
    givenName: "Meral",
    familyName: "Gören",
    jobTitle: "Rechtsanwältin",
    description: t.about.p1,
    url: absolute(localePath("de", "/ueber-mich")),
    worksFor: { "@id": ID.organization },
    knowsLanguage: ["de", "tr"],
    knowsAbout: t.areas.items.map((area) => area.title),
    // The admitting body is the supervisory authority named in the Impressum.
    memberOf: {
      "@type": "Organization",
      name: SITE.barAssociation,
      url: "https://www.rak-karlsruhe.de",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ruprecht-Karls-Universität Heidelberg",
      url: "https://www.uni-heidelberg.de",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Zulassung als Rechtsanwältin",
      recognizedBy: { "@type": "Organization", name: SITE.barAssociation },
      // Admitted 6 June 2008 — stated on the about page.
      dateCreated: "2008-06-06",
    },
  };
}

export function websiteNode(lang: Lang, t: Dictionary): Node {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE.url,
    name: SITE.name,
    description: t.meta.description,
    inLanguage: localeTag(lang),
    publisher: { "@id": ID.organization },
  };
}

/* --------------------------------------------------------------- page nodes */

/** A breadcrumb trail. Pass the visible crumbs, in order, excluding the site root. */
export function breadcrumbNode(
  lang: Lang,
  crumbs: { name: string; path: string }[],
  t: Dictionary,
): Node {
  const trail = [{ name: t.page.home, path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(localePath(lang, crumb.path)),
    })),
  };
}

/** A practice area, as a service the Kanzlei offers. */
export function serviceNode(lang: Lang, area: Area): Node {
  return {
    "@type": "Service",
    "@id": `${absolute(localePath(lang, `/rechtsgebiete/${area.slug}`))}#service`,
    name: area.title,
    serviceType: area.title,
    description: area.intro,
    provider: { "@id": ID.organization },
    areaServed: { "@type": "AdministrativeArea", name: SITE.city },
    availableLanguage: ["German", "Turkish"],
    audience: { "@type": "Audience", audienceType: "Mandantinnen und Mandanten" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: area.title,
      itemListElement: area.topics.map((topic) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: topic },
      })),
    },
  };
}

/** The blog index, as a collection that lists the posts. */
export function blogNode(lang: Lang, t: Dictionary): Node {
  return {
    "@type": "Blog",
    "@id": `${absolute(localePath(lang, "/blog"))}#blog`,
    name: t.page.blog.title,
    description: t.page.blog.lead,
    url: absolute(localePath(lang, "/blog")),
    inLanguage: localeTag(lang),
    publisher: { "@id": ID.organization },
    author: { "@id": ID.person },
    blogPost: t.blog.posts.map((post: Post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absolute(localePath(lang, `/blog/${post.slug}`)),
      datePublished: post.iso,
      dateModified: post.updated ?? post.iso,
      image: absolute(post.image),
      author: { "@id": ID.person },
    })),
  };
}

/** The about page, as a profile of the person behind the firm. */
export function profilePageNode(lang: Lang, t: Dictionary): Node {
  return {
    "@type": "ProfilePage",
    "@id": `${absolute(localePath(lang, "/ueber-mich"))}#profile`,
    url: absolute(localePath(lang, "/ueber-mich")),
    name: t.about.title,
    inLanguage: localeTag(lang),
    mainEntity: { "@id": ID.person },
    about: { "@id": ID.person },
    isPartOf: { "@id": ID.website },
  };
}

/** Wraps nodes into the single graph a page emits. */
export function graph(...nodes: (Node | null | undefined)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
