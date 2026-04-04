"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  Paintbrush, Hammer, Zap, Droplets, Ruler, Home, Grid3x3,
  Building2, Blocks, Building, Sparkles, TreePine, Truck,
  Thermometer, PenTool, Palette, User, ArrowRight, Check,
  FileText, Users, FolderKanban, Clock, Send, LayoutDashboard,
  Palmtree, Camera, Warehouse, Calculator, Smartphone, Globe,
  RefreshCw, TrendingUp, Quote, ChevronRight, CheckCircle, MapPin,
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { Branch } from "@/data/branches";
import type { Feature } from "@/data/features";

const branchIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Paintbrush, Hammer, Zap, Droplets, Ruler, Home, Grid3x3,
  Building2, Blocks, Building, Sparkles, TreePine, Truck,
  Thermometer, PenTool, Palette, User,
};

const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Users, FolderKanban, Clock, Send, LayoutDashboard,
  Palmtree, Camera, Warehouse, Calculator, Smartphone, Globe,
  RefreshCw,
};

/* ------------------------------------------------------------------ */
/*  Branch image paths                                                  */
/* ------------------------------------------------------------------ */
const branchImageMap: Record<string, { hero: string; mobile: string }> = {
  maler: { hero: "/images/branches/maler-hero.png", mobile: "/images/branches/maler-mobile.png" },
  gipser: { hero: "/images/branches/gipser-hero.png", mobile: "/images/branches/gipser-mobile.png" },
  elektriker: { hero: "/images/branches/elektriker-hero.png", mobile: "/images/branches/elektriker-mobile.png" },
  "sanitaer": { hero: "/images/branches/sanitaer-hero.png", mobile: "/images/branches/sanitaer-mobile.png" },
  schreiner: { hero: "/images/branches/schreiner-hero.png", mobile: "/images/branches/schreiner-mobile.png" },
  dachdecker: { hero: "/images/branches/dachdecker-hero.png", mobile: "/images/branches/dachdecker-mobile.png" },
  bodenleger: { hero: "/images/branches/bodenleger-hero.png", mobile: "/images/branches/bodenleger-mobile.png" },
  "gerüstbauer": { hero: "/images/branches/gerüstbauer-hero.png", mobile: "/images/branches/gerüstbauer-mobile.png" },
  maurer: { hero: "/images/branches/maurer-hero.png", mobile: "/images/branches/maurer-mobile.png" },
  "facility-service": { hero: "/images/branches/facility-service-hero.png", mobile: "/images/branches/facility-service-mobile.png" },
  reinigung: { hero: "/images/branches/maler-hero.png", mobile: "/images/branches/maler-mobile.png" },
  gartenbau: { hero: "/images/branches/gartenbau-hero.png", mobile: "/images/branches/gartenbau-mobile.png" },
  umzug: { hero: "/images/branches/umzug-hero.png", mobile: "/images/branches/umzug-mobile.png" },
  haustechnik: { hero: "/images/branches/facility-service-hero.png", mobile: "/images/branches/facility-service-mobile.png" },
  architekten: { hero: "/images/branches/architekten-hero.png", mobile: "/images/branches/architekten-mobile.png" },
  agenturen: { hero: "/images/branches/agenturen-hero.png", mobile: "/images/branches/agenturen-mobile.png" },
  "einmann-betriebe": { hero: "/images/branches/einmann-betriebe-hero.png", mobile: "/images/branches/einmann-betriebe-mobile.png" },
};

