"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Heart, Users, Rocket, Target, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Wir entwickeln moderne Lösungen, die den Arbeitsalltag von KMU tatsächlich vereinfachen. Keine überladenen Systeme, sondern smarte Tools.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Einfachheit",
    description:
      "Software muss einfach sein. Unsere Nutzer sollen ohne Schulung sofort loslegen können. Jede Funktion wird mit Blick auf Benutzerfreundlichkeit entwickelt.",
    color: "accent" as const,
  },
  {
    icon: Users,
    title: "Kundennähe",
    description:
      "Wir hören unseren Kunden zu. Ihre Rückmeldungen fliessen direkt in die Entwicklung ein. Persönlicher Support ist für uns selbstverständlich.",
    color: "primary" as const,
  },
];

const team = [
  { name: "Carlos", image: "/images/carlos 1.svg" },
  { name: "Lukas", image: "/images/lukas 1.svg" },
  { name: "Kamil", image: "/images/kamil 1.svg" },
  { name: "Nico", image: "/images/Nico.svg" },
  { name: "Izabela", image: "/images/iza 1.svg" },
  { name: "Natalia", image: "/images/natalia 1.svg" },
  { name: "Ivan", image: "/images/ivan 1.svg" },
];

export function TeamContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              <span className="gradient-text-animated">Die Finito Story</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Unsere Software für Dienstleister - entwickelt in der Schweiz, für
              Schweizer KMU.
            </p>
          </motion.div>
        </div>


      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-8">
              Warum <span className="gradient-text">Finito Pro</span>?
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Wir glauben, dass kleine und mittelständische Unternehmen das
                Fundament unserer Gesellschaft bilden. Handwerker, Dienstleister
                und lokale Betriebe verdienen die gleiche Qualität an Software
                wie grosse Konzerne - nur eben zugeschnitten auf ihre
                Bedürfnisse.
              </p>
              <p>
                Finito Pro entstand aus der direkten Zusammenarbeit mit
                Handwerksbetrieben in der Schweiz. Wir haben zugehört, verstanden
                und eine Lösung gebaut, die wirklich funktioniert: intuitiv,
                bezahlbar und Swiss Made.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Drei Prinzipien, die uns bei jeder Entscheidung leiten.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all text-center"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    value.color === "primary"
                      ? "bg-primary-50"
                      : "bg-accent-50"
                  )}
                >
                  <value.icon
                    className={cn(
                      "w-7 h-7",
                      value.color === "primary"
                        ? "text-primary-600"
                        : "text-accent-500"
                    )}
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Atmospheric background image */}
        <div className="absolute inset-0 opacity-[0.03]">
          <Image
            src="/images/4459292-Kopie.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/images/Vision.png"
                alt="Die Vision von Finito Pro - Software für Schweizer KMU"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-2xl p-8 sm:p-10 border border-primary-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Unsere Vision
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Jeder Handwerksbetrieb in der Schweiz hat eine Software, die mit
                ihm wächst. Wir wollen die erste Wahl für KMU sein, die ihre
                Prozesse digitalisieren möchten - einfach, sicher und fair.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent-50 to-primary-50/30 rounded-2xl p-8 sm:p-10 border border-accent-100"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Unsere Mission
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Wir entwickeln die intuitivste All-in-One-Software für Schweizer
                KMU. Von der Offerte bis zur Rechnung, von der Zeiterfassung bis
                zum Kundenportal - alles in einer Lösung, die jeder versteht.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface-light-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Das Team
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Unser Team mit einer gemeinsamen Leidenschaft: Software, die KMU
              wirklich hilft.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10"
          >
            {/* Row 1: first 4 members */}
            <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
              {team.slice(0, 4).map((member) => (
                <motion.div
                  key={member.name}
                  variants={staggerItem}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-card group-hover:shadow-card-hover transition-all group-hover:scale-105 ring-3 ring-white">
                      <Image
                        src={member.image}
                        alt={`${member.name} bei Finito Pro`}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 640px) 96px, 112px"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-lg">
                    {member.name}
                  </h3>
                </motion.div>
              ))}
            </div>
            {/* Row 2: remaining members */}
            <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
              {team.slice(4).map((member) => (
                <motion.div
                  key={member.name}
                  variants={staggerItem}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-card group-hover:shadow-card-hover transition-all group-hover:scale-105 ring-3 ring-white">
                      <Image
                        src={member.image}
                        alt={`${member.name} bei Finito Pro`}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 640px) 96px, 112px"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-lg">
                    {member.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Group Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card-hover"
          >
            <Image
              src="/images/team-2.png"
              alt="Das Finito Pro Team - gemeinsam für Schweizer KMU"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">Unser Team</p>
              <p className="text-white/70 text-sm">Gemeinsam für Schweizer KMU</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
              Überzeugen Sie sich selbst
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Testen Sie Finito Pro 30 Tage kostenlos und erleben Sie, wie
              einfach Ihr Geschäftsalltag sein kann.
            </p>
            <motion.a
              href="https://app.finitopro.ch/register"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt gratis starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
