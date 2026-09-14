import React from "react";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};
