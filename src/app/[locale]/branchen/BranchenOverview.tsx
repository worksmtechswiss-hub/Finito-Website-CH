"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Paintbrush, Hammer, Zap, Droplets, Ruler, Home, Grid3x3,
  Building2, Blocks, Building, Sparkles, TreePine, Truck,
  Thermometer, PenTool, Palette, User, ArrowRight,
} from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const branches = [
  { icon: Paintbrush, slug: "maler", title: "Maler", desc: "Leistungskataloge für schnelle Offerten, Projekt-Sharing mit Kunden" },
  { icon: Hammer, slug: "gipser", title: "Gipser", desc: "Digitale Fotorapporte, Lagerverwaltung mit Artikelverfolgung" },
  { icon: Zap, slug: "elektriker", title: "Elektriker", desc: "Schaltpläne mobil, Lagerverwaltung mit Lieferanten-Links" },
  { icon: Droplets, slug: "sanitaer", title: "Sanitär", desc: "Mobile Zeiterfassung am Einsatzort, digitale Regierapporte" },
  { icon: Ruler, slug: "schreiner", title: "Schreiner", desc: "Massanfertigungen dokumentieren, Werkstatt-Auslastung im Dashboard" },
  { icon: Home, slug: "dachdecker", title: "Dachdecker", desc: "Mitarbeiterplanung mit Kalender, digitales Projektarchiv (25+ Jahre)" },
  { icon: Grid3x3, slug: "bodenleger", title: "Bodenleger", desc: "Quadratmeter-Kalkulation, Material-Restmengen tracken" },
  { icon: Building2, slug: "geruestbauer", title: "Gerüstbauer", desc: "Gerüst-Teile im Lager tracken, Mietabrechnungen automatisch" },
  { icon: Blocks, slug: "maurer", title: "Maurer", desc: "Automatisches Bautagebuch, Mehrprojekt-Übersicht mit Filtern" },
  { icon: Building, slug: "facility-service", title: "Facility Service", desc: "Automatisierte Wartungsintervalle, Partnerkoordination" },
  { icon: Sparkles, slug: "reinigung", title: "Reinigung", desc: "Routenplanung, Qualitätsdokumentation mit Fotos" },
  { icon: TreePine, slug: "gartenbau", title: "Gartenbau", desc: "Saisonale Projektplanung, Pflanzendokumentation" },
  { icon: Truck, slug: "umzug", title: "Umzug", desc: "Tagesplanung mit Routenoptimierung, Inventarlisten mit Fotos" },
  { icon: Thermometer, slug: "haustechnik", title: "Haustechnik", desc: "Anlagendokumentation, Wartungsplanung und -protokolle" },
  { icon: PenTool, slug: "architekten", title: "Architekten", desc: "Projektdokumente zentral, Aufgabenboard für Phasen" },
  { icon: Palette, slug: "agenturen", title: "Agenturen", desc: "Zeiterfassung für Abrechnung, individuelle Benutzerrechte" },
  { icon: User, slug: "einmann-betriebe", title: "Einmann-Betriebe", desc: "Komplettes Büro auf dem Smartphone, Vorlagen sparen 80% Zeit" },
];

export function BranchenOverview() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        {/* Floating product mockup - left side */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -5 }}
          animate={{ opacity: 0.3, x: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-[-5%] top-1/3 w-64 lg:w-80 hidden lg:block pointer-events-none"
        >
          <Image
            src="/images/mockup4.png"
            alt=""
            width={400}
            height={300}
            className="w-full h-auto drop-shadow-2xl"
            sizes="320px"
          />
        </motion.div>

        {/* Floating software screenshot - right side */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 5 }}
          animate={{ opacity: 0.25, x: 0, rotate: 5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-[-5%] top-1/4 w-64 lg:w-72 hidden lg:block pointer-events-none"
        >
          <Image
            src="/images/hero.png"
            alt=""
            width={400}
            height={300}
            className="w-full h-auto drop-shadow-2xl rounded-xl"
            sizes="288px"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full border border-white/10 mb-6">
              17 Branchen, eine Lösung
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Für jede <span className="gradient-text-animated">Branche</span> die richtige Lösung
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Finito Pro passt sich an Ihre Branche an - mit branchenspezifischen Funktionen und Workflows.
            </p>
          </motion.div>
        </div>

      </section>

      {/* Branch Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Alle Branchen im Überblick
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Wählen Sie Ihre Branche und entdecken Sie, wie Finito Pro Ihren Arbeitsalltag vereinfacht.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {branches.map((branch) => (
              <motion.div key={branch.slug} variants={staggerItem}>
                <Link
                  href={`/branchen/${branch.slug}`}
                  className="group block p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <branch.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {branch.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {branch.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 group-hover:gap-2.5 transition-all">
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Software Preview */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Eine Software, alle Branchen
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Finito Pro bietet eine flexible Oberfläche, die sich an Ihre Branche anpasst.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-neutral-200">
              <Image
                src="/images/Finito-Software.png"
                alt="Finito Pro Software - Übersicht für alle Branchen"
                width={1200}
                height={675}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 1152px"
              />
            </div>
            {/* Floating mobile mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:right-8 w-32 sm:w-44 hidden sm:block"
            >
              <Image
                src="/images/Finito-Mob.png"
                alt="Finito Pro Mobile App"
                width={200}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                sizes="176px"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Ihre Branche nicht dabei?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Finito Pro ist flexibel einsetzbar. Kontaktieren Sie uns und wir zeigen Ihnen,
              wie die Software für Ihr Geschäft funktioniert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.ch/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Kostenlos testen
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
