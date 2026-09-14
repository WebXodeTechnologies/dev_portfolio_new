"use client";

import React from "react";

interface CanvasWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const CanvasWrapper: React.FC<CanvasWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-full min-h-75 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
