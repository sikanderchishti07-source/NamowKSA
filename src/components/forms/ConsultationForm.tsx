"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { buttonBase } from "@/components/ui/primitives";
import {
  businessTypes,
  contactMethods,
  GENERAL_SERVICE,
  LIMITS,
  normalise,
  validateEnquiry,
  type EnquiryInput,
  type FieldErrors,
} from "@/lib/validation";

type FormDict = Dictionary["form"];
type Status = "idle" | "sending" | "success" | "notConfigured" | "failed" | "rateLimited" | "network";

const FIELD_ORDER: (keyof EnquiryInput)[] = [
  "fullName",
  "businessName",
  "email",
  "phone",
  "businessType",
  "service",
  "requirements",
  "contactMethod",
  "consent",
];

const empty = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: "",
  service: "",
  requirements: "",
  contactMethod: "",
  consent: false,
};

export function ConsultationForm({
  locale,
  t,
  serviceOptions,
  packageOptions,
  privacyHref,
}: {
  locale: Locale;
  t: FormDict;
  serviceOptions: { value: string; label: string; group: string }[];
  packageOptions: { value: string; label: string }[];
  privacyHref: string;
}) {
  const uid = useId();
  const id = (f: string) => `${uid}-${f}`;
  const [state, setValues] = useState(empty);
  const [dirty, setDirty] = useState<{ service?: boolean; requirements?: boolean }>({});

  // Prefill from ?service=slug or ?package=id links on service and package pages.
  const search = useSyncExternalStore(
    noopSubscribe,
    () => window.location.search,
    () => "",
  );
  const query = new URLSearchParams(search);
  const presetService = serviceOptions.some((o) => o.value === query.get("service")) ? (query.get("service") as string) : "";
  const presetPackage = packageOptions.find((o) => o.value === query.get("package"))?.label;
  const values = {
    ...state,
    service: dirty.service ? state.service : state.service || presetService,
    requirements: dirty.requirements || !presetPackage ? state.requirements : state.requirements || `${t.packageLabel}: ${presetPackage}\n\n`,
  };
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [touchedSubmit, setTouchedSubmit] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const allowed = [...serviceOptions.map((o) => o.value), GENERAL_SERVICE];

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const set = <K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) => {
    if (key === "service" || key === "requirements") setDirty((d) => ({ ...d, [key]: true }));
    setValues({ ...values, [key]: value });
    if (touchedSubmit) {
      const next = validateEnquiry(normalise({ ...values, [key]: value }), allowed);
      setErrors(next.ok ? {} : next.errors);
    }
  };

  const msg = (field: keyof EnquiryInput) => {
    const code = errors[field];
    return code ? t.errors[code] : undefined;
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setTouchedSubmit(true);
    const result = validateEnquiry(normalise(values), allowed);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      requestAnimationFrame(() => {
        const first = FIELD_ORDER.find((f) => result.errors[f]);
        if (first) document.getElementById(id(first))?.focus();
      });
      return;
    }
    setErrors({});
    setStatus("sending");
    const honeypot = (formRef.current?.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, locale, website: honeypot }),
      });
      if (res.ok) {
        setStatus("success");
        setValues(empty);
        setDirty({ service: true, requirements: true });
        setTouchedSubmit(false);
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { error?: string; fields?: FieldErrors };
      if (res.status === 422 && body.fields) {
        setErrors(body.fields);
        setStatus("idle");
      } else if (res.status === 503) setStatus("notConfigured");
      else if (res.status === 429) setStatus("rateLimited");
      else setStatus("failed");
    } catch {
      setStatus("network");
    }
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-teal/30 bg-white p-8 sm:p-10" role="status">
        <svg viewBox="0 0 40 40" className="size-10 text-teal" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="m12.5 20.5 5 5 10-11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 ref={successRef} tabIndex={-1} className="mt-5 text-[length:var(--text-display-sm)] outline-none">
          {t.status.successTitle}
        </h2>
        <p className="mt-3 max-w-prose text-stone">{t.status.successBody}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 font-semibold text-teal-dark underline underline-offset-4">
          {t.status.sendAnother}
        </button>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;
  const statusMessage =
    status === "notConfigured"
      ? t.status.notConfigured
      : status === "failed"
        ? t.status.failed
        : status === "rateLimited"
          ? t.status.rateLimited
          : status === "network"
            ? t.status.network
            : touchedSubmit && errorCount
              ? t.errors.summary
              : "";

  const groups = Array.from(new Set(serviceOptions.map((o) => o.group)));

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-7" aria-describedby={statusMessage ? id("summary") : undefined}>
      <div ref={summaryRef} id={id("summary")} tabIndex={-1} aria-live="polite" className="outline-none">
        {statusMessage && (
          <p
            className={cn(
              "rounded-sm border-s-4 px-4 py-3 text-[0.95rem]",
              status === "idle" ? "border-error bg-error/5 text-error" : "border-[#d08a3a] bg-[#fbf1e6] text-[#6e4413]",
            )}
          >
            {statusMessage}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="pointer-events-none absolute start-0 size-px overflow-hidden whitespace-nowrap opacity-0 [clip-path:inset(50%)]">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={id("fullName")} label={t.fullName} error={msg("fullName")} required={t.required}>
          <input
            id={id("fullName")}
            className={inputCls(!!errors.fullName)}
            autoComplete="name"
            maxLength={LIMITS.fullName}
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            {...aria(id("fullName"), !!errors.fullName)}
          />
        </Field>
        <Field id={id("businessName")} label={t.businessName} error={msg("businessName")} required={t.required}>
          <input
            id={id("businessName")}
            className={inputCls(!!errors.businessName)}
            autoComplete="organization"
            maxLength={LIMITS.businessName}
            value={values.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            {...aria(id("businessName"), !!errors.businessName)}
          />
        </Field>
        <Field id={id("email")} label={t.email} error={msg("email")} required={t.required}>
          <input
            id={id("email")}
            type="email"
            dir="ltr"
            inputMode="email"
            autoComplete="email"
            className={cn(inputCls(!!errors.email), "rtl:text-right")}
            maxLength={LIMITS.email}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            {...aria(id("email"), !!errors.email)}
          />
        </Field>
        <Field id={id("phone")} label={t.phone} hint={t.phoneHint} error={msg("phone")} required={t.required}>
          <input
            id={id("phone")}
            type="tel"
            dir="ltr"
            inputMode="tel"
            autoComplete="tel"
            className={cn(inputCls(!!errors.phone), "rtl:text-right")}
            maxLength={LIMITS.phone}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            {...aria(id("phone"), !!errors.phone, true)}
          />
        </Field>
        <Field id={id("businessType")} label={t.businessType} error={msg("businessType")} required={t.required}>
          <div className="relative">
          <select
            id={id("businessType")}
            className={selectCls(!!errors.businessType)}
            value={values.businessType}
            onChange={(e) => set("businessType", e.target.value)}
            {...aria(id("businessType"), !!errors.businessType)}
          >
            <option value="">{t.select}</option>
            {businessTypes.map((b) => (
              <option key={b} value={b}>
                {t.businessTypes[b]}
              </option>
            ))}
          </select>
          <SelectChevron />
          </div>
        </Field>
        <Field id={id("service")} label={t.service} error={msg("service")} required={t.required}>
          <div className="relative">
          <select
            id={id("service")}
            className={selectCls(!!errors.service)}
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            {...aria(id("service"), !!errors.service)}
          >
            <option value="">{t.select}</option>
            {groups.map((g) => (
              <optgroup key={g} label={g}>
                {serviceOptions
                  .filter((o) => o.group === g)
                  .map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
              </optgroup>
            ))}
            <option value={GENERAL_SERVICE}>{t.otherService}</option>
          </select>
          <SelectChevron />
          </div>
        </Field>
      </div>

      <Field id={id("requirements")} label={t.requirements} hint={t.requirementsHint} error={msg("requirements")} required={t.required}>
        <textarea
          id={id("requirements")}
          rows={6}
          className={cn(inputCls(!!errors.requirements), "min-h-40 py-3 leading-relaxed")}
          maxLength={LIMITS.requirementsMax}
          value={values.requirements}
          onChange={(e) => set("requirements", e.target.value)}
          {...aria(id("requirements"), !!errors.requirements, true)}
        />
      </Field>

      <fieldset aria-describedby={errors.contactMethod ? `${id("contactMethod")}-error` : undefined}>
        <legend className="mb-3 font-semibold text-navy">
          {t.contactMethod} <span className="sr-only">({t.required})</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {contactMethods.map((m, i) => (
            <label
              key={m}
              className={cn(
                "inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border bg-white px-4 transition-colors has-[:checked]:border-teal has-[:checked]:bg-teal/5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-teal",
                errors.contactMethod ? "border-error" : "border-line",
              )}
            >
              <input
                type="radio"
                name="contactMethod"
                value={m}
                id={i === 0 ? id("contactMethod") : undefined}
                checked={values.contactMethod === m}
                onChange={() => set("contactMethod", m)}
                className="size-4 accent-[var(--color-teal)]"
              />
              {t.contactMethods[m]}
            </label>
          ))}
        </div>
        {errors.contactMethod && (
          <p id={`${id("contactMethod")}-error`} className="mt-2 text-sm text-error">
            {t.errors[errors.contactMethod]}
          </p>
        )}
      </fieldset>

      <div>
        <label className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
          <input
            id={id("consent")}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${id("consent")}-error` : undefined}
            className="mt-1 size-5 shrink-0 accent-[var(--color-teal)]"
          />
          <span>
            {t.consent}{" "}
            <Link href={privacyHref} className="font-semibold text-teal-dark underline underline-offset-4" target="_blank">
              {t.privacyLink}
            </Link>
          </span>
        </label>
        {errors.consent && (
          <p id={`${id("consent")}-error`} className="mt-2 text-sm text-error">
            {t.errors[errors.consent]}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"} className={cn(buttonBase, "w-full bg-teal-dark text-white hover:bg-teal-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-10")}>
        {status === "sending" && (
          <svg viewBox="0 0 24 24" className="size-4 animate-spin" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
            <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )}
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}

function noopSubscribe() {
  return () => {};
}

function aria(fieldId: string, invalid: boolean, hasHint = false) {
  const describedBy = [hasHint && `${fieldId}-hint`, invalid && `${fieldId}-error`].filter(Boolean).join(" ");
  return {
    "aria-invalid": invalid || undefined,
    "aria-required": true,
    "aria-describedby": describedBy || undefined,
  } as const;
}

const inputCls = (invalid: boolean) =>
  cn(
    "block min-h-12 w-full rounded-sm border bg-white px-4 text-charcoal transition-colors placeholder:text-stone/60 focus:border-teal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-teal",
    invalid ? "border-error" : "border-line hover:border-stone/50",
  );

const selectCls = (invalid: boolean) => cn(inputCls(invalid), "appearance-none pe-10");

function SelectChevron() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="pointer-events-none absolute end-4 top-1/2 size-3 -translate-y-1/2 text-charcoal">
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-semibold text-navy">
        {label} <span className="sr-only">({required})</span>
      </label>
      {hint && (
        <p id={`${id}-hint`} className="-mt-1 mb-2 text-sm text-stone">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
