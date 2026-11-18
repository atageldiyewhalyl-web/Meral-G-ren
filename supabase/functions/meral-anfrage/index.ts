// Stores one enquiry from the Meral Gören website in meral_anfragen and mails it.
// Called only by the site's /api/lead route (src/lib/lead.ts), which validates the input first
// and sends the shared secret MERAL_INQUIRY_SECRET.
//
// Secrets (supabase secrets set --project-ref srnynewvauzymnljqskj):
//   MERAL_INQUIRY_SECRET  shared with the Vercel project
//   MERAL_NOTIFY_TO       comma-separated recipients (default: Halyl only, until the site is launched)
//   MERAL_LIVE_HOSTS      comma-separated hosts that count as real traffic (default: kanzlei-goeren.de)
//   RESEND_API_KEY        already set for the project
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const FROM_EMAIL = "Kanzlei Meral Gören Website <anfrage@forms.xn--nll-hoa.com>";
const DEFAULT_TO = "halyl@xn--nll-hoa.com";
const DEFAULT_LIVE_HOSTS = "kanzlei-goeren.de,www.kanzlei-goeren.de";

type Enquiry = {
  channel: "form" | "whatsapp";
  name: string;
  email: string;
  phone: string;
  area: string;
  areaLabel: string;
  foundVia: string;
  message: string;
  language: string;
  pagePath: string;
  host: string;
};

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function list(value: string | undefined, fallback: string) {
  return (value || fallback).split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parse(body: Record<string, unknown> | null): Enquiry | null {
  if (!body) return null;
  const channel = body.channel === "whatsapp" ? "whatsapp" : body.channel === "form" ? "form" : null;
  const enquiry = {
    channel,
    name: text(body.name, 120),
    email: text(body.email, 160).toLowerCase(),
    phone: text(body.phone, 40),
    area: text(body.area, 60),
    areaLabel: text(body.areaLabel, 120),
    foundVia: text(body.foundVia, 60),
    message: text(body.message, 5000),
    language: text(body.language, 5) || "de",
    pagePath: text(body.pagePath, 300).split(/[?#]/)[0],
    host: text(body.host, 200).toLowerCase(),
  };
  if (!channel || enquiry.name.length < 2 || !enquiry.email.includes("@") || !enquiry.area || enquiry.message.length < 10) {
    return null;
  }
  return enquiry as Enquiry;
}

function mail(enquiry: Enquiry, isTest: boolean) {
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["E-Mail", enquiry.email],
    ["Telefon", enquiry.phone || "–"],
    ["Rechtsgebiet", enquiry.areaLabel || enquiry.area],
    ["Gefunden über", enquiry.foundVia || "–"],
    ["Weg", enquiry.channel === "whatsapp" ? "WhatsApp-Formular" : "Kontaktformular"],
    ["Sprache", enquiry.language],
    ["Seite", `${enquiry.host}${enquiry.pagePath}`],
  ];
  const subject = `${isTest ? "[Test] " : ""}${enquiry.channel === "whatsapp" ? "[WhatsApp] " : ""}Anfrage über die Website: ${enquiry.name} (${enquiry.areaLabel || enquiry.area})`;
  const plain = [...rows.map(([label, value]) => `${label}: ${value}`), "", "Nachricht:", enquiry.message].join("\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#1c1f22;line-height:1.5">
      <h1 style="font-size:20px;margin:0 0 16px">Neue Anfrage über die Website</h1>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows.map(([label, value]) => `<tr>
          <td style="border:1px solid #dfe3ea;padding:10px;font-weight:700;background:#f3f5f8;width:160px">${escapeHtml(label)}</td>
          <td style="border:1px solid #dfe3ea;padding:10px">${escapeHtml(value)}</td></tr>`).join("")}
      </table>
      <h2 style="font-size:16px;margin:22px 0 8px">Nachricht</h2>
      <p style="white-space:pre-wrap;background:#f8f9fb;border:1px solid #dfe3ea;padding:14px">${escapeHtml(enquiry.message)}</p>
    </div>`;
  return { subject, plain, html };
}

Deno.serve(async (request) => {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const secret = Deno.env.get("MERAL_INQUIRY_SECRET");
  if (!secret || request.headers.get("x-meral-inquiry-secret") !== secret) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const enquiry = parse(await request.json().catch(() => null));
  if (!enquiry) return Response.json({ ok: false, error: "invalid" }, { status: 422 });

  const isTest = !list(Deno.env.get("MERAL_LIVE_HOSTS"), DEFAULT_LIVE_HOSTS).includes(enquiry.host);
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });

  const { data, error } = await supabase
    .from("meral_anfragen")
    .insert({
      channel: enquiry.channel,
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone || null,
      area: enquiry.area,
      found_via: enquiry.foundVia || null,
      message: enquiry.message,
      language: enquiry.language,
      page_path: enquiry.pagePath || null,
      is_test: isTest,
    })
    .select("id")
    .single();
  if (error) console.error("[meral-anfrage] insert failed:", error.message);
  const id: string | null = data?.id ?? null;

  // Mail even if storing failed: the enquiry must reach a person either way.
  let mailed = false;
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (apiKey) {
    const { subject, plain, html } = mail(enquiry, isTest);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: list(Deno.env.get("MERAL_NOTIFY_TO"), DEFAULT_TO),
        reply_to: enquiry.email,
        subject,
        text: plain,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    }).catch((reason) => {
      console.error("[meral-anfrage] resend unreachable:", reason);
      return null;
    });
    const result = response ? await response.json().catch(() => ({})) as { id?: string } : {};
    mailed = Boolean(response?.ok);
    if (id) {
      await supabase.from("meral_anfragen").update(
        mailed
          ? { status: "email_sent", email_sent_at: new Date().toISOString(), resend_email_id: result.id ?? null }
          : { status: "email_failed", email_error: JSON.stringify(result).slice(0, 1000) },
      ).eq("id", id);
    }
  } else {
    console.error("[meral-anfrage] RESEND_API_KEY missing");
  }

  if (!id && !mailed) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true, stored: Boolean(id), mailed });
});
