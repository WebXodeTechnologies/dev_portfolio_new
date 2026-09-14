import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-4 max-w-lg">
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
          Resource Missing // 404
        </p>
        <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white">
          404
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          The requested route or document could not be located within the system
          architecture.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-colors inline-block"
          >
            Return to Core
          </Link>
        </div>
      </div>
    </main>
  );
}
