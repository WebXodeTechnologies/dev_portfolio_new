import React from "react";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  children,
  className = "",
}) => {
  return <Component className={className}>{children}</Component>;
};

