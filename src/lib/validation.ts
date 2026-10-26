/**
 * Enquiry validation shared by the browser form and the API route.
 * Returns error codes (not messages) so each side can translate them.
 */

/** Value used in the service dropdown for a general enquiry. */
export const GENERAL_SERVICE = "general";

/** Value used in the service dropdown for the free business analysis visit offer. */
export const FREE_VISIT = "free-visit";

export const businessTypes = ["new", "restaurant", "cafe", "multi", "cloud", "other"] as const;
export const contactMethods = ["email", "phone", "whatsapp"] as const;

export type BusinessType = (typeof businessTypes)[number];
export type ContactMethod = (typeof contactMethods)[number];
export type ErrorCode = "required" | "email" | "phone" | "tooShort" | "tooLong" | "consent";

export type EnquiryInput = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  service: string;
  requirements: string;
  contactMethod: string;
  consent: boolean;
};

export type Enquiry = Omit<EnquiryInput, "businessType" | "contactMethod"> & {
  businessType: BusinessType;
  contactMethod: ContactMethod;
};

export type FieldErrors = Partial<Record<keyof EnquiryInput, ErrorCode>>;

export const LIMITS = {
  fullName: 100,
  businessName: 120,
  email: 160,
  phone: 24,
  requirementsMin: 20,
  requirementsMax: 3000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export function normalise(raw: Record<string, unknown>): EnquiryInput {
  return {
    fullName: str(raw.fullName),
    businessName: str(raw.businessName),
    email: str(raw.email).toLowerCase(),
    phone: str(raw.phone),
    businessType: str(raw.businessType),
    service: str(raw.service),
    requirements: str(raw.requirements),
    contactMethod: str(raw.contactMethod),
    consent: raw.consent === true || raw.consent === "on" || raw.consent === "true",
  };
}

export function validateEnquiry(
  input: EnquiryInput,
  allowedServices: readonly string[],
): { ok: true; data: Enquiry } | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};

  if (!input.fullName) errors.fullName = "required";
  else if (input.fullName.length > LIMITS.fullName) errors.fullName = "tooLong";

  if (!input.businessName) errors.businessName = "required";
  else if (input.businessName.length > LIMITS.businessName) errors.businessName = "tooLong";

  if (!input.email) errors.email = "required";
  else if (input.email.length > LIMITS.email || !EMAIL_RE.test(input.email)) errors.email = "email";

  const digits = input.phone.replace(/[^\d]/g, "");
  if (!input.phone) errors.phone = "required";
  else if (!/^[+\d\s\-()]+$/.test(input.phone) || digits.length < 8 || digits.length > 15) errors.phone = "phone";

  if (!(businessTypes as readonly string[]).includes(input.businessType)) errors.businessType = "required";
  if (!allowedServices.includes(input.service)) errors.service = "required";
  if (!(contactMethods as readonly string[]).includes(input.contactMethod)) errors.contactMethod = "required";

  if (!input.requirements) errors.requirements = "required";
  else if (input.requirements.length < LIMITS.requirementsMin) errors.requirements = "tooShort";
  else if (input.requirements.length > LIMITS.requirementsMax) errors.requirements = "tooLong";

  if (!input.consent) errors.consent = "consent";

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, data: input as Enquiry };
}
