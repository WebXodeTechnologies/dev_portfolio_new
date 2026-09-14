"use client";

import React from "react";
import { CanvasWrapper } from "./CanvasWrapper";

interface HeroSceneProps {
  className?: string;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ className = "" }) => {
  return (
    <CanvasWrapper className={className}>
      <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">
        WebGL Hero Scene Environment
      </div>
    </CanvasWrapper>
  );
};
