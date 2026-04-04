import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { branches } from "@/data/branches";
import { features } from "@/data/features";
import { BranchPageContent } from "./BranchPageContent";

const branchBySlug = (slug: string) => branches.find((b) => b.slug === slug);

// Map of relevant feature slugs per branch
const relevantFeaturesMap: Record<string, string[]> = {
  maler: ["offerten", "projektmanagement", "rechnungen", "foto-dokumentation", "kundenportal"],
  gipser: ["foto-dokumentation", "lagerverwaltung", "projektmanagement", "rechnungen"],
  elektriker: ["lagerverwaltung", "zeiterfassung", "projektmanagement", "rechnungen"],
  sanitär: ["zeiterfassung", "projektmanagement", "rechnungen", "mitarbeiter-app"],
  schreiner: ["offerten", "dashboard", "projektmanagement", "lagerverwaltung"],
  dachdecker: ["zeiterfassung", "projektmanagement", "mitarbeiter-app", "foto-dokumentation"],
  bodenleger: ["offerten", "lagerverwaltung", "projektmanagement", "rechnungen"],
  gerüstbauer: ["lagerverwaltung", "rechnungen", "projektmanagement", "zeiterfassung"],
  maurer: ["projektmanagement", "foto-dokumentation", "dashboard", "zeiterfassung"],
  "facility-service": ["service-abos", "projektmanagement", "zeiterfassung", "mitarbeiter-app"],
  reinigung: ["zeiterfassung", "projektmanagement", "foto-dokumentation", "service-abos"],
  gartenbau: ["projektmanagement", "zeiterfassung", "foto-dokumentation", "service-abos"],
  umzug: ["projektmanagement", "foto-dokumentation", "zeiterfassung", "lagerverwaltung"],
  haustechnik: ["service-abos", "projektmanagement", "zeiterfassung", "lagerverwaltung"],
  architekten: ["projektmanagement", "dashboard", "zeiterfassung", "kundenportal"],
  agenturen: ["zeiterfassung", "rechnungen", "projektmanagement", "crm"],
  "einmann-betriebe": ["offerten", "rechnungen", "zeiterfassung", "mitarbeiter-app"],
};

const defaultWorkflow = [
  { step: "Offerte erstellen", desc: "Professionelle Offerte in Minuten dank gespeicherter Leistungskataloge." },
  { step: "Projekt ausführen", desc: "Team koordinieren, Fotos dokumentieren, Zeit erfassen - alles mobil." },
  { step: "Qualität dokumentieren", desc: "Fortschritt mit Fotos und Notizen festhalten und mit Kunden teilen." },
  { step: "QR-Rechnung senden", desc: "Rechnung mit einem Klick generieren und direkt versenden." },
];

