"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Geltungsbereich",
    content: `Diese Allgemeinen Geschaeftsbedingungen (AGB) gelten für die Nutzung der Software-Plattform "Finito Pro" sowie aller damit verbundenen Dienstleistungen. Mit der Registrierung oder Nutzung der Plattform akzeptieren Sie diese AGB.`,
  },
  {
    title: "2. Vertragsgegenstand",
    content: `Finito Pro stellt eine cloudbasierte Software-as-a-Service (SaaS) Lösung zur Verfügung, die KMU bei der Verwaltung von Projekten, Kunden, Rechnungen, Zeiterfassung und weiteren Geschaeftsprozessen unterstützt.`,
  },
  {
    title: "3. Registrierung und Kontofuehrung",
    content: `- Die Registrierung ist kostenlos und fuehrt zu einer 30-taegigen Testphase
- Sie sind für die Richtigkeit Ihrer Angaben verantwortlich
- Login-Daten muessen vertraulich behandelt werden
- Jedes Konto darf nur von einer Organisation genutzt werden
- Sie sind für alle Aktivitaeten unter Ihrem Konto verantwortlich`,
  },
  {
    title: "4. Leistungsumfang und Verfügbarkeit",
    content: `- Der Funktionsumfang richtet sich nach dem gewaehlten Abonnement (Starter, KMU, Grossfirmen)
- Wir sind bemueht, eine Verfügbarkeit von 99,5% zu gewährleisten
- Geplante Wartungsarbeiten werden im Voraus angekündigt
- Wir behalten uns das Recht vor, die Plattform weiterzuentwickeln und Funktionen anzupassen`,
  },
  {
    title: "5. Preise und Zahlungsbedingungen",
    content: `- Die aktuellen Preise finden Sie auf unserer Preisseite
- Alle Preise verstehen sich in CHF und exklusive MwSt
- Rechnungen werden monatlich oder jaehrlich im Voraus gestellt
- Zahlungen sind innerhalb von 30 Tagen faellig
- Bei Zahlungsverzug behalten wir uns das Recht vor, den Zugang einzuschraenken`,
  },
  {
    title: "6. Kündigungsbedingungen",
    content: `- Das Abonnement kann jederzeit gekündigt werden
- Die Kündigung wird zum Ende des laufenden Abrechnungszeitraums wirksam
- Nach Kündigung bleiben Ihre Daten noch 90 Tage verfügbar für den Export
- Der Starter-Plan (gratis) kann jederzeit ohne Frist gekündigt werden`,
  },
  {
    title: "7. Datenschutz und Datensicherheit",
    content: `- Alle Daten werden auf Servern in der Schweiz gespeichert
- Wir halten das Schweizer Datenschutzgesetz (DSG) und die DSGVO ein
- Nähere Informationen finden Sie in unserer separaten Datenschutzerklaerung
- Daten werden verschluesselt übertragen und gespeichert
- Regelmaessige Sicherheitsaudits gewährleisten den Schutz Ihrer Daten`,
  },
  {
    title: "8. Geistiges Eigentum",
    content: `- Die Software, einschliesslich Code, Design und Dokumentation, ist Eigentum von Finito Pro
- Sie erhalten ein nicht-exklusives, nicht übertragbares Nutzungsrecht für die Dauer des Abonnements
- Ihre Inhalte und Daten bleiben Ihr Eigentum
- Sie gewähren uns das Recht, Ihre Daten zur Bereitstellung der Dienstleistung zu verarbeiten`,
  },
  {
    title: "9. Haftungsbeschraenkung",
    content: `- Finito Pro haftet nicht für indirekte Schaeden oder entgangenen Gewinn
- Die Haftung ist auf den Betrag der in den letzten 12 Monaten gezahlten Gebühren beschraenkt
- Wir übernehmen keine Haftung für Datenverlust, soweit regelmaessige Backups durchgeführt werden
- Hoehere Gewalt (Naturkatastrophen, Stromausfaelle, etc.) schliesst die Haftung aus`,
  },
  {
    title: "10. Änderungen der AGB",
    content: `Wir behalten uns das Recht vor, diese AGB jederzeit anzupassen. Wesentliche Änderungen werden mindestens 30 Tage im Voraus per E-Mail angekündigt. Die weitere Nutzung nach Inkrafttreten der Änderungen gilt als Zustimmung.

Stand: Maerz 2026`,
  },
  {
    title: "11. Anwendbares Recht und Gerichtsstand",
    content: `Es gilt Schweizer Recht. Gerichtsstand ist Zuerich, Schweiz. Für Verbraucher gelten die zwingenden Bestimmungen des Wohnsitzstaates.`,
  },
];

export function AGBsContent() {
  return (
    <>
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
              <span className="gradient-text-animated">Allgemeine Geschaeftsbedingungen</span>
            </h1>
            <p className="text-lg text-white/60">
              Nutzungsbedingungen für die Finito Pro Plattform.
            </p>
          </motion.div>
        </div>

      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-neutral-600 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
