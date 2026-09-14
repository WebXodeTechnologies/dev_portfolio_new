import React from "react";
import { Container } from "@/app/components/ui/Container";
import { WorkGrid } from "@/app/features/works/components/WorkGrid";

export default function WorksPage() {
  const projects = [
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
    <main className="min-h-screen bg-black text-white py-16">
      <Container>
        <h1 className="text-4xl font-bold text-white mb-4 sm:text-6xl">
          Selected Works
        </h1>
        <p className="text-lg text-neutral-400 mb-12 max-w-2xl">
          A showcase of modern web products and full-stack engineering projects.
        </p>
        <WorkGrid projects={projects} />
      </Container>
    </main>
  );
}
