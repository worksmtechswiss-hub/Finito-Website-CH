"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const allLogos = [
  { name: "Marty AG", src: "/images/marty-logo-weiss-5.png", width: 100, height: 36 },
  { name: "BeriBau AG", src: "/images/656636e32c996022a7438d10_Logo-BeriBau-AG-2.webp", width: 110, height: 36 },
  { name: "Gerber", src: "/images/65b1604a58d6b878bbc9dba5_Logo-Gerber-1.png", width: 100, height: 36 },
  { name: "MB Bau", src: "/images/6672ac1ae79f3e8fc41bafb3_Logo.png", width: 90, height: 36 },
  { name: "MB", src: "/images/67176567d87cac321f2190fa_mb-logo.png", width: 90, height: 36 },
  { name: "Hubacher Kaffeemaschinen AG", src: "/images/logo-hubacher.svg", width: 140, height: 36 },
  { name: "Technische Bauteile Schwarz", src: "/images/logo-tbs.svg", width: 120, height: 36 },
  { name: "Rex Facility Services GmbH", src: "/images/logo-rex.svg", width: 130, height: 36 },
  { name: "KASUMI Facility Services", src: "/images/logo-kasumi.svg", width: 140, height: 36 },
  { name: "Fritschi Reinigungen AG", src: "/images/logo-fritschi.svg", width: 160, height: 36 },
];

export function TrustBanner() {
  const t = useTranslations("trustBanner");

  const marqueeItems = [...allLogos, ...allLogos, ...allLogos, ...allLogos];

  return (
    <section className="py-16 bg-surface-light-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          {...fadeUp}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-neutral-400 mb-8 tracking-wide uppercase"
        >
          {t("title")}
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-light-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-light-secondary to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16"
            >
              <div className="px-6 py-3 bg-white rounded-xl border border-neutral-100 shadow-sm flex items-center justify-center min-w-[140px] h-14">
                <Image
                  src={item.src}
                  alt={`${item.name} - nutzt Finito Pro`}
                  width={item.width}
                  height={item.height}
                  className="max-h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
