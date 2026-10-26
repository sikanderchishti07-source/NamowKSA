"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { X } from "lucide-react";

const KEY = "nk-offer-bar";
const EVENT = "nk-offer-bar";

function isClosed() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}
function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

/** Slim announcement above the header. Closing it hides it for the rest of the visit. */
export function OfferBar({ href, label, text, cta, close }: { href: string; label: string; text: string; cta: string; close: string }) {
  const closed = useSyncExternalStore(subscribe, isClosed, () => false);
  if (closed) return null;
  return (
    <div className="relative border-b border-ivory/10 bg-[linear-gradient(90deg,var(--color-navy-deep),#0e3a40,var(--color-navy-deep))] text-ivory">
      <div className="mx-auto flex max-w-[80rem] items-center justify-center gap-3 px-12 py-2.5 text-center text-sm">
        <span className="hidden shrink-0 rounded-full bg-gold px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-navy-deep sm:inline-block">{label}</span>
        <Link href={href} className="group font-medium">
          <span>{text}</span>
          <span className="ms-2 inline-flex items-center gap-1 font-semibold text-gold-light underline decoration-gold/50 underline-offset-4 group-hover:decoration-gold">
            {cta}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100">→</span>
          </span>
        </Link>
      </div>
      <button
        type="button"
        aria-label={close}
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          window.dispatchEvent(new Event(EVENT));
        }}
        className="absolute end-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-ivory/80 hover:bg-ivory/10 hover:text-ivory"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
