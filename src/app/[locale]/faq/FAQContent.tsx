"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Gibt es eine kostenlose Testversion?",
    answer:
      "Ja! Sie können Finito Pro 30 Tage lang kostenlos und unverbindlich testen. Keine Kreditkarte nötig, keine versteckten Kosten. Sie erhalten vollen Zugriff auf alle KMU-Funktionen. Nach Ablauf der Testphase können Sie ein Abo wählen oder den kostenlosen Starter-Plan nutzen.",
    category: "Allgemein",
  },
  {
    question: "Wann kann ich mein Abo kündigen?",
    answer:
      "Sie können Ihr Abonnement jederzeit kündigen - ohne Kündigungsfrist oder versteckte Gebühren. Die Differenz für den restlichen Zeitraum wird Ihnen anteilig erstattet. Ihre Daten bleiben danach noch 90 Tage verfügbar, damit Sie alles in Ruhe exportieren können.",
    category: "Allgemein",
  },
  {
    question: "Kann ich zusätzliche Funktionen anfordern?",
    answer:
      "Ja, absolut! Wir entwickeln Finito Pro kontinuierlich weiter, basierend auf dem Feedback unserer Nutzer. Teilen Sie uns Ihre Wünsche mit und wir prüfen die Umsetzung. Grossfirmen-Kunden können sogar individuelle Features beauftragen, die speziell auf ihre Bedürfnisse zugeschnitten werden.",
    category: "Funktionen",
  },
  {
    question: "Wie behalte ich die Übersicht über alle Projekte?",
    answer:
      "Finito Pro bietet ein übersichtliches Dashboard mit allen laufenden Projekten auf einen Blick. Zusätzlich gibt es eine separate Projektsektion, in der Sie nach Status, Kunde, Datum und Team filtern können. Jedes Projekt zeigt den Fortschritt, offene Aufgaben und zugewiesene Mitarbeiter an.",
    category: "Funktionen",
  },
  {
    question: "Wie lange bleiben meine Daten gespeichert?",
    answer:
      "Ihre Daten werden 25 Jahre lang sicher und verschlüsselt auf Schweizer Servern gespeichert. Sie haben jederzeit vollen Zugriff auf alle Ihre historischen Projekte, Rechnungen und Dokumente. Wir halten uns strikt an die Schweizer Datenschutzgesetze und die DSGVO.",
    category: "Sicherheit",
  },
  {
    question: "Gibt es eine mobile Version?",
    answer:
      "Ja! Die Finito Mitarbeiter-App funktioniert auf jedem Smartphone und Tablet - egal ob iPhone, Android oder iPad. Ihre Mitarbeiter können Zeiten erfassen, Fotos hochladen, Aufgaben einsehen und mit dem Team kommunizieren - alles von unterwegs. Die App synchronisiert automatisch mit dem Desktop.",
    category: "Funktionen",
  },
  {
    question: "Kann ich mit Finito Pro Rechnungen erstellen?",
    answer:
      "Ja, Finito Pro erstellt professionelle Rechnungen mit Swiss QR-Code, die den Schweizer Standards entsprechen. Rechnungen können automatisch aus Projekten generiert oder manuell erstellt werden. Jede Rechnung enthält einen QR-Einzahlungsschein, der direkt per E-Mail oder Post versendet werden kann.",
    category: "Funktionen",
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer:
      "Sie können Ihr Abo monatlich oder jährlich (mit 2 Monaten gratis) bezahlen. Wir akzeptieren Kreditkarten (Visa, Mastercard, American Express) und Rechnung. Für Grossfirmen bieten wir individuelle Zahlungsvereinbarungen an.",
    category: "Allgemein",
  },
  {
    question: "Kann ich Teammitglieder einladen und Zugriffsrechte verwalten?",
    answer:
      "Ja, Sie können beliebig viele Teammitglieder einladen. Für jeden User können individuelle Zugriffsrechte festgelegt werden - von Administrator bis Mitarbeiter mit eingeschränktem Zugriff. So behalten Sie die Kontrolle darüber, wer was sehen und bearbeiten kann.",
    category: "Funktionen",
  },
  {
    question: "Gibt es eine Integration mit anderen Tools?",
    answer:
      "Ja, Finito Pro bietet eine REST-API für die Integration mit anderen Softwarelösungen. Standardmässig unterstützen wir Verbindungen zu gängigen Buchhaltungstools und Kalendern. Grossfirmen-Kunden können zusätzlich Custom Integrationen beauftragen.",
    category: "Funktionen",
  },
  {
    question: "Wie erreiche ich den technischen Support?",
    answer:
      "Unser Support-Team erreichen Sie per E-Mail an hello@finitopro.ch oder direkt über den In-App Chat. KMU-Kunden erhalten in der Regel innerhalb von 24 Stunden eine Antwort. Grossfirmen-Kunden haben Zugang zu einem dedizierten Support-Manager und priorisierten Antwortzeiten.",
    category: "Support",
  },
  {
    question: "Kann ich wiederkehrende Wartungsverträge verwalten?",
    answer:
      "Ja! Mit der Service-Abo-Funktion können Sie wiederkehrende Wartungsverträge erstellen und automatisieren. Das System erinnert Sie und Ihre Kunden automatisch an fällige Wartungen, erstellt die entsprechenden Aufträge und kann die Rechnungen automatisch generieren.",
    category: "Funktionen",
  },
];

