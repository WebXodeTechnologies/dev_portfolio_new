import React from "react";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Loader: React.FC<LoaderProps> = ({ className = "", size = "md" }) => {
  const sizeMap = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeMap[size]} animate-spin rounded-full border-neutral-600 border-t-white`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};
