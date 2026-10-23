import "server-only";
import type { Enquiry } from "@/lib/validation";

/**
 * Enquiry delivery. Two channels are supported and can be used together:
 *  - Email via Resend (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL)
 *  - A CRM / automation webhook (CRM_WEBHOOK_URL, optional CRM_WEBHOOK_SECRET)
 * Success is reported only when every configured channel accepted the enquiry.
 */

export type DeliveryResult =
  | { status: "delivered"; channels: string[] }
  | { status: "not_configured" }
  | { status: "failed"; channels: string[] };

type Payload = Enquiry & { locale: string; serviceLabel: string; submittedAt: string };

function env(name: string) {
  const v = process.env[name]?.trim();
  return v ? v : undefined;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

const LABELS: [keyof Payload, string][] = [
  ["fullName", "Full name"],
  ["businessName", "Business name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["businessType", "Business type"],
  ["serviceLabel", "Service of interest"],
  ["contactMethod", "Preferred contact"],
  ["locale", "Site language"],
  ["submittedAt", "Submitted"],
];

async function sendEmail(p: Payload): Promise<boolean> {
  const key = env("RESEND_API_KEY")!;
  const rows = LABELS.map(
    ([k, label]) => `<tr><td style="padding:4px 12px 4px 0;color:#5b676c">${label}</td><td>${escapeHtml(String(p[k]))}</td></tr>`,
  ).join("");
  const html = `<div style="font-family:system-ui,sans-serif;color:#26343a"><h2 style="color:#102b36">New consultation enquiry</h2><table>${rows}</table><h3 style="color:#102b36">Project details</h3><p style="white-space:pre-wrap">${escapeHtml(p.requirements)}</p></div>`;
  const text = `${LABELS.map(([k, l]) => `${l}: ${p[k]}`).join("\n")}\n\nProject details:\n${p.requirements}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env("CONTACT_FROM_EMAIL"),
      to: env("CONTACT_TO_EMAIL")!.split(",").map((s) => s.trim()),
      reply_to: p.email,
      subject: `Consultation enquiry: ${p.businessName} (${p.fullName})`,
      html,
      text,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) console.error("[enquiry] Resend responded", res.status, await res.text().catch(() => ""));
  return res.ok;
}

async function sendWebhook(p: Payload): Promise<boolean> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = env("CRM_WEBHOOK_SECRET");
  if (secret) headers["Authorization"] = `Bearer ${secret}`;
  const res = await fetch(env("CRM_WEBHOOK_URL")!, {
    method: "POST",
    headers,
    body: JSON.stringify({ source: "namowksa-website", type: "consultation_enquiry", ...p }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) console.error("[enquiry] Webhook responded", res.status);
  return res.ok;
}

export function deliveryChannels() {
  const channels: { name: string; send: (p: Payload) => Promise<boolean> }[] = [];
  if (env("RESEND_API_KEY") && env("CONTACT_TO_EMAIL") && env("CONTACT_FROM_EMAIL")) channels.push({ name: "email", send: sendEmail });
  if (env("CRM_WEBHOOK_URL")) channels.push({ name: "webhook", send: sendWebhook });
  return channels;
}

export async function deliverEnquiry(p: Payload): Promise<DeliveryResult> {
  const channels = deliveryChannels();
  if (!channels.length) return { status: "not_configured" };

  const results = await Promise.all(
    channels.map(async (c) => {
      try {
        return { name: c.name, ok: await c.send(p) };
      } catch (err) {
        console.error(`[enquiry] ${c.name} delivery error`, err);
        return { name: c.name, ok: false };
      }
    }),
  );
  const failed = results.filter((r) => !r.ok).map((r) => r.name);
  if (failed.length) return { status: "failed", channels: failed };
  return { status: "delivered", channels: results.map((r) => r.name) };
}
