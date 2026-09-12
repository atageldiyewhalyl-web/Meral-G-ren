import { LANGS, PUBLIC_LANGS, type Lang } from "@/content/types";

/**
 * German is the primary language and lives at the root; every other language is
 * prefixed with its code (/tr, /en). `proxy.ts` rewrites unprefixed requests
 * onto the /de segment, so every page file lives under src/app/[lang].
 */
export function localePath(lang: Lang, path = "/"): string {
  const clean = path === "/" ? "" : path;
  return lang === "de" ? clean || "/" : `/${lang}${clean}`;
}

/** Locale root without a trailing slash: "" for DE, "/tr" or "/en" otherwise. */
function base(lang: Lang): string {
  return lang === "de" ? "" : `/${lang}`;
}

export const routes = {
  home: (lang: Lang) => localePath(lang),
  about: (lang: Lang) => localePath(lang, "/ueber-mich"),
  contact: (lang: Lang) => `${base(lang) || "/"}#kontakt`,
  areasAnchor: (lang: Lang) => `${base(lang) || "/"}#rechtsgebiete`,
  blog: (lang: Lang) => localePath(lang, "/blog"),
  post: (lang: Lang, slug: string) => localePath(lang, `/blog/${slug}`),
  area: (lang: Lang, slug: string) => localePath(lang, `/rechtsgebiete/${slug}`),
  imprint: (lang: Lang) => localePath(lang, "/impressum"),
  privacy: (lang: Lang) => localePath(lang, "/datenschutz"),
  thanks: (lang: Lang) => localePath(lang, "/danke"),
};

/**
 * Drop a leading locale segment. Accepts both the public form ("/blog") and the
 * internal, rewritten form ("/de/blog"), so it is safe to call on either side of
 * the proxy rewrite.
 */
export function stripLocale(pathname: string): string {
  const match = pathname.match(new RegExp(`^/(${LANGS.join("|")})(?=/|$)`));
  const rest = match ? pathname.slice(match[0].length) : pathname;
  return rest || "/";
}

/** Swap the locale prefix on the current pathname, for the DE/TR switch. */
export function swapLocale(pathname: string, target: Lang): string {
  return localePath(target, stripLocale(pathname));
}

/**
 * Regional hreflang variants.
 *
 * German is served from one set of pages regardless of country, so Austria and
 * Switzerland point at the same German URL as Germany — this is a targeting
 * hint, not duplicate content, and it stops Google from treating the German
 * page as relevant to DE only. Turkish is claimed both bare and for Turkey
 * itself, since the audience is split between the diaspora in Germany and
 * readers in Turkey.
 */
const REGIONS: Partial<Record<Lang, string[]>> = {
  de: ["de-DE", "de-AT", "de-CH"],
  tr: ["tr-TR"],
  en: [],
};

/** hreflang map for a locale-independent path such as "/blog". */
export function altLanguages(path = "/") {
  const entries: [string, string][] = [];
  for (const lang of PUBLIC_LANGS) {
    const href = localePath(lang, path);
    entries.push([lang, href]);
    for (const region of REGIONS[lang] ?? []) entries.push([region, href]);
  }
  // x-default is the page shown when no language matches — German, the primary.
  entries.push(["x-default", localePath("de", path)]);
  return Object.fromEntries(entries);
}
