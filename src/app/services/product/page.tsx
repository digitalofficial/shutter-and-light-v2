import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Product Photography | Shutter & Light | Tucson, AZ",
  description:
    "Professional product photography in Tucson, AZ. E-commerce, lifestyle, flat lay, packshot, and Amazon-ready images that drive sales.",
};

const included = [
  "E-commerce white background product shots",
  "Lifestyle and in-context photography",
  "Flat lay compositions and styled setups",
  "Packshot photography with precise detail",
  "Amazon, Shopify, and marketplace-ready files",
  "360-degree product photography available",
  "Color-accurate editing and retouching",
  "Batch pricing for large catalogs",
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        title="Product"
        subtitle="Images that convert browsers into buyers"
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
                  Your product,
                  <br />
                  <em className="italic text-warm">its best light.</em>
                </h2>
                <p className="mt-8 text-sm text-warm/60 leading-relaxed">
                  In the e-commerce age, product photography is your storefront.
                  We combine technical precision with creative styling to create
                  images that don&apos;t just show your product &mdash; they sell it.
                  From clean white backgrounds to immersive lifestyle scenes, every
                  shot is crafted to convert.
                </p>
                <p className="mt-4 text-sm text-warm/60 leading-relaxed">
                  Whether you&apos;re launching a new product line, refreshing
                  your catalog, or optimizing your Amazon listings, our studio
                  is equipped for products of every size and category.
                </p>
              </div>
              <div className="aspect-square image-placeholder" />
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
                <div className="aspect-square image-placeholder" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal variant="slow">
            <blockquote className="pull-quote pl-6 md:pl-12">
              Our conversion rate jumped 40% after switching to Shutter & Light
              for our product photography. The quality speaks for itself.
            </blockquote>
            <div className="mt-10 pl-6 md:pl-12">
              <p className="text-sm text-cream/80 tracking-wide">
                Desert Bloom Skincare
              </p>
              <p className="text-xs text-muted/50 tracking-[0.15em] uppercase mt-1">
                E-Commerce Product Line, 2025
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
              Let your products shine.
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 bg-gold/10 border border-gold/50 text-xs tracking-[0.25em] uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-700"
            >
              Get a Product Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
