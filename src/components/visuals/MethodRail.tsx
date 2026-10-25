"use client";

import { MotionConfig, motion } from "motion/react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

export type RailStage = {
  id: string;
  name: string;
  summary: string;
  activities: string[];
  outputs: string[];
};

/**
 * The methodology as order tickets clipped to a kitchen pass rail.
 * Implemented as an accessible tab list; arrow keys follow reading direction.
 */
export function MethodRail({
  stages,
  dir,
  labels,
}: {
  stages: RailStage[];
  dir: "ltr" | "rtl";
  labels: { activities: string; outputs: string; stage: string; tablist: string };
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    const next = (i + stages.length) % stages.length;
    setActive(next);
    tabs.current[next]?.focus();
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  };

  const onKey = (e: KeyboardEvent) => {
    const fwd = dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const back = dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    if (e.key === fwd) select(active + 1);
    else if (e.key === back) select(active - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(stages.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        {/* the pass rail */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-3 h-3 rounded-full bg-gradient-to-b from-[#c9d1d4] via-[#8d9aa0] to-[#55636a] shadow-[0_6px_12px_-4px_rgba(0,0,0,0.5)]"
        />
        <div
          role="tablist"
          aria-label={labels.tablist}
          onKeyDown={onKey}
          className="no-scrollbar relative -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-8 pt-0 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible"
        >
          {stages.map((s, i) => {
            const selected = i === active;
            const tilt = [-1.6, 1.1, -0.6, 1.4, -1.2, 0.8][i % 6];
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${i}`}
                data-tilt={tilt}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className="group relative w-[10.5rem] shrink-0 snap-start pt-1 text-start outline-none lg:w-auto"
              >
                {/* clip */}
                <span aria-hidden="true" className="absolute start-1/2 top-0 z-10 h-6 w-9 -translate-x-1/2 rounded-[3px] bg-[#3c4a50] shadow-sm rtl:translate-x-1/2" />
                <motion.span
                  className={cn(
                    "ticket-edge relative mt-4 block origin-top bg-[#fbfaf6] px-4 pb-7 pt-6 text-charcoal shadow-[0_18px_30px_-18px_rgba(0,0,0,0.6)]",
                    "group-focus-visible:ring-2 group-focus-visible:ring-teal-light group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-navy-deep",
                  )}
                  animate={{ rotate: selected ? 0 : tilt, y: selected ? 14 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <span className={cn("block h-1 w-full", selected ? "bg-teal" : "bg-transparent")} aria-hidden="true" />
                  <span className="mt-3 flex items-baseline justify-between text-[0.7rem] font-semibold text-stone">
                    <span>
                      {labels.stage} <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <span aria-hidden="true" dir="ltr" className="tabular-nums">
                      {i + 1}/{stages.length}
                    </span>
                  </span>
                  <span className="mt-2 block font-[family-name:var(--font-display)] text-[1.35rem] leading-tight text-navy">{s.name}</span>
                  <span className="mt-2 block border-t border-dashed border-line pt-2 text-[0.8rem] leading-snug text-stone">{s.summary}</span>
                </motion.span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 min-h-[13rem] border-t border-ivory/15 pt-8">
          {stages.map((st, i) => (
            <div
              key={st.id}
              id={`${baseId}-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${i}`}
              tabIndex={0}
              hidden={i !== active}
              className="grid animate-[panel-in_0.32s_var(--ease-out-soft)] gap-8 md:grid-cols-12"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl text-ivory md:col-span-4">{st.name}</p>
              <div className="md:col-span-5">
                <p className="text-sm font-semibold text-sage-light">{labels.activities}</p>
                <ul className="mt-3 space-y-2 text-ivory/85">
                  {st.activities.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-teal-light" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-semibold text-sage-light">{labels.outputs}</p>
                <ul className="mt-3 space-y-2 text-ivory/85">
                  {st.outputs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}
