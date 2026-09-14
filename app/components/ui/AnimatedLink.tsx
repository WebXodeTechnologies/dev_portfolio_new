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
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 transition-colors hover:text-white ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 transition-colors hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
};
