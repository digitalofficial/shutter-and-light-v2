import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Weddings", href: "/services/weddings" },
    { name: "Portraits", href: "/services/portraits" },
    { name: "Events", href: "/services/events" },
    { name: "Real Estate", href: "/services/real-estate" },
    { name: "Product", href: "/services/product" },
    { name: "Headshots", href: "/services/headshots" },
  ],
  studio: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Upper Footer */}
        <div className="py-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl tracking-wide text-cream">
              Shutter & Light
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mt-1">
              Photography Studio
            </p>
            <p className="text-sm text-warm/70 mt-6 leading-relaxed max-w-xs">
              Capturing light, crafting stories. Tucson&apos;s premier
              photography studio for life&apos;s defining moments.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm/60 hover:text-gold transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">
              Studio
            </p>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm/60 hover:text-gold transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">
              Get in Touch
            </p>
            <div className="space-y-3 text-sm text-warm/60">
              <p>4th Avenue District</p>
              <p>Tucson, AZ 85705</p>
              <p className="pt-2">
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
        </div>

        {/* Divider */}
        <div className="line-divider" />

        {/* Lower Footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/50 tracking-wide">
            &copy; {new Date().getFullYear()} Shutter & Light. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-muted/50 hover:text-gold transition-colors duration-500"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-muted/50 hover:text-gold transition-colors duration-500"
            >
              Facebook
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-muted/50 hover:text-gold transition-colors duration-500"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
