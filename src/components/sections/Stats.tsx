"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock, Banknote, FileCheck, ShieldCheck } from "lucide-react";

function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  formatNumber = false,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  formatNumber?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, target, {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, target, count, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (formatNumber) {
        setDisplay(v.toLocaleString("de-CH"));
      } else {
        setDisplay(String(v));
      }
    });
    return unsubscribe;
  }, [rounded, formatNumber]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const savingsData = [
  {
    icon: Clock,
    target: 520,
    suffix: "",
    prefix: "",
    formatNumber: false,
    unit: "Stunden/Jahr gespart",
    detail: "= 13 Arbeitswochen",
  },
  {
    icon: Banknote,
    target: 31200,
    suffix: "",
    prefix: "CHF ",
    formatNumber: true,
    unit: "eingespart",
    detail: "bei CHF 60/h",
  },
  {
    icon: FileCheck,
    target: 0,
    suffix: "",
    prefix: "",
    formatNumber: false,
    unit: "vergessene Rechnungen",
    detail: "automatische Erinnerungen",
  },
  {
    icon: ShieldCheck,
    target: 100,
    suffix: "%",
    prefix: "",
    formatNumber: false,
    unit: "digitale Dokumentation",
    detail: "revisionssicher archiviert",
  },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary-50/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
            So viel spart ein typisches KMU
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Bei einem typischen KMU mit 5 Mitarbeitern und 200 Projekten pro Jahr:
          </p>
        </motion.div>

        {/* Savings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {savingsData.map((item, i) => (
            <motion.div
              key={item.unit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-2xl mb-5">
                <item.icon className="w-7 h-7 text-primary-600" />
              </div>
              <div className="text-4xl sm:text-5xl font-semibold text-primary-600 mb-2 tabular-nums">
                <Counter
                  target={item.target}
                  suffix={item.suffix}
                  prefix={item.prefix}
                  formatNumber={item.formatNumber}
                  duration={2 + i * 0.3}
                />
              </div>
              <p className="text-base font-medium text-neutral-900 mb-1">
                {item.unit}
              </p>
              <p className="text-sm text-neutral-400">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/automationen"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
          >
            Alle Praxisbeispiele ansehen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
