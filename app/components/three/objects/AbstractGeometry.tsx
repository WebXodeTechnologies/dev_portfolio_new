import React from "react";

interface AbstractGeometryProps {
  className?: string;
}

export const AbstractGeometry: React.FC<AbstractGeometryProps> = ({ className = "" }) => {
  return <div className={`abstract-geometry-wrapper ${className}`} />;
};
