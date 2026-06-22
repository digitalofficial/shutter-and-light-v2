import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Wedding Photography | Shutter & Light | Tucson, AZ",
  description:
    "Cinematic wedding photography in Tucson, AZ. Full-day and half-day coverage, engagement sessions, custom albums, and second shooter options.",
};

const included = [
  "Full-day coverage (up to 10 hours)",
  "Half-day packages available (5 hours)",
  "Engagement session included with full-day",
  "Second shooter for complete coverage",
  "Online gallery with download access",
  "Custom-designed wedding album",
  "Pre-wedding consultation and timeline planning",
  "Professional editing and color grading",
];

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        title="Weddings"
        subtitle="Every love story deserves to be told beautifully"
      />

      {/* Overview */}
      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
                  The Approach
                </p>
                <h2 className="font-serif font-light text-display-sm text-cream">
                  Unscripted moments,
                  <br />
                  <em className="italic text-warm">timeless images.</em>
                </h2>
                <p className="mt-8 text-sm text-warm/60 leading-relaxed">
                  Your wedding is a once-in-a-lifetime event, and we treat it that way.
                  Our documentary approach blends with editorial artistry to capture the
                  full emotional arc of your day &mdash; from the quiet anticipation of
                  getting ready to the last dance under the desert sky.
                </p>
                <p className="mt-4 text-sm text-warm/60 leading-relaxed">
                  We work with the golden light of Tucson&apos;s landscapes, the intimate
                  details of your decor, and the genuine emotions that make your day yours.
                  No forced poses. No missed moments.
                </p>
              </div>
              <div className="aspect-[3/4] image-placeholder" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-section border-t border-border-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
              What&apos;s Included
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 py-4 border-b border-border-dark"
                >
                  <span className="text-gold/40 mt-0.5 text-xs">&mdash;</span>
                  <p className="text-sm text-warm/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-10">
              From the Portfolio
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((_, i) => (
              <Reveal key={i} variant="slow" delay={i * 150}>
                <div className="aspect-[3/4] image-placeholder" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-section border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <blockquote className="pull-quote pl-6 md:pl-12">
              They didn&apos;t just photograph our wedding &mdash; they captured
              every unscripted, beautiful moment we didn&apos;t even know was happening.
            </blockquote>
            <div className="mt-10 pl-6 md:pl-12">
              <p className="text-sm text-cream/80 tracking-wide">
                Elena & Marcus
              </p>
              <p className="text-xs text-muted/50 tracking-[0.15em] uppercase mt-1">
                Desert Botanical Garden, October 2025
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-section overflow-hidden film-grain">
        <div className="absolute inset-0 image-placeholder image-placeholder-clean" />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 text-center px-6">
          <Reveal variant="slow">
            <h2 className="font-serif font-light text-display-md text-cream">
              Your story begins here.
            </h2>
            <p className="mt-6 text-sm text-warm/60 max-w-md mx-auto">
              Let&apos;s discuss your wedding date, vision, and how we can make your
              day unforgettable.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Book Your Wedding
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
