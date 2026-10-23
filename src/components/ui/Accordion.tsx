import { cn } from "@/lib/cn";

/** FAQ list built on native <details>, so it works without JavaScript and with the keyboard. */
export function Accordion({ items, className }: { items: { q: string; a: string }[]; className?: string }) {
  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-start [&::-webkit-details-marker]:hidden">
            <span className="font-[family-name:var(--font-display)] text-[1.2rem] leading-snug text-navy sm:text-[1.35rem]">{item.q}</span>
            <span
              aria-hidden="true"
              className="relative mt-1.5 size-5 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-[1.5px] before:-translate-y-1/2 before:bg-teal-dark after:absolute after:inset-y-0 after:left-1/2 after:w-[1.5px] after:-translate-x-1/2 after:bg-teal-dark after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-[62ch] pb-7 text-stone">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
