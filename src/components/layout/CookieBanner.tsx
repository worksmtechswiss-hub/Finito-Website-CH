"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "finito-cookie-consent";

export function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{t("title")}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {t("description")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <button
                  onClick={reject}
                  className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
                >
                  {t("rejectAll")}
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl hover:shadow-glow-sm transition-all"
                >
                  {t("acceptAll")}
                </button>
              </div>
              <button
                onClick={reject}
                className="absolute top-3 right-3 sm:hidden p-1 text-neutral-500 hover:text-white"
                aria-label="Schliessen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
