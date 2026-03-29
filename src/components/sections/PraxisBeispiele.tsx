"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Paintbrush,
  Zap,
  Building2,
  Wrench,
  TreePine,
  Scissors,
  Clock,
  FileText,
  Receipt,
  Camera,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

const beispiele = [
  {
    branche: "Malerbetrieb",
    icon: Paintbrush,
    firma: "5 Mitarbeiter, Zürich",
    vorher: [
      "Offerten von Hand in Word erstellt (45 Min. pro Offerte)",
      "Arbeitszeiten auf Papier notiert, oft vergessen",
      "Rechnungen erst Wochen nach Projektende verschickt",
    ],
    nachher: [
      "Offerten in 5 Minuten aus Vorlagen erstellt",
      "Automatische Zeiterfassung per App am Einsatzort",
      "Rechnung direkt nach Projektabschluss mit einem Klick",
    ],
    ersparnis: "12 Stunden/Woche",
    highlight: "90% weniger Offertenzeit",
  },
  {
    branche: "Elektrobetrieb",
    icon: Zap,
    firma: "8 Mitarbeiter, Bern",
    vorher: [
      "Excel-Listen für Materialverfolgung",
      "Keine Übersicht über offene Rechnungen",
      "Ferienverwaltung per Wandkalender",
    ],
    nachher: [
      "Digitale Lagerverwaltung mit Bestandswarnungen",
      "Dashboard zeigt alle offenen Posten auf einen Blick",
      "Digitale Ferien- und Abwesenheitsverwaltung",
    ],
    ersparnis: "CHF 2'800/Monat",
    highlight: "0 vergessene Rechnungen",
  },
  {
    branche: "Facility Service",
    icon: Building2,
    firma: "12 Mitarbeiter, Basel",
    vorher: [
      "Einsatzpläne per WhatsApp koordiniert",
      "Kundenreklamationen ohne Dokumentation",
      "Monatsrechnung brauchte 2 Tage Aufwand",
    ],
    nachher: [
      "Zentrale Einsatzplanung mit App-Benachrichtigung",
      "Lückenlose Fotodokumentation bei jedem Einsatz",
      "Automatische Monatsabrechnung in 10 Minuten",
    ],
    ersparnis: "15 Stunden/Woche",
    highlight: "98% Kundenzufriedenheit",
  },
  {
    branche: "Sanitärbetrieb",
    icon: Wrench,
    firma: "3 Mitarbeiter, Luzern",
    vorher: [
      "Regierapporte per Hand ausgefüllt",
      "Kunden mussten für Statusupdates anrufen",
      "Buchhaltung extern vergeben (teuer)",
    ],
    nachher: [
      "Digitale Regierapporte direkt auf dem Smartphone",
      "Kundenportal für Echtzeit-Projektstatus",
      "Integrierte Buchhaltung spart Treuhandkosten",
    ],
    ersparnis: "CHF 1'500/Monat",
    highlight: "Treuhandkosten halbiert",
  },
  {
    branche: "Gartenbau",
    icon: TreePine,
    firma: "6 Mitarbeiter, St. Gallen",
    vorher: [
      "Saisonplanung per Papierkalender",
      "Nachkalkulationen fehlten komplett",
      "Material wurde doppelt bestellt",
    ],
    nachher: [
      "Digitale Saison- und Projektplanung",
      "Automatische Nachkalkulation nach Projektende",
      "Lagerverwaltung verhindert Doppelbestellungen",
    ],
    ersparnis: "CHF 3'200/Monat",
    highlight: "30% weniger Materialkosten",
  },
  {
    branche: "Schreinerei",
    icon: Scissors,
    firma: "4 Mitarbeiter, Winterthur",
    vorher: [
      "Aufträge per Telefon und Zettel",
      "Keine Übersicht über Projektfortschritt",
      "Mitarbeiter wussten nicht was als nächstes kommt",
    ],
    nachher: [
      "Alle Aufträge digital mit Prioritäten",
      "Kanban-Board zeigt jeden Projektstatus",
      "Mitarbeiter-App mit täglicher Aufgabenliste",
    ],
    ersparnis: "8 Stunden/Woche",
    highlight: "Projekte 20% schneller fertig",
  },
];

export function PraxisBeispiele() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
            Praxisbeispiele aus dem{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              Alltag
            </span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            So nutzen Schweizer KMU Finito Pro - echte Ergebnisse von echten Betrieben.
          </p>
        </motion.div>

        {/* Examples Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {beispiele.map((beispiel) => (
            <motion.div
              key={beispiel.branche}
              variants={staggerItem}
              className="group bg-white rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50/50 p-5 border-b border-neutral-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <beispiel.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{beispiel.branche}</h3>
                    <p className="text-xs text-neutral-500">{beispiel.firma}</p>
                  </div>
                </div>
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs font-semibold text-green-700">{beispiel.highlight}</span>
                </div>
              </div>

              {/* Vorher/Nachher */}
              <div className="p-5 space-y-4">
                {/* Vorher */}
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Vorher</p>
                  <ul className="space-y-1.5">
                    {beispiel.vorher.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                        <span className="w-1 h-1 rounded-full bg-red-300 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nachher */}
                <div>
                  <p className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">Mit Finito Pro</p>
                  <ul className="space-y-1.5">
                    {beispiel.nachher.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="w-1 h-1 rounded-full bg-green-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ersparnis */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Ersparnis</span>
                  <span className="text-sm font-bold text-primary-600">{beispiel.ersparnis}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/automationen"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
          >
            Mehr Praxisbeispiele & Automationen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
