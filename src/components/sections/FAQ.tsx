"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqKeys = [
  "freeTrialQ", "freeTrialA",
  "cancelQ", "cancelA",
  "customFeaturesQ", "customFeaturesA",
  "projectOverviewQ", "projectOverviewA",
  "dataRetentionQ", "dataRetentionA",
] as const;

const faqs = [
  {
    questionDe: "Gibt es eine kostenlose Testversion?",
    answerDe: "Ja! Sie können Finito Pro 30 Tage lang kostenlos und unverbindlich testen. Keine Kreditkarte nötig, keine versteckten Kosten. Unser freundliches Team hilft Ihnen gerne beim Einstieg.",
  },
  {
    questionDe: "Wann kann ich mein Abo kündigen?",
    answerDe: "Sie können Ihr Abonnement jederzeit kündigen. Die Differenz für den restlichen Zeitraum wird Ihnen erstattet. Keine langfristigen Verträge oder versteckten Gebühren.",
  },
  {
    questionDe: "Kann ich zusätzliche Funktionen anfordern?",
    answerDe: "Ja, absolut! Wir entwickeln Finito kontinuierlich weiter, basierend auf dem Feedback unserer Nutzer. Teilen Sie uns Ihre Wünsche mit und wir prüfen die Umsetzung.",
  },
  {
    questionDe: "Wie lange bleiben meine Daten gespeichert?",
    answerDe: "Ihre Daten werden 25 Jahre lang sicher und verschlüsselt auf Schweizer Servern gespeichert. Sie haben jederzeit vollen Zugriff auf alle Ihre historischen Projekte und Dokumente.",
  },
  {
    questionDe: "Gibt es eine mobile App?",
    answerDe: "Ja! Die Finito Mitarbeiter-App funktioniert auf jedem Smartphone und Tablet. Ihre Mitarbeiter können Zeiten erfassen, Fotos hochladen, Aufgaben einsehen und mit dem Team kommunizieren – alles von unterwegs.",
  },
];

export function FAQ({ showAll = false }: { showAll?: boolean }) {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-24 bg-surface-light-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-500">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-3">
          {displayFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
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
                  <h3 className="font-medium text-neutral-900">
                    {faq.questionDe}
                  </h3>
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
                      <p className="pt-3 text-neutral-500 leading-relaxed text-sm">
                        {faq.answerDe}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
            >
              {t("viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
