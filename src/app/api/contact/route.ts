import { NextResponse, type NextRequest } from "next/server";
import { allServices, findService } from "@/content/services";
import { isLocale } from "@/i18n/config";
import { deliverEnquiry } from "@/lib/server/delivery";
import { rateLimit } from "@/lib/server/rate-limit";
import { GENERAL_SERVICE, normalise, validateEnquiry } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "unsupported_media_type" }, { status: 415 });
  }

  const raw = await request.text();
  if (raw.length > 20_000) return NextResponse.json({ error: "payload_too_large" }, { status: 413 });

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid_json" }, { status: 400 });

  // Honeypot: real users never fill this hidden field. Reject without detail.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ error: "rejected" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (!rateLimit(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : "en";
  const allowed = [...allServices.map((s) => s.slug), GENERAL_SERVICE];
  const result = validateEnquiry(normalise(body), allowed);
  if (!result.ok) return NextResponse.json({ error: "validation", fields: result.errors }, { status: 422 });

  const service = findService(result.data.service);
  const delivery = await deliverEnquiry({
    ...result.data,
    locale,
    serviceLabel: service ? `${service.title.en} / ${service.title.ar}` : "General enquiry",
    submittedAt: new Date().toISOString(),
  });

  if (delivery.status === "not_configured") {
    console.warn("[enquiry] Received an enquiry but no delivery channel is configured.");
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  if (delivery.status === "failed") return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 200 });
}
