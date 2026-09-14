"use client";

import React, { useEffect } from "react";
import { Container } from "@/app/components/ui/Container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
      <p className="text-neutral-400 mb-8 max-w-md mx-auto">
        An unexpected error occurred while rendering this page.
      </p>
      <button
        onClick={reset}
        className="px-6 py-2.5 bg-white text-black font-medium text-sm rounded-sm hover:bg-neutral-200 transition-colors"
      >
        Try again
      </button>
    </Container>
  );
}
