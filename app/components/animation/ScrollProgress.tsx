"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-900">
      <div
        className="h-full bg-white transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};
