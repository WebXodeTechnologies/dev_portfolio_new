"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileMenuProps } from "@/types/navigation";

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 px-6 py-8 md:hidden">
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-neutral-300 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-medium">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-neutral-200 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
