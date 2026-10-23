"use client";

import Image, { type ImageLoaderProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;
}

/**
 * Photograph with responsive sizing. Unsplash URLs are resized by Unsplash's
 * own CDN; local files under /public use Next.js image optimisation. If an
 * image fails to load, a designed placeholder keeps the layout intact.
 */
export function Photo({
  src,
  alt,
  sizes,
  priority,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  const remote = src.startsWith("https://images.unsplash.com/");

  return (
    <div className={cn("relative overflow-hidden bg-navy-soft", className)}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center bg-navy">
          <svg viewBox="0 0 120 120" className="w-1/4 max-w-24 text-ivory/15" aria-hidden="true">
            <circle cx="60" cy="66" r="44" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M60 100V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loader={remote ? unsplashLoader : undefined}
          onError={() => setFailed(true)}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
