import type { Metadata } from "next"

// Title, description, canonical and matching Open Graph / Twitter tags for one page.
// Nested `openGraph` replaces the root one, so each page sets its own; the
// shared image is app/opengraph-image.tsx.
// A page that sets its own openGraph drops the inherited file-based image, so name it here.
const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "Inferaform: Google & Meta ads plus AI lead follow-up" }

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Inferaform", type: "website", locale: "en_US", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  }
}
