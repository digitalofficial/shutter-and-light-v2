"use client";

import Reveal from "./Reveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tall?: boolean;
}

export default function PageHero({ title, subtitle, tall = false }: PageHeroProps) {
  return (
    <section
      className={`relative ${
        tall ? "min-h-screen" : "min-h-[70vh]"
      } flex items-center justify-center overflow-hidden film-grain`}
    >
      {/* Full-bleed image placeholder background */}
      <div className="absolute inset-0 image-placeholder image-placeholder-clean" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Reveal variant="slow">
          <h1 className="font-serif font-light text-display-xl text-cream">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal variant="slow" delay={300}>
            <p className="mt-6 text-sm tracking-[0.25em] uppercase text-warm/70 max-w-xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
