"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-32 hero-gradient overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-400/10 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
          <motion.a
            href="https://app.finitopro.ch/register"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("button")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
