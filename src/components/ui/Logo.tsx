import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * NamowKSA logo: the N monogram with flame, fork and rising arrow, recoloured
 * from the original gold artwork to the site palette. Navy on light surfaces,
 * teal on dark ones; the gold original is kept in public/brand/logo-mark-gold.png.
 * The wordmark is always set in Latin so the brand reads the same in both languages.
 */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", tone === "dark" ? "text-navy" : "text-ivory", className)} dir="ltr">
      <Image
        src={tone === "dark" ? "/brand/logo-mark-navy.png" : "/brand/logo-mark-teal.png"}
        alt=""
        width={324}
        height={400}
        priority={tone === "dark"}
        className="h-14 w-auto shrink-0"
      />
      <span className="font-[family-name:var(--font-display-latin)] text-[1.5rem] font-semibold uppercase leading-none tracking-[0.04em]">
        Namow<span className={tone === "dark" ? "text-teal-dark" : "text-teal-light"}>KSA</span>
      </span>
    </span>
  );
}
