"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
  Menu,
  X,
  ChevronDown,
  Paintbrush,
  Hammer,
  Zap,
  Wrench,
  TreePine,
  Building2,
  Truck,
  Fence,
  BrickWall,
  Sparkles,
  Scissors,
  HardHat,
  Ruler,
  Megaphone,
  User,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const featureItems = [
  { icon: LayoutDashboard, slug: "dashboard", labelKey: "dashboard" },
  { icon: FolderKanban, slug: "projektmanagement", labelKey: "projektmanagement" },
  { icon: Receipt, slug: "rechnungen", labelKey: "rechnungen" },
  { icon: FileText, slug: "offerten", labelKey: "offerten" },
  { icon: Clock, slug: "zeiterfassung", labelKey: "zeiterfassung" },
  { icon: UserCircle, slug: "crm", labelKey: "crm" },
  { icon: CalendarDays, slug: "ferienmanagement", labelKey: "ferienmanagement" },
  { icon: Camera, slug: "foto-dokumentation", labelKey: "fotoDocumentation" },
  { icon: Package, slug: "lagerverwaltung", labelKey: "lagerverwaltung" },
  { icon: Calculator, slug: "buchhaltung", labelKey: "buchhaltung" },
  { icon: Smartphone, slug: "mitarbeiter-app", labelKey: "mitarbeiterApp" },
  { icon: Users, slug: "kundenportal", labelKey: "kundenportal" },
  { icon: Repeat, slug: "service-abos", labelKey: "serviceAbos" },
];

