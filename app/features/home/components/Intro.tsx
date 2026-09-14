import React from "react";
import { Container } from "@/app/components/ui/Container";

export const Intro: React.FC = () => {
  return (
    <section className="py-16 border-t border-neutral-800">
      <Container>
        <h2 className="text-2xl sm:text-4xl font-semibold text-white max-w-3xl">
          I build scalable web applications from frontend interfaces to cloud infrastructure.
        </h2>
      </Container>
    </section>
  );
};
