import type { Dictionary, Lang } from "@/content/types";
import { routes } from "./routes";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/**
 * Main navigation. The first three and the last entry are in-page anchors on
 * the landing page; the blog is a real route.
 */
export function buildNav(lang: Lang, t: Dictionary): NavItem[] {
  return [
    { label: t.nav.home, href: "#start" },
    { label: t.nav.about, href: routes.about(lang) },
    {
      label: t.nav.areas,
      href: routes.areasAnchor(lang),
      children: t.areas.items.map((area) => ({
        label: area.title,
        href: routes.area(lang, area.slug),
      })),
    },
    { label: t.nav.blog, href: routes.blog(lang) },
    { label: t.nav.contact, href: "#kontakt" },
  ];
}
