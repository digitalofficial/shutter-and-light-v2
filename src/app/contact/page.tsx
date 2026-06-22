import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Booking | Shutter & Light Photography Studio | Tucson, AZ",
  description:
    "Book a photography session with Shutter & Light in Tucson, AZ. Weddings, portraits, events, real estate, product, and headshot photography.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Let's bring your vision to life"
      />

      <section className="py-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <Reveal variant="slow" className="lg:col-span-1">
              <div className="space-y-10">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
                    Studio
                  </p>
                  <div className="text-sm text-warm/60 space-y-1">
                    <p>4th Avenue District</p>
                    <p>Tucson, AZ 85705</p>
                    <p className="text-muted/40 text-xs mt-2">By appointment only</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
                    Contact
                  </p>
                  <div className="text-sm text-warm/60 space-y-2">
                    <p>
                      <a
                        href="tel:+15205550182"
                        className="hover:text-gold transition-colors duration-500"
                      >
                        (520) 555-0182
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:hello@shutterandlight.com"
                        className="hover:text-gold transition-colors duration-500"
                      >
                        hello@shutterandlight.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
                    Hours
                  </p>
                  <div className="text-sm text-warm/60 space-y-1">
                    <p>Monday &ndash; Friday: 9am &ndash; 6pm</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">
                    Follow
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.15em] uppercase text-warm/40 hover:text-gold transition-colors duration-500"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.15em] uppercase text-warm/40 hover:text-gold transition-colors duration-500"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div className="line-divider-gold" />

                <p className="text-xs text-muted/40 leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries,
                  please call the studio directly.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal variant="slow" delay={200} className="lg:col-span-2">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-8">
                Book a Session
              </p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
