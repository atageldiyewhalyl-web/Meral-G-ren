import type { MetadataRoute } from "next";
import { getDictionary, SITE } from "@/content";
import { PUBLIC_LANGS } from "@/content/types";
import { altLanguages, localePath } from "@/lib/routes";

/**
 * Fallback date for pages that carry no date of their own (the landing page,
 * the area pages, the legal pages). Using `new Date()` for these would tell
 * crawlers that every URL on the site changed on every deploy, which devalues
 * the signal for the pages that genuinely did change — so this is pinned to the
 * last substantive content revision and bumped by hand.
 */
const SITE_REVISED = "2026-09-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const de = getDictionary("de");

  /** Newest post date, so /blog reports when the listing last actually changed. */
  const blogRevised = de.blog.posts.reduce(
    (latest, post) => {
      const revised = post.updated ?? post.iso;
      return revised > latest ? revised : latest;
    },
    de.blog.posts[0]?.iso ?? SITE_REVISED,
  );

  const entries: { path: string; lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", lastModified: SITE_REVISED, priority: 1, changeFrequency: "weekly" },
    { path: "/ueber-mich", lastModified: SITE_REVISED, priority: 0.8, changeFrequency: "yearly" },
    { path: "/blog", lastModified: blogRevised, priority: 0.8, changeFrequency: "weekly" },
    ...de.areas.items.map((area) => ({
      path: `/rechtsgebiete/${area.slug}`,
      lastModified: SITE_REVISED,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...de.blog.posts.map((post) => ({
      path: `/blog/${post.slug}`,
      // A post's own revision date — the one value here Google can act on.
      lastModified: post.updated ?? post.iso,
      priority: 0.7,
      changeFrequency: "yearly" as const,
    })),
    { path: "/impressum", lastModified: SITE_REVISED, priority: 0.3, changeFrequency: "yearly" },
    { path: "/datenschutz", lastModified: SITE_REVISED, priority: 0.3, changeFrequency: "yearly" },
  ];

  return entries.flatMap(({ path, lastModified, priority, changeFrequency }) =>
    PUBLIC_LANGS.map((lang) => ({
      url: `${SITE.url}${localePath(lang, path)}`,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
      alternates: {
        // Same set the pages themselves declare, regional variants included —
        // Google expects the sitemap's hreflang cluster and the on-page tags to
        // agree, and a mismatch gets the annotations dropped rather than merged.
        languages: Object.fromEntries(
          Object.entries(altLanguages(path)).map(([code, href]) => [
            code,
            `${SITE.url}${href === "/" ? "" : href}`,
          ]),
        ),
      },
    })),
  );
}
