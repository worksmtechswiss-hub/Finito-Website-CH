"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Smartphone, Clock, Camera, MapPin, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const appFeatures = [
  {
    icon: Clock,
    title: "Zeiterfassung",
    desc: "Start/Stopp mit einem Klick – automatisch dem richtigen Projekt zugeordnet.",
  },
  {
    icon: Camera,
    title: "Foto-Dokumentation",
    desc: "Fotos direkt aufnehmen, automatisch ins Projekt hochgeladen.",
  },
  {
    icon: CheckCircle,
    title: "Aufgaben",
    desc: "Alle zugewiesenen Aufgaben auf einen Blick – wissen was zu tun ist.",
  },
  {
    icon: MapPin,
    title: "Navigation",
    desc: "Baustellen-Adresse eingeben und direkt losnavigieren.",
  },
  {
    icon: MessageCircle,
    title: "Kommunikation",
    desc: "Team-Chat und Projekt-Updates in Echtzeit.",
  },
  {
    icon: Smartphone,
    title: "Regierapporte",
    desc: "Digitale Rapporte erstellen – direkt auf dem Smartphone.",
  },
];

export function MitarbeiterApp() {
  return (
    <section className="py-24 bg-surface-light-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/15 to-accent-400/10 rounded-3xl blur-3xl" />
              <Image
                src="/images/phone3 1.png"
                alt="Finito Pro Mitarbeiter-App — Time Tracking auf dem Smartphone"
                width={600}
                height={700}
                className="relative w-[320px] sm:w-[400px] h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-6">
              <Smartphone className="w-4 h-4" />
              Mitarbeiter-App
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Ihr Team immer <span className="gradient-text">verbunden</span>
            </h2>

            <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
              Die Finito App funktioniert auf jedem Smartphone. Ihre Mitarbeiter haben alles
              was sie brauchen direkt in der Hosentasche – von der Zeiterfassung bis zur Navigation.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {appFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 bg-primary-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <feature.icon className="w-4.5 h-4.5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-sm mb-0.5">{feature.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link
              href="/features/mitarbeiter-app"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all group"
            >
              Mehr über die Mitarbeiter-App
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
