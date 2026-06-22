"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Wedding Photography",
  "Portrait Photography",
  "Event Photography",
  "Real Estate Photography",
  "Product Photography",
  "Headshot Photography",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <p className="font-serif text-display-sm text-cream">Thank you.</p>
        <p className="mt-4 text-warm/70 text-sm tracking-wide">
          We&apos;ll be in touch within 24 hours to discuss your session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500 placeholder:text-muted/40"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500 placeholder:text-muted/40"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
            Phone
          </label>
          <input
            type="tel"
            className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500 placeholder:text-muted/40"
            placeholder="(520) 555-0000"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
            Service Interested In
          </label>
          <select
            required
            className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500 appearance-none cursor-pointer"
          >
            <option value="" className="bg-dark text-muted">
              Select a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-dark text-cream">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
            Preferred Date
          </label>
          <input
            type="date"
            className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
            Budget Range
          </label>
          <select className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500 appearance-none cursor-pointer">
            <option value="" className="bg-dark text-muted">
              Select range
            </option>
            <option className="bg-dark text-cream">Under $500</option>
            <option className="bg-dark text-cream">$500 - $1,500</option>
            <option className="bg-dark text-cream">$1,500 - $3,000</option>
            <option className="bg-dark text-cream">$3,000 - $5,000</option>
            <option className="bg-dark text-cream">$5,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-muted mb-3">
          Tell Us About Your Vision
        </label>
        <textarea
          rows={5}
          required
          className="w-full bg-transparent border-b border-border-dark focus:border-gold/60 text-cream text-sm py-3 outline-none transition-colors duration-500 resize-none placeholder:text-muted/40"
          placeholder="Describe your project, event, or session ideas..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="px-10 py-4 bg-gold/10 border border-gold/60 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-dark transition-all duration-700"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
