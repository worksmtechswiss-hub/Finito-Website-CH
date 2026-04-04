"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared large wrapper for hero showcases                            */
/* ------------------------------------------------------------------ */
function LargeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] border border-white/10 p-6 sm:p-10 flex items-center justify-center overflow-hidden relative min-h-[320px] sm:min-h-[400px]">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step animation wrapper for sub-feature sections                    */
/* ------------------------------------------------------------------ */
function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-primary-50/80 to-accent-50/40 border border-primary-100/50 p-8 flex items-center justify-center overflow-hidden relative min-h-[280px]">
      {children}
    </div>
  );
}

/* ================================================================== */
/*  DASHBOARD                                                          */
/* ================================================================== */
function DashboardHero() {
  const bars = [
    { h: "35%", delay: 0.1 }, { h: "55%", delay: 0.2 }, { h: "40%", delay: 0.3 },
    { h: "70%", delay: 0.4 }, { h: "50%", delay: 0.5 }, { h: "80%", delay: 0.6 },
    { h: "60%", delay: 0.7 }, { h: "90%", delay: 0.8 }, { h: "45%", delay: 0.9 },
    { h: "65%", delay: 1.0 }, { h: "75%", delay: 1.1 }, { h: "55%", delay: 1.2 },
  ];
  const kpis = [
    { label: "Umsatz", value: "CHF 284'500", change: "+18%", positive: true },
    { label: "Offene Rechnungen", value: "12", change: "-3", positive: true },
    { label: "Aktive Projekte", value: "8", change: "+2", positive: true },
    { label: "Cashflow", value: "CHF 48'200", change: "+24%", positive: true },
  ];
  return (
    <LargeWrapper>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="text-[10px] text-white/40 mb-1">{kpi.label}</div>
            <div className="text-sm font-bold text-white">{kpi.value}</div>
            <div className={`text-[10px] font-semibold mt-0.5 ${kpi.positive ? "text-green-400" : "text-red-400"}`}>
              {kpi.change}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5">
        <div className="text-xs text-white/40 mb-3">Monatsumsatz 2025</div>
        <div className="flex items-end gap-1.5 h-28">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-500 to-accent-400"
              initial={{ height: 0 }}
              whileInView={{ height: bar.h }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: bar.delay, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"].map((m) => (
            <span key={m} className="text-[7px] text-white/20 flex-1 text-center">{m}</span>
          ))}
        </div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  PROJEKTMANAGEMENT                                                  */
