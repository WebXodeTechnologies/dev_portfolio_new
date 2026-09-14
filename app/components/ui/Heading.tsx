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
  const defaultStyles = {
    h1: "text-4xl sm:text-6xl font-bold tracking-tight text-white",
    h2: "text-3xl sm:text-5xl font-semibold tracking-tight text-white",
    h3: "text-2xl sm:text-4xl font-semibold tracking-tight text-white",
    h4: "text-xl sm:text-2xl font-medium text-white",
    h5: "text-lg font-medium text-white",
    h6: "text-base font-medium text-white",
  };

  return (
    <Component className={`${defaultStyles[Component]} ${className}`}>
      {children}
    </Component>
  );
};
