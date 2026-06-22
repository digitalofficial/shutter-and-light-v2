import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shutter & Light | Photography Studio in Tucson, AZ",
  description:
    "Tucson's premier photography studio specializing in weddings, portraits, events, real estate, product, and headshot photography. Every frame tells a story.",
  keywords: [
    "photography studio Tucson",
    "wedding photographer Tucson AZ",
    "portrait photography",
    "real estate photography",
    "product photography",
    "headshot photographer",
    "event photographer Tucson",
  ],
  openGraph: {
    title: "Shutter & Light | Photography Studio in Tucson, AZ",
    description:
      "Tucson's premier photography studio. Weddings, portraits, events, real estate, product, and headshot photography.",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Photographer",
  name: "Shutter & Light",
  description:
    "Premier photography studio in Tucson, AZ specializing in weddings, portraits, events, real estate, product, and headshot photography.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  url: "https://shutterandlight.com",
  telephone: "(520) 555-0182",
  priceRange: "$$",
  image: "https://shutterandlight.com/og-image.jpg",
  areaServed: {
    "@type": "City",
    name: "Tucson",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headshot Photography" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-cream font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
