import React from "react";
import { TextRevealProps } from "@/types/animation";

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as: Component = "p",
  className = "",
}) => {
  return <Component className={className}>{text}</Component>;
};
