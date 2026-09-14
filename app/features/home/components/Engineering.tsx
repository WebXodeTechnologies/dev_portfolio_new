import React from "react";
import { Container } from "@/app/components/ui/Container";

export const Engineering: React.FC = () => {
  return (
    <section className="py-16 border-t border-neutral-800">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Engineering Philosophy
        </h2>
        <p className="text-neutral-400 max-w-2xl">
          Clean code, type safety, performance, and accessibility come first. Technology should serve the experience.
        </p>
      </Container>
    </section>
  );
};
