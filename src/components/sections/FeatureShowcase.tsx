"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Check,
  Star,
  type LucideIcon,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface SubFeature {
  title: string;
  description: string;
}

interface TargetUser {
  role: string;
  description: string;
}

interface RelatedFeature {
  slug: string;
  title: string;
  icon: LucideIcon;
}

interface FeatureShowcaseProps {
  featureId: string;
  icon: LucideIcon;
  title: string;
  description: string;
  problemText: string;
  solutionText: string;
  subFeatures: SubFeature[];
  targetUsers: TargetUser[];
  relatedFeatures: RelatedFeature[];
}

const viewportOnce = { once: true } as const;

// Map feature IDs to their video/screenshot assets
const featureMedia: Record<string, { video?: string; screenshot?: string; isPhone?: boolean }> = {
  dashboard: { video: "/videos/1Dashboard-Desktop-transcode.mp4", screenshot: "/images/Dashboard-Finito-Pro-App.png" },
  projektmanagement: { video: "/videos/1Projekt-Management-transcode.mp4", screenshot: "/images/Projekt-Übersicht.png" },
  rechnungen: { video: "/videos/1Rechnungen-PC-transcode.mp4", screenshot: "/images/dashboard-1-3.png" },
  offerten: { video: "/videos/1Offerte-PC-transcode.mp4", screenshot: "/images/dashboard-1-4.png" },
  zeiterfassung: { screenshot: "/images/dashboard-1-5.png" },
  crm: { screenshot: "/images/Projekte.png" },
  ferienmanagement: { screenshot: "/images/dashboard-1-6.png" },
  "foto-dokumentation": { screenshot: "/images/dashboard-1-7.png" },
  lagerverwaltung: { screenshot: "/images/Lagerverwaltung-Finito-Pro.png" },
  buchhaltung: { screenshot: "/images/dashboard-1-8.png" },
  "mitarbeiter-app": { screenshot: "/images/Free_Iphone_15_Mockup_1.png", isPhone: true },
  kundenportal: { screenshot: "/images/dashboard-1-9.png" },
  "service-abos": { screenshot: "/images/dashboard-1-10.png" },
};

export function FeatureShowcase({
  featureId,
  icon: Icon,
  title,
  description,
  problemText,
  solutionText,
  subFeatures,
  targetUsers,
  relatedFeatures,
}: FeatureShowcaseProps) {
  const media = featureMedia[featureId];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-400/15 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            <motion.div variants={staggerItem}>
              <Link
                href="/funktionen"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Alle Funktionen
              </Link>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="w-20 h-20 bg-gradient-to-br from-primary-600/30 to-accent-400/20 rounded-3xl flex items-center justify-center mb-8 border border-white/10"
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            <motion.div variants={staggerItem}>
              <motion.a
                href="https://app.finitopro.ch/register"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-2xl text-base shadow-glow transition-all animate-glow-pulse"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Jetzt 30 Tage gratis testen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Live Demo / Screenshot Section */}
      {media && (
        <section className="py-16 bg-white -mt-16 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-accent-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-surface-dark-secondary to-surface-dark-tertiary rounded-2xl border border-white/10 p-2 shadow-2xl overflow-hidden">
                {media.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-xl"
                    poster={media.screenshot}
                  >
                    <source src={media.video} type="video/mp4" />
                  </video>
                ) : media.screenshot ? (
                  <Image
                    src={media.screenshot}
                    alt={`${title} - Finito Pro Screenshot`}
                    width={1200}
                    height={750}
                    className="w-full rounded-xl"
                  />
                ) : null}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Vorteile auf einen Blick */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Vorteile auf einen Blick
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {subFeatures.map((sub) => (
              <motion.div
                key={sub.title}
                variants={staggerItem}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{sub.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{sub.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
              Vorher vs. Nachher
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="relative p-8 lg:p-10 rounded-2xl bg-red-50/50 border border-red-100"
            >
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-red-500 text-xl font-semibold">!</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Ohne Finito</h3>
              <p className="text-neutral-600 leading-relaxed">{problemText}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="relative p-8 lg:p-10 rounded-2xl bg-primary-50/50 border border-primary-100"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Mit Finito Pro</h3>
              <p className="text-neutral-600 leading-relaxed">{solutionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive - Full Width Alternating */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              So funktioniert es im Detail
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Entdecken Sie die wichtigsten Funktionen Schritt für Schritt
            </p>
          </motion.div>

          <div className="space-y-20">
            {subFeatures.map((sub, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  key={sub.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
                >
                  {/* Product screenshot */}
                  <div className="flex-1 w-full">
                    {media?.screenshot ? (
                      media.isPhone ? (
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative flex items-center justify-center py-8"
                        >
                          <div className="relative w-[260px] mx-auto rounded-[2.5rem] border-[6px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-800 rounded-b-2xl z-10" />
                            <Image
                              src={media.screenshot}
                              alt={`${sub.title} - Finito Pro Mobile Ansicht`}
                              width={520}
                              height={1040}
                              className="w-full h-auto"
                            />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="relative"
                        >
                          <div className="absolute -inset-3 bg-gradient-to-r from-primary-600/10 to-accent-400/10 rounded-3xl blur-2xl" />
                          <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-1.5 shadow-2xl">
                            {/* Laptop top bar */}
                            <div className="flex items-center gap-1.5 px-3 py-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                              <div className="flex-1 mx-8">
                                <div className="h-5 bg-neutral-700/50 rounded-md" />
                              </div>
                            </div>
                            <Image
                              src={media.screenshot}
                              alt={`${sub.title} - Finito Pro Screenshot`}
                              width={800}
                              height={500}
                              className="w-full rounded-b-xl"
                            />
                          </div>
                        </motion.div>
                      )
                    ) : (
                      <motion.div
                        className="relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center overflow-hidden"
                      >
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                            <span className="text-white font-bold text-2xl">{index + 1}</span>
                          </div>
                          <p className="text-primary-700 font-medium text-lg">{sub.title}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 mb-4">
                      <Star className="w-4 h-4" />
                      Schritt {index + 1}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                      {sub.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      {sub.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Für wen ist das?
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
            className="grid sm:grid-cols-3 gap-8"
          >
            {targetUsers.map((user) => (
              <motion.div
                key={user.role}
                variants={staggerItem}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary-700 font-bold text-xl">
                    {user.role.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {user.role}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {user.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Funktioniert perfekt mit
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Entdecken Sie weitere Funktionen, die nahtlos zusammenarbeiten
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
            className="flex flex-wrap justify-center gap-4"
          >
            {relatedFeatures.map((related) => (
              <motion.div key={related.slug} variants={staggerItem}>
                <Link
                  href={`/features/${related.slug}`}
                  className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface-light-secondary border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <related.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-medium text-neutral-700 group-hover:text-neutral-900">
                    {related.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Bereit, {title} auszuprobieren?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Starten Sie jetzt mit Finito Pro. 30 Tage kostenlos, keine Kreditkarte nötig.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
              className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow transition-all animate-glow-pulse"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Kostenlos starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
