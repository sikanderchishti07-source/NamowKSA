"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { Arrow, buttonBase, Container } from "@/components/ui/primitives";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Item = { href: string; label: string; short?: string };

export type NavData = {
  locale: Locale;
  homeHref: string;
  labels: Record<
    "services" | "consultancy" | "digital" | "allServices" | "allDigital" | "book" | "openMenu" | "closeMenu" | "mainNav" | "switchLanguage" | "switchLanguageLabel" | "home",
    string
  >;
  servicesHref: string;
  digitalHref: string;
  bookHref: string;
  consultancy: Item[];
  digital: Item[];
  links: Item[];
  secondary: Item[];
};

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderClient({ data }: { data: NavData }) {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaId = useId();
  const mobileId = useId();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaButton = useRef<HTMLButtonElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
  }

  // Desktop mega menu: close on outside click and Escape.
  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!megaRef.current?.contains(e.target as Node) && !megaButton.current?.contains(e.target as Node)) setMegaOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        megaButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    mobileButton.current?.focus();
  }, []);

  // Mobile drawer: lock scroll, trap focus, Escape to close.
  useEffect(() => {
    if (!mobileOpen) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const drawer = drawerRef.current;
    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return closeMobile();
      if (e.key !== "Tab") return;
      const els = focusables();
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen, closeMobile]);

  const servicesActive = isActive(pathname, data.servicesHref) || isActive(pathname, data.digitalHref);
  const { labels } = data;

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-ivory/95 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-ivory/88",
        scrolled ? "border-line shadow-[0_1px_0_rgba(16,43,54,0.04)]" : "border-transparent",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link href={data.homeHref} aria-label={`NamowKSA, ${labels.home}`} className="-m-1 p-1">
          <Logo />
        </Link>

        <nav aria-label={labels.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium">
            <li>
              <button
                ref={megaButton}
                type="button"
                data-mega-toggle
                aria-expanded={megaOpen}
                aria-controls={megaId}
                onClick={() => setMegaOpen((v) => !v)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-1.5 rounded-sm px-3 transition-colors hover:text-teal-dark",
                  (megaOpen || servicesActive) && "text-teal-dark",
                )}
              >
                {labels.services}
                <svg viewBox="0 0 12 12" aria-hidden="true" className={cn("size-3 transition-transform duration-300", megaOpen && "rotate-180")}>
                  <path d="m2.5 4.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </li>
            {data.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(pathname, l.href) ? "page" : undefined}
                  className="inline-flex min-h-11 items-center rounded-sm px-3 transition-colors hover:text-teal-dark aria-[current=page]:text-teal-dark"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            locale={data.locale}
            label={labels.switchLanguage}
            ariaLabel={labels.switchLanguageLabel}
            className="hidden text-navy sm:inline-flex"
          />
          <Link href={data.bookHref} className={cn(buttonBase, "hidden min-h-11 bg-navy px-5 text-ivory hover:bg-teal-dark md:inline-flex")}>
            {labels.book}
          </Link>
          <button
            ref={mobileButton}
            type="button"
            data-drawer-open
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={labels.openMenu}
            onClick={() => setMobileOpen(true)}
            className="-me-2 inline-flex size-12 items-center justify-center rounded-sm text-navy lg:hidden"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
              <path d="M4 8h16M4 16h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Desktop mega menu */}
      <div
        ref={megaRef}
        id={megaId}
        hidden={!megaOpen}
        className="absolute inset-x-0 top-full hidden border-y border-line bg-ivory shadow-[0_24px_48px_-24px_rgba(16,43,54,0.25)] lg:block"
      >
        <Container className="grid grid-cols-12 gap-10 py-10">
            <MegaColumn title={labels.consultancy} items={data.consultancy} all={{ href: data.servicesHref, label: labels.allServices }} className="col-span-7" twoCol />
            <MegaColumn title={labels.digital} items={data.digital} all={{ href: data.digitalHref, label: labels.allDigital }} className="col-span-5 border-s border-line ps-10" />
          </Container>
      </div>

    </header>

      {/* Mobile drawer */}
    <div
      id={mobileId}
      ref={drawerRef}
      role="dialog"
      aria-modal="true"
      aria-label={labels.mainNav}
      hidden={!mobileOpen}
      className="on-dark fixed inset-0 z-50 overflow-y-auto bg-navy text-ivory lg:hidden"
    >
      <div className="flex min-h-full flex-col">
          <Container className="flex h-[76px] items-center justify-between">
            <Link href={data.homeHref} onClick={() => setMobileOpen(false)} aria-label={`NamowKSA, ${labels.home}`}>
              <Logo tone="light" />
            </Link>
            <button type="button" data-drawer-close onClick={closeMobile} aria-label={labels.closeMenu} className="-me-2 inline-flex size-12 items-center justify-center">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </Container>
          <Container className="flex flex-1 flex-col gap-10 pb-10 pt-4">
            <nav aria-label={labels.mainNav} className="space-y-9">
              <MobileGroup title={labels.consultancy} items={data.consultancy} all={{ href: data.servicesHref, label: labels.allServices }} />
              <MobileGroup title={labels.digital} items={data.digital} all={{ href: data.digitalHref, label: labels.allDigital }} />
              <ul className="space-y-1 border-t border-ivory/15 pt-6">
                {[...data.links, ...data.secondary].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="flex min-h-12 items-center font-[family-name:var(--font-display)] text-2xl">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-ivory/15 pt-6">
              <Link href={data.bookHref} className={cn(buttonBase, "bg-teal text-navy-deep hover:bg-teal-light")}>
                {labels.book}
              </Link>
              <LanguageSwitcher locale={data.locale} label={labels.switchLanguage} ariaLabel={labels.switchLanguageLabel} className="text-ivory" />
            </div>
          </Container>
        </div>
    </div>
    </>
  );
}

function MegaColumn({
  title,
  items,
  all,
  className,
  twoCol,
}: {
  title: string;
  items: Item[];
  all: Item;
  className?: string;
  twoCol?: boolean;
}) {
  return (
    <div className={className}>
      <p className="mb-5 text-sm font-semibold text-sage-dark">{title}</p>
      <ul className={cn("grid gap-x-8 gap-y-1", twoCol && "grid-cols-2")}>
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="group block rounded-sm px-3 py-3 -mx-3 transition-colors hover:bg-ivory-deep">
              <span className="block font-semibold text-navy group-hover:text-teal-dark">{it.label}</span>
              {it.short && <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-stone">{it.short}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <Link href={all.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:underline">
        {all.label}
        <Arrow className="size-4" />
      </Link>
    </div>
  );
}

function MobileGroup({ title, items, all }: { title: string; items: Item[]; all: Item }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-sage-light">{title}</p>
      <ul>
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="flex min-h-11 items-center text-lg text-ivory/90 hover:text-white">
              {it.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href={all.href} className="mt-1 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-light">
            {all.label}
            <Arrow className="size-4" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
