import localFont from "next/font/local";

// Fonts are self-hosted from @fontsource packages: no runtime request to Google.

export const display = localFont({
  src: "../../node_modules/@fontsource-variable/oswald/files/oswald-latin-wght-normal.woff2",
  variable: "--font-display-latin",
  weight: "200 700",
  display: "swap",
});

export const body = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-body-latin",
  weight: "200 800",
  display: "swap",
});

export const displayArabic = localFont({
  src: "../../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2",
  variable: "--font-display-arabic",
  weight: "200 1000",
  display: "swap",
  preload: false,
});

export const bodyArabic = localFont({
  src: [
    { path: "../../node_modules/@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-300-normal.woff2", weight: "300" },
    { path: "../../node_modules/@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body-arabic",
  display: "swap",
  preload: false,
});

export const fontVariables = [display.variable, body.variable, displayArabic.variable, bodyArabic.variable].join(" ");
