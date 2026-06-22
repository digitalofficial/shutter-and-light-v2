"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const categories = [
  "All",
  "Weddings",
  "Portraits",
  "Events",
  "Real Estate",
  "Product",
  "Headshots",
];

const portfolioItems = [
  { category: "Weddings", aspect: "h-[400px]" },
  { category: "Portraits", aspect: "h-[320px]" },
  { category: "Events", aspect: "h-[360px]" },
  { category: "Real Estate", aspect: "h-[280px]" },
  { category: "Product", aspect: "h-[350px]" },
  { category: "Headshots", aspect: "h-[400px]" },
  { category: "Weddings", aspect: "h-[340px]" },
  { category: "Portraits", aspect: "h-[380px]" },
  { category: "Events", aspect: "h-[300px]" },
  { category: "Real Estate", aspect: "h-[360px]" },
  { category: "Product", aspect: "h-[320px]" },
  { category: "Headshots", aspect: "h-[380px]" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <PageHero title="Portfolio" subtitle="A curated selection of our work" />

      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filters */}
          <Reveal variant="fade">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
                    activeFilter === cat
                      ? "text-gold"
                      : "text-muted/50 hover:text-cream"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {filtered.map((item, i) => (
              <Reveal key={`${item.category}-${i}`} variant="slow" delay={i * 80}>
                <div className="masonry-item group cursor-pointer">
                  <div
                    className={`${item.aspect} image-placeholder transition-transform duration-1000 group-hover:scale-[1.01]`}
                  />
                  <p className="mt-3 mb-4 text-xs tracking-[0.2em] uppercase text-muted/40 group-hover:text-gold/60 transition-colors duration-500">
                    {item.category}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal variant="slow">
            <h2 className="font-serif font-light text-display-md text-cream">
              Like what you see?
            </h2>
            <p className="mt-6 text-sm text-warm/60 leading-relaxed">
              Every project is unique. Let&apos;s discuss yours.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
