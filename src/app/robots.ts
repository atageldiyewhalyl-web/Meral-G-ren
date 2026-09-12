import type { MetadataRoute } from "next";
import { SITE } from "@/content";

/** Paths that must never be indexed: the API, and the post-enquiry thank-you
    pages (thin, duplicated per locale, and only reachable after a conversion). */
const DISALLOW = ["/api/", "/danke", "/tr/danke", "/en/danke"];

/**
 * AI answer engines are a first-class traffic source for a law firm: people ask
 * ChatGPT or Perplexity a legal question long before they search for a lawyer.
 * A bare `*` rule technically allows them, but naming each crawler is explicit
 * consent that survives a future tightening of the wildcard rule — and several
 * of these bots read their own named block in preference to `*`.
 */
const AI_CRAWLERS = [
  "GPTBot",           // OpenAI — ChatGPT browsing + training
  "OAI-SearchBot",    // OpenAI — ChatGPT Search index
  "ChatGPT-User",     // OpenAI — user-initiated fetches
  "ClaudeBot",        // Anthropic — Claude
  "Claude-Web",       // Anthropic — user-initiated fetches
  "anthropic-ai",     // Anthropic — legacy agent string
  "PerplexityBot",    // Perplexity
  "Perplexity-User",  // Perplexity — user-initiated fetches
  "Google-Extended",  // Google — Gemini / AI Overviews grounding
  "Applebot-Extended",// Apple — Apple Intelligence
  "CCBot",            // Common Crawl — feeds many downstream models
  "cohere-ai",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
