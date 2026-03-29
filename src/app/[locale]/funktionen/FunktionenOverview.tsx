"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  CalendarDays,
  Camera,
  Package,
  Calculator,
  Smartphone,
  Users,
  Repeat,
  UserCircle,
  ArrowRight,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: LayoutDashboard,
    slug: "dashboard",
    title: "Dashboard",
    description:
      "Alle wichtigen Kennzahlen auf einen Blick. Finanzielle KPIs, aktive Projekte und Jahresberichte in Echtzeit.",
    category: "Überblick",
  },
  {
    icon: FolderKanban,
    slug: "projektmanagement",
    title: "Projektmanagement",
    description:
      "Mobile Aufgabenverwaltung, Foto-Dokumentation und Team-Koordination für Ihre Projekte.",
    category: "Kernfunktionen",
  },
  {
    icon: Receipt,
    slug: "rechnungen",
    title: "QR-Rechnungen",
    description:
      "Schweizer QR-Rechnungen nach ISO 20022. MwSt-Berechnung, Zahlungserinnerungen und Bankabgleich.",
    category: "Finanzen",
  },
  {
    icon: FileText,
    slug: "offerten",
    title: "Offerten",
    description:
      "Schnelle digitale Offerten mit gespeicherten Leistungskatalogen. Per Knopfdruck zum Auftrag.",
    category: "Finanzen",
  },
  {
    icon: Clock,
    slug: "zeiterfassung",
    title: "Zeiterfassung",
    description:
      "Projektbasierte Zeiterfassung mit Monatsberichten, Überstunden-Tracking und Lohnexport.",
    category: "Kernfunktionen",
  },
  {
    icon: UserCircle,
    slug: "crm",
    title: "CRM & Kundenverwaltung",
    description:
      "Zentrale Kontaktverwaltung mit kompletter Kundenhistorie, Tags und Kundenportal.",
    category: "Kernfunktionen",
  },
  {
    icon: CalendarDays,
    slug: "ferienmanagement",
    title: "Ferienmanagement",
    description:
      "Mobile Ferienantraege, Resttage-Übersicht und Genehmigungsworkflow mit Teamkalender.",
    category: "Personal",
  },
  {
    icon: Camera,
    slug: "foto-dokumentation",
    title: "Foto-Dokumentation",
    description:
      "Vorher/Nachher-Fotos mit automatischer Projektzuordnung, Zeitstempel und GPS-Daten.",
    category: "Baustelle",
  },
  {
    icon: Package,
    slug: "lagerverwaltung",
    title: "Lagerverwaltung",
    description:
      "Material- und Werkzeugverwaltung mit automatischem Abzug pro Projekt und Mindestbestand-Warnungen.",
    category: "Baustelle",
  },
  {
    icon: Calculator,
    slug: "buchhaltung",
    title: "Buchhaltung",
    description:
      "Einnahmen/Ausgaben verwalten, MwSt-Abrechnung und Export für Ihren Treuhander.",
    category: "Finanzen",
  },
  {
    icon: Smartphone,
    slug: "mitarbeiter-app",
    title: "Mitarbeiter-App",
    description:
      "Aufgaben, Zeiterfassung, Fotos und Kommunikation - alles vom Smartphone, auch offline.",
    category: "Baustelle",
  },
  {
    icon: Users,
    slug: "kundenportal",
    title: "Kundenportal",
    description:
      "Projektfortschritt teilen, Offerten freigeben und transparente Kommunikation mit Kunden.",
    category: "Kommunikation",
  },
  {
    icon: Repeat,
    slug: "service-abos",
    title: "Service-Abos",
    description:
      "Wiederkehrende Aufträge automatisch verwalten mit Projekterstellung nach Zeitplan.",
    category: "Automatisierung",
  },
];

export function FunktionenOverview() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden hero-gradient">
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
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            >
              <span className="text-sm text-white/70">13 Funktionen, 1 Plattform</span>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6"
            >
              <span className="gradient-text-animated">Alle Funktionen</span> für Ihren Betrieb
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Von der Offerte bis zur Rechnung, vom Lager bis zum Kundenportal - Finito Pro deckt jeden Aspekt Ihres Handwerksbetriebs ab.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Hero Product Screenshot */}
      <section className="relative z-10 -mt-16 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/20 to-accent-400/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-1.5 shadow-2xl">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <div className="flex-1 mx-8">
                  <div className="h-5 bg-neutral-700/50 rounded-md" />
                </div>
              </div>
              <Image
                src="/images/mockup4.png"
                alt="Finito Pro - Alle Funktionen auf einen Blick"
                width={1200}
                height={750}
                className="w-full rounded-b-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature) => (
              <motion.div key={feature.slug} variants={staggerItem}>
                <Link
                  href={`/features/${feature.slug}`}
                  className="group block p-6 rounded-2xl border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                      {feature.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Alle Funktionen. Ein Preis.
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Testen Sie Finito Pro 30 Tage kostenlos und überzeugen Sie sich selbst von allen Funktionen.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt kostenlos testen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
