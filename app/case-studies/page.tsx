import React from "react";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <Container>
        <h1 className="text-4xl font-bold text-white mb-4 sm:text-6xl">
          Engineering Case Studies
        </h1>
        <p className="text-lg text-neutral-400 mb-12 max-w-2xl">
          Detailed breakdowns of architecture, problem-solving, and implementation decisions.
        </p>
        <div className="border border-neutral-800 p-6 rounded-sm max-w-xl">
          <span className="text-xs font-mono text-neutral-500">Case Study #01</span>
          <h2 className="text-2xl font-semibold text-white mt-2">
            <Link href="/case-studies/cloud-dashboard">
              Cloud Infrastructure Dashboard
            </Link>
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Designing an efficient monitoring tool for AWS cloud resources.
          </p>
        </div>
      </Container>
    </main>
  );
}
