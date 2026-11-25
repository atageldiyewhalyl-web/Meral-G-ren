import type { NextConfig } from "next";

/**
 * Security headers applied to every response.
 *
 * These are a ranking-adjacent hygiene signal rather than a ranking factor in
 * themselves, but they are what a security audit (and Lighthouse's best-practices
 * score) looks for, and they cost nothing to serve.
 */
const SECURITY_HEADERS = [
  // Clickjacking: the site is never meant to be framed by a third party.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop browsers guessing a different content type than the one we send.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send the full referrer within the site, origin-only when leaving it.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site asks for none of these; deny them up front.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // HSTS: once a visitor has seen the site over HTTPS, never let them downgrade.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

/**
 * Permanent redirects from the old static site (pre-2026-11-23), whose .html
 * pages are still in Google's index. Without these they 404 and the rankings
 * they hold are lost. URL list taken from the Wayback Machine and Search Console.
 */
const OLD_SITE_REDIRECTS: Array<[string, string]> = [
  ["/index.html", "/"],
  ["/index_tr.html", "/tr"],
  ["/kanzlei.html", "/"],
  ["/kanzlei_tr.html", "/tr"],
  ["/anwalt.html", "/ueber-mich"],
  ["/anwalt_tr.html", "/tr/ueber-mich"],
  ["/rechtsgebiete.html", "/#rechtsgebiete"],
  ["/rechtsgebiete_tr.html", "/tr#rechtsgebiete"],
  ["/gebiete_tr.html", "/tr#rechtsgebiete"],
  ["/impressum.html", "/impressum"],
  ["/impressum_tr.html", "/tr/impressum"],
  // The practice areas have no index page of their own; the overview lives on the homepage.
  ["/rechtsgebiete", "/#rechtsgebiete"],
  ["/tr/rechtsgebiete", "/tr#rechtsgebiete"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return OLD_SITE_REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