const branchItems = [
  { icon: Paintbrush, slug: "maler", label: "Maler" },
  { icon: BrickWall, slug: "gipser", label: "Gipser" },
  { icon: Zap, slug: "elektriker", label: "Elektriker" },
  { icon: Wrench, slug: "sanitaer", label: "Sanitär" },
  { icon: Scissors, slug: "schreiner", label: "Schreiner" },
  { icon: HardHat, slug: "dachdecker", label: "Dachdecker" },
  { icon: Sparkles, slug: "bodenleger", label: "Bodenleger" },
  { icon: Fence, slug: "geruestbauer", label: "Gerüstbauer" },
  { icon: Hammer, slug: "maurer", label: "Maurer" },
  { icon: Building2, slug: "facility-service", label: "Facility Service" },
  { icon: TreePine, slug: "gartenbau", label: "Gartenbau" },
  { icon: Truck, slug: "umzug", label: "Umzug" },
  { icon: Ruler, slug: "architekten", label: "Architekten" },
  { icon: Megaphone, slug: "agenturen", label: "Agenturen" },
  { icon: User, slug: "einmann-betriebe", label: "Einmann-Betriebe" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const tf = useTranslations("features");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHero = pathname === "/" || pathname === "";

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#1a1a2e]/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
            : isHero
              ? "bg-transparent py-5"
              : "bg-white/80 backdrop-blur-md py-4"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <span
                className={cn(
                  "font-semibold text-xl tracking-tight transition-colors",
                  scrolled
                    ? "text-white"
                    : isHero
                      ? "text-white"
                      : "text-neutral-900"
                )}
              >
                Finito Pro
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Features Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("features")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    scrolled
                      ? "text-white/80 hover:text-white"
                      : isHero
                        ? "text-white/80 hover:text-white"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  )}
                >
                  {t("features")}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "features" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "features" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                      className="fixed left-0 right-0 top-[60px] pt-2 px-4"
                      style={{ top: scrolled ? "60px" : "72px" }}
                    >
                      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-900/10 border border-neutral-100/80 p-6 overflow-hidden">
                        {/* Subtle gradient accent at top */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed]" />
                        <div className="grid grid-cols-4 gap-1">
                          {featureItems.map((item, i) => (
                            <Link
                              key={item.slug}
                              href={`/features/${item.slug}`}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50/50 transition-all group"
                            >
                              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 group-hover:scale-110 transition-all">
                                <item.icon className="w-5 h-5 text-primary-600" />
                              </div>
                              <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700 transition-colors">
                                {tf(`${item.labelKey}.title`)}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/funktionen"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-50/50 to-accent-50/30 hover:from-primary-100/50 hover:to-accent-100/30 transition-all group"
                          >
                            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all">
                              <ExternalLink className="w-5 h-5 text-primary-600" />
                            </div>
                            <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                              Alle Features
                            </span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Branchen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("branches")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    scrolled
                      ? "text-white/80 hover:text-white"
                      : isHero
                        ? "text-white/80 hover:text-white"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  )}
                >
                  {t("branches")}
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "branches" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "branches" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                      className="fixed left-0 right-0 top-[60px] pt-2 px-4"
                      style={{ top: scrolled ? "60px" : "72px" }}
                    >
                      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-900/10 border border-neutral-100/80 p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#8b5cf6]" />
                        <div className="grid grid-cols-5 gap-1">
                          {branchItems.map((item) => (
                            <Link
                              key={item.slug}
                              href={`/branchen/${item.slug}`}
                              className="flex items-center gap-2.5 px-3 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50/50 transition-all group"
                            >
                              <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 group-hover:scale-110 transition-all">
                                <item.icon className="w-4 h-4 text-primary-500 group-hover:text-primary-600 transition-colors" />
                              </div>
                              <span className="text-sm font-medium text-neutral-600 group-hover:text-primary-700 transition-colors">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Links */}
              <Link
                href="/preise"
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : isHero
                      ? "text-white/80 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                )}
              >
                {t("pricing")}
              </Link>
              <Link
                href="/automationen"
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : isHero
                      ? "text-white/80 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                )}
              >
                Automationen
              </Link>
              <Link
                href="/kontakt"
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : isHero
                      ? "text-white/80 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                )}
              >
                {t("contact")}
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.finitopro.ch/login"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  scrolled
                    ? "text-white/80 hover:text-white"
                    : isHero
                      ? "text-white/80 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900"
                )}
              >
                {t("login")}
              </a>
              <a
                href="https://app.finitopro.ch/register"
                className="group relative inline-flex items-center px-5 py-2.5 text-white text-sm font-semibold rounded-xl overflow-hidden hover:-translate-y-0.5 transition-transform"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#7c3aed] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                {/* Glow pulse effect */}
                <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="relative z-10">
                  {t("getStarted")}
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X
                  className={cn(
                    "w-6 h-6",
                    scrolled ? "text-white" : isHero ? "text-white" : "text-neutral-900"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "w-6 h-6",
                    scrolled ? "text-white" : isHero ? "text-white" : "text-neutral-900"
                  )}
                />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20"
          >
            <div className="p-6 space-y-2">
              {/* Features Accordion */}
              <MobileAccordion title={t("features")}>
                {featureItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/features/${item.slug}`}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-primary-500" />
                    {tf(`${item.labelKey}.title`)}
                  </Link>
                ))}
              </MobileAccordion>

              {/* Branchen Accordion */}
              <MobileAccordion title={t("branches")}>
                {branchItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/branchen/${item.slug}`}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon className="w-4 h-4 text-primary-500" />
                    {item.label}
                  </Link>
                ))}
              </MobileAccordion>

              <Link
                href="/preise"
                className="block px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {t("pricing")}
              </Link>
              <Link
                href="/automationen"
                className="block px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Automationen
              </Link>
              <Link
                href="/kontakt"
                className="block px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {t("contact")}
              </Link>
              <Link
                href="/team"
                className="block px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {t("team")}
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {t("faq")}
              </Link>

              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <a
                  href="https://app.finitopro.ch/login"
                  className="block w-full text-center px-4 py-3 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  {t("login")}
                </a>
                <a
                  href="https://app.finitopro.ch/register"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-xl text-sm font-medium"
                >
                  {t("getStarted")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden ml-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
