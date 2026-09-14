"use client";

import React from "react";
import { CanvasWrapper } from "./CanvasWrapper";

interface SceneProps {
  children?: React.ReactNode;
  className?: string;
}

export const Scene: React.FC<SceneProps> = ({ children, className = "" }) => {
  return <CanvasWrapper className={className}>{children}</CanvasWrapper>;
};