/* ================================================================== */
function ProjektHero() {
  const columns = [
    { title: "Offen", color: "bg-orange-400", items: ["Offerte Meier", "Renovation Bad"] },
    { title: "In Arbeit", color: "bg-blue-400", items: ["Malerarbeiten Keller", "Fassade Müller", "Umbau Zürich"] },
    { title: "Prüfung", color: "bg-purple-400", items: ["Schlussrechnung"] },
    { title: "Erledigt", color: "bg-green-400", items: ["Wohnung Bern", "Büro Luzern"] },
  ];
  return (
    <LargeWrapper>
      <div className="grid grid-cols-4 gap-3">
        {columns.map((col, ci) => (
          <div key={col.title}>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${col.color}`} />
              <span className="text-[10px] font-semibold text-white/60">{col.title}</span>
              <span className="text-[9px] text-white/30 ml-auto">{col.items.length}</span>
            </div>
            <div className="space-y-2">
              {col.items.map((item, ii) => (
                <motion.div
                  key={item}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/5"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.15 + ii * 0.08 }}
                >
                  <div className="text-[10px] text-white/80 font-medium">{item}</div>
                  <div className="flex items-center gap-1 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary-400/40 flex items-center justify-center">
                      <span className="text-[6px] text-white">M</span>
                    </div>
                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${ci === 3 ? "bg-green-400" : "bg-primary-400"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ci === 3 ? 100 : 30 + ci * 25}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: ci * 0.15 + ii * 0.08 + 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  QR-RECHNUNGEN                                                      */
/* ================================================================== */
function RechnungenHero() {
  const lines = [
    { label: "Malerarbeiten Wohnung", amount: "CHF 3'450.00" },
    { label: "Material (Farbe, Grundierung)", amount: "CHF 890.00" },
    { label: "Anfahrt", amount: "CHF 120.00" },
  ];
  return (
    <LargeWrapper>
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <motion.div
          className="bg-white rounded-xl p-5 shadow-lg w-full max-w-xs"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-neutral-800">Rechnung #2025-042</span>
            <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">QR-Ready</span>
          </div>
          {lines.map((line, i) => (
            <motion.div
              key={line.label}
              className="flex justify-between items-center py-1.5 border-b border-neutral-50 last:border-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="text-[10px] text-neutral-500">{line.label}</span>
              <span className="text-[10px] font-semibold text-neutral-700">{line.amount}</span>
            </motion.div>
          ))}
          <div className="border-t-2 border-neutral-200 mt-2 pt-2 flex justify-between">
            <span className="text-xs font-bold text-neutral-800">Total (inkl. MwSt)</span>
            <span className="text-xs font-bold text-primary-600">CHF 4'816.20</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-lg">
            <div className="grid grid-cols-7 grid-rows-7 gap-[1px] w-full h-full">
              {Array.from({ length: 49 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-[1px] ${[0,1,2,4,5,6,7,13,14,20,21,27,28,34,35,41,42,43,44,46,47,48,8,9,10,16,17,18,24,25,26,3,11,15,19,22,23,29,30,31,37,38,39,45].includes(i) ? "bg-neutral-800" : "bg-neutral-100"}`}
                />
              ))}
            </div>
          </div>
          <motion.div
            className="text-[10px] text-white/60 font-medium"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Swiss QR-Code
          </motion.div>
        </motion.div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  OFFERTEN                                                           */
/* ================================================================== */
function OffertenHero() {
  return (
    <LargeWrapper>
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="bg-white rounded-xl p-5 shadow-lg w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-neutral-800">Offerte erstellen</span>
            <span className="text-[9px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-medium">Vorlage</span>
          </div>
          {["Malerarbeiten aussen", "Grundierung + 2x Anstrich", "Gerüstmiete (3 Tage)", "Abdeckarbeiten"].map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center gap-2 py-1.5"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <motion.div
                className="w-4 h-4 rounded border-2 border-primary-400 flex items-center justify-center"
                initial={{ backgroundColor: "transparent" }}
                whileInView={{ backgroundColor: "#7c3aed" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15 }}
              >
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <span className="text-[10px] text-neutral-600">{item}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] text-white/40">Vorher: 30 Min.</span>
          <span className="text-white/30">→</span>
          <span className="text-[10px] text-green-400 font-semibold">Jetzt: 3 Min.</span>
        </motion.div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  ZEITERFASSUNG                                                      */
/* ================================================================== */
function ZeitHero() {
  const entries = [
    { project: "Renovation Bad", time: "08:00 - 12:15", hours: "4h 15m", user: "MK" },
    { project: "Fassade Müller", time: "13:00 - 17:30", hours: "4h 30m", user: "MK" },
    { project: "Malerarbeiten Keller", time: "08:30 - 16:00", hours: "7h 30m", user: "SB" },
  ];
  return (
    <LargeWrapper>
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-white/60">Montag, 24. März 2025</span>
          <span className="text-xs text-primary-400 font-bold">16h 15m total</span>
        </div>
        <div className="space-y-2">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.project}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/5 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary-500/30 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-bold text-white">{entry.user}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-white/80">{entry.project}</div>
                <div className="text-[9px] text-white/30">{entry.time}</div>
              </div>
              <motion.span
                className="text-xs font-bold text-primary-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {entry.hours}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-4 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-400/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-green-300 font-medium">Live-Erfassung aktiv</span>
          </div>
        </motion.div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  CRM                                                                */
/* ================================================================== */
function CRMHero() {
  const contacts = [
    { name: "Meier AG", type: "Gewerbe", projects: 5, revenue: "CHF 42'000" },
    { name: "Familie Brunner", type: "Privat", projects: 2, revenue: "CHF 8'500" },
    { name: "Immo Plus GmbH", type: "Gewerbe", projects: 12, revenue: "CHF 156'000" },
    { name: "Stadt Zürich", type: "Öffentlich", projects: 3, revenue: "CHF 28'000" },
  ];
  return (
    <LargeWrapper>
      <div className="w-full max-w-md mx-auto space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center px-3">
            <span className="text-[10px] text-white/30">Kunden suchen...</span>
          </div>
        </div>
        {contacts.map((c, i) => (
          <motion.div
            key={c.name}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/5 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-white">{c.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-white/80">{c.name}</div>
              <div className="text-[9px] text-white/30">{c.type} · {c.projects} Projekte</div>
            </div>
            <span className="text-[10px] font-semibold text-primary-300">{c.revenue}</span>
          </motion.div>
        ))}
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  FERIENMANAGEMENT                                                   */
/* ================================================================== */
function FerienHero() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const vacation = [14, 15, 16, 17, 18];
  const approved = [7, 8, 9];
  return (
    <LargeWrapper>
      <div className="w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-white/80">Juli 2025</span>
          <span className="text-[10px] text-white/40">Resttage: 14 von 25</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {["Mo","Di","Mi","Do","Fr","Sa","So"].map((d) => (
            <span key={d} className="text-[8px] text-white/30 text-center py-1">{d}</span>
          ))}
          {([null, null] as (number | null)[]).concat(days.map(d => d)).slice(0, 35).map((d, i) => (
            <motion.div
              key={i}
              className={`h-7 rounded-md flex items-center justify-center text-[9px] font-medium
                ${d === null ? "" :
                  vacation.includes(d as number) ? "bg-primary-500/60 text-white border border-primary-400/30" :
                  approved.includes(d as number) ? "bg-green-500/30 text-green-300 border border-green-400/20" :
                  (i % 7 === 5 || i % 7 === 6) ? "bg-white/3 text-white/20" :
                  "bg-white/5 text-white/50 border border-white/5"
                }`}
              initial={vacation.includes(d as number) || approved.includes(d as number) ? { scale: 0.5, opacity: 0 } : {}}
              whileInView={vacation.includes(d as number) || approved.includes(d as number) ? { scale: 1, opacity: 1 } : {}}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: vacation.includes(d as number) ? 0.3 + ((d as number) - 14) * 0.06 : approved.includes(d as number) ? 0.1 + ((d as number) - 7) * 0.06 : 0 }}
            >
              {d}
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4 mt-3 justify-center">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-primary-500/60" /><span className="text-[8px] text-white/40">Beantragt</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded bg-green-500/30" /><span className="text-[8px] text-white/40">Genehmigt</span></div>
        </div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  FOTO-DOKUMENTATION                                                 */
/* ================================================================== */
function FotoHero() {
  return (
    <LargeWrapper>
      <div className="flex gap-4 items-center justify-center">
        {[
          { label: "Vorher", time: "09:15", color: "border-red-400/40" },
          { label: "Während", time: "14:30", color: "border-yellow-400/40" },
          { label: "Nachher", time: "17:00", color: "border-green-400/40" },
        ].map((photo, i) => (
          <motion.div
            key={photo.label}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-2 border ${photo.color} w-28`}
            initial={{ opacity: 0, y: 20, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-lg mb-2 flex items-center justify-center">
              <motion.div
                className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center"
                animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </motion.div>
            </div>
            <div className="text-[9px] font-semibold text-white/70 text-center">{photo.label}</div>
            <div className="text-[8px] text-white/30 text-center">{photo.time} · GPS ✓</div>
          </motion.div>
        ))}
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  LAGERVERWALTUNG                                                    */
/* ================================================================== */
function LagerHero() {
  const items = [
    { name: "Wandfarbe Weiss (10L)", stock: 24, min: 10, status: "ok" },
    { name: "Grundierung Universal", stock: 8, min: 5, status: "ok" },
    { name: "Abklebeband (50m)", stock: 3, min: 10, status: "low" },
    { name: "Pinselset Premium", stock: 12, min: 4, status: "ok" },
  ];
  return (
    <LargeWrapper>
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-white/60">Lagerverwaltung</span>
          <span className="text-[10px] text-orange-400 font-medium">1 Warnung</span>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 border ${item.status === "low" ? "border-orange-400/30" : "border-white/5"} flex items-center gap-3`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className={`w-8 h-8 rounded-lg ${item.status === "low" ? "bg-orange-500/30" : "bg-white/10"} flex items-center justify-center`}>
                <span className="text-[9px] font-bold text-white">{item.stock}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium text-white/80">{item.name}</div>
                <div className="h-1 bg-white/5 rounded-full mt-1 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${item.status === "low" ? "bg-orange-400" : "bg-primary-400"}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min((item.stock / item.min) * 50, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </div>
              {item.status === "low" && (
                <motion.span
                  className="text-[8px] text-orange-400 font-semibold bg-orange-400/10 px-2 py-0.5 rounded-full"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Nachbestellen
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  BUCHHALTUNG                                                        */
/* ================================================================== */
function BuchhaltungHero() {
  const rows = [
    { date: "24.03", desc: "Rechnung Meier AG", debit: "", credit: "CHF 4'816.20", type: "Einnahme" },
    { date: "23.03", desc: "Material Farben AG", debit: "CHF 1'240.00", credit: "", type: "Ausgabe" },
    { date: "22.03", desc: "Rechnung Brunner", debit: "", credit: "CHF 2'100.00", type: "Einnahme" },
    { date: "21.03", desc: "Versicherung", debit: "CHF 480.00", credit: "", type: "Ausgabe" },
  ];
  return (
    <LargeWrapper>
      <div className="w-full max-w-lg mx-auto">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Einnahmen", value: "CHF 284'500", color: "text-green-400" },
            { label: "Ausgaben", value: "CHF 148'200", color: "text-red-400" },
            { label: "Gewinn", value: "CHF 136'300", color: "text-primary-300" },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="bg-white/5 rounded-xl p-3 text-center border border-white/5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[9px] text-white/40">{kpi.label}</div>
              <div className={`text-sm font-bold ${kpi.color}`}>{kpi.value}</div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-1">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5 text-[10px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <span className="text-white/30 w-10">{row.date}</span>
              <span className="text-white/60 flex-1">{row.desc}</span>
              <span className="text-red-400 w-20 text-right">{row.debit}</span>
              <span className="text-green-400 w-20 text-right">{row.credit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  MITARBEITER-APP                                                    */
/* ================================================================== */
function AppHero() {
  return (
    <LargeWrapper>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/images/phone3 1.png"
          alt="Finito Pro Mitarbeiter-App — Time Tracking"
          width={500}
          height={580}
          className="w-[280px] sm:w-[340px] h-auto drop-shadow-2xl"
        />
      </motion.div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  KUNDENPORTAL                                                       */
/* ================================================================== */
function KundenportalHero() {
  return (
    <LargeWrapper>
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white/10 rounded-xl p-4 border border-white/10 mb-3">
          <div className="text-[10px] text-white/40 mb-2">Projektfortschritt: Renovation Bad</div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <div className="text-right text-[9px] text-primary-300 font-semibold mt-1">72%</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Offerte ansehen", status: "✓ Freigegeben" },
            { label: "Fotos (12)", status: "Aktualisiert" },
            { label: "Rechnung", status: "Ausstehend" },
            { label: "Nachrichten", status: "2 neu" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-white/5 rounded-lg p-2.5 border border-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="text-[9px] font-medium text-white/70">{item.label}</div>
              <div className="text-[8px] text-primary-300 mt-0.5">{item.status}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  SERVICE-ABOS                                                       */
/* ================================================================== */
function ServiceAbosHero() {
  const abos = [
    { name: "Reinigung Büro Meier", interval: "Wöchentlich", next: "Mo, 31.03", active: true },
    { name: "Wartung Heizung Brunner", interval: "Jährlich", next: "15.10.2025", active: true },
    { name: "Gartenpflege Villa Zürich", interval: "2-wöchentlich", next: "Di, 01.04", active: true },
  ];
  return (
    <LargeWrapper>
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-white/60">Aktive Service-Abos</span>
          <span className="text-[10px] text-primary-400 font-semibold">3 aktiv</span>
        </div>
        <div className="space-y-2">
          {abos.map((abo, i) => (
            <motion.div
              key={abo.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/5 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.12 }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium text-white/80">{abo.name}</div>
                <div className="text-[8px] text-white/30">{abo.interval} · Nächste: {abo.next}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </LargeWrapper>
  );
}

/* ================================================================== */
/*  Export maps                                                        */
/* ================================================================== */
export const featureHeroAnimationMap: Record<string, React.ComponentType> = {
  dashboard: DashboardHero,
  projektmanagement: ProjektHero,
  rechnungen: RechnungenHero,
  offerten: OffertenHero,
  zeiterfassung: ZeitHero,
  crm: CRMHero,
  ferienmanagement: FerienHero,
  "foto-dokumentation": FotoHero,
  lagerverwaltung: LagerHero,
  buchhaltung: BuchhaltungHero,
  "mitarbeiter-app": AppHero,
  kundenportal: KundenportalHero,
  "service-abos": ServiceAbosHero,
};

/* Step animation: generic but unique per index */
export function FeatureStepAnimation({ index, title }: { index: number; title: string }) {
  const colors = [
    "from-primary-500 to-primary-400",
    "from-accent-400 to-primary-500",
    "from-green-400 to-emerald-500",
    "from-orange-400 to-amber-500",
  ];
  return (
    <StepWrapper>
      <div className="text-center">
        <motion.div
          className={`w-20 h-20 bg-gradient-to-br ${colors[index % colors.length]} rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg`}
          initial={{ scale: 0.5, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <span className="text-white font-bold text-2xl">{index + 1}</span>
        </motion.div>
        <motion.p
          className="text-primary-700 font-semibold text-sm max-w-[200px] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.p>
      </div>
    </StepWrapper>
  );
}
