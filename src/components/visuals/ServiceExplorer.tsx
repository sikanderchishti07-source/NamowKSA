"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

export type ExplorerItem = {
  href: string;
  title: string;
  short: string;
  image: string;
  includes: string[];
};
export type ExplorerGroup = { label: string; items: ExplorerItem[] };

/**
 * Services index with a preview panel. Pointing at or focusing a service in
 * the list shows its photo, summary and first deliverables on the other side;
 * selecting it opens the service page. On small screens the list stands alone.
 */
export function ServiceExplorer({
  groups,
  viewLabel,
  includesLabel,
}: {
  groups: ExplorerGroup[];
  viewLabel: string;
  includesLabel: string;
}) {
  const flat = groups.flatMap((g) => g.items.map((it) => ({ ...it, group: g.label })));
  const [active, setActive] = useState(0);
  const current = flat[active];
  let n = 0;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5">
        {groups.map((g) => (
          <div key={g.label} className="mb-8 last:mb-0">
            <p className="flex items-center justify-between border-b border-navy pb-3 text-sm font-semibold text-stone">
              <span>{g.label}</span>
              <span className="tabular-nums">{String(g.items.length).padStart(2, "0")}</span>
            </p>
            <ul>
              {g.items.map((it) => {
                const i = n++;
                const on = i === active;
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      aria-describedby={on ? "service-preview" : undefined}
                      className={cn(
                        "group relative flex items-center gap-4 border-b border-line py-4 pe-2 ps-4 outline-none transition-colors duration-300 focus-visible:bg-teal/10",
                        on ? "text-navy lg:bg-white" : "text-charcoal hover:text-navy",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-y-0 start-0 w-[3px] origin-top bg-teal transition-transform duration-300",
                          on ? "scale-y-0 lg:scale-y-100" : "scale-y-0",
                        )}
                      />
                      <span aria-hidden="true" className="w-7 shrink-0 text-sm tabular-nums text-stone">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Image src={it.image} alt="" width={44} height={44} className="size-11 shrink-0 rounded-sm object-cover lg:hidden" />
                      <span className="flex-1 text-[1.05rem] font-semibold leading-snug">{it.title}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className={cn(
                          "size-[18px] shrink-0 transition-all duration-300 rtl:-scale-x-100",
                          on ? "opacity-30 lg:text-teal-dark lg:opacity-100" : "opacity-30 group-hover:opacity-70",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="hidden lg:col-span-7 lg:block">
        <div id="service-preview" aria-live="polite" className="sticky top-28 overflow-hidden rounded-md bg-navy text-ivory shadow-[0_30px_60px_-30px_rgba(16,43,54,0.5)]">
          <div className="relative aspect-[16/9]">
            {flat.map((it, i) => (
              <Image
                key={it.href}
                src={it.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 680px, 0px"
                className={cn(
                  "object-cover transition-[opacity,transform] duration-700 ease-out",
                  i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0",
                )}
              />
            ))}
            <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,39,0)_55%,rgba(11,31,39,0.85)_100%)]" />
            <span className="absolute bottom-5 start-6 rounded-full bg-ivory/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {current.group}
            </span>
          </div>
          <div className="p-8">
            <h3 className="text-[length:var(--text-display-sm)] text-ivory">{current.title}</h3>
            <p className="mt-3 max-w-[36rem] leading-relaxed text-ivory/75">{current.short}</p>
            {current.includes.length > 0 && (
              <>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-teal">{includesLabel}</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {current.includes.map((x) => (
                    <li key={x} className="flex gap-2.5 text-sm text-ivory/85">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2.25} />
                      {x}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <Link
              href={current.href}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-teal px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-ivory"
            >
              {viewLabel}
              <ArrowUpRight aria-hidden="true" className="size-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
