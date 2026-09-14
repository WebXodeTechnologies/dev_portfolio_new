import type { Metadata } from "next";

export function generatePageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akashsm.dev";
  const url = `${siteUrl}${path}`;

  return {
    title: `${title} | Akash S M`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Akash S M Portfolio",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
