import Link from "next/link";
import React from "react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className = "",
  external = false,
}) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

