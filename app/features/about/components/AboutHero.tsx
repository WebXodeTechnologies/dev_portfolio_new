import React from "react";
import { Container } from "@/app/components/ui/Container";

export const AboutHero: React.FC = () => {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        About Akash S M
      </h1>
      <p className="mt-6 text-lg leading-8 text-neutral-400 max-w-2xl">
        Full-Stack Developer building modern digital products, currently expanding into Cloud Computing and DevOps.
      </p>
    </Container>
  );
};
