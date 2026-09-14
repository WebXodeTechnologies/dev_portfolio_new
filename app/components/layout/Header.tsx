"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-black/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          Akash S M
        </Link>
        <Navigation />
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Container>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
