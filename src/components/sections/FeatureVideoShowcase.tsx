"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    video: "/videos/1Dashboard-Desktop-transcode.mp4",
    description: "Alle KPIs auf einen Blick",
  },
  {
    id: "projekte",
    label: "Projekte",
    icon: FolderKanban,
    video: "/videos/1Projekt-Management-transcode.mp4",
    description: "Projekte effizient verwalten",
  },
  {
    id: "rechnungen",
    label: "Rechnungen",
    icon: Receipt,
    video: "/videos/1Rechnungen-PC-transcode.mp4",
    description: "QR-Rechnungen in Sekunden",
  },
  {
    id: "offerten",
    label: "Offerten",
    icon: FileText,
    video: "/videos/1Offerte-PC-transcode.mp4",
    description: "Professionelle Offerten erstellen",
  },
  {
    id: "kalender",
    label: "Kalender",
    icon: CalendarDays,
    video: "/videos/1Dashboard-Desktop-transcode.mp4",
    description: "Termine und Planung",
  },
];

export function FeatureVideoShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-4">
            Die{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
              All-in-One
            </span>{" "}
            Projektmanagement-Lösung
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Schweizer Software für Schweizer Handwerker
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={cn(
                "flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                activeTab === i
                  ? "bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/25"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Video Display in Laptop Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6]/10 to-[#a78bfa]/10 rounded-3xl blur-2xl" />

          {/* Laptop Frame */}
          <div className="relative">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-t-2xl border border-neutral-700/50 p-2">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-800/80 rounded-t-lg mb-1">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-neutral-700/50 rounded-md px-3 py-1 text-[10px] text-neutral-400 text-center truncate">
                    app.finitopro.ch/{tabs[activeTab].id}
                  </div>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative bg-neutral-900 rounded-lg overflow-hidden aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <video
                      key={tabs[activeTab].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={tabs[activeTab].video} type="video/mp4" />
                    </video>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="mx-auto w-[60%] h-3 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-b-xl" />
            <div className="mx-auto w-[70%] h-1 bg-neutral-800 rounded-b-lg" />
          </div>
        </motion.div>

        {/* Active Tab Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8 text-neutral-500"
          >
            {tabs[activeTab].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
