"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { TrendingDown, ArrowRight } from "lucide-react";

const savingsBreakdown = [
  { label: "Offerten erstellen", before: "45 Min", after: "5 Min", saved: "−88%", percent: 88 },
  { label: "Rechnungen schreiben", before: "30 Min", after: "2 Min", saved: "−93%", percent: 93 },
  { label: "Zeiterfassung", before: "15 Min", after: "1 Klick", saved: "−95%", percent: 95 },
  { label: "Projektplanung", before: "60 Min", after: "10 Min", saved: "−83%", percent: 83 },
  { label: "Kundenkommunikation", before: "20 Min", after: "5 Min", saved: "−75%", percent: 75 },
];

function AnimatedValue({
  target,
  suffix = "",
  prefix = "",
  duration = 2.5,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
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
      setDisplay(v.toLocaleString("de-CH"));
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function SavingsBanner() {
  return (
    <section className="relative py-20 overflow-hidden hero-gradient">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Savings Number */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TrendingDown className="w-4 h-4 text-green-300" />
              <span className="text-sm text-white/80 font-medium">Gesamtersparnis pro Jahr</span>
            </motion.div>

            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tabular-nums">
              <AnimatedValue target={31200} prefix="CHF " duration={2.5} />
            </div>

            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-md leading-relaxed">
              So viel spart ein typisches KMU mit 5 Mitarbeitern und 200 Projekten pro Jahr mit Finito Pro.
            </p>

            <motion.a
              href="https://app.finitopro.ch/register"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold rounded-xl text-base hover:shadow-glow-sm transition-all hover:-translate-y-0.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt Kosten senken
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right: Where the savings come from */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-4">So setzt sich die Ersparnis zusammen</p>
            {savingsBreakdown.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 hover:bg-white/15 transition-all"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{item.label}</span>
                  <span className="text-xs text-green-300 font-semibold">{item.saved}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[11px] text-white/40 shrink-0 tabular-nums w-16 text-right">{item.before} → {item.after}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
