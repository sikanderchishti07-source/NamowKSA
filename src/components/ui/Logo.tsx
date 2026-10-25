import { cn } from "@/lib/cn";

/**
 * NamowKSA mark: a plate rim (circle) with a single shoot rising through it,
 * growth that starts at the table. Wordmark is always set in Latin so the
 * brand reads the same in both languages.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("shrink-0", className)}>
      <circle cx="20" cy="22" r="14.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 33V14" stroke="var(--color-teal)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 19c0-5.2 3.4-8.6 8.8-9.2-.3 5.6-3.6 9-8.8 9.2Z" fill="var(--color-teal)" />
      <path d="M20 23.5c0-3.8-2.5-6.3-6.4-6.7.2 4.1 2.6 6.6 6.4 6.7Z" fill="var(--color-sage)" />
    </svg>
  );
}

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", tone === "dark" ? "text-navy" : "text-ivory", className)} dir="ltr">
      <LogoMark className="size-9" />
      <span className="font-[family-name:var(--font-display-latin)] text-[1.5rem] font-semibold uppercase leading-none tracking-[0.04em]">
        Namow<span className="text-teal">KSA</span>
      </span>
    </span>
  );
}
