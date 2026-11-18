// Stores one click on a phone, email or WhatsApp link of the Meral Gören website (meral_klicks).
// Called only by the site's /api/klick route, which sends the shared secret MERAL_INQUIRY_SECRET.
// Kind and page path only: no IP, no cookie, no visitor id.
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const KINDS = new Set(["phone", "whatsapp", "email"]);
const DEFAULT_LIVE_HOSTS = "kanzlei-goeren.de,www.kanzlei-goeren.de";

Deno.serve(async (request) => {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const secret = Deno.env.get("MERAL_INQUIRY_SECRET");
  if (!secret || request.headers.get("x-meral-inquiry-secret") !== secret) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const body = await request.json().catch(() => null) as { kind?: unknown; path?: unknown; host?: unknown } | null;
  const kind = typeof body?.kind === "string" ? body.kind : "";
  if (!KINDS.has(kind)) return Response.json({ ok: false }, { status: 422 });
  const path = typeof body?.path === "string" ? body.path.split(/[?#]/)[0].slice(0, 300) : null;
  const host = typeof body?.host === "string" ? body.host.trim().toLowerCase() : "";
  const liveHosts = (Deno.env.get("MERAL_LIVE_HOSTS") || DEFAULT_LIVE_HOSTS).split(",").map((h) => h.trim().toLowerCase());

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
  const { error } = await supabase.from("meral_klicks").insert({ kind, path, is_test: !liveHosts.includes(host) });
  if (error) {
    console.error("[meral-klick] insert failed:", error.message);
    return Response.json({ ok: false }, { status: 500 });
  }
  return Response.json({ ok: true });
});
