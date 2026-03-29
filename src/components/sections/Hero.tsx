"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  Users,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const featureCards = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FolderKanban, label: "Projekte" },
  { icon: Receipt, label: "QR-Rechnungen" },
  { icon: FileText, label: "Offerten" },
  { icon: Clock, label: "Zeiterfassung" },
  { icon: Users, label: "Kundenportal" },
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Violet Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#a78bfa]/15 rounded-full blur-[128px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a78bfa]" />
            </span>
            <span className="text-sm text-white/70 shimmer-badge">
              {t("badge")}
            </span>
          </motion.div>

          {/* Title with violet gradient */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              {t("title").split(" ").slice(0, 2).join(" ")}
            </span>{" "}
            {t("title").split(" ").slice(2).join(" ")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Animated Glow CTA Button */}
            <motion.a
              href="https://app.finitopro.ch/register"
              className="group relative inline-flex items-center gap-2 px-10 py-5 text-white font-semibold rounded-2xl text-lg overflow-hidden"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
              {/* Glow pulse */}
              <span className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="relative z-10 flex items-center gap-2">
                Kostenlos starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.button
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl text-base hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4" />
              {t("ctaSecondary")}
            </motion.button>
          </motion.div>

          {/* Trust */}
          <motion.p variants={staggerItem} className="text-sm text-white/40">
            {t("trust")}
          </motion.p>

          {/* All-in-One Feature Overview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-3xl">
              {/* Glow behind section */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#8b5cf6]/20 to-[#a78bfa]/20 rounded-3xl blur-3xl" />

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                  Alles in einer App
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {featureCards.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent" />
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#a78bfa]" />
                      </div>
                      <span className="relative text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
