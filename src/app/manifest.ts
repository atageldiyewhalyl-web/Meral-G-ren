import type { MetadataRoute } from "next";
import { SITE } from "@/content";

/**
 * Web app manifest. Next.js serves this at /manifest.webmanifest and links it
 * from every page automatically, so the icon set and theme colour stay in one
 * place rather than being repeated across hand-written <link> tags.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: "Rechtsanwaltskanzlei in Mannheim — Beratung auf Deutsch und Türkisch.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafbfd",
    theme_color: "#041c2c",
    lang: "de",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
