import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Headshot Photography | Shutter & Light | Tucson, AZ",
  description:
    "Professional headshot photography in Tucson, AZ. Corporate, actor, LinkedIn, and team headshots with expert studio lighting.",
};

const included = [
  "Corporate and executive headshots",
  "Actor and performer headshots (theatrical & commercial)",
  "LinkedIn-optimized professional portraits",
  "Team and group photo sessions",
  "Professional studio lighting with multiple setups",
  "On-location headshots at your office",
  "Professional retouching and skin refinement",
  "Multiple background options and wardrobe changes",
];

export default function HeadshotsPage() {
  return (
    <>
      <PageHero
        title="Headshots"
        subtitle="Your professional image, perfected"
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
                  Confidence,
                  <br />
                  <em className="italic text-warm">captured in a frame.</em>
                </h2>
                <p className="mt-8 text-sm text-warm/60 leading-relaxed">
                  A great headshot is more than a photograph &mdash; it&apos;s your first
                  impression. Whether you need a polished corporate portrait, an
                  expressive actor headshot, or updated LinkedIn profile images, we
                  create headshots that are approachable, professional, and unmistakably you.
                </p>
                <p className="mt-4 text-sm text-warm/60 leading-relaxed">
                  Our studio uses a multi-light setup designed to flatter every face
                  shape and skin tone. We guide you through poses and expressions so
                  you feel confident in front of the camera from the first frame.
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
                <div className="aspect-[3/4] image-placeholder" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <blockquote className="pull-quote pl-6 md:pl-12">
              Every member of our team looked incredible. The photos elevated
              our entire brand presence online and in print.
            </blockquote>
            <div className="mt-10 pl-6 md:pl-12">
              <p className="text-sm text-cream/80 tracking-wide">
                Cactus Financial Group
              </p>
              <p className="text-xs text-muted/50 tracking-[0.15em] uppercase mt-1">
                Corporate Team Headshots, January 2026
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
              Put your best face forward.
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Book Your Headshot Session
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
