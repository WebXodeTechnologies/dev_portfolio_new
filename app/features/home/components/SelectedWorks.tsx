import React from "react";
import { Container } from "@/app/components/ui/Container";
import { WorkGrid } from "../../works/components/WorkGrid";

export const SelectedWorks: React.FC = () => {
  const sampleProjects = [
    {
      id: "1",
      slug: "cloud-dashboard",
      title: "Cloud Infrastructure Dashboard",
      description: "Real-time AWS monitoring platform built with Next.js and WebGL visualizations.",
      category: "Full-Stack / Cloud",
      year: 2026,
      technologies: ["Next.js", "TypeScript", "AWS", "Tailwind CSS"],
    },
    {
      id: "2",
      slug: "ecommerce-engine",
      title: "High Performance E-Commerce Platform",
      description: "Sub-second product catalog with serverless backend and containerized services.",
      category: "Full-Stack",
      year: 2025,
      technologies: ["React", "Node.js", "Docker", "PostgreSQL"],
    },
  ];

  return (
    <section className="py-16 border-t border-neutral-800">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          Selected Works
        </h2>
        <WorkGrid projects={sampleProjects} />
      </Container>
    </section>
  );
};
