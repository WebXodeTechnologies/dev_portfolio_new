import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 bg-black py-12 text-neutral-400">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Akash S M. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/works" className="hover:text-white transition-colors">
            Works
          </Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/hire-me" className="hover:text-white transition-colors">
            Hire Me
          </Link>
        </div>
      </Container>
    </footer>
  );
};
