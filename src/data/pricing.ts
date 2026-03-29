export interface PricingTier {
  id: string;
  nameDe: string;
  nameEn: string;
  priceDe: string;
  priceEn: string;
  descriptionDe: string;
  descriptionEn: string;
  featuresDe: string[];
  featuresEn: string[];
  highlighted: boolean;
  ctaDe: string;
  ctaEn: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    nameDe: 'Starter',
    nameEn: 'Starter',
    priceDe: 'Gratis',
    priceEn: 'Free',
    descriptionDe:
      'Für kleine Teams, die den ersten Schritt in die Digitalisierung machen wollen.',
    descriptionEn:
      'For small teams taking the first step towards digitalization.',
    featuresDe: [
      'Zeiterfassung pro Projekt',
      'Foto-Dokumentation mit Projektzuordnung',
      'Einfaches Dashboard mit Überblick',
      'Mobile App für Mitarbeiter',
      'Bis zu 2 Benutzer',
      'Schweizer Serverstandort',
      'E-Mail-Support',
    ],
    featuresEn: [
      'Time tracking per project',
      'Photo documentation with project assignment',
      'Simple dashboard with overview',
      'Mobile app for employees',
      'Up to 2 users',
      'Swiss server location',
      'Email support',
    ],
    highlighted: false,
    ctaDe: 'Kostenlos starten',
    ctaEn: 'Start for free',
  },
  {
    id: 'kmu',
    nameDe: 'KMU',
    nameEn: 'SME',
    priceDe: 'CHF 30 / Monat pro Benutzer',
    priceEn: 'CHF 30 / month per user',
    descriptionDe:
      'Alle Funktionen für wachsende Handwerksbetriebe und KMU. Das beliebteste Paket.',
    descriptionEn:
      'All features for growing trades businesses and SMEs. The most popular plan.',
    featuresDe: [
      'Alles aus Starter',
      'QR-Rechnungen nach Schweizer Standard',
      'Offerten mit Leistungskatalogen',
      'Projektverwaltung mit Aufgaben-Board',
      'CRM und Kundenverwaltung',
      'Lagerverwaltung für Material und Werkzeuge',
      'Buchhaltung mit MwSt-Abrechnung',
      'Ferienmanagement mit Genehmigungsworkflow',
      'Kundenportal für Projektfortschritte',
      'Service-Abos und Wartungsvertraege',
      'Erweitertes Dashboard mit KPIs',
      'Unbegrenzte Benutzer',
      'Prioritaets-Support per Chat und E-Mail',
    ],
    featuresEn: [
      'Everything from Starter',
      'QR invoices following Swiss standard',
      'Quotes with service catalogs',
      'Project management with task board',
      'CRM and customer management',
      'Inventory management for materials and tools',
      'Accounting with VAT reporting',
      'Vacation management with approval workflow',
      'Customer portal for project progress',
      'Service subscriptions and maintenance contracts',
      'Advanced dashboard with KPIs',
      'Unlimited users',
      'Priority support via chat and email',
    ],
    highlighted: true,
    ctaDe: '30 Tage kostenlos testen',
    ctaEn: 'Try free for 30 days',
  },
  {
    id: 'grossfirmen',
    nameDe: 'Grossfirmen',
    nameEn: 'Enterprise',
    priceDe: 'Individuell',
    priceEn: 'Custom',
    descriptionDe:
      'Massgeschneiderte Lösungen für grössere Unternehmen mit individuellen Anforderungen.',
    descriptionEn:
      'Tailored solutions for larger companies with individual requirements.',
    featuresDe: [
      'Alles aus KMU',
      'Individuelle Funktionen nach Bedarf',
      'Persoenliches Onboarding und Teamschulung',
      'Dedizierter Ansprechpartner',
      'API-Zugang für Integrationen',
      'Erweiterte Benutzerrechte und Rollen',
      'Individuelle Berichte und Exporte',
      'SLA mit garantierter Reaktionszeit',
      'Datenmigration aus bestehenden Systemen',
      'Individuelle Schulungen vor Ort oder remote',
    ],
    featuresEn: [
      'Everything from SME',
      'Custom features as needed',
      'Personal onboarding and team training',
      'Dedicated account manager',
      'API access for integrations',
      'Advanced user permissions and roles',
      'Custom reports and exports',
      'SLA with guaranteed response time',
      'Data migration from existing systems',
      'Individual training on-site or remote',
    ],
    highlighted: false,
    ctaDe: 'Kontakt aufnehmen',
    ctaEn: 'Contact us',
  },
];
