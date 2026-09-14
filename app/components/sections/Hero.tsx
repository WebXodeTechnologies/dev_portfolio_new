"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function Hero({ isLoadingComplete }: { isLoadingComplete: boolean }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoadingComplete) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Stagger text reveal
      tl.fromTo(
        textRef.current?.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
      );

      // Cinematic scale and clip-path reveal for image
      tl.fromTo(
        imageRef.current,
        { scale: 1.1, clipPath: "inset(10% 10% 10% 10%)" },
        { scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.4 },
        "-=0.8",
      );
    });

    return () => ctx.revert();
  }, [isLoadingComplete]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 overflow-hidden">
      {/* Text Content */}
      <div ref={textRef} className="space-y-4 max-w-4xl">
        <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
          Chapter 01 // Hero
        </p>
        <h1 className="text-5xl md:text-8xl font-light tracking-tight text-white leading-none">
          Akash S M
        </h1>
        <p className="text-neutral-400 text-base md:text-lg max-w-xl font-normal leading-relaxed">
          Full-Stack Developer building high-performance web applications, SaaS
          products, and digital experiences.
        </p>
      </div>
    </section>
  );
}
