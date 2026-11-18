/**
 * Measurement for the monthly nüll report.
 *
 * Two layers, on purpose:
 * - Google Analytics 4 (property "Meral Gören Website" in the nüll tracking
 *   account). Loads only after the visitor allows statistics in the cookie
 *   banner (components/Analytics.tsx), so it undercounts.
 * - Cookie-free counts in Supabase: every enquiry (meral_anfragen, written by
 *   /api/lead) and every click on a phone, email or WhatsApp link
 *   (meral_klicks, written by /api/klick). They store no IP, cookie or visitor
 *   id, so they need no consent and count every visitor.
 *
 * GA4 key events: anfrage_submit (param channel: form | whatsapp),
 * phone_click, email_click, whatsapp_click (param link_page).
 */
export const GA_ID = "G-19VRN9LC02";

export type ClickKind = "phone" | "email" | "whatsapp";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

/** Sends a GA4 event. Does nothing while GA is not loaded (no consent). */
export function track(name: string, params: Record<string, string> = {}) {
  // beacon transport: the event survives the page switching to WhatsApp, the
  // phone app or the thank-you page right after it
  window.gtag?.("event", name, { ...params, transport_type: "beacon" });
}

/** Counts a contact click cookie-free in Supabase and, with consent, in GA4. */
export function countClick(kind: ClickKind) {
  const path = location.pathname;
  track(`${kind}_click`, { link_page: path });
  const body = JSON.stringify({ kind, path });
  // sendBeacon survives the browser handing over to the phone, mail or WhatsApp app
  if (!navigator.sendBeacon?.("/api/klick", new Blob([body], { type: "application/json" }))) {
    fetch("/api/klick", {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
      keepalive: true,
    }).catch(() => {});
  }
}
