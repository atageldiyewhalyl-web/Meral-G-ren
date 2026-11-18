import { inquiryEndpoint, inquirySecret } from "@/lib/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KINDS = new Set(["phone", "whatsapp", "email"]);

/**
 * Counts one click on a phone, email or WhatsApp link (sent by
 * src/lib/analytics.ts). Forwards only the kind, the page path and the host to
 * the meral-klick Supabase function: no IP, no cookie. Always answers 204, so
 * a counting problem never shows up for the visitor.
 */
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { kind?: unknown; path?: unknown } | null;
  const kind = typeof body?.kind === "string" ? body.kind : "";
  const secret = inquirySecret();
  if (!KINDS.has(kind) || !secret) return new Response(null, { status: 204 });
  const path = typeof body?.path === "string" ? body.path.split(/[?#]/)[0].slice(0, 300) : "";

  try {
    await fetch(inquiryEndpoint("meral-klick"), {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Meral-Inquiry-Secret": secret },
      body: JSON.stringify({ kind, path, host: request.headers.get("host") ?? "" }),
      signal: AbortSignal.timeout(5_000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("[klick] not stored:", error);
  }
  return new Response(null, { status: 204 });
}
