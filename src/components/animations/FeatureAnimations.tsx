"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared wrapper                                                     */
/* ------------------------------------------------------------------ */
function AnimationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary-50/80 to-accent-50/40 border border-primary-100/50 flex items-center justify-center overflow-hidden relative">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Dashboard – animated bar chart                                  */
/* ------------------------------------------------------------------ */
function DashboardAnimation() {
  const bars = [
    { h: 40, delay: 0 },
    { h: 60, delay: 0.1 },
    { h: 35, delay: 0.2 },
    { h: 75, delay: 0.3 },
    { h: 50, delay: 0.4 },
    { h: 65, delay: 0.5 },
  ];
  return (
    <AnimationWrapper>
      <div className="flex items-end gap-2 h-20">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-5 rounded-t-md bg-gradient-to-t from-primary-500 to-primary-300"
            initial={{ height: 0 }}
            whileInView={{ height: bar.h }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: bar.delay, ease: "easeOut" }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-3 right-3 text-xs font-bold text-primary-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        +24%
      </motion.div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Projektmanagement – animated kanban cards                       */
/* ------------------------------------------------------------------ */
function ProjektAnimation() {
  return (
    <AnimationWrapper>
      <div className="flex gap-3 px-3">
        {["Offen", "In Arbeit", "Erledigt"].map((col, ci) => (
          <div key={col} className="flex flex-col gap-1.5 w-20">
            <span className="text-[9px] font-semibold text-neutral-400 text-center">{col}</span>
            {[0, 1].map((ri) => (
              <motion.div
                key={ri}
                className={`h-5 rounded-md ${ci === 2 ? "bg-green-200 border-green-300" : ci === 1 ? "bg-accent-100 border-accent-200" : "bg-white border-neutral-200"} border shadow-sm`}
                initial={{ opacity: 0, x: ci === 0 ? -20 : ci === 2 ? 20 : 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.15 + ri * 0.1 }}
              />
            ))}
          </div>
        ))}
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  3. QR-Rechnungen – QR code with scan line                          */
/* ------------------------------------------------------------------ */
function QRAnimation() {
  return (
    <AnimationWrapper>
      <div className="relative w-16 h-16">
        {/* QR grid */}
        <div className="grid grid-cols-5 grid-rows-5 gap-0.5 w-full h-full">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className={`rounded-[2px] ${[0,1,4,5,6,9,10,14,15,16,19,20,21,24].includes(i) ? "bg-neutral-800" : "bg-neutral-200"}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
            />
          ))}
        </div>
        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
          initial={{ top: 0 }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.span
        className="absolute bottom-2 text-[9px] font-semibold text-primary-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        CHF 1&apos;250.00
      </motion.span>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Offerten – document with lines appearing                        */
/* ------------------------------------------------------------------ */
function OffertenAnimation() {
  return (
    <AnimationWrapper>
      <motion.div
        className="w-20 bg-white rounded-lg shadow-md border border-neutral-100 p-2.5 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-8 h-1 bg-primary-400 rounded-full mb-2" />
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`h-1 rounded-full mb-1.5 ${i === 3 ? "w-8 bg-neutral-200" : "w-full bg-neutral-100"}`}
            initial={{ width: 0 }}
            whileInView={{ width: i === 3 ? 32 : "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          />
        ))}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-sm"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
        >
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </motion.div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Zeiterfassung – animated clock                                  */
/* ------------------------------------------------------------------ */
function ZeitAnimation() {
  return (
    <AnimationWrapper>
      <div className="relative w-20 h-20">
        <motion.div
          className="w-full h-full rounded-full border-[3px] border-primary-200 bg-white shadow-inner"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />
        {/* Hour marks */}
        {[0, 90, 180, 270].map((deg) => (
          <div key={deg} className="absolute inset-0 flex items-start justify-center" style={{ transform: `rotate(${deg}deg)` }}>
            <div className="w-0.5 h-2 bg-neutral-300 rounded-full mt-1.5" />
          </div>
        ))}
        {/* Hour hand */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-0.5 h-5 bg-neutral-700 rounded-full origin-bottom"
          style={{ marginLeft: -1, marginTop: -20 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        {/* Minute hand */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-0.5 h-7 bg-primary-500 rounded-full origin-bottom"
          style={{ marginLeft: -1, marginTop: -28 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  6. CRM – contact cards stacking                                    */
/* ------------------------------------------------------------------ */
function CRMAnimation() {
  const contacts = [
    { name: "M. Keller", color: "bg-primary-400" },
    { name: "S. Mueller", color: "bg-accent-400" },
    { name: "R. Baumann", color: "bg-green-400" },
  ];
  return (
    <AnimationWrapper>
      <div className="relative w-36 h-20">
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-lg border border-neutral-100 shadow-sm px-3 py-2 flex items-center gap-2"
            style={{ top: i * 4, left: i * 8, width: "calc(100% - 16px)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className={`w-5 h-5 ${c.color} rounded-full flex items-center justify-center`}>
              <span className="text-[8px] text-white font-bold">{c.name.charAt(0)}</span>
            </div>
            <span className="text-[10px] font-medium text-neutral-700">{c.name}</span>
          </motion.div>
        ))}
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Ferienmanagement – calendar with highlight                      */
/* ------------------------------------------------------------------ */
function FerienAnimation() {
  const days = Array.from({ length: 21 }, (_, i) => i + 1);
  const vacation = [8, 9, 10, 11, 12];
  return (
    <AnimationWrapper>
      <div className="w-36">
        <div className="flex justify-between px-1 mb-1">
          <span className="text-[8px] font-bold text-neutral-500">Juli 2025</span>
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {["M","D","M","D","F","S","S"].map((d,i) => (
            <span key={i} className="text-[7px] text-neutral-300 text-center">{d}</span>
          ))}
          {days.map((d) => (
            <motion.div
              key={d}
              className={`w-4 h-4 rounded-[3px] flex items-center justify-center text-[7px] font-medium
                ${vacation.includes(d)
                  ? "bg-primary-400 text-white"
                  : "bg-white text-neutral-500 border border-neutral-100"
                }`}
              initial={vacation.includes(d) ? { scale: 0.5, opacity: 0 } : {}}
              whileInView={vacation.includes(d) ? { scale: 1, opacity: 1 } : {}}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: vacation.includes(d) ? 0.5 + (d - 8) * 0.08 : 0 }}
            >
              {d}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  8. Foto-Dokumentation – camera shutter                             */
/* ------------------------------------------------------------------ */
function FotoAnimation() {
  return (
    <AnimationWrapper>
      <div className="relative">
        <motion.div
          className="w-20 h-14 bg-white rounded-lg shadow-md border border-neutral-100 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-8 h-8 rounded-full border-[3px] border-primary-300 flex items-center justify-center"
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-primary-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-md shadow-sm flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <span className="text-[8px] font-bold text-white">GPS</span>
        </motion.div>
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  9. Lagerverwaltung – boxes stacking                                */
/* ------------------------------------------------------------------ */
function LagerAnimation() {
  const boxes = [
    { x: 0, y: 0, color: "bg-primary-200 border-primary-300" },
    { x: 20, y: 0, color: "bg-accent-100 border-accent-200" },
    { x: 10, y: -18, color: "bg-primary-300 border-primary-400" },
  ];
  return (
    <AnimationWrapper>
      <div className="relative w-16 h-16 flex items-end justify-center">
        {boxes.map((box, i) => (
          <motion.div
            key={i}
            className={`absolute w-14 h-14 rounded-md border ${box.color} shadow-sm`}
            style={{ left: box.x, bottom: -box.y }}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2, type: "spring", damping: 12 }}
          />
        ))}
      </div>
      <motion.div
        className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-[8px] font-bold px-1.5 py-0.5 rounded-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        3 Artikel tief
      </motion.div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  10. Buchhaltung – numbers scrolling                                */
/* ------------------------------------------------------------------ */
function BuchhaltungAnimation() {
  const rows = [
    { label: "Einnahmen", value: "CHF 48'200", color: "text-green-600" },
    { label: "Ausgaben", value: "CHF 21'340", color: "text-red-500" },
    { label: "Gewinn", value: "CHF 26'860", color: "text-primary-600" },
  ];
  return (
    <AnimationWrapper>
      <div className="w-40 space-y-1.5 px-2">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-between bg-white rounded-md px-2.5 py-1.5 border border-neutral-100 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <span className="text-[9px] text-neutral-400">{row.label}</span>
            <span className={`text-[9px] font-bold ${row.color}`}>{row.value}</span>
          </motion.div>
        ))}
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  11. Mitarbeiter-App – phone with notifications                     */
/* ------------------------------------------------------------------ */
function AppAnimation() {
  return (
    <AnimationWrapper>
      <div className="relative">
        <motion.div
          className="w-14 h-24 bg-neutral-800 rounded-xl border-2 border-neutral-700 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-1 bg-neutral-600 rounded-full mx-auto mt-1" />
          <div className="mt-1.5 px-1 space-y-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-3.5 bg-primary-500/30 rounded-sm"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
        {/* Notification badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-md"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, type: "spring", stiffness: 400 }}
        >
          <span className="text-[8px] text-white font-bold">3</span>
        </motion.div>
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  12. Kundenportal – shared screen                                   */
/* ------------------------------------------------------------------ */
function KundenportalAnimation() {
  return (
    <AnimationWrapper>
      <div className="relative flex items-center gap-3">
        {/* Person 1 */}
        <motion.div
          className="w-8 h-8 rounded-full bg-primary-400 flex items-center justify-center shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[10px] text-white font-bold">F</span>
        </motion.div>
        {/* Connection line */}
        <motion.div
          className="w-10 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        {/* Shared doc */}
        <motion.div
          className="w-12 h-14 bg-white rounded-lg border border-neutral-100 shadow-sm p-1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="w-full h-1 bg-primary-200 rounded-full mb-1" />
          <div className="w-3/4 h-1 bg-neutral-100 rounded-full mb-1" />
          <div className="w-full h-1 bg-neutral-100 rounded-full" />
        </motion.div>
        {/* Connection line */}
        <motion.div
          className="w-10 h-0.5 bg-gradient-to-r from-accent-300 to-green-300 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
        {/* Person 2 */}
        <motion.div
          className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shadow-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <span className="text-[10px] text-white font-bold">K</span>
        </motion.div>
      </div>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  13. Service-Abos – rotating cycle                                  */
/* ------------------------------------------------------------------ */
function ServiceAbosAnimation() {
  return (
    <AnimationWrapper>
      <div className="relative w-20 h-20">
        <motion.svg
          viewBox="0 0 80 80"
          className="w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Circular track */}
          <circle cx="40" cy="40" r="28" fill="none" stroke="#e5e7eb" strokeWidth="3" />
          {/* Animated arc */}
          <motion.circle
            cx="40"
            cy="40"
            r="28"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="176"
            initial={{ strokeDashoffset: 176 }}
            animate={{ strokeDashoffset: [176, 44, 176] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </motion.div>
        </div>
      </div>
      <motion.span
        className="absolute bottom-2 text-[8px] font-semibold text-primary-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Monatlich automatisch
      </motion.span>
    </AnimationWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Export map                                                         */
/* ------------------------------------------------------------------ */
export const featureAnimationMap: Record<string, React.ComponentType> = {
  dashboard: DashboardAnimation,
  projektmanagement: ProjektAnimation,
  rechnungen: QRAnimation,
  offerten: OffertenAnimation,
  zeiterfassung: ZeitAnimation,
  crm: CRMAnimation,
  ferienmanagement: FerienAnimation,
  "foto-dokumentation": FotoAnimation,
  lagerverwaltung: LagerAnimation,
  buchhaltung: BuchhaltungAnimation,
  "mitarbeiter-app": AppAnimation,
  kundenportal: KundenportalAnimation,
  "service-abos": ServiceAbosAnimation,
};
