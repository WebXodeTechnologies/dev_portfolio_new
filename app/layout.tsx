import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/app/components/providers/SmoothScrollProvider";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akash S M — Full-Stack & MERN Developer",
  description:
    "Full-Stack Developer building high-performance web applications, SaaS products, and digital experiences, expanding into Cloud Computing, AWS, and DevOps.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "SaaS Developer",
    "AWS Developer",
    "Cloud Developer",
    "Web Application Developer",
  ],
  metadataBase: new URL("https://akashsm.dev"),
  openGraph: {
    title: "Akash S M — Full-Stack & MERN Developer",
    description:
      "Full-Stack Developer building modern web apps, SaaS, and scalable digital experiences, with a path toward cloud architecture and AWS.",
    url: "https://akashsm.dev",
    siteName: "Akash S M",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash S M — Full-Stack & MERN Developer",
    description:
      "Full-Stack Developer specializing in Next.js, MERN stack, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akash S M",
    jobTitle: "Full-Stack Developer",
    url: "https://akashsm.dev",
    sameAs: ["https://github.com/", "https://linkedin.com/in/"],
    knowsAbout: [
      "Full-Stack Development",
      "MERN Stack",
      "Next.js",
      "React",
      "Node.js",
      "Cloud Computing",
      "AWS",
      "DevOps",
      "Docker",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} dark h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-neutral-800 selection:text-white min-h-full flex flex-col justify-between">
        <SmoothScrollProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
