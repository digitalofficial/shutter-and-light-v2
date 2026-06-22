import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Real Estate Photography | Shutter & Light | Tucson, AZ",
  description:
    "Professional real estate photography in Tucson, AZ. Interior, exterior, aerial, virtual tours, and twilight shoots that sell properties faster.",
};

const included = [
  "Interior and exterior photography",
  "HDR processing for balanced exposures",
  "Aerial and drone photography",
  "Virtual tour creation (Matterport compatible)",
  "Twilight and blue-hour exterior shoots",
  "Same-day or next-day delivery available",
  "MLS-ready files and high-resolution downloads",
  "Staging consultation included",
];

export default function RealEstatePage() {
  return (
    <>
      <PageHero
        title="Real Estate"
        subtitle="Photography that sells properties"
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
                  Spaces that invite,
                  <br />
                  <em className="italic text-warm">images that sell.</em>
                </h2>
                <p className="mt-8 text-sm text-warm/60 leading-relaxed">
                  In Tucson&apos;s competitive real estate market, listings with
                  professional photography sell faster and for more. We specialize
                  in making every property look its absolute best &mdash; from cozy
                  bungalows in the historic districts to luxury estates in the Catalina
                  Foothills.
                </p>
                <p className="mt-4 text-sm text-warm/60 leading-relaxed">
                  Our HDR technique captures the full dynamic range of each room,
                  while our twilight shoots create that aspirational, magazine-quality
                  curb appeal that stops buyers mid-scroll.
                </p>
              </div>
              <div className="aspect-[4/3] image-placeholder" />
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
                <div className="aspect-[16/10] image-placeholder" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <blockquote className="pull-quote pl-6 md:pl-12">
              Our listings with Shutter & Light photography consistently get
              more showings and sell above asking price. They&apos;re our go-to team.
            </blockquote>
            <div className="mt-10 pl-6 md:pl-12">
              <p className="text-sm text-cream/80 tracking-wide">
                Sarah Mitchell, Realtor
              </p>
              <p className="text-xs text-muted/50 tracking-[0.15em] uppercase mt-1">
                Desert Peak Realty
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
              Elevate your listings.
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Schedule a Property Shoot
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
