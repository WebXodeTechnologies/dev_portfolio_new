import React from "react";

interface HeroObjectProps {
  className?: string;
}

export const HeroObject: React.FC<HeroObjectProps> = ({ className = "" }) => {
  return <div className={`hero-object-wrapper ${className}`} />;
};
