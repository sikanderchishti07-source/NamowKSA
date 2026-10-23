"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  label,
  ariaLabel,
  className,
}: {
  locale: Locale;
  label: string;
  ariaLabel: string;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const target: Locale = locale === "en" ? "ar" : "en";
  const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  const href = `/${target}${rest}`;

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={cn(
        "inline-flex min-h-11 items-center px-2 text-[0.95rem] font-semibold underline-offset-4 hover:underline",
        target === "ar" ? "font-[family-name:var(--font-body-arabic)]" : "font-[family-name:var(--font-body-latin)]",
        className,
      )}
    >
      {label}
    </Link>
  );
}
