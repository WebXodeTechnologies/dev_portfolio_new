import React from "react";
import { AboutHero } from "@/app/features/about/components/AboutHero";
import { Journey } from "@/app/features/about/components/Journey";
import { Skills } from "@/app/features/about/components/Skills";
import { Timeline } from "@/app/features/about/components/Timeline";
import { Container } from "@/app/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <AboutHero />
      <Container>
        <Journey />
        <Skills />
        <Timeline />
      </Container>
    </main>
  );
}
