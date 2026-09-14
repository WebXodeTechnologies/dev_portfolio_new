import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl = siteConfig.url,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
