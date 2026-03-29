"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, ArrowRight, MapPin } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

function ContactAnimation() {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50">
      {/* Floating envelope */}
      <motion.div
        className="absolute"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope body */}
          <rect x="10" y="22" width="60" height="40" rx="4" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="2"/>
          {/* Envelope flap */}
          <path d="M10 26L40 46L70 26" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Envelope lines */}
          <line x1="10" y1="58" x2="30" y2="42" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
          <line x1="70" y1="58" x2="50" y2="42" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Floating phone icon - top left */}
      <motion.div
        className="absolute top-6 left-8"
        animate={{
          y: [0, -8, 0],
          x: [0, 4, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="2" width="28" height="32" rx="4" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" strokeWidth="1.5"/>
          <circle cx="18" cy="28" r="2" fill="#a78bfa"/>
          <line x1="12" y1="6" x2="24" y2="6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Floating chat bubble - top right */}
      <motion.div
        className="absolute top-8 right-10"
        animate={{
          y: [0, -6, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h32a2 2 0 012 2v18a2 2 0 01-2 2H12l-6 6V26H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="1.5"/>
          <circle cx="13" cy="15" r="2" fill="#7c3aed" opacity="0.5"/>
          <circle cx="20" cy="15" r="2" fill="#7c3aed" opacity="0.5"/>
          <circle cx="27" cy="15" r="2" fill="#7c3aed" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Floating @ symbol - bottom left */}
      <motion.div
        className="absolute bottom-6 left-12"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="16" cy="16" r="5" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6"/>
          <path d="M21 16v2a3 3 0 006 0v-2" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Small dots decoration */}
      <motion.div
        className="absolute bottom-8 right-8"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="2" fill="#a78bfa" opacity="0.5"/>
          <circle cx="12" cy="4" r="2" fill="#8b5cf6" opacity="0.3"/>
          <circle cx="20" cy="4" r="2" fill="#a78bfa" opacity="0.5"/>
          <circle cx="4" cy="12" r="2" fill="#8b5cf6" opacity="0.3"/>
          <circle cx="12" cy="12" r="2" fill="#a78bfa" opacity="0.5"/>
          <circle cx="20" cy="12" r="2" fill="#8b5cf6" opacity="0.3"/>
        </svg>
      </motion.div>
    </div>
  );
}

export function KontaktContent() {
  const [formData, setFormData] = useState({
    firma: "",
    name: "",
    telefon: "",
    email: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero Section */}
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
              <span className="gradient-text-animated">Kontakt</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Haben Sie Fragen zu Finito Pro? Wir sind gerne für Sie da und
              helfen Ihnen weiter.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-12 lg:gap-16"
          >
            {/* Contact Info */}
            <motion.div variants={staggerItem} className="lg:col-span-2 space-y-8">
              {/* Animated illustration */}
              <ContactAnimation />

              <div>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Sprechen Sie mit uns
                </h2>
                <p className="text-neutral-500 leading-relaxed">
                  Unser Team aus der Schweiz steht Ihnen persönlich zur
                  Verfügung. Egal ob Sie eine Demo möchten, Fragen haben oder
                  Feedback geben wollen.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:hello@finitopro.ch"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-card transition-all"
                >
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">E-Mail</h3>
                    <p className="text-sm text-primary-600">hello@finitopro.ch</p>
                    <p className="text-xs text-neutral-400 mt-1">
                      Wir antworten innert 24 Stunden
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/41795551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-neutral-100 hover:border-accent-200 hover:shadow-card transition-all"
                >
                  <div className="w-11 h-11 bg-accent-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">WhatsApp</h3>
                    <p className="text-sm text-accent-600">Jetzt chatten</p>
                    <p className="text-xs text-neutral-400 mt-1">
                      Schnelle Antworten, persönlicher Kontakt
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-100">
                  <div className="w-11 h-11 bg-surface-light-secondary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Standort</h3>
                    <p className="text-sm text-neutral-500">Schweiz</p>
                    <p className="text-xs text-neutral-400 mt-1">
                      100% Schweizer Unternehmen
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-4">
                <p className="text-sm text-neutral-400 mb-3">Oder direkt loslegen:</p>
                <motion.a
                  href="https://app.finitopro.ch/register"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-xl text-sm shadow-glow-sm hover:shadow-glow transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  30 Tage gratis testen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={staggerItem} className="lg:col-span-3 relative">
              <div className="bg-surface-light-secondary rounded-2xl border border-neutral-100 p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                  Nachricht senden
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-success" />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                      Nachricht gesendet!
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      Vielen Dank, wir melden uns bei Ihnen.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="firma"
                          className="block text-sm font-medium text-neutral-700 mb-1.5"
                        >
                          Firma
                        </label>
                        <input
                          type="text"
                          id="firma"
                          value={formData.firma}
                          onChange={(e) =>
                            setFormData({ ...formData, firma: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                          placeholder="Ihre Firma"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 mb-1.5"
                        >
                          Name <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                          placeholder="Ihr Name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="telefon"
                          className="block text-sm font-medium text-neutral-700 mb-1.5"
                        >
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="telefon"
                          value={formData.telefon}
                          onChange={(e) =>
                            setFormData({ ...formData, telefon: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                          placeholder="+41 79 000 00 00"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 mb-1.5"
                        >
                          E-Mail <span className="text-error">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                          placeholder="ihre@email.ch"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="nachricht"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Nachricht <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="nachricht"
                        required
                        rows={5}
                        value={formData.nachricht}
                        onChange={(e) =>
                          setFormData({ ...formData, nachricht: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-medium rounded-xl text-sm shadow-glow-sm hover:shadow-glow transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Nachricht senden
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