/* ------------------------------------------------------------------ */
/*  "Warum Finito" benefits per branch                                 */
/* ------------------------------------------------------------------ */
const whyFinitoMap: Record<string, string[]> = {
  maler: [
    "Offerten in 3 statt 30 Minuten dank gespeicherter Leistungskataloge",
    "Farbverwaltung und Materialbestellung direkt aus dem Projekt",
    "Vorher/Nachher-Fotos automatisch dem Projekt zugeordnet",
    "QR-Rechnungen mit einem Klick erstellen und versenden",
    "Kundenportal für transparente Projektfortschritte",
    "Zeiterfassung direkt auf der Baustelle per Smartphone",
  ],
  gipser: [
    "Digitale Fotorapporte als Qualitätsnachweis für Versicherungen",
    "Lagerverwaltung mit automatischem Materialabzug pro Projekt",
    "Aufmass und Flächenberechnung direkt vor Ort",
    "QR-Rechnungen automatisch aus Projektdaten generieren",
    "Offline-Modus für Baustellen ohne Mobilfunkempfang",
    "Automatische Dokumentation aller Arbeitsschritte",
  ],
  elektriker: [
    "Elektroschemas und technische Dokumente mobil immer dabei",
    "Lagerverwaltung mit direkter Verlinkung zu Lieferanten",
    "Digitale Regierapporte mit Kundenunterschrift vor Ort",
    "Zeiterfassung und Materialerfassung in einer App",
    "QR-Rechnungen direkt aus erfassten Daten generieren",
    "Alle Normen und Zertifikate pro Projekt archiviert",
  ],
  "sanitaer": [
    "Mobile Zeiterfassung mit Trennung von Fahr- und Arbeitszeit",
    "Digitale Regierapporte mit sofortiger Kundenunterschrift",
    "Ersatzteil-Verwaltung für den Servicebus",
    "Automatische QR-Rechnungen nach Auftragsabschluss",
    "Einsatzplanung mit Kalender und Teamzuweisung",
    "Komplette Dokumentation für Garantieansprueche",
  ],
  schreiner: [
    "Individuelle Massanfertigungen mit allen Details dokumentieren",
    "Werkstattauslastung und Produktionsplanung im Dashboard",
    "Detaillierte Offerten für Einzelstuecke und Serien",
    "Fortschrittsfotos für Kunden über das Portal teilen",
    "Material- und Zeitkalkulation pro Auftrag",
    "QR-Rechnungen nach Montage und Abnahme",
  ],
  dachdecker: [
    "Mitarbeiterplanung mit Kalender und Teamzuweisung",
    "Digitales Projektarchiv für über 25 Jahre",
    "Wetter- und Sicherheitsdokumentation pro Arbeitstag",
    "Zeiterfassung mit GPS-Standort auf der Baustelle",
    "Fotos mit Zeitstempel als Qualitätsnachweis",
    "QR-Rechnungen und automatische Mahnungen",
  ],
  bodenleger: [
    "Automatische Quadratmeterberechnung mit Verschnitt-Zuschlag",
    "Restmaterial-Tracking für kleinere Reparaturaufträge",
    "Verlegemuster mit Fotos und Notizen dokumentieren",
    "Material direkt aus dem Projekt bestellen",
    "Vorher/Nachher-Dokumentation für den Kunden",
    "QR-Rechnungen nach Abnahme sofort versenden",
  ],
  "gerüstbauer": [
    "Jedes Gerüst-Teil von Auslieferung bis Rücknahme tracken",
    "Automatische Mietabrechnung basierend auf Standzeit",
    "Sicherheitsinspektionen mit Checklisten dokumentieren",
    "Multi-Baustellen-Übersicht mit Statusfiltern",
    "Lagerbestand in Echtzeit einsehen",
    "QR-Rechnungen für Miete und Service automatisch",
  ],
  maurer: [
    "Automatisches Bautagebuch mit Wetter und Anwesenheit",
    "Mehrere Baustellen parallel verwalten und filtern",
    "Material- und Betonbestellung basierend auf Fortschritt",
    "Fotodokumentation mit automatischer Projektzuordnung",
    "Zeiterfassung pro Baustelle und Mitarbeiter",
    "Rechtssichere Dokumentation für alle Projekte",
  ],
  "facility-service": [
    "Automatisierte Wartungsintervalle für alle Anlagen",
    "Partner und Subunternehmer über die Plattform koordinieren",
    "Digitales Objektdossier pro Gebäudeteil",
    "Service-Abos mit automatischer Rechnungsstellung",
    "Lückenlose Wartungshistorie pro Anlage",
    "QR-Rechnungen und Leistungsnachweise automatisch",
  ],
  reinigung: [
    "Routenplanung für optimale Teamverteilung",
    "Qualitätsdokumentation mit Vorher/Nachher-Fotos",
    "Individuelle Checklisten pro Objekt und Gebäudeteil",
    "Zeiterfassung pro Objekt und Mitarbeiter",
    "Automatische Leistungsnachweise für Auftraggeber",
    "Service-Abos für wiederkehrende Reinigungsaufträge",
  ],
  gartenbau: [
    "Saisonale Projektplanung mit automatischen Erinnerungen",
    "Pflanzendokumentation mit Arten und Pflegehinweisen",
    "Pflegepläne für Kunden über das Portal teilen",
    "Zeiterfassung direkt im Garten per Smartphone",
    "Foto-Dokumentation des Gartenfortschritts",
    "Service-Abos für regelmässige Pflegeaufträge",
  ],
  umzug: [
    "Detaillierte Inventarlisten mit Fotodokumentation",
    "Tägliche Routenplanung für maximale Effizienz",
    "Schadensprotokoll mit Zeitstempel und GPS-Daten",
    "Vorher/Nachher-Zustand aller Gegenstaende dokumentiert",
    "Zeiterfassung pro Umzug und Mitarbeiter",
    "QR-Rechnungen direkt nach Auftragsabschluss",
  ],
  haustechnik: [
    "HVAC-Dokumentation mit technischen Details und Messwerten",
    "Wartungsplanung mit automatischen Erinnerungen",
    "Lückenlose Anlagenhistorie pro Gebäudeteil",
    "Einsatzprotokolle mit Fotos und Messwerten",
    "Ersatzteil-Verwaltung und Nachbestellung",
    "Service-Abos für regelmässige Wartungsvertraege",
  ],
  architekten: [
    "Alle Projektdokumente zentral und immer aktuell",
    "Task-Board für Projektphasen von Planung bis Abnahme",
    "Transparente Bauherren-Kommunikation über das Portal",
    "Zeiterfassung pro Projekt für praezise Abrechnung",
    "Automatische Versionierung aller Dokumente",
    "Dashboard mit Projektüberblick und Statusfiltern",
  ],
  agenturen: [
    "Projektbasierte Zeiterfassung für transparente Abrechnung",
    "Individuelle Benutzerrechte pro Rolle und Projekt",
    "Kunden-Budgets mit automatischer Warnfunktion",
    "Stundenberichte als Rechnungsgrundlage",
    "CRM für Kunden- und Kontaktverwaltung",
    "QR-Rechnungen basierend auf erfassten Zeiten",
  ],
  "einmann-betriebe": [
    "Komplettes Büro auf dem Smartphone - kein PC nötig",
    "Vorlagen sparen bis zu 80% Administrationszeit",
    "Automatische Buchhaltungsvorbereitung für den Treuhaender",
    "Offerten, Rechnungen und Rapporte in einer App",
    "QR-Rechnungen mit einem Klick erstellen und versenden",
    "Zeiterfassung und Projektdokumentation unterwegs",
  ],
};

