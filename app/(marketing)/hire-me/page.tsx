import React from "react";
import { Container } from "@/app/components/ui/Container";
import { ContactForm } from "@/app/features/contact/components/ContactForm";
import { ContactInfo } from "@/app/features/contact/components/ContactInfo";

export default function HireMePage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-6xl">
          Hire Me / Start a Project
        </h1>
        <p className="text-lg text-neutral-400 mb-12 max-w-2xl">
          Let’s discuss your web application, cloud architecture, or engineering project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </main>
  );
}
