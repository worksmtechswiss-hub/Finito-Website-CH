"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Star, ArrowRight, Quote, Shield, Users, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Marco S.",
    company: "Malerbetrieb Suter",
    branch: "Maler",
    text: "Seit wir Finito Pro nutzen, erstellen wir Offerten in der Hälfte der Zeit. Das Kundenportal beeindruckt unsere Auftraggeber und schafft Transparenz.",
    rating: 5,
  },
  {
    name: "Stefan B.",
    company: "Elektro Brunner AG",
    branch: "Elektriker",
    text: "Die mobile Lagerverwaltung mit Lieferanten-Links hat unsere Nachbestellungen revolutioniert. Kein Papierkram mehr auf der Baustelle.",
    rating: 5,
  },
  {
    name: "Andrea M.",
    company: "Reinigung Plus GmbH",
    branch: "Reinigung",
    text: "Routenplanung und Qualitätsdokumentation in einer App - das hat unsere Effizienz um 40% gesteigert. Die Kunden lieben die Vorher/Nachher-Fotos.",
    rating: 5,
  },
  {
    name: "Thomas K.",
    company: "Gartenbau Koller",
    branch: "Gartenbau",
    text: "Die saisonale Planung ist ein Gamechanger. Finito Pro erinnert mich automatisch an wiederkehrende Pflegearbeiten - kein Kunde wird vergessen.",
    rating: 5,
  },
  {
    name: "Lisa W.",
    company: "Kreativbüro Weber",
    branch: "Agentur",
    text: "Endlich eine Zeiterfassung, die auch für Agenturen passt. Stundenberichte pro Projekt sind auf Knopfdruck fertig - perfekt für unsere Abrechnungen.",
    rating: 4,
  },
  {
    name: "Patrick H.",
    company: "Haustechnik Huber",
    branch: "Haustechnik",
    text: "Wartungsplanung war früher ein Albtraum. Mit Finito Pro werden alle Anlagen sauber erfasst und die automatischen Erinnerungen sind Gold wert.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Betriebe nutzen Finito Pro" },
  { value: "17", label: "Branchen unterstützt" },
  { value: "4.8/5", label: "Durchschnittliche Bewertung" },
  { value: "25+", label: "Jahre Datenspeicherung" },
];

export function KundenContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-400/15 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Unsere <span className="gradient-text-animated">Kunden</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Schweizer KMU vertrauen auf Finito Pro. Erfahren Sie, wie
              Handwerksbetriebe und Dienstleister ihren Alltag digitalisieren.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-surface-light-secondary border border-neutral-100"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-16 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-3">
              So arbeiten unsere Kunden
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Von der Projektübersicht bis zur Lagerverwaltung - alles in einer Lösung.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-200">
              <Image
                src="/images/Projekt-Übersicht.png"
                alt="Finito Pro Projektübersicht - Alle Projekte auf einen Blick"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-200">
              <Image
                src="/images/Lagerverwaltung-Finito-Pro.png"
                alt="Finito Pro Lagerverwaltung - Material immer im Überblick"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Echte Stimmen von Schweizer Betrieben, die mit Finito Pro arbeiten.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                  {t.text}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating ? "text-warning fill-warning" : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.company}</div>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-primary-50 text-primary-600 text-[10px] font-medium rounded">
                    {t.branch}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Warum Betriebe uns vertrauen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Schweizer Server", desc: "Alle Daten werden verschlüsselt in der Schweiz gespeichert. 100% DSGVO-konform." },
              { icon: Users, title: "Persönlicher Support", desc: "Kein Callcenter - echte Menschen helfen Ihnen bei Fragen und Einrichtung." },
              { icon: TrendingUp, title: "Stetige Weiterentwicklung", desc: "Regelmässige Updates basierend auf dem Feedback unserer Nutzer." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Werden Sie Teil der Finito-Pro-Familie
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              30 Tage kostenlos testen und selbst erleben, warum Schweizer KMU auf Finito Pro setzen.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt kostenlos starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
