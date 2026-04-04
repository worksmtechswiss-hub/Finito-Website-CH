"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Verantwortliche Stelle",
    content: `Verantwortlich für die Datenverarbeitung auf dieser Website ist:

SM Tech GmbH
Schlosstalstrasse 210
8408 Winterthur

E-Mail: hello@finitopro.ch
Website: www.finitopro.ch

Vertretungsberechtigte Person: Lukas Szwedowicz`,
  },
  {
    title: "2. Erhebung und Speicherung personenbezogener Daten",
    content: `Beim Besuch unserer Website werden automatisch folgende Daten erhoben:

- IP-Adresse (anonymisiert)
- Datum und Uhrzeit des Zugriffs
- Aufgerufene Seiten und Dateien
- Referrer-URL
- Verwendeter Browser und Betriebssystem

Diese Daten werden zur technischen Bereitstellung der Website und zur Verbesserung unseres Angebots verwendet. Eine Zuordnung zu einzelnen Personen findet nicht statt.`,
  },
  {
    title: "3. Nutzung der Finito Pro Software",
    content: `Bei der Registrierung und Nutzung von Finito Pro erheben wir:

- Name und Vorname
- E-Mail-Adresse
- Firmenname und Adresse
- Telefonnummer (optional)
- Zahlungsinformationen (bei kostenpflichtigen Abos)

Diese Daten sind für die Vertragserfüllung und Bereitstellung unserer Dienstleistung erforderlich (Art. 6 Abs. 1 lit. b DSGVO).`,
  },
  {
    title: "4. Datenspeicherung und Sicherheit",
    content: `Alle Daten werden auf Servern in der Schweiz gespeichert und sind durch moderne Verschlüsselungstechnologien geschützt.

- Speicherdauer: Geschäftsdaten werden bis zu 25 Jahre aufbewahrt (gesetzliche Aufbewahrungspflicht)
- Verschlüsselung: TLS/SSL-Verschlüsselung bei der Datenübertragung
- Zugriffskontrolle: Mehrstufiges Berechtigungssystem
- Backups: Regelmässige verschlüsselte Backups auf redundanten Systemen`,
  },
  {
    title: "5. Cookies und Tracking",
    content: `Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern:

- Notwendige Cookies: Für die Grundfunktionen der Website erforderlich
- Analyse-Cookies: Google Analytics (mit IP-Anonymisierung) zur Verbesserung unseres Angebots
- Marketing-Cookies: Werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt

Sie können Cookies jederzeit in Ihren Browsereinstellungen deaktivieren.`,
  },
  {
    title: "6. Weitergabe an Dritte",
    content: `Wir geben Ihre personenbezogenen Daten nur weiter, wenn:

- Sie ausdrücklich eingewilligt haben
- Es für die Vertragserfüllung erforderlich ist
- Eine gesetzliche Verpflichtung besteht

Wir setzen folgende Dienstleister ein:
- Hosting-Provider (Schweizer Rechenzentren)
- Zahlungsabwickler (für Abogebühren)
- E-Mail-Dienst (für Transaktions-E-Mails)

Alle Dienstleister sind vertraglich zur Einhaltung des Datenschutzes verpflichtet.`,
  },
  {
    title: "7. Ihre Rechte",
    content: `Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:

- Recht auf Auskunft (Art. 15 DSGVO)
- Recht auf Berichtigung (Art. 16 DSGVO)
- Recht auf Löschung (Art. 17 DSGVO)
- Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
- Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
- Widerspruchsrecht (Art. 21 DSGVO)

Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter hello@finitopro.ch.`,
  },
  {
    title: "8. Änderungen dieser Datenschutzerklärung",
    content: `Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder Änderungen unserer Dienstleistung anzupassen. Die aktuelle Version finden Sie stets auf dieser Seite.

Stand: März 2026`,
  },
];

export function DatenschutzContent() {
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
              <span className="gradient-text-animated">Datenschutz</span>
            </h1>
            <p className="text-lg text-white/60">
              Ihre Daten sind bei uns sicher - gespeichert in der Schweiz,
              geschützt nach höchsten Standards.
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
