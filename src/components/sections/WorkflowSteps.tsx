"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Animated SVG: Document with checkmark appearing */
function OfferteAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-24 h-24 mx-auto mb-6">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document */}
        <motion.rect
          x="20"
          y="8"
          width="56"
          height="72"
          rx="8"
          fill="#f5f3ff"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        />
        {/* Lines on document */}
        {[28, 40, 52].map((y, i) => (
          <motion.rect
            key={y}
            x="32"
            y={y}
            width={i === 2 ? 24 : 32}
            height="4"
            rx="2"
            fill="#c4b5fd"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
            style={{ transformOrigin: "left center" }}
          />
        ))}
        {/* Checkmark circle */}
        <motion.circle
          cx="68"
          cy="68"
          r="16"
          fill="#8b5cf6"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.9, type: "spring", stiffness: 200 }}
        />
        {/* Checkmark */}
        <motion.path
          d="M61 68L65.5 72.5L75 63"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
      </svg>
    </div>
  );
}

/* Animated SVG: Progress bar filling */
function ProjektAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-24 h-24 mx-auto mb-6">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Card background */}
        <motion.rect
          x="12"
          y="16"
          width="72"
          height="64"
          rx="10"
          fill="#f5f3ff"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        {/* Title bar */}
        <motion.rect
          x="24"
          y="28"
          width="36"
          height="5"
          rx="2.5"
          fill="#a78bfa"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ transformOrigin: "left center" }}
        />
        {/* Progress bar track */}
        <motion.rect
          x="24"
          y="44"
          width="48"
          height="8"
          rx="4"
          fill="#ede9fe"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
        {/* Progress bar fill */}
        <motion.rect
          x="24"
          y="44"
          width="48"
          height="8"
          rx="4"
          fill="url(#progressGradient)"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
        />
        {/* Percentage text */}
        <motion.text
          x="24"
          y="66"
          fill="#8b5cf6"
          fontSize="11"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          100%
        </motion.text>
        <defs>
          <linearGradient id="progressGradient" x1="24" y1="48" x2="72" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* Animated SVG: Receipt sliding in */
function RechnungAnimation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-24 h-24 mx-auto mb-6">
      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Receipt shape */}
        <motion.path
          d="M24 12h48a4 4 0 014 4v64l-6-4-6 4-6-4-6 4-6-4-6 4-6-4-6 4V16a4 4 0 014-4z"
          fill="#f5f3ff"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        />
        {/* Line items */}
        {[28, 40, 52].map((y, i) => (
          <motion.g key={y}>
            <motion.rect
              x="32"
              y={y}
              width={20 + i * 4}
              height="4"
              rx="2"
              fill="#c4b5fd"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
            />
            <motion.rect
              x="58"
              y={y}
              width="12"
              height="4"
              rx="2"
              fill="#ddd6fe"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.55 + i * 0.15 }}
            />
          </motion.g>
        ))}
        {/* Total line */}
        <motion.line
          x1="32"
          y1="62"
          x2="70"
          y2="62"
          stroke="#a78bfa"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.4, delay: 1 }}
        />
        <motion.text
          x="56"
          y="74"
          fill="#8b5cf6"
          fontSize="10"
          fontWeight="bold"
          textAnchor="end"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 1.3 }}
        >
          CHF
        </motion.text>
      </svg>
    </div>
  );
}

const stepAnimations = [OfferteAnimation, ProjektAnimation, RechnungAnimation];

export function WorkflowSteps() {
  const t = useTranslations("workflow");
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  const stepData = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div ref={lineRef} className="grid md:grid-cols-3 gap-12 relative">
          {/* Animated connecting line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%]">
            <motion.div
              className="h-[2px] bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#8b5cf6]"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ transformOrigin: "left center" }}
            />
          </div>

          {stepData.map((step, i) => {
            const AnimationComponent = stepAnimations[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center"
              >
                {/* Step number badge */}
                <motion.div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 bg-[#8b5cf6] rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.2, type: "spring" }}
                >
                  {i + 1}
                </motion.div>

                {/* Animated SVG Illustration */}
                <div className="pt-6">
                  <AnimationComponent />
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
