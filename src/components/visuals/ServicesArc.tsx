"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type ArcItem = { href: string; title: string; short: string; category: string; image: string };

/**
 * All services as photo cards on a curved arc (a cylinder seen from inside):
 * outer cards come forward and turn toward the centre. Hovering or focusing a
 * card enlarges it and shows its summary below; clicking opens its page.
 * Below 760px the arc becomes a horizontal snap-scrolling row.
 */
export function ServicesArc({ items, dir, viewLabel }: { items: ArcItem[]; dir: "ltr" | "rtl"; viewLabel: string }) {
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const [hovered, setHovered] = useState<number | null>(null);
  const [geo, setGeo] = useState<{ w: number } | null>(null);

  const measure = useCallback(() => {
    if (stage.current) setGeo({ w: stage.current.clientWidth });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (stage.current) ro.observe(stage.current);
    return () => ro.disconnect();
  }, [measure]);

  const n = items.length;
  const mid = (n - 1) / 2;
  const desktop = geo !== null && geo.w >= 760;
  const cw = desktop ? Math.min(184, (geo.w / 2 - 16) / (mid + 0.85)) : 0;
  const ch = cw * 1.95;
  const sign = dir === "rtl" ? -1 : 1;
  const current = items[active];

  return (
    <div>
      <div
        ref={stage}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative",
          desktop
            ? "[perspective:1200px] [perspective-origin:50%_40%]"
            : "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8",
        )}
        style={desktop ? { height: ch * 1.45 } : undefined}
      >
        {items.map((it, i) => {
          const o = (i - mid) * sign;
          const ao = Math.abs(o);
          const isHover = hovered === i;
          const transform = desktop
            ? `translate3d(${o * cw * 0.99}px, ${isHover ? -cw * 0.16 : 0}px, ${Math.pow(ao, 1.6) * 6 + (isHover ? 60 : 0)}px) rotateY(${isHover ? -o * 2 : -o * 6.5}deg) scale(${isHover ? 1.22 : 1})`
            : undefined;
          return (
            <Link
              key={it.href}
              href={it.href}
              onMouseEnter={() => {
                setHovered(i);
                setActive(i);
              }}
              onFocus={() => {
                setHovered(i);
                setActive(i);
              }}
              onBlur={() => setHovered(null)}
              aria-describedby={i === active ? "arc-detail" : undefined}
              className={cn(
                "group overflow-hidden rounded-[14px] bg-navy text-ivory shadow-[0_22px_36px_-20px_rgba(11,31,39,0.55)] outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                desktop ? "absolute left-1/2 top-1/2" : "relative h-64 flex-[0_0_46%] snap-start sm:flex-[0_0_30%]",
                isHover && "shadow-[0_34px_60px_-24px_rgba(11,31,39,0.7)] ring-2 ring-teal",
              )}
              style={
                desktop
                  ? { width: cw, height: ch, marginLeft: -cw / 2, marginTop: -ch / 2, transform, zIndex: isHover ? 50 : 20 + Math.round(ao) }
                  : undefined
              }
            >
              <Image src={it.image} alt="" fill sizes="(min-width: 760px) 220px, 46vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,39,0)_40%,rgba(11,31,39,0.9)_100%)]" />
              <span className="absolute inset-x-3 bottom-3 text-start">
                <span className="inline-block rounded-full bg-ivory/15 px-2 py-0.5 text-[0.65rem] font-semibold backdrop-blur-sm">{it.category}</span>
                <span
                  className="mt-1.5 block font-[family-name:var(--font-display)] font-semibold leading-[1.1] [:lang(en)_&]:uppercase"
                  style={{ fontSize: desktop ? Math.max(0.78, cw / 150) + "rem" : "1rem" }}
                >
                  {it.title}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <div id="arc-detail" aria-live="polite" className="mx-auto mt-6 min-h-[9.5rem] max-w-2xl text-center">
        <h3 className="text-[length:var(--text-display-sm)] [:lang(en)_&]:uppercase">{current.title}</h3>
        <p className="mt-2 text-stone">{current.short}</p>
        <Link href={current.href} className="mt-3 inline-block border-b-[1.5px] border-current font-semibold text-teal-dark">
          {viewLabel}
        </Link>
      </div>
    </div>
  );
}
