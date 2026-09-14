"use client";

import React, { useEffect } from "react";
import Link from "next/link";

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
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-4 max-w-lg">
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
          System Exception // 500
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white">
          An error occurred.
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          The application encountered an unexpected runtime exception. Our
          pipeline logs have recorded the trace.
        </p>
        <div className="pt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-white text-black text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-colors"
          >
            Retry Execution
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 border border-white/10 text-neutral-300 text-xs font-medium uppercase tracking-wider rounded-sm hover:border-white/30 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
