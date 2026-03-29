"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Calculator,
  Cloud,
  Database,
  FileSpreadsheet,
  Mail,
  Puzzle,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const integrations = [
  {
    icon: Calculator,
    title: "Buchhaltungs-Export",
    desc: "Exportieren Sie Ihre Finanzdaten direkt an gaengige Schweizer Buchhaltungssoftware. CSV, PDF und weitere Formate.",
    status: "Verfügbar",
    statusColor: "bg-success/10 text-success",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & CSV Import",
    desc: "Importieren Sie bestehende Kundenlisten, Artikelstaemme und Projektdaten aus Excel oder CSV-Dateien.",
    status: "Verfügbar",
    statusColor: "bg-success/10 text-success",
  },
  {
    icon: Mail,
    title: "E-Mail-Integration",
    desc: "Versenden Sie Rechnungen und Offerten direkt per E-Mail aus Finito Pro. Mit Zustellbestaetigung.",
    status: "Verfügbar",
    statusColor: "bg-success/10 text-success",
  },
  {
    icon: Cloud,
    title: "Cloud-Speicher",
    desc: "Verbinden Sie Ihren Cloud-Speicher für automatische Backups und Dokumentenablage.",
    status: "In Entwicklung",
    statusColor: "bg-warning/10 text-warning",
  },
  {
    icon: Database,
    title: "ERP-Anbindung",
    desc: "Verbinden Sie Finito Pro mit Ihrem bestehenden ERP-System für automatischen Datenaustausch.",
    status: "Enterprise",
    statusColor: "bg-primary-50 text-primary-600",
  },
  {
    icon: Puzzle,
    title: "Custom Integration",
    desc: "Nutzen Sie unsere REST API, um Finito Pro mit Ihren individuellen Systemen zu verbinden.",
    status: "API verfügbar",
    statusColor: "bg-accent-50 text-accent-600",
  },
];

const comingSoon = [
  "Kalender-Synchronisation (Google, Outlook)",
  "Automatischer Zahlungsabgleich mit Schweizer Banken",
  "Dokumenten-Scanner mit OCR",
  "GPS-basierte Routenoptimierung",
  "WhatsApp Business Integration",
  "Erweiterte Berichts-Templates",
];

export function MarktplatzContent() {
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
              <span className="gradient-text-animated">Marktplatz</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Erweiterungen und Integrationen, die Finito Pro noch leistungsfaehiger machen.
              Verbinden Sie Ihre bestehenden Tools nahtlos.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Integrationen & Erweiterungen
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Verbinden Sie Finito Pro mit Ihren bestehenden Systemen und Workflows.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {integrations.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full border border-primary-100 mb-4">
              <Rocket className="w-4 h-4" />
              Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Bald verfügbar
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Wir arbeiten kontinuierlich an neuen Erweiterungen. Hier ein Einblick in unsere Roadmap.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {comingSoon.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full shrink-0" />
                <span className="text-sm text-neutral-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ShieldCheck className="w-12 h-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Vermissen Sie eine Integration?
            </h2>
            <p className="text-lg text-neutral-500 mb-8 max-w-xl mx-auto">
              Teilen Sie uns mit, welche Tools Sie nutzen. Wir prüfen die Umsetzung
              und informieren Sie, sobald die Integration verfügbar ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
              >
                Integration anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/apis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-200 text-neutral-700 font-medium rounded-2xl hover:bg-surface-light-secondary transition-all"
              >
                API Dokumentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
