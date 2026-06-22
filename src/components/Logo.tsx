"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      {/* Monogram */}
      <span className="relative flex items-center justify-center w-10 h-10 border border-warm/30 group-hover:border-gold/50 transition-colors duration-700">
        <span className="font-serif text-lg tracking-wide text-cream group-hover:text-gold transition-colors duration-700">
          S&L
        </span>
      </span>
      {/* Full name */}
      <span className="hidden sm:block">
        <span className="block font-serif text-sm tracking-[0.25em] uppercase text-cream leading-none">
          Shutter & Light
        </span>
        <span className="block text-[10px] tracking-[0.3em] uppercase text-muted mt-0.5">
          Photography Studio
        </span>
      </span>
    </Link>
  );
}
