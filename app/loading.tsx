import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">
      <div className="space-y-3 text-center">
        <div className="w-8 h-8 border border-white/20 border-t-white rounded-full animate-spin mx-auto" />
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest animate-pulse">
          Initializing Stream...
        </p>
      </div>
    </div>
  );
}
