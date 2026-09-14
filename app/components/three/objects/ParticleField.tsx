import React from "react";

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 100,
  className = "",
}) => {
  return (
    <div className={`particle-field-wrapper ${className}`} data-count={count} />
  );
};
