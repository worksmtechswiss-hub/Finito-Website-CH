"use client";

import { motion } from "framer-motion";

export function ImpressumContent() {
  return (
    <>
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
              <span className="gradient-text-animated">Impressum</span>
            </h1>
            <p className="text-lg text-white/60">
              Angaben gemäss Schweizer Recht.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Kontaktadresse</h2>
              <div className="text-neutral-600 leading-relaxed text-sm">
                <p>Finito Pro</p>
                <p>Schweiz</p>
                <p className="mt-2">E-Mail: hello@finitopro.ch</p>
                <p>Website: www.finitopro.ch</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Vertretungsberechtigte Personen</h2>
              <p className="text-neutral-600 text-sm">
                Carlos, Lukas, Kamil, Nico, Izabela, Natalia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Haftungsausschluss</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
                Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit
                der Informationen. Haftungsansprüche gegen den Autor wegen Schäden
                materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung
                bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der
                Verbindung oder durch technische Störungen entstanden sind, werden
                ausgeschlossen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Haftung für Links</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
                Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten
                abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene
                Gefahr des Nutzers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">Urheberrechte</h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
                anderen Dateien auf dieser Website gehören ausschliesslich Finito Pro oder
                den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher
                Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus
                einzuholen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
