import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Shutter & Light Photography Studio | Tucson, AZ",
  description:
    "Meet the photographer behind Shutter & Light. Learn about our philosophy, studio, and approach to creating timeless photography in Tucson, AZ.",
};

const gear = [
  "Sony A7R V & Sony A1 mirrorless bodies",
  "Sony G Master 24-70mm f/2.8, 70-200mm f/2.8, 85mm f/1.4",
  "Profoto B10X & B1X studio strobes",
  "Profoto softboxes, beauty dishes, and modifiers",
  "DJI Mavic 3 Pro for aerial photography",
  "Matterport Pro3 for virtual tours",
  "Tethered shooting station with Capture One Pro",
  "Custom color-calibrated editing workflow",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="The eye behind the lens"
      />

      {/* Bio Section */}
      <section className="py-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <Reveal variant="slow" className="lg:col-span-2">
              <div className="aspect-[3/4] image-placeholder" />
            </Reveal>

            <Reveal variant="slow" delay={200} className="lg:col-span-3">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
                The Photographer
              </p>
              <h2 className="font-serif font-light text-display-sm text-cream">
                Daniel Reyes
              </h2>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted/60">
                Founder & Lead Photographer
              </p>

              <div className="mt-8 space-y-5 text-sm text-warm/60 leading-relaxed">
                <p>
                  I picked up my first camera at fourteen, fascinated by the way light
                  could transform an ordinary moment into something extraordinary.
                  Twenty years later, that fascination hasn&apos;t faded &mdash; it&apos;s
                  only deepened.
                </p>
                <p>
                  After studying visual arts at the University of Arizona and
                  apprenticing with editorial photographers in New York, I returned
                  to Tucson to build something of my own. Shutter & Light was founded
                  in 2016 with a simple belief: photography should be art, never assembly-line.
                </p>
                <p>
                  Every session I take on gets the same attention &mdash; whether it&apos;s
                  a sprawling desert wedding or a thirty-minute headshot. I believe in
                  working with natural light when it&apos;s extraordinary and shaping it when
                  it isn&apos;t. I believe in patience, in the unscripted moment, and in
                  the power of a single frame to tell a complete story.
                </p>
                <p>
                  When I&apos;m not behind the lens, you&apos;ll find me hiking Sabino Canyon
                  at sunrise, tinkering with film cameras, or teaching the next generation
                  of photographers at Pima Community College.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-section overflow-hidden">
        <div className="absolute inset-0 image-placeholder image-placeholder-clean opacity-20" />
        <div className="absolute inset-0 bg-dark/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
              Philosophy
            </p>
            <h2 className="font-serif font-light text-display-md text-cream italic">
              Light is the language. The camera is just the translator.
            </h2>
            <div className="mt-10 space-y-5 text-sm text-warm/60 leading-relaxed max-w-2xl">
              <p>
                We approach every project with three principles: authenticity,
                intentionality, and craftsmanship. We don&apos;t chase trends &mdash;
                we create images that feel timeless five, ten, twenty years from now.
              </p>
              <p>
                Our editorial eye means we look for the composition within the chaos,
                the emotion within the event, the quiet detail that tells the bigger
                story. Whether we&apos;re shooting a wedding or a product line, the
                standard never changes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gear */}
      <section className="py-section border-t border-border-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
              Our Gear
            </p>
            <h2 className="font-serif font-light text-display-sm text-cream mb-10">
              Tools of the craft
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gear.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 py-4 border-b border-border-dark"
                >
                  <span className="text-gold/40 mt-0.5 text-xs">&mdash;</span>
                  <p className="text-sm text-warm/60">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Studio */}
      <section className="py-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="slow">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
                The Studio
              </p>
              <h2 className="font-serif font-light text-display-sm text-cream">
                Downtown Tucson
              </h2>
              <div className="mt-8 space-y-5 text-sm text-warm/60 leading-relaxed">
                <p>
                  Our 1,200 sq ft studio is located in Tucson&apos;s historic 4th Avenue
                  District. The space features 12-foot ceilings, a cyclorama wall,
                  multiple backdrop options, and a client lounge for relaxed session
                  preparation.
                </p>
                <p>
                  The studio is equipped for portraiture, headshots, product photography,
                  and small-scale commercial work. For larger productions and on-location
                  shoots, we bring our full mobile lighting kit to any venue in Southern Arizona.
                </p>
              </div>
              <div className="mt-8 text-sm text-warm/40">
                <p>4th Avenue District</p>
                <p>Tucson, AZ 85705</p>
                <p className="mt-2">By appointment only</p>
              </div>
            </Reveal>

            <Reveal variant="slow" delay={200}>
              <div className="aspect-[4/3] image-placeholder" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-section overflow-hidden film-grain">
        <div className="absolute inset-0 image-placeholder image-placeholder-clean" />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 text-center px-6">
          <Reveal variant="slow">
            <h2 className="font-serif font-light text-display-md text-cream">
              Let&apos;s work together.
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
