import React from "react";
import { Hero } from "@/app/features/home/components/Hero";
import { Intro } from "@/app/features/home/components/Intro";
import { SelectedWorks } from "@/app/features/home/components/SelectedWorks";
import { CloudJourney } from "@/app/features/home/components/CloudJourney";
import { Engineering } from "@/app/features/home/components/Engineering";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Intro />
      <SelectedWorks />
      <CloudJourney />
      <Engineering />
    </main>
  );
}
