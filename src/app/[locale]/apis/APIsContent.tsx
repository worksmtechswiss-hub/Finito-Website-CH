"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Lock, Zap, BookOpen } from "lucide-react";

export function APIsContent() {
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
              <span className="gradient-text-animated">API</span> Dokumentation
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Integrieren Sie Finito Pro in Ihre bestehenden Systeme. Unsere
              REST API ermöglicht nahtlose Automatisierung und Datenaustausch.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* API Features */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Code2,
                title: "REST API",
                desc: "Vollstaendige REST API mit JSON-Responses. Einfach zu integrieren in jede Programmiersprache.",
              },
              {
                icon: Lock,
                title: "Sichere Authentifizierung",
                desc: "API-Keys und OAuth 2.0 für sichere Zugriffskontrolle. Granulare Berechtigungen pro Endpunkt.",
              },
              {
                icon: Zap,
                title: "Webhooks",
                desc: "Echtzeit-Benachrichtigungen bei Ereignissen wie neuen Rechnungen, Projektupdates oder Zeiteintraegen.",
              },
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

          {/* Swagger Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-neutral-200 overflow-hidden shadow-card"
          >
            <div className="bg-surface-dark px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-accent-400" />
                <span className="text-white font-medium text-sm">API Explorer</span>
              </div>
              <span className="text-xs text-white/40 font-mono">v1.0</span>
            </div>
            <div className="bg-white">
              <iframe
                src="https://api.finitopro.ch/docs"
                className="w-full border-0"
                style={{ height: "700px" }}
                title="Finito Pro API Documentation"
              />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-16"
          >
            <p className="text-neutral-500 mb-6">
              API-Zugang ist im KMU- und Grossfirmen-Paket enthalten.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt starten
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
