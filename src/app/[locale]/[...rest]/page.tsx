import { notFound } from "next/navigation";

/** Any unmatched path under a locale renders the localized not-found page. */
export function generateStaticParams() {
  return [{ rest: ["not-found"] }];
}

export default function CatchAll() {
  notFound();
}
