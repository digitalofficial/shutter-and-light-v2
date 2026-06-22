import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Event Photography | Shutter & Light | Tucson, AZ",
  description:
    "Professional event photography in Tucson, AZ. Corporate events, galas, conferences, and private parties captured with editorial precision.",
};

const included = [
  "Full event coverage from setup to close",
  "Corporate events, galas, and award ceremonies",
  "Conferences, trade shows, and panel discussions",
  "Private parties and milestone celebrations",
  "Fast turnaround for same-week delivery",
  "Branded images for marketing use",
  "Multiple lighting setups for varied environments",
  "Online gallery with commercial licensing",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Corporate precision meets editorial artistry"
      />

      <section className="py-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
                  The Approach
                </p>
                <h2 className="font-serif font-light text-display-sm text-cream">
                  Events that matter,
                  <br />
                  <em className="italic text-warm">documented with intent.</em>
                </h2>
                <p className="mt-8 text-sm text-warm/60 leading-relaxed">
                  From high-profile galas at Tucson&apos;s finest venues to intimate
                  corporate gatherings, our event photography goes beyond simple
                  documentation. We capture the energy, the connections, and the key
                  moments that tell the full story of your event.
                </p>
                <p className="mt-4 text-sm text-warm/60 leading-relaxed">
                  Our unobtrusive approach means your guests stay engaged while we
                  work behind the scenes, delivering images ready for press releases,
                  social media, and annual reports.
                </p>
              </div>
              <div className="aspect-[3/4] image-placeholder" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-section border-t border-border-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
              What&apos;s Included
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-4 py-4 border-b border-border-dark">
                  <span className="text-gold/40 mt-0.5 text-xs">&mdash;</span>
                  <p className="text-sm text-warm/70">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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
                <div className="aspect-[4/3] image-placeholder" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <blockquote className="pull-quote pl-6 md:pl-12">
              Shutter & Light captured our annual gala perfectly. The images elevated
              our brand and we&apos;ve used them across all our marketing channels.
            </blockquote>
            <div className="mt-10 pl-6 md:pl-12">
              <p className="text-sm text-cream/80 tracking-wide">
                Tucson Arts Foundation
              </p>
              <p className="text-xs text-muted/50 tracking-[0.15em] uppercase mt-1">
                Annual Gala, November 2025
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-section overflow-hidden film-grain">
        <div className="absolute inset-0 image-placeholder image-placeholder-clean" />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 text-center px-6">
          <Reveal variant="slow">
            <h2 className="font-serif font-light text-display-md text-cream">
              Make your next event unforgettable.
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Inquire About Event Coverage
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
