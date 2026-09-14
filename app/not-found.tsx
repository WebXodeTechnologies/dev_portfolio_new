import React from "react";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-neutral-300 mb-4">Page Not Found</h2>
      <p className="text-neutral-400 mb-8 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-black font-medium text-sm rounded-sm hover:bg-neutral-200 transition-colors"
      >
        Return Home
      </Link>
    </Container>
  );
}
