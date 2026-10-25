import { Container } from "./primitives";

/**
 * Placeholder shown for an instant while a page's content streams in during
 * client navigation between dynamic pages (services, articles). Mirrors the
 * page hero proportions so the layout doesn't jump.
 */
export function PageSkeleton() {
  return (
    <div aria-busy="true" className="border-b border-line">
      <Container className="grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-14">
        <div className="space-y-6 lg:col-span-6 lg:pt-4">
          <div className="h-4 w-48 animate-pulse rounded-sm bg-ivory-deep" />
          <div className="mt-10 h-4 w-40 animate-pulse rounded-sm bg-ivory-deep" />
          <div className="h-14 w-11/12 animate-pulse rounded-sm bg-ivory-deep" />
          <div className="h-14 w-3/4 animate-pulse rounded-sm bg-ivory-deep" />
          <div className="h-24 w-full animate-pulse rounded-sm bg-ivory-deep" />
        </div>
        <div className="aspect-[4/3] w-full animate-pulse rounded-sm bg-ivory-deep lg:col-span-6 lg:aspect-[5/6]" />
      </Container>
    </div>
  );
}
