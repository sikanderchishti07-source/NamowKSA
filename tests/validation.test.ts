import { describe, expect, it } from "vitest";
import { GENERAL_SERVICE, normalise, validateEnquiry } from "@/lib/validation";

const allowed = ["food-costing", GENERAL_SERVICE];
const valid = {
  fullName: " Sara Al-Qahtani ",
  businessName: "Test Café",
  email: "Sara@Example.com",
  phone: "+966 50 000 0000",
  businessType: "cafe",
  service: "food-costing",
  requirements: "We want to understand our drink costs and margins.",
  contactMethod: "whatsapp",
  consent: true,
};

describe("validateEnquiry", () => {
  it("accepts a complete enquiry and normalises it", () => {
    const r = validateEnquiry(normalise(valid), allowed);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.data.fullName).toBe("Sara Al-Qahtani");
      expect(r.data.email).toBe("sara@example.com");
    }
  });

  it("accepts Arabic names and the general enquiry option", () => {
    const r = validateEnquiry(normalise({ ...valid, fullName: "سارة القحطاني", service: GENERAL_SERVICE }), allowed);
    expect(r.ok).toBe(true);
  });

  it("returns an error code for every missing field", () => {
    const r = validateEnquiry(normalise({}), allowed);
    expect(r.ok).toBe(false);
    if (!r.ok)
      expect(r.errors).toEqual({
        fullName: "required",
        businessName: "required",
        email: "required",
        phone: "required",
        businessType: "required",
        service: "required",
        contactMethod: "required",
        requirements: "required",
        consent: "consent",
      });
  });

  it.each([
    ["email", "not-an-email", "email"],
    ["phone", "12345", "phone"],
    ["phone", "call me maybe", "phone"],
    ["requirements", "too short", "tooShort"],
    ["requirements", "x".repeat(3001), "tooLong"],
    ["service", "made-up-service", "required"],
    ["businessType", "spaceship", "required"],
  ])("rejects %s = %s", (field, value, code) => {
    const r = validateEnquiry(normalise({ ...valid, [field]: value }), allowed);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errors[field as keyof typeof r.errors]).toBe(code);
  });

  it("requires explicit consent", () => {
    const r = validateEnquiry(normalise({ ...valid, consent: "false" }), allowed);
    expect(r.ok).toBe(false);
  });
});
