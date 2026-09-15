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
};

export default nextConfig;