/* ------------------------------------------------------------------ */
/*  Time/money savings per branch                                      */
/* ------------------------------------------------------------------ */
interface BranchSaving {
  task: string;
  vorher: string;
  nachher: string;
  ersparnis: string;
}

const savingsMap: Record<string, BranchSaving[]> = {
  maler: [
    { task: "Offerte erstellen", vorher: "30 Min.", nachher: "3 Min.", ersparnis: "27 Min. pro Offerte" },
    { task: "Rechnung versenden", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
    { task: "Monatsrapport", vorher: "2 Std.", nachher: "0 Min.", ersparnis: "24 Std./Jahr" },
  ],
  gipser: [
    { task: "Fotobericht erstellen", vorher: "45 Min.", nachher: "5 Min.", ersparnis: "40 Min. pro Rapport" },
    { task: "Material nachbestellen", vorher: "30 Min.", nachher: "2 Min.", ersparnis: "28 Min. pro Bestellung" },
    { task: "Flächenberechnung", vorher: "20 Min.", nachher: "2 Min.", ersparnis: "18 Min. pro Aufmass" },
  ],
  elektriker: [
    { task: "Regierapport erstellen", vorher: "30 Min.", nachher: "5 Min.", ersparnis: "25 Min. pro Rapport" },
    { task: "Lagerbestand prüfen", vorher: "15 Min.", nachher: "1 Min.", ersparnis: "14 Min. pro Prüfung" },
    { task: "Rechnung mit QR-Code", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
  ],
  "sanitaer": [
    { task: "Regierapport mit Unterschrift", vorher: "25 Min.", nachher: "3 Min.", ersparnis: "22 Min. pro Einsatz" },
    { task: "Zeitrapport Monatsende", vorher: "2 Std.", nachher: "0 Min.", ersparnis: "24 Std./Jahr" },
    { task: "Rechnung erstellen", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
  ],
  schreiner: [
    { task: "Detaillierte Offerte", vorher: "45 Min.", nachher: "10 Min.", ersparnis: "35 Min. pro Offerte" },
    { task: "Auftragsfortschritt dokumentieren", vorher: "15 Min.", nachher: "2 Min.", ersparnis: "13 Min. pro Eintrag" },
    { task: "Schlussrechnung", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
  ],
  dachdecker: [
    { task: "Teamplanung pro Woche", vorher: "1 Std.", nachher: "15 Min.", ersparnis: "45 Min. pro Woche" },
    { task: "Sicherheitsdokumentation", vorher: "20 Min./Tag", nachher: "3 Min./Tag", ersparnis: "17 Min. pro Tag" },
    { task: "QR-Rechnung erstellen", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
  ],
  bodenleger: [
    { task: "Materialberechnung", vorher: "30 Min.", nachher: "2 Min.", ersparnis: "28 Min. pro Projekt" },
    { task: "Verlegedokumentation", vorher: "15 Min.", nachher: "0 Min.", ersparnis: "15 Min. pro Projekt" },
    { task: "Abnahmeprotokoll + Rechnung", vorher: "25 Min.", nachher: "3 Min.", ersparnis: "22 Min. pro Abnahme" },
  ],
  "gerüstbauer": [
    { task: "Mietabrechnung", vorher: "30 Min.", nachher: "1 Min.", ersparnis: "29 Min. pro Abrechnung" },
    { task: "Inventurprüfung", vorher: "2 Std.", nachher: "15 Min.", ersparnis: "105 Min. pro Prüfung" },
    { task: "Sicherheitsinspektion", vorher: "20 Min.", nachher: "5 Min.", ersparnis: "15 Min. pro Inspektion" },
  ],
  maurer: [
    { task: "Bautagebuch führen", vorher: "20 Min./Tag", nachher: "3 Min./Tag", ersparnis: "17 Min. pro Tag" },
    { task: "Materialbestellung", vorher: "30 Min.", nachher: "5 Min.", ersparnis: "25 Min. pro Bestellung" },
    { task: "Projektabschluss-Doku", vorher: "1 Std.", nachher: "10 Min.", ersparnis: "50 Min. pro Projekt" },
  ],
  "facility-service": [
    { task: "Wartungsauftrag erstellen", vorher: "15 Min.", nachher: "0 Min.", ersparnis: "100% automatisch" },
    { task: "Partnerkommunikation", vorher: "20 Min.", nachher: "2 Min.", ersparnis: "18 Min. pro Auftrag" },
    { task: "Objektdossier aktualisieren", vorher: "10 Min.", nachher: "0 Min.", ersparnis: "Automatisch" },
  ],
  reinigung: [
    { task: "Routenplanung", vorher: "30 Min.", nachher: "5 Min.", ersparnis: "25 Min. pro Woche" },
    { task: "Qualitätsdokumentation", vorher: "15 Min.", nachher: "2 Min.", ersparnis: "13 Min. pro Objekt" },
    { task: "Leistungsnachweis + Rechnung", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
  ],
  gartenbau: [
    { task: "Saisonplanung", vorher: "2 Std.", nachher: "20 Min.", ersparnis: "100 Min. pro Saison" },
    { task: "Pflanzendokumentation", vorher: "15 Min.", nachher: "2 Min.", ersparnis: "13 Min. pro Garten" },
    { task: "Kundenrapport", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rapport" },
  ],
  umzug: [
    { task: "Inventarliste erstellen", vorher: "45 Min.", nachher: "10 Min.", ersparnis: "35 Min. pro Umzug" },
    { task: "Schadensprotokoll", vorher: "20 Min.", nachher: "5 Min.", ersparnis: "15 Min. pro Umzug" },
    { task: "Schlussrechnung", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
  ],
  haustechnik: [
    { task: "Einsatzprotokoll", vorher: "25 Min.", nachher: "5 Min.", ersparnis: "20 Min. pro Einsatz" },
    { task: "Wartungsplanung", vorher: "30 Min.", nachher: "0 Min.", ersparnis: "100% automatisch" },
    { task: "Anlagenhistorie pflegen", vorher: "10 Min.", nachher: "0 Min.", ersparnis: "Automatisch" },
  ],
  architekten: [
    { task: "Dokumente zusammenstellen", vorher: "30 Min.", nachher: "2 Min.", ersparnis: "28 Min. pro Projekt" },
    { task: "Bauherren-Update", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Update" },
    { task: "Projektüberblick erstellen", vorher: "15 Min.", nachher: "0 Min.", ersparnis: "Dashboard in Echtzeit" },
  ],
  agenturen: [
    { task: "Stundenrapport erstellen", vorher: "30 Min.", nachher: "1 Min.", ersparnis: "29 Min. pro Rapport" },
    { task: "Rechnung aus Zeiten", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
    { task: "Budget-Kontrolle", vorher: "15 Min.", nachher: "0 Min.", ersparnis: "Automatische Warnungen" },
  ],
  "einmann-betriebe": [
    { task: "Offerte aus Vorlage", vorher: "30 Min.", nachher: "3 Min.", ersparnis: "27 Min. pro Offerte" },
    { task: "QR-Rechnung erstellen", vorher: "20 Min.", nachher: "1 Min.", ersparnis: "19 Min. pro Rechnung" },
    { task: "Jahresabschluss vorbereiten", vorher: "8 Std.", nachher: "30 Min.", ersparnis: "7.5 Std. pro Jahr" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Testimonial quotes per branch                                      */
/* ------------------------------------------------------------------ */
const testimonialMap: Record<string, { quote: string; author: string; role: string }> = {
  maler: { quote: "Seit wir Finito nutzen, erstellen wir Offerten in 3 statt 30 Minuten.", author: "M. Keller", role: "Malermeister, 8 Mitarbeiter" },
  gipser: { quote: "Die automatische Fotodokumentation spart uns jede Woche Stunden an Büroarbeit.", author: "R. Baumann", role: "Gipsermeister, 5 Mitarbeiter" },
  elektriker: { quote: "Endlich habe ich alle Schemas auf dem Smartphone und muss keine Ordner mehr schleppen.", author: "S. Mueller", role: "Elektroinstallateur, 12 Mitarbeiter" },
  "sanitaer": { quote: "Die digitalen Regierapporte mit Kundenunterschrift sparen uns enorm viel Zeit.", author: "P. Brunner", role: "Sanitaerinstallateur, 6 Mitarbeiter" },
  schreiner: { quote: "Das Dashboard zeigt mir sofort, welche Aufträge in der Werkstatt sind und wann geliefert wird.", author: "T. Meier", role: "Schreinermeister, 4 Mitarbeiter" },
  dachdecker: { quote: "Die lückenlose Archivierung über 25 Jahre gibt uns Sicherheit bei Garantiefällen.", author: "H. Weber", role: "Dachdeckermeister, 10 Mitarbeiter" },
  bodenleger: { quote: "Die automatische Materialberechnung mit Verschnitt-Zuschlag ist genial einfach.", author: "L. Fischer", role: "Bodenlegermeister, 3 Mitarbeiter" },
  "gerüstbauer": { quote: "Wir wissen jetzt immer, welche Teile wo stehen - die Mietabrechnung läuft automatisch.", author: "D. Schmid", role: "Gerüstbau, 15 Mitarbeiter" },
  maurer: { quote: "Das automatische Bautagebuch spart mir jeden Abend 20 Minuten Schreibarbeit.", author: "A. Huber", role: "Bauunternehmer, 8 Mitarbeiter" },
  "facility-service": { quote: "Kein Wartungstermin wird mehr vergessen - die Automatisierung ist perfekt.", author: "C. Roth", role: "Facility Manager, 20 Mitarbeiter" },
  reinigung: { quote: "Unsere Teams wissen genau, was zu tun ist - Checklisten und Fotos machen den Unterschied.", author: "N. Steiner", role: "Reinigungsfirma, 25 Mitarbeiter" },
  gartenbau: { quote: "Die saisonale Planung mit automatischen Erinnerungen hat unsere Organisation revolutioniert.", author: "F. Gerber", role: "Gartenbauunternehmer, 7 Mitarbeiter" },
  umzug: { quote: "Die Inventarlisten mit Fotos schützen uns vor unberechtigten Schadensforderungen.", author: "K. Schneider", role: "Umzugsunternehmer, 10 Mitarbeiter" },
  haustechnik: { quote: "Die Wartungsplanung läuft automatisch - wir verpassen keinen Termin mehr.", author: "J. Wyss", role: "Haustechnik, 6 Mitarbeiter" },
  architekten: { quote: "Alle Projektdokumente an einem Ort und immer aktuell - das spart enorm viel Suchzeit.", author: "B. Lang", role: "Architekturbüro, 4 Mitarbeiter" },
  agenturen: { quote: "Die projektbasierte Zeiterfassung macht unsere Abrechnung transparent und fair.", author: "E. Zuercher", role: "Agenturinhaber, 8 Mitarbeiter" },
  "einmann-betriebe": { quote: "Finito ist mein komplettes Büro - ich mache alles vom Smartphone aus.", author: "I. Marti", role: "Selbstständiger Handwerker" },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
interface BranchPageContentProps {
  branch: Branch;
  relevantFeatures: Feature[];
  workflow: { step: string; desc: string }[];
}

export function BranchPageContent({
  branch,
  relevantFeatures,
  workflow,
}: BranchPageContentProps) {
  const BranchIcon = branchIconMap[branch.icon] || Building;
  const whyBenefits = whyFinitoMap[branch.slug] || whyFinitoMap["maler"];
  const savings = savingsMap[branch.slug] || savingsMap["maler"];
  const testimonial = testimonialMap[branch.slug] || testimonialMap["maler"];
  const branchImages = branchImageMap[branch.slug] || branchImageMap["maler"];

  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        {/* Branch-specific background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={branchImages.hero}
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/70 text-sm font-medium rounded-full border border-white/10 mb-6">
              <BranchIcon className="w-4 h-4" />
              Branchenlösung
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Software für{" "}
              <span className="gradient-text-animated">{branch.titleDe}</span>
              {" "}in der Schweiz
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
              {branch.descriptionDe}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.ch/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                30 Tage kostenlos testen
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Demo anfordern
              </Link>
            </div>
          </motion.div>

          {/* Savings facts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto"
          >
            {savings.map((saving, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-left"
              >
                <div className="text-xs text-white/40 mb-1">{saving.task}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-white/50 line-through">{saving.vorher}</span>
                  <ArrowRight className="w-3 h-3 text-white/30" />
                  <span className="text-sm font-semibold text-white">{saving.nachher}</span>
                </div>
                <div className="text-xs font-semibold text-green-300 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {saving.ersparnis}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              So profitieren {branch.titleDe} von Finito Pro
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Praxisnahe Anwendungsfälle, die Ihren Arbeitsalltag sofort vereinfachen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {branch.useCasesDe.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-8 rounded-2xl bg-surface-light-secondary border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="absolute -top-3 left-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-400 text-white text-sm font-bold rounded-lg shadow-glow-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 mt-2">
                  {useCase.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Warum Finito für [Branche]? Section                          */}
      {/* ============================================================ */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                Warum Finito für {branch.titleDe}?
              </h2>
              <p className="text-lg text-neutral-500 mb-8">
                {branch.titleDe} digitalisieren mit Finito Pro - die All-in-One Software
                für Schweizer KMU und Handwerksbetriebe.
              </p>
              <ul className="space-y-4">
                {whyBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/automationen"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Alle Automationen ansehen
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/funktionen"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Alle Funktionen entdecken
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 w-full lg:w-[380px]"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-600/10 to-accent-400/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-2xl p-8 border border-neutral-100 shadow-card-hover">
                  <Quote className="w-8 h-8 text-primary-200 mb-4" />
                  <p className="text-neutral-700 leading-relaxed mb-6 italic">
                    &laquo;{testimonial.quote}&raquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-24 bg-surface-light-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">
                Auch mobil immer dabei
              </h2>
              <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                Mit der Finito Pro Mitarbeiter-App haben Ihre Teams alle wichtigen Informationen direkt auf dem Smartphone - auch offline auf der Baustelle.
              </p>
              <ul className="space-y-3">
                {["Aufgaben und Projekte unterwegs verwalten", "Zeiten direkt vor Ort erfassen", "Fotos dokumentieren und zuordnen", "Offline-Modus für Baustellen ohne Empfang"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-[320px] mx-auto">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary-600/15 to-accent-400/15 rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={branchImages.mobile}
                    alt={`${branch.titleDe} mit Finito Pro digitalisieren`}
                    width={640}
                    height={640}
                    className="w-full h-auto"
                    sizes="320px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relevant Features Grid */}
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
              Zeiterfassung, QR-Rechnungen und mehr für {branch.titleDe}
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Diese Finito-Pro-Funktionen sind besonders wertvoll für Ihren Betrieb.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {relevantFeatures.map((feature) => {
              const FeatureIcon = featureIconMap[feature.icon] || FileText;
              return (
                <motion.div key={feature.id} variants={staggerItem}>
                  <Link
                    href={`/funktionen/${feature.slug}`}
                    className="group block p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                      <FeatureIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {feature.titleDe}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {feature.descriptionDe}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Workflow Example */}
      {workflow.length > 0 && (
        <section className="py-24 bg-surface-light-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                Typischer Workflow für {branch.titleDe}
              </h2>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                So sieht ein typischer Arbeitsablauf mit Finito Pro für {branch.titleDe} aus.
              </p>
            </motion.div>

            <div className="space-y-0">
              {workflow.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Timeline line */}
                  {i < workflow.length - 1 && (
                    <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-primary-300 to-primary-100" />
                  )}
                  {/* Step number */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 flex items-center justify-center shadow-glow-sm">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {item.step}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* NEW: Internal links / Entdecken Sie mehr                      */}
      {/* ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
              Entdecken Sie mehr
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/automationen"
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Zap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    Automationen
                  </p>
                  <p className="text-xs text-neutral-400">
                    Alle Zeitersparnisse im Detail
                  </p>
                </div>
              </Link>
              <Link
                href="/funktionen"
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <FolderKanban className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    Alle Funktionen
                  </p>
                  <p className="text-xs text-neutral-400">
                    13+ Funktionen entdecken
                  </p>
                </div>
              </Link>
              <Link
                href="/preise"
                className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-primary-200 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                  <Calculator className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                    Preise
                  </p>
                  <p className="text-xs text-neutral-400">
                    Transparente Preisplaene
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 hero-gradient overflow-hidden">

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Bereit, Ihren {branch.titleDe}-Betrieb zu digitalisieren?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Starten Sie jetzt mit Finito Pro - 30 Tage kostenlos, keine Kreditkarte nötig.
              Überzeugen Sie sich selbst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.finitopro.ch/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Jetzt kostenlos testen
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <Link
                href="/branchen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                Alle Branchen ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
