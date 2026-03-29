"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Seit wir Finito nutzen, erstellen wir Offerten in 3 statt 30 Minuten. Das hat unser Geschäft verändert.",
    company: "Marty AG",
    location: "Zürich",
    logo: "/images/marty-logo-weiss-5.png",
    logoWidth: 80,
  },
  {
    quote:
      "Die Zeiterfassung und QR-Rechnungen sparen uns jeden Monat Stunden an Verwaltungsarbeit.",
    company: "BeriBau AG",
    location: "Bern",
    logo: "/images/656636e32c996022a7438d10_Logo-BeriBau-AG-2.webp",
    logoWidth: 90,
  },
  {
    quote:
      "Endlich haben wir alle Projekte an einem Ort. Unsere Kunden lieben das Kundenportal.",
    company: "Rex Facility Services GmbH",
    location: "Basel",
    logo: "/images/logo-rex.svg",
    logoWidth: 100,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900">
            Das sagen unsere Kunden
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative"
            >
              {/* Large quotation mark */}
              <div className="text-7xl leading-none text-primary-200 font-serif select-none mb-4">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-neutral-700 leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Attribution with Logo */}
              <div className="flex items-center gap-4">
                <div className="h-10 flex items-center px-3 py-1 bg-neutral-50 rounded-lg border border-neutral-100">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={testimonial.logoWidth}
                    height={28}
                    className="max-h-7 w-auto object-contain"
                    sizes="100px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    {testimonial.company}
                  </p>
                  <p className="text-sm text-neutral-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
