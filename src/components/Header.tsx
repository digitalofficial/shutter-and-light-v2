"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const services = [
  { name: "Weddings", href: "/services/weddings" },
  { name: "Portraits", href: "/services/portraits" },
  { name: "Events", href: "/services/events" },
  { name: "Real Estate", href: "/services/real-estate" },
  { name: "Product", href: "/services/product" },
  { name: "Headshots", href: "/services/headshots" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="text-xs tracking-[0.2em] uppercase text-warm hover:text-cream transition-colors duration-500"
            >
              Services
            </Link>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-500 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-smoke/95 backdrop-blur-md border border-border-dark py-3 px-1 min-w-[200px]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-2 text-xs tracking-[0.15em] uppercase text-warm hover:text-gold transition-colors duration-300"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="text-xs tracking-[0.2em] uppercase text-warm hover:text-cream transition-colors duration-500"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-xs tracking-[0.2em] uppercase text-warm hover:text-cream transition-colors duration-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase text-warm hover:text-cream transition-colors duration-500"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 border border-gold/60 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-500"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-7 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-cream transition-all duration-500 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px] w-7" : "w-7"
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-500 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px] w-7" : "w-5 group-hover:w-7"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-dark/98 backdrop-blur-lg z-40 transition-all duration-700 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 -mt-20">
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-display-sm text-cream hover:text-gold transition-colors duration-500"
          >
            Services
          </Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-warm hover:text-gold transition-colors duration-300"
            >
              {s.name}
            </Link>
          ))}
          <div className="line-divider w-16 my-2" />
          <Link
            href="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-display-sm text-cream hover:text-gold transition-colors duration-500"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-display-sm text-cream hover:text-gold transition-colors duration-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-display-sm text-cream hover:text-gold transition-colors duration-500"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 border border-gold/60 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-500"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </header>
  );
}
