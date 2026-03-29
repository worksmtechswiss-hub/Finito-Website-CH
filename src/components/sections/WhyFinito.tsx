"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Schweizer Daten",
    description:
      "Alle Daten werden verschlüsselt auf Schweizer Servern gespeichert. DSGVO-konform.",
  },
  {
    icon: Rocket,
    title: "In 5 Minuten startklar",
    description:
      "Keine Installation, keine Schulung. Einfach registrieren und loslegen.",
  },
  {
    icon: TrendingUp,
    title: "Wächst mit Ihrem Unternehmen",
    description:
      "Von 1 bis 100 Mitarbeiter. Flexible Preise, keine Mindestlaufzeit.",
  },
];

export function WhyFinito() {
  return (
    <section className="relative py-28 bg-neutral-50/50 overflow-hidden">
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
            Warum Finito?
          </h2>
        </motion.div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="text-center"
            >
              {/* Animated Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 rounded-3xl mb-8"
                whileInView={{
                  scale: [0.8, 1.05, 1],
                  rotate: [0, -5, 5, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + 0.15 * i,
                  ease: "easeOut",
                }}
              >
                <reason.icon className="w-10 h-10 text-primary-600" />
              </motion.div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed max-w-sm mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
