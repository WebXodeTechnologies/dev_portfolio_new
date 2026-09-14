import React from "react";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <p className="text-sm font-mono tracking-widest text-neutral-400 uppercase mb-4">
          Akash S M — Portfolio
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white max-w-4xl leading-none">
          Full-Stack Developer &amp; Cloud Specialist.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl">
          Building modern digital products, currently expanding into Cloud Computing and DevOps.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/works"
            className="px-6 py-3 bg-white text-black font-medium text-sm rounded-sm hover:bg-neutral-200 transition-colors"
          >
            View Selected Works
          </Link>
          <Link
            href="/hire-me"
            className="px-6 py-3 border border-neutral-700 text-white font-medium text-sm rounded-sm hover:border-neutral-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </section>
  );
};
