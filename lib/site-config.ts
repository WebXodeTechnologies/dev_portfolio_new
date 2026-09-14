export const siteConfig = {
  name: "Akash S M",
  title: "Akash S M — Full-Stack Developer",
  description:
    "Full-Stack Developer building modern digital products, currently expanding into Cloud Computing and DevOps.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://akashsm.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  author: {
    name: "Akash S M",
    role: "Full-Stack Developer",
    email: "contact@akashsm.dev",
  },
} as const;

export type SiteConfig = typeof siteConfig;
