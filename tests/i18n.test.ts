import { describe, expect, it } from "vitest";
import en from "@/i18n/dictionaries/en";
import ar from "@/i18n/dictionaries/ar";
import { allServices } from "@/content/services";
import { activePackages } from "@/content/packages";
import { methodology } from "@/content/methodology";
import { segments } from "@/content/segments";
import { homeFaqs } from "@/content/faqs";
import { articles } from "@/content/insights";
import { legalDocs } from "@/content/legal";
import { images } from "@/content/images";

type Tree = unknown;

function shape(node: Tree, path = ""): string[] {
  if (typeof node === "string") return [`${path}:string`];
  if (Array.isArray(node)) return [`${path}:array(${node.length})`, ...node.flatMap((n, i) => shape(n, `${path}[${i}]`))];
  if (node && typeof node === "object") return Object.entries(node).flatMap(([k, v]) => shape(v, path ? `${path}.${k}` : k));
  return [`${path}:${typeof node}`];
}

function strings(node: Tree, path = ""): [string, string][] {
  if (typeof node === "string") return [[path, node]];
  if (Array.isArray(node)) return node.flatMap((n, i) => strings(n, `${path}[${i}]`));
  if (node && typeof node === "object") return Object.entries(node).flatMap(([k, v]) => strings(v, `${path}.${k}`));
  return [];
}

/** Collect every {en, ar} pair in a content tree. */
function bilingualPairs(node: Tree, path = "root"): { path: string; en: string; ar: string }[] {
  if (Array.isArray(node)) return node.flatMap((n, i) => bilingualPairs(n, `${path}[${i}]`));
  if (node && typeof node === "object") {
    const o = node as Record<string, unknown>;
    if (typeof o.en === "string" && typeof o.ar === "string" && Object.keys(o).length === 2) return [{ path, en: o.en, ar: o.ar }];
    return Object.entries(o).flatMap(([k, v]) => bilingualPairs(v, `${path}.${k}`));
  }
  return [];
}

const ARABIC = /[؀-ۿ]/;

describe("UI dictionaries", () => {
  it("Arabic has exactly the same keys and list lengths as English", () => {
    expect(shape(ar)).toEqual(shape(en));
  });

  it("no Arabic UI string is empty or left in English", () => {
    const allowedLatin = new Set([".nav.switchLanguage"]); // the "English" link label
    for (const [path, value] of strings(ar)) {
      expect(value.trim(), path).not.toBe("");
      if (!allowedLatin.has(path) && !path.endsWith(".service")) expect(ARABIC.test(value), `${path} should contain Arabic`).toBe(true);
    }
  });
});

describe("bilingual content", () => {
  const content = { allServices, activePackages, methodology, segments, homeFaqs, articles, legalDocs, images };
  const pairs = bilingualPairs(content);

  it("finds a substantial amount of bilingual content", () => {
    expect(pairs.length).toBeGreaterThan(400);
  });

  it("every content string exists in both languages and Arabic is really Arabic", () => {
    for (const p of pairs) {
      expect(p.en.trim(), p.path).not.toBe("");
      expect(p.ar.trim(), p.path).not.toBe("");
      expect(ARABIC.test(p.ar), `${p.path} should contain Arabic`).toBe(true);
    }
  });
});

describe("content integrity", () => {
  const slugs = new Set(allServices.map((s) => s.slug));

  it("has 7 consultancy and 4 digital services with unique slugs", () => {
    expect(allServices.filter((s) => s.category === "consultancy")).toHaveLength(7);
    expect(allServices.filter((s) => s.category === "digital")).toHaveLength(4);
    expect(slugs.size).toBe(allServices.length);
  });

  it("all cross-references point at existing services", () => {
    const refs = [
      ...allServices.flatMap((s) => s.related),
      ...activePackages.flatMap((p) => p.services),
      ...segments.flatMap((s) => s.services),
      ...articles.flatMap((a) => a.services),
      ...en.home.challenges.map((c) => c.service),
    ];
    for (const r of refs) expect(slugs.has(r), r).toBe(true);
  });

  it("every service page has the required sections", () => {
    for (const s of allServices) {
      expect(s.problems.length, s.slug).toBeGreaterThanOrEqual(3);
      expect(s.approach.length, s.slug).toBeGreaterThanOrEqual(3);
      expect(s.deliverables.length, s.slug).toBeGreaterThanOrEqual(3);
      expect(s.benefits.length, s.slug).toBeGreaterThanOrEqual(3);
      expect(s.related.length, s.slug).toBeGreaterThan(0);
      if (s.category === "digital") expect(s.visual, s.slug).toBeDefined();
    }
  });

  it("packages publish no prices", () => {
    const text = JSON.stringify(activePackages);
    expect(text).not.toMatch(/SAR|ر\.س|﷼|\$\d/);
  });
});
