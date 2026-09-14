import React from "react";
import { AnimationProps } from "@/types/animation";

export const FadeIn: React.FC<AnimationProps> = ({ children, className = "" }) => {
  return <div className={`transition-opacity duration-700 ${className}`}>{children}</div>;
};
