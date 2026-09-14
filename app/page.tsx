"use client";

import { useState } from "react";
import { Preloader } from "@/app/components/ui/Preloader";
import { Hero } from "@/app/components/sections/Hero";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setLoadingComplete(true)} />
      <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
        <Hero isLoadingComplete={loadingComplete} />
      </main>
    </>
  );
}
