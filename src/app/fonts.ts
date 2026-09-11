import { Cormorant_Garamond, Inter_Tight } from "next/font/google";

/**
 * Body and UI: one grotesque, kept compact.
 *
 * Inter Tight carries `latin-ext`, so German umlauts and the Turkish
 * ğ ş İ Ğ Ş all come from the webfont on every device.
 */
export const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-raw",
  display: "swap",
});

/**
 * Headings: a high-contrast old-style serif, in the manner of the cooperation
 * partner's site (Cormorant Garamond). A serif on the titles reads as a law
 * office rather than a product — the grotesque alone felt too much like tech.
 * Also ships `latin-ext` for the umlauts and the Turkish letters.
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-serif-raw",
  display: "swap",
});

export const fontVariables = `${interTight.variable} ${cormorant.variable}`;
