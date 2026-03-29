"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  CalendarDays,
  Camera,
  Package,
  Calculator,
  Smartphone,
  Users,
  Repeat,
  UserCircle,
  ArrowRight,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  { icon: LayoutDashboard, slug: "dashboard", key: "dashboard" },
  { icon: FolderKanban, slug: "projektmanagement", key: "projektmanagement" },
  { icon: Receipt, slug: "rechnungen", key: "rechnungen" },
  { icon: FileText, slug: "offerten", key: "offerten" },
  { icon: Clock, slug: "zeiterfassung", key: "zeiterfassung" },
  { icon: UserCircle, slug: "crm", key: "crm" },
  { icon: CalendarDays, slug: "ferienmanagement", key: "ferienmanagement" },
  { icon: Camera, slug: "foto-dokumentation", key: "fotoDocumentation" },
  { icon: Package, slug: "lagerverwaltung", key: "lagerverwaltung" },
  { icon: Calculator, slug: "buchhaltung", key: "buchhaltung" },
  { icon: Smartphone, slug: "mitarbeiter-app", key: "mitarbeiterApp" },
  { icon: Users, slug: "kundenportal", key: "kundenportal" },
  { icon: Repeat, slug: "service-abos", key: "serviceAbos" },
];

export function Features() {
  const t = useTranslations("features");
  const tc = useTranslations("common");

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

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.slug} variants={staggerItem}>
              <Link
                href={`/features/${feature.slug}`}
                className="group block p-6 rounded-2xl border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                  {t(`${feature.key}.description`)}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                  {tc("learnMore")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
