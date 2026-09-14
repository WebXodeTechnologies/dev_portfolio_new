import React from "react";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({ children, className = "" }) => {
  return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
};
