import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services | Shutter & Light Photography Studio",
  description:
    "Professional photography services in Tucson, AZ. Weddings, portraits, events, real estate, product, and headshot photography.",
};

const services = [
  {
    title: "Weddings",
    slug: "weddings",
    desc: "Full-day and half-day coverage, engagement sessions, albums, and second shooter options for your perfect day.",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Portraits",
    slug: "portraits",
    desc: "Family, senior, couples, and individual portraits. Indoor studio and outdoor Tucson locations.",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Events",
    slug: "events",
    desc: "Corporate events, galas, conferences, and private parties captured with editorial precision.",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    desc: "Interior and exterior photography, aerial shots, virtual tours, and twilight shoots that sell properties.",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Product",
    slug: "product",
    desc: "E-commerce, lifestyle, flat lay, packshot, and Amazon-ready product photography.",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Headshots",
    slug: "headshots",
    desc: "Corporate, actor, LinkedIn, and team headshots with professional studio lighting.",
    aspect: "aspect-[3/4]",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Six disciplines, one standard of excellence"
      />

      <section className="py-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} variant="slow" delay={i * 120}>
                <Link href={`/services/${svc.slug}`} className="group block">
                  <div
                    className={`${svc.aspect} image-placeholder transition-transform duration-1000 group-hover:scale-[1.02]`}
                  />
                  <div className="mt-6">
                    <h2 className="font-serif text-display-sm text-cream group-hover:text-gold transition-colors duration-500">
                      {svc.title}
                    </h2>
                    <p className="mt-3 text-sm text-warm/50 leading-relaxed">
                      {svc.desc}
                    </p>
                    <span className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-muted/40 group-hover:text-gold/70 transition-colors duration-500">
                      Learn More &rarr;
                    </span>
                  </div>
                </Link>
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
              Not sure which service fits?
            </h2>
            <p className="mt-6 text-sm text-warm/60 leading-relaxed">
              Reach out and we&apos;ll help you find the perfect approach for your project.
              Every shoot is custom-tailored to your vision.
            </p>
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
