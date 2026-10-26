"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Cycles through words in place: the current word slides up and out while the
 * next rises in. All words share one grid cell, so the line never changes
 * width or height. Screen readers get only the first word (via the parent);
 * with reduced motion the first word simply stays.
 */
export function RotatingWord({ words, interval = 2600, className }: { words: readonly string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => window.clearInterval(t);
  }, [words.length, interval]);

  return (
    <span aria-hidden="true" className={cn("inline-grid overflow-hidden pb-[0.08em] align-bottom [clip-path:inset(0_-0.2em)]", className)}>
      {words.map((w, n) => {
        const state = n === i ? "in" : n === (i - 1 + words.length) % words.length ? "out" : "wait";
        return (
          <span
            key={w}
            className={cn(
              "col-start-1 row-start-1 whitespace-nowrap transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              state === "in" && "translate-y-0 opacity-100 blur-0",
              state === "out" && "-translate-y-[105%] opacity-0 blur-[2px]",
              state === "wait" && "translate-y-[105%] opacity-0 blur-[2px] duration-0",
            )}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}
