import React from "react";
import { notFound } from "next/navigation";
import { Container } from "@/app/components/ui/Container";
import { CaseStudyHero } from "@/app/features/case-studies/components/CaseStudyHero";
import { Architecture } from "@/app/features/case-studies/components/Architecture";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const caseStudy = {
    id: "1",
    slug,
    title: slug.replace(/-/g, " ").toUpperCase(),
    subtitle: "In-depth engineering breakdown and architectural overview.",
    role: "Lead Full-Stack Developer",
    timeline: "3 Months",
    technologies: ["Next.js", "TypeScript", "AWS", "Docker"],
    architecture: [
      {
        name: "Frontend Layer",
        description: "Next.js App Router with WebGL visualizations.",
        technologies: ["Next.js", "React", "TypeScript"],
      },
      {
        name: "Cloud Layer",
        description: "AWS CloudFront CDN, API Gateway, and Lambda functions.",
        technologies: ["AWS", "Docker"],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <Container>
        <CaseStudyHero caseStudy={caseStudy} />
        <Architecture layers={caseStudy.architecture} />
      </Container>
    </main>
  );
}
