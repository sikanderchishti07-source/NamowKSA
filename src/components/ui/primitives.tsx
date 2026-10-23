import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10", className)} {...props} />;
}

type Variant = "primary" | "accent" | "secondary" | "light" | "ghostLight";

const variants: Record<Variant, string> = {
  primary: "bg-teal-dark text-white hover:bg-teal-deep",
  /** For dark sections: bright teal with navy text (AA). */
  accent: "bg-teal text-navy-deep hover:bg-teal-light",
  secondary: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
  light: "bg-ivory text-navy hover:bg-white",
  ghostLight: "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/10",
};

export const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] px-6 text-[0.95rem] font-semibold tracking-[0.005em] transition-colors duration-200";

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls = cn(buttonBase, variants[variant], className);
  if (external)
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Text link with an underline that draws in on hover. */
export function TextLink({ href, children, className, tone = "dark" }: { href: string; children: ReactNode; className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold",
        tone === "dark" ? "text-teal-dark" : "text-teal-light",
        className,
      )}
    >
      <span className="bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 [background-image:linear-gradient(currentColor,currentColor)] group-hover:bg-[length:100%_1px] rtl:bg-right-bottom">
        {children}
      </span>
      <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}

/** Arrow that points in the reading direction. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={cn("rtl:-scale-x-100", className)}>
      <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SectionHeading({
  title,
  body,
  className,
  tone = "dark",
  as: Tag = "h2",
  id,
}: {
  title: string;
  body?: string;
  className?: string;
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={cn("max-w-[44rem]", className)}>
      <Tag id={id} className={cn("text-[length:var(--text-display-md)]", tone === "light" && "text-ivory")}>
        {title}
      </Tag>
      {body && <p className={cn("mt-5 max-w-[38rem] text-lg", tone === "light" ? "text-ivory/75" : "text-stone")}>{body}</p>}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
