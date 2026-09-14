import React from "react";
import { Container } from "@/app/components/ui/Container";

export const CloudJourney: React.FC = () => {
  return (
    <section className="py-16 border-t border-neutral-800">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
          Cloud &amp; DevOps Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-neutral-800 p-6 rounded-sm">
            <h3 className="text-lg font-medium text-white">Full-Stack Core</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Next.js, React, Node.js, TypeScript, REST &amp; GraphQL APIs.
            </p>
          </div>
          <div className="border border-neutral-800 p-6 rounded-sm">
            <h3 className="text-lg font-medium text-white">AWS &amp; Cloud</h3>
            <p className="mt-2 text-sm text-neutral-400">
              EC2, S3, CloudFront, Lambda, Serverless architectures.
            </p>
          </div>
          <div className="border border-neutral-800 p-6 rounded-sm">
            <h3 className="text-lg font-medium text-white">DevOps &amp; Automation</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Docker, CI/CD pipelines, Nginx, Linux server administration.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
