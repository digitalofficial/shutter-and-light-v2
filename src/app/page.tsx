import Link from "next/link";
import Reveal from "@/components/Reveal";

const categories = [
  "Weddings",
  "Portraits",
  "Events",
  "Real Estate",
  "Product",
  "Headshots",
];

const featuredWork = [
  { label: "Weddings", aspect: "aspect-[3/4]" },
  { label: "Portraits", aspect: "aspect-[4/5]" },
  { label: "Events", aspect: "aspect-[3/4]" },
  { label: "Real Estate", aspect: "aspect-[4/5]" },
  { label: "Product", aspect: "aspect-[3/4]" },
  { label: "Headshots", aspect: "aspect-[4/5]" },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&h=900&fit=crop"
          alt="Photographer holding camera in dramatic lighting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/50 to-[#000000]/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.35em] uppercase text-gold/80 mb-6">
              Tucson, Arizona
            </p>
          </Reveal>
          <Reveal variant="slow" delay={200}>
            <h1 className="font-serif font-light text-display-xl text-cream">
              Every frame
              <br />
              <em className="italic text-warm">tells a story.</em>
            </h1>
          </Reveal>
          <Reveal variant="slow" delay={500}>
            <p className="mt-8 text-sm tracking-[0.15em] text-warm/60 max-w-md mx-auto leading-relaxed">
              Award-winning photography that captures the light, the emotion,
              and the moments that define you.
            </p>
          </Reveal>
          <Reveal variant="slow" delay={700}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/portfolio"
                className="px-8 py-3.5 border border-cream/20 text-xs tracking-[0.2em] uppercase text-cream hover:border-cream/60 transition-all duration-700"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-gold/10 border border-gold/50 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
              >
                Book a Session
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* ─── Category Strip ─── */}
      <section className="py-12 border-y border-border-dark">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal variant="fade">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {categories.map((cat, i) => (
                <span key={cat} className="flex items-center gap-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-muted/60 hover:text-gold transition-colors duration-500 cursor-default">
                    {cat}
                  </span>
                  {i < categories.length - 1 && (
                    <span className="hidden sm:block text-muted/20 text-lg">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Featured Work ─── */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">
                Selected Work
              </p>
              <h2 className="font-serif font-light text-display-md text-cream">
                Featured Portfolio
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWork.map((item, i) => (
              <Reveal key={item.label} variant="slow" delay={i * 150}>
                <Link href="/portfolio" className="group block">
                  <div
                    className={`${item.aspect} image-placeholder transition-transform duration-1000 group-hover:scale-[1.02]`}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs tracking-[0.2em] uppercase text-warm/50 group-hover:text-gold transition-colors duration-500">
                      {item.label}
                    </p>
                    <span className="text-muted/30 text-xs group-hover:text-gold/50 transition-colors duration-500">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={400}>
            <div className="text-center mt-16">
              <Link
                href="/portfolio"
                className="inline-block px-8 py-3.5 border border-border-dark text-xs tracking-[0.2em] uppercase text-warm/60 hover:border-gold/40 hover:text-gold transition-all duration-700"
              >
                View Full Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── About Strip ─── */}
      <section className="relative py-section overflow-hidden">
        <div className="absolute inset-0 image-placeholder image-placeholder-clean opacity-30" />
        <div className="absolute inset-0 bg-dark/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
              About the Studio
            </p>
            <h2 className="font-serif font-light text-display-md text-cream italic">
              Tucson&apos;s premier photography studio
            </h2>
            <p className="mt-8 text-sm text-warm/60 leading-relaxed max-w-2xl mx-auto">
              Founded on the belief that every photograph should be a work of art,
              Shutter & Light brings a cinematic eye to every session. From the golden
              light of the Sonoran Desert to the intimate warmth of our downtown studio,
              we craft images that endure.
            </p>
            <Link
              href="/about"
              className="inline-block mt-10 text-xs tracking-[0.2em] uppercase text-gold/70 hover:text-gold border-b border-gold/30 hover:border-gold/60 pb-1 transition-all duration-500"
            >
              Our Story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── Pull-Quote Testimonial ─── */}
      <section className="py-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <div className="line-divider-gold mb-16" />
            <blockquote className="pull-quote pl-6 md:pl-12">
              They didn&apos;t just photograph our wedding &mdash; they captured
              every unscripted, beautiful moment we didn&apos;t even know was happening.
            </blockquote>
            <div className="mt-10 pl-6 md:pl-12">
              <p className="text-sm text-cream/80 tracking-wide">
                Elena & Marcus
              </p>
              <p className="text-xs text-muted/50 tracking-[0.15em] uppercase mt-1">
                Wedding, October 2025
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-section overflow-hidden film-grain">
        <div className="absolute inset-0 image-placeholder image-placeholder-clean" />
        <div className="absolute inset-0 bg-dark/70" />

        <div className="relative z-10 text-center px-6">
          <Reveal variant="slow">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-6">
              Ready to Begin?
            </p>
            <h2 className="font-serif font-light text-display-lg text-cream">
              Let&apos;s create something
              <br />
              <em className="italic text-warm">extraordinary.</em>
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Book Your Session
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
