import { getDictionary } from "@/content";
import { LANGS, type Lang } from "@/content/types";

/**
 * Enquiries go server-to-server to the meral-anfrage function in nüll's
 * Supabase project, which stores them in meral_anfragen (for the monthly
 * report) and mails them via Resend. The site holds only a shared secret, no
 * database or mail keys.
 */
const SUPABASE_FUNCTIONS = "https://srnynewvauzymnljqskj.supabase.co/functions/v1";

export function inquiryEndpoint(fn: "meral-anfrage" | "meral-klick"): string {
  return `${process.env.SUPABASE_FUNCTIONS_URL || SUPABASE_FUNCTIONS}/${fn}`;
}

export function inquirySecret(): string | undefined {
  return process.env.MERAL_INQUIRY_SECRET || undefined;
}

export type Lead = {
  channel: "form" | "whatsapp";
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  lang: Lang;
  /** How the visitor says they found the Kanzlei (WhatsApp lead form only). */
  foundVia: string;
  pagePath: string;
};

export type ValidationResult =
  | { ok: true; lead: Lead }
  | { ok: false; errors: string[] };

const MAX = { name: 120, email: 160, phone: 40, area: 60, message: 5000, foundVia: 60 };

function str(value: unknown, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/** Server-side validation — never trust the browser's `required` attributes. */
export function validateLead(input: unknown): ValidationResult {
  const errors: string[] = [];
  const raw = (input ?? {}) as Record<string, unknown>;

  const name = str(raw.name, MAX.name);
  const email = str(raw.email, MAX.email);
  const phone = str(raw.phone, MAX.phone);
  const area = str(raw.area, MAX.area);
  const message = str(raw.message, MAX.message);
  const lang = LANGS.includes(raw.lang as Lang) ? (raw.lang as Lang) : "de";

  if (name.length < 2) errors.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push("email");
  if (!area) errors.push("area");
  if (message.length < 10) errors.push("message");
  // The consent checkbox is a legal requirement (Art. 6(1)(a) GDPR), not a nicety.
  if (raw.consent !== "on" && raw.consent !== true) errors.push("consent");

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    lead: {
      channel: raw.source === "whatsapp" ? "whatsapp" : "form",
      name,
      email,
      phone,
      area,
      message,
      lang,
      foundVia: str(raw.foundVia, MAX.foundVia),
      pagePath: str(raw.pagePath, 300).split(/[?#]/)[0],
    },
  };
}

/**
 * Delivers a lead to the Kanzlei. Returns false when the site has no secret
 * (local development without .env.local); throws when the function fails, so
 * the visitor sees the phone number instead of a false confirmation.
 */
export async function deliverLead(lead: Lead, host: string): Promise<boolean> {
  const secret = inquirySecret();
  if (!secret) {
    console.warn("[lead] MERAL_INQUIRY_SECRET not set — enquiry not delivered");
    return false;
  }

  // German label for the mail, whatever language the visitor used
  const areaLabel = getDictionary("de").areas.items.find((item) => item.slug === lead.area)?.title ?? lead.area;

  const response = await fetch(inquiryEndpoint("meral-anfrage"), {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Meral-Inquiry-Secret": secret },
    body: JSON.stringify({
      channel: lead.channel,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      area: lead.area,
      areaLabel,
      foundVia: lead.foundVia,
      message: lead.message,
      language: lead.lang,
      pagePath: lead.pagePath,
      host,
    }),
    signal: AbortSignal.timeout(15_000),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`meral-anfrage answered ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }
  return true;
}