const workflowMap: Record<string, { step: string; desc: string }[]> = {
  maler: [
    { step: "Offerte aus Leistungskatalog", desc: "Vorgefertigte Positionen waehlen und an den Auftrag anpassen." },
    { step: "Auftrag starten & Team planen", desc: "Offerte umwandeln und Team zuweisen." },
    { step: "Vor-Ort-Dokumentation", desc: "Fortschritte mit Fotos dokumentieren und hochladen." },
    { step: "QR-Rechnung erstellen", desc: "Rechnung automatisch generieren und mit Swiss QR-Code versenden." },
  ],
  gipser: [
    { step: "Flächen erfassen", desc: "Raeume und Flächen direkt vor Ort auf dem Smartphone erfassen." },
    { step: "Fotorapport erstellen", desc: "Jeden Arbeitsschritt mit Fotos und Notizen dokumentieren." },
    { step: "Material buchen", desc: "Verbrauchtes Material wird automatisch vom Lagerbestand abgezogen." },
    { step: "Rechnung generieren", desc: "Rechnung direkt aus den erfassten Projektdaten erstellen." },
  ],
  elektriker: [
    { step: "Schemas hochladen", desc: "Elektroschemas hochladen - das Team greift mobil darauf zu." },
    { step: "Zeiterfassung & Rapport", desc: "Arbeitszeit und Material direkt auf der Baustelle erfassen." },
    { step: "Lagerbestand prüfen", desc: "Kabel und Spezialteile mit Lieferanten-Link prüfen." },
    { step: "Digitale Unterschrift", desc: "Kunde unterschreibt digital, Rechnung wird erstellt." },
  ],
  sanitaer: [
    { step: "Einsatz planen", desc: "Einsaetze im Kalender planen und Mitarbeiter zuweisen." },
    { step: "Zeiterfassung starten", desc: "Mitarbeiter starten die Zeiterfassung beim Eintreffen." },
    { step: "Regierapport erstellen", desc: "Rapport vor Ort mit Material, Zeit und Fotos erstellen." },
    { step: "Kunde unterschreibt", desc: "Nach Unterschrift wird die Rechnung automatisch erstellt." },
  ],
  schreiner: [
    { step: "Auftrag mit Massen", desc: "Individuelle Masse und Materialwünsche dokumentieren." },
    { step: "Werkstattplanung", desc: "Aktuelle Auslastung sehen und Produktionszeiten planen." },
    { step: "Fortschritt festhalten", desc: "Produktionsfortschritt mit Fotos und Status dokumentieren." },
    { step: "Lieferung & Rechnung", desc: "Montage dokumentieren und Schlussrechnung erstellen." },
  ],
  dachdecker: [
    { step: "Teams verteilen", desc: "Kalender für optimale Mitarbeiterplanung nutzen." },
    { step: "Sicherheit dokumentieren", desc: "Wetterbedingungen und Sicherheitsmassnahmen erfassen." },
    { step: "Baufortschritt festhalten", desc: "Fortschritt mit Zeitstempel und GPS dokumentieren." },
    { step: "Archivierung 25+ Jahre", desc: "Alle Daten verschlüsselt langfristig gespeichert." },
  ],
  bodenleger: [
    { step: "Raeume vermessen", desc: "Flächen messen und Materialbedarf automatisch berechnen." },
    { step: "Muster dokumentieren", desc: "Verlegemuster mit Fotos und Notizen festhalten." },
    { step: "Material bestellen", desc: "Material mit Verschnitt-Zuschlag bestellen, Restmengen tracken." },
    { step: "Abnahme & Rechnung", desc: "Abnahme dokumentieren und QR-Rechnung erstellen." },
  ],
  gerüstbauer: [
    { step: "Teile zuweisen", desc: "Jedes Teil von Auslieferung bis Rücknahme tracken." },
    { step: "Inspektion durchführen", desc: "Regelmässige Inspektionen mit Checklisten dokumentieren." },
    { step: "Standzeit berechnen", desc: "Mietdauer wird automatisch pro Baustelle erfasst." },
    { step: "Mietabrechnung", desc: "Rechnungen basierend auf Standzeit automatisch erstellen." },
  ],
  maurer: [
    { step: "Baustellen anlegen", desc: "Mehrere Baustellen parallel mit Statusfiltern verwalten." },
    { step: "Bautagebuch führen", desc: "Wetter, Anwesenheit und Fortschritt täglich erfassen." },
    { step: "Material berechnen", desc: "Mengen basierend auf dem Baufortschritt berechnen." },
    { step: "Projektabschluss", desc: "Projekte mit vollständiger Dokumentation abschliessen." },
  ],
  "facility-service": [
    { step: "Wartungsintervalle definieren", desc: "Intervalle für Heizung, Lueftung, Aufzuege festlegen." },
    { step: "Automatische Aufträge", desc: "Aufträge werden zum fälligen Zeitpunkt erstellt." },
    { step: "Partner koordinieren", desc: "Externe Partner sehen Aufgaben in Echtzeit." },
    { step: "Objektdossier pflegen", desc: "Wartungen und Gerätedaten pro Gebäudeteil archivieren." },
  ],
  reinigung: [
    { step: "Routen planen", desc: "Fahrwege optimieren und Objekte den Teams zuweisen." },
    { step: "Checklisten abarbeiten", desc: "Mitarbeiter haken Aufgaben auf dem Smartphone ab." },
    { step: "Qualität dokumentieren", desc: "Vorher/Nachher-Fotos als Nachweis für Auftraggeber." },
    { step: "Leistungsnachweis", desc: "Leistungsnachweise und Rechnungen automatisch generieren." },
  ],
  gartenbau: [
    { step: "Saisonale Arbeiten planen", desc: "Rückschnitt, Düngung und Winterdienst planen." },
    { step: "Pflanzen dokumentieren", desc: "Arten, Standorte und Pflegehinweise pro Garten erfassen." },
    { step: "Team einsetzen", desc: "Mitarbeiter zuweisen und Arbeitszeiten mobil erfassen." },
    { step: "Pflegeplan teilen", desc: "Fortschrittsfotos über Kundenportal teilen." },
  ],
  umzug: [
    { step: "Inventar erfassen", desc: "Detaillierte Inventarlisten mit Fotos erstellen." },
    { step: "Tagesrouten optimieren", desc: "Be- und Entladestellen für Effizienz planen." },
    { step: "Zustand dokumentieren", desc: "Zustand aller Gegenstaende mit Zeitstempel festhalten." },
    { step: "Protokoll & Rechnung", desc: "Schadensprotokoll und Schlussrechnung erstellen." },
  ],
  haustechnik: [
    { step: "Anlage dokumentieren", desc: "Technische Details und Messwerte vor Ort erfassen." },
    { step: "Wartungsplan erstellen", desc: "Wartungsintervalle pro Anlage definieren." },
    { step: "Einsaetze protokollieren", desc: "Jeden Einsatz mit Fotos und Messwerten dokumentieren." },
    { step: "Historie pflegen", desc: "Wartungen und Reparaturen lückenlos archivieren." },
  ],
  architekten: [
    { step: "Dokumente zentralisieren", desc: "Plaene und Berechnungen an einem Ort, immer aktuell." },
    { step: "Board organisieren", desc: "Projektphasen von Planung bis Abnahme verwalten." },
    { step: "Team koordinieren", desc: "Aufgaben zuweisen und Fortschritt verfolgen." },
    { step: "Bauherren informieren", desc: "Fortschritte über Kundenportal teilen." },
  ],
  agenturen: [
    { step: "Projekt & Budget anlegen", desc: "Projekte mit Kunden-Budgets und Zeitrahmen definieren." },
    { step: "Zeiten erfassen", desc: "Team erfasst Zeiten mit Projektzuordnung." },
    { step: "Rechte verwalten", desc: "Individuelle Zugriffsrechte pro Rolle definieren." },
    { step: "Abrechnung erstellen", desc: "Abrechnungen basierend auf erfassten Zeiten." },
  ],
  "einmann-betriebe": [
    { step: "Offerte aus Vorlage", desc: "Vorlagen nutzen - Minuten statt Stunden." },
    { step: "Unterwegs verwalten", desc: "Alles vom Smartphone, kein PC nötig." },
    { step: "Zeiten & Fotos erfassen", desc: "Arbeit in Echtzeit dokumentieren." },
    { step: "QR-Rechnung senden", desc: "Rechnung erstellen und direkt versenden." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Unique SEO metadata per branch                                     */
/* ------------------------------------------------------------------ */
const seoMetaMap: Record<string, { title: string; description: string; keywords: string[] }> = {
  maler: {
    title: "Maler Software Schweiz - Offerten, Zeiterfassung & QR-Rechnungen | Finito Pro",
    description: "Die beste Software für Maler in der Schweiz. Offerten in 3 Minuten, digitale Fotorapporte, QR-Rechnungen und Zeiterfassung. 30 Tage kostenlos testen.",
    keywords: ["Maler Software", "Maler Software Schweiz", "Malerbetrieb digitalisieren", "Offerten Maler", "Zeiterfassung Maler", "QR-Rechnung Maler"],
  },
  gipser: {
    title: "Gipser Software Schweiz - Fotorapporte & Lagerverwaltung | Finito Pro",
    description: "Software für Gipser: Digitale Fotorapporte, automatische Lagerverwaltung und QR-Rechnungen. Flächenberechnung und Aufmass direkt vor Ort.",
    keywords: ["Gipser Software", "Gipser Software Schweiz", "Gipsereibetrieb Software", "Fotorapport Gipser", "Lagerverwaltung Gipser"],
  },
  elektriker: {
    title: "Elektriker Software Schweiz - Schemas mobil & Lagerverwaltung | Finito Pro",
    description: "Software für Elektriker: Elektroschemas auf dem Smartphone, Lagerverwaltung mit Lieferanten-Links und digitale Regierapporte.",
    keywords: ["Elektriker Software", "Elektriker Software Schweiz", "Elektroinstallateur Software", "Lagerverwaltung Elektriker", "Regierapport digital"],
  },
  "sanitaer": {
    title: "Sanitaer Software Schweiz - Zeiterfassung & Regierapporte | Finito Pro",
    description: "Software für Sanitaerinstallateur: Mobile Zeiterfassung, digitale Regierapporte mit Kundenunterschrift und automatische QR-Rechnungen.",
    keywords: ["Sanitaer Software", "Sanitaer Software Schweiz", "Sanitaerinstallateur Software", "Zeiterfassung Sanitaer", "Regierapport Sanitaer"],
  },
  schreiner: {
    title: "Schreiner Software Schweiz - Offerten & Werkstattplanung | Finito Pro",
    description: "Software für Schreinerei: Detaillierte Offerten für Massanfertigungen, Werkstattauslastung im Dashboard und Projektfortschritt dokumentieren.",
    keywords: ["Schreiner Software", "Schreiner Software Schweiz", "Schreinerei Software", "Werkstattplanung Software", "Offerten Schreiner"],
  },
  dachdecker: {
    title: "Dachdecker Software Schweiz - Teamplanung & Archivierung | Finito Pro",
    description: "Software für Dachdecker: Mitarbeiterplanung mit Kalender, digitales Projektarchiv für 25+ Jahre und Sicherheitsdokumentation.",
    keywords: ["Dachdecker Software", "Dachdecker Software Schweiz", "Dachdeckerbetrieb Software", "Teamplanung Dachdecker", "Projektarchiv"],
  },
  bodenleger: {
    title: "Bodenleger Software Schweiz - Materialberechnung & Dokumentation | Finito Pro",
    description: "Software für Bodenleger: Automatische Quadratmeterberechnung, Restmaterial-Tracking und Verlegemuster-Dokumentation.",
    keywords: ["Bodenleger Software", "Bodenleger Software Schweiz", "Parkett Software", "Fliesen Software", "Materialberechnung Bodenleger"],
  },
  "gerüstbauer": {
    title: "Gerüstbau Software Schweiz - Teile-Tracking & Mietabrechnung | Finito Pro",
    description: "Software für Gerüstbauer: Gerüst-Teile von Auslieferung bis Rücknahme tracken, automatische Mietabrechnung und Sicherheitsinspektionen.",
    keywords: ["Gerüstbau Software", "Gerüstbauer Software Schweiz", "Gerüst-Tracking", "Mietabrechnung Gerüst", "Sicherheitsinspektion"],
  },
  maurer: {
    title: "Maurer Software Schweiz - Bautagebuch & Projektmanagement | Finito Pro",
    description: "Software für Maurer: Automatisches Bautagebuch, Multi-Projekt-Übersicht und Materialberechnung basierend auf Baufortschritt.",
    keywords: ["Maurer Software", "Maurer Software Schweiz", "Bauunternehmen Software", "Bautagebuch digital", "Projektmanagement Bau"],
  },
  "facility-service": {
    title: "Facility Management Software Schweiz - Wartung & Koordination | Finito Pro",
    description: "Software für Facility Service: Automatisierte Wartungsintervalle, Partnerkoordination und digitale Objektdossiers pro Gebäudeteil.",
    keywords: ["Facility Management Software", "Facility Service Software Schweiz", "Wartungsplanung Software", "Gebaeudeverwaltung Software"],
  },
  reinigung: {
    title: "Reinigung Software Schweiz - Routenplanung & Qualitätsdoku | Finito Pro",
    description: "Software für Reinigungsunternehmen: Routenplanung, Qualitätsdokumentation mit Fotos und automatische Leistungsnachweise.",
    keywords: ["Reinigung Software", "Reinigungsfirma Software Schweiz", "Routenplanung Reinigung", "Qualitätsdokumentation Reinigung"],
  },
  gartenbau: {
    title: "Gartenbau Software Schweiz - Saisonplanung & Dokumentation | Finito Pro",
    description: "Software für Gartenbau: Saisonale Projektplanung, Pflanzendokumentation und Pflegepläne für Ihre Kunden. Zeiterfassung inklusive.",
    keywords: ["Gartenbau Software", "Gartenbau Software Schweiz", "Landschaftspflege Software", "Saisonplanung Gartenbau", "Pflanzendokumentation"],
  },
  umzug: {
    title: "Umzug Software Schweiz - Inventarlisten & Routenplanung | Finito Pro",
    description: "Software für Umzugsunternehmen: Detaillierte Inventarlisten mit Fotos, Routenplanung und Schadensprotokoll mit Zeitstempel.",
    keywords: ["Umzug Software", "Umzugsunternehmen Software Schweiz", "Inventarliste Umzug", "Routenplanung Umzug", "Schadensprotokoll"],
  },
  haustechnik: {
    title: "Haustechnik Software Schweiz - Wartungsplanung & HVAC | Finito Pro",
    description: "Software für Haustechnik: HVAC-Dokumentation, automatische Wartungsplanung und lückenlose Anlagenhistorie pro Gebäudeteil.",
    keywords: ["Haustechnik Software", "Haustechnik Software Schweiz", "HVAC Software", "Wartungsplanung Heizung", "Anlagendokumentation"],
  },
  architekten: {
    title: "Architekten Software Schweiz - Projektdokumente & Task-Board | Finito Pro",
    description: "Software für Architekten: Zentrale Projektdokumente, Task-Board für Bauphasen und transparente Bauherren-Kommunikation über das Kundenportal.",
    keywords: ["Architekten Software", "Architekten Software Schweiz", "Architekturbüro Software", "Projektmanagement Architekten", "Task-Board Bauphasen"],
  },
  agenturen: {
    title: "Agentur Software Schweiz - Zeiterfassung & Budgetverwaltung | Finito Pro",
    description: "Software für Agenturen: Projektbasierte Zeiterfassung, individuelle Benutzerrechte und Kunden-Budgets mit automatischen Warnungen.",
    keywords: ["Agentur Software", "Agentur Software Schweiz", "Zeiterfassung Agentur", "Projektmanagement Agentur", "Budget Software Agentur"],
  },
  "einmann-betriebe": {
    title: "Software für Einmann-Betriebe Schweiz - Büro auf dem Smartphone | Finito Pro",
    description: "Software für Einzelunternehmer und Einmann-Betriebe: Offerten, QR-Rechnungen, Zeiterfassung - alles in einer App auf dem Smartphone.",
    keywords: ["Einmann-Betrieb Software", "Selbstständiger Software Schweiz", "Einzelunternehmer Software", "Handwerker App", "Büro Smartphone"],
  },
};

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const branch = branchBySlug(slug);
  if (!branch) return {};

  const seo = seoMetaMap[slug];
  const title = seo?.title || `${branch.titleDe} Software Schweiz | Finito Pro`;
  const description = seo?.description || branch.descriptionDe;
  const keywords = seo?.keywords || [
    `${branch.titleDe} Software`,
    `${branch.titleDe} Software Schweiz`,
    "KMU Software",
    "Handwerker Software Schweiz",
    `Zeiterfassung ${branch.titleDe}`,
    `QR-Rechnungen ${branch.titleDe}`,
  ];

  return generatePageMetadata({
    title,
    description,
    path: `/branchen/${slug}`,
    locale,
    keywords,
  });
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const branch = branchBySlug(slug);
  if (!branch) notFound();

  const featureSlugs = relevantFeaturesMap[slug] || ["projektmanagement", "rechnungen", "zeiterfassung"];
  const relevantFeatures = featureSlugs
    .map((fs) => features.find((f) => f.slug === fs))
    .filter(Boolean) as typeof features;
  const workflow = workflowMap[slug] || defaultWorkflow;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Branchen", path: "/branchen" },
              { name: branch.titleDe, path: `/branchen/${slug}` },
            ])
          ),
        }}
      />
      <BranchPageContent
        branch={branch}
        relevantFeatures={relevantFeatures}
        workflow={workflow}
      />
    </>
  );
}
