import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

interface NavigationProps {
  className?: string;
  currentPath?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  return (
    <nav className={`hidden md:flex items-center gap-8 ${className}`}>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