const categories = ["Alle", "Allgemein", "Funktionen", "Sicherheit", "Support"];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "Alle" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <span className="gradient-text-animated">Häufige Fragen</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um
              Finito Pro.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Frage suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-surface-light-secondary border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-glow-sm"
                    : "bg-surface-light-secondary text-neutral-600 hover:bg-neutral-100"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <button
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all",
                    openIndex === i
                      ? "bg-white border-primary-100 shadow-card"
                      : "bg-white border-neutral-100 hover:border-primary-100"
                  )}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-surface-light-secondary text-neutral-500 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="font-medium text-neutral-900">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300",
                        openIndex === i && "rotate-180 text-primary-500"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-0 sm:pl-[calc(2rem+0.75rem)] text-neutral-500 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-neutral-400 mb-4">
                Keine Fragen zu diesem Suchbegriff gefunden.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Alle");
                }}
                className="text-primary-600 text-sm font-medium hover:underline"
              >
                Filter zurücksetzen
              </button>
            </motion.div>
          )}
          </div>

          {/* Sidebar with app mockup and support icon */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center gap-8 sticky top-32"
          >
            {/* Customer support icon */}
            <div className="w-full bg-primary-50 rounded-2xl p-6 border border-primary-100 text-center">
              <Image
                src="/images/customer-support.svg"
                alt="Kundensupport"
                width={64}
                height={64}
                className="w-16 h-16 mx-auto mb-3"
              />
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                Brauchen Sie Hilfe?
              </h3>
              <p className="text-xs text-neutral-500 mb-3">
                Unser Support-Team hilft Ihnen gerne weiter.
              </p>
              <a
                href="mailto:hello@finitopro.ch"
                className="text-xs font-medium text-primary-600 hover:underline"
              >
                hello@finitopro.ch
              </a>
            </div>

            {/* Mobile app mockup */}
            <div className="relative">
              <Image
                src="/images/Finito-Mob.png"
                alt="Finito Pro Mobile App - Immer dabei"
                width={240}
                height={480}
                className="w-full max-w-[220px] h-auto drop-shadow-xl"
                sizes="220px"
              />
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-surface-light-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-neutral-500 mb-8">
              Kontaktieren Sie uns - wir helfen Ihnen gerne persönlich weiter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://app.finitopro.ch/register"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-2xl text-sm shadow-glow-sm hover:shadow-glow transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                30 Tage gratis testen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a
                href="mailto:hello@finitopro.ch"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-200 text-neutral-700 font-medium rounded-2xl text-sm hover:bg-white hover:shadow-card transition-all"
              >
                E-Mail schreiben
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
