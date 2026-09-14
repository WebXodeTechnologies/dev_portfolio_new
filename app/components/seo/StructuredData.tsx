import React from "react";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "./JsonLd";

export const StructuredData: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.author.role,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
  };

  return <JsonLd data={schema} />;
};
