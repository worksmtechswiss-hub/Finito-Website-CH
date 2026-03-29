export interface Feature {
  id: string;
  icon: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  slug: string;
  bulletsDe: string[];
  bulletsEn: string[];
}

export const features: Feature[] = [
  {
    id: 'rechnungen',
    icon: 'FileText',
    titleDe: 'QR-Rechnungen',
    titleEn: 'QR Invoices',
    descriptionDe:
      'Erstellen Sie professionelle Schweizer QR-Rechnungen in Sekunden. Automatische MwSt-Berechnung, Zahlungserinnerungen und nahtloser Export an Ihre Buchhaltung.',
    descriptionEn:
      'Create professional Swiss QR invoices in seconds. Automatic VAT calculation, payment reminders, and seamless export to your accounting software.',
    slug: 'rechnungen',
    bulletsDe: [
      'Schweizer QR-Rechnungen nach ISO 20022 Standard',
      'Automatische MwSt-Berechnung (7.7% / 2.5% / 0%)',
      'Zahlungserinnerungen per E-Mail oder Post',
      'Export als PDF oder direkt an Buchhaltungssoftware',
      'Teilzahlungen und Ratenzahlungen verwalten',
      'Automatischer Zahlungsabgleich mit Bankkonten',
    ],
    bulletsEn: [
      'Swiss QR invoices following ISO 20022 standard',
      'Automatic VAT calculation (7.7% / 2.5% / 0%)',
      'Payment reminders via email or mail',
      'Export as PDF or directly to accounting software',
      'Manage partial payments and installment plans',
      'Automatic payment matching with bank accounts',
    ],
  },
  {
    id: 'crm',
    icon: 'Users',
    titleDe: 'Kundenverwaltung',
    titleEn: 'Customer Management',
    descriptionDe:
      'Alle Kundendaten an einem Ort. Kontakthistorie, wiederkehrende Aufträge und individuelle Notizen machen die Zusammenarbeit effizient.',
    descriptionEn:
      'All customer data in one place. Contact history, recurring orders, and individual notes make collaboration efficient.',
    slug: 'crm',
    bulletsDe: [
      'Zentrale Kontaktverwaltung mit Suchfunktion',
      'Komplette Kundenhistorie mit allen Projekten und Rechnungen',
      'Wiederkehrende Aufträge automatisch planen',
      'Individuelle Notizen und Dokumente pro Kunde',
      'Kundenkategorien und Tags zur Segmentierung',
      'Import/Export von Kontaktdaten (CSV, vCard)',
    ],
    bulletsEn: [
      'Central contact management with search function',
      'Complete customer history with all projects and invoices',
      'Automatically plan recurring orders',
      'Individual notes and documents per customer',
      'Customer categories and tags for segmentation',
      'Import/export of contact data (CSV, vCard)',
    ],
  },
  {
    id: 'projektmanagement',
    icon: 'FolderKanban',
    titleDe: 'Projektverwaltung',
    titleEn: 'Project Management',
    descriptionDe:
      'Verwalten Sie alle Projekte mobil. Aufgaben zuweisen, Foto-Dokumentation erstellen und Ihr Team jederzeit koordinieren.',
    descriptionEn:
      'Manage all projects on the go. Assign tasks, create photo documentation, and coordinate your team at any time.',
    slug: 'projektmanagement',
    bulletsDe: [
      'Mobile Aufgabenverwaltung mit Status-Tracking',
      'Foto-Dokumentation direkt im Projekt',
      'Team-Koordination mit Echtzeit-Updates',
      'Projektvorlagen für wiederkehrende Aufträge',
      'Drag-and-Drop Aufgabenplanung im Kalender',
      'Automatische Benachrichtigungen bei Änderungen',
    ],
    bulletsEn: [
      'Mobile task management with status tracking',
      'Photo documentation directly in the project',
      'Team coordination with real-time updates',
      'Project templates for recurring orders',
      'Drag-and-drop task planning in calendar',
      'Automatic notifications on changes',
    ],
  },
  {
    id: 'zeiterfassung',
    icon: 'Clock',
    titleDe: 'Zeiterfassung',
    titleEn: 'Time Tracking',
    descriptionDe:
      'Projektbasierte Zeiterfassung mit einem Klick. Monatsberichte, Überstunden-Tracking und direkter Export für die Lohnbuchhaltung.',
    descriptionEn:
      'Project-based time tracking with one click. Monthly reports, overtime tracking, and direct export for payroll.',
    slug: 'zeiterfassung',
    bulletsDe: [
      'Ein-Klick Zeiterfassung pro Projekt und Aufgabe',
      'Automatische Monatsberichte pro Mitarbeiter',
      'Überstunden-Tracking mit Soll/Ist-Vergleich',
      'Export für die Lohnbuchhaltung (CSV, PDF)',
      'GPS-basierte Erfassung auf der Baustelle',
      'Pausenzeiten und Fahrzeit separat erfassen',
    ],
    bulletsEn: [
      'One-click time tracking per project and task',
      'Automatic monthly reports per employee',
      'Overtime tracking with target/actual comparison',
      'Export for payroll (CSV, PDF)',
      'GPS-based tracking on the construction site',
      'Record break times and travel time separately',
    ],
  },
  {
    id: 'offerten',
    icon: 'Send',
    titleDe: 'Offerten',
    titleEn: 'Quotes',
    descriptionDe:
      'Schnelle digitale Offerten mit gespeicherten Leistungskatalogen. Per Knopfdruck in einen Auftrag umwandeln.',
    descriptionEn:
      'Fast digital quotes with saved service catalogs. Convert to an order at the click of a button.',
    slug: 'offerten',
    bulletsDe: [
      'Gespeicherte Leistungskataloge für schnelle Erstellung',
      'Professionelle Offerten im eigenen Firmendesign',
      'Ein-Klick-Umwandlung von Offerte zu Auftrag',
      'Optionale und alternative Positionen',
      'Digitale Unterschrift des Kunden',
      'Automatische Nachverfolgung offener Offerten',
    ],
    bulletsEn: [
      'Saved service catalogs for fast creation',
      'Professional quotes in your company design',
      'One-click conversion from quote to order',
      'Optional and alternative line items',
      'Digital customer signature',
      'Automatic follow-up on open quotes',
    ],
  },
  {
    id: 'dashboard',
    icon: 'LayoutDashboard',
    titleDe: 'Dashboard',
    titleEn: 'Dashboard',
    descriptionDe:
      'Alle wichtigen Kennzahlen auf einen Blick. Finanzielle KPIs, aktive Projekte, Mitarbeiterauslastung und Jahresberichte.',
    descriptionEn:
      'All important KPIs at a glance. Financial metrics, active projects, employee utilization, and annual reports.',
    slug: 'dashboard',
    bulletsDe: [
      'Finanzielle KPIs: Umsatz, offene Rechnungen, Cashflow',
      'Aktive Projekte mit Fortschrittsanzeige',
      'Mitarbeiterauslastung in Echtzeit',
      'Jahres- und Monatsberichte als PDF',
      'Individuelle Widgets und Filter',
      'Vergleich mit Vorjahresperiode',
    ],
    bulletsEn: [
      'Financial KPIs: revenue, open invoices, cash flow',
      'Active projects with progress indicators',
      'Employee utilization in real time',
      'Annual and monthly reports as PDF',
      'Individual widgets and filters',
      'Comparison with previous year period',
    ],
  },
  {
    id: 'ferienmanagement',
    icon: 'Palmtree',
    titleDe: 'Ferienmanagement',
    titleEn: 'Vacation Management',
    descriptionDe:
      'Mobile Ferienantraege, Resttage-Übersicht und Genehmigungsworkflow. Mit Teamkalender keine Engpaesse mehr.',
    descriptionEn:
      'Mobile vacation requests, remaining days overview, and approval workflow. No more bottlenecks with the team calendar.',
    slug: 'ferienmanagement',
    bulletsDe: [
      'Mobile Ferienantraege vom Smartphone',
      'Resttage-Übersicht pro Mitarbeiter',
      'Genehmigungsworkflow für Vorgesetzte',
      'Teamkalender zur Vermeidung von Engpaessen',
      'Automatische Berechnung von Ferienanspruch',
      'Feiertage und Brueckentage vorkonfiguriert',
    ],
    bulletsEn: [
      'Mobile vacation requests from smartphone',
      'Remaining days overview per employee',
      'Approval workflow for supervisors',
      'Team calendar to avoid bottlenecks',
      'Automatic calculation of vacation entitlement',
      'Public holidays and bridge days preconfigured',
    ],
  },
  {
    id: 'foto-dokumentation',
    icon: 'Camera',
    titleDe: 'Foto-Dokumentation',
    titleEn: 'Photo Documentation',
    descriptionDe:
      'Vorher/Nachher-Fotos mit automatischer Projektzuordnung. Perfekte Qualitätsnachweise für Kunden und Versicherungen.',
    descriptionEn:
      'Before/after photos with automatic project assignment. Perfect quality proofs for customers and insurance.',
    slug: 'foto-dokumentation',
    bulletsDe: [
      'Vorher/Nachher-Fotos direkt im Projekt',
      'Automatische Zuordnung zum richtigen Projekt',
      'Qualitätsnachweise für Kunden und Versicherungen',
      'Zeitstempel und GPS-Daten pro Foto',
      'Unbegrenzter Speicherplatz für Fotos',
      'Fotos direkt vom Smartphone hochladen',
    ],
    bulletsEn: [
      'Before/after photos directly in the project',
      'Automatic assignment to the correct project',
      'Quality proofs for customers and insurance',
      'Timestamp and GPS data per photo',
      'Unlimited storage for photos',
      'Upload photos directly from smartphone',
    ],
  },
  {
    id: 'lagerverwaltung',
    icon: 'Warehouse',
    titleDe: 'Lagerverwaltung',
    titleEn: 'Inventory Management',
    descriptionDe:
      'Material- und Werkzeugverwaltung mit automatischem Abzug pro Projekt. Behalten Sie den Überblick über Ihren Lagerbestand.',
    descriptionEn:
      'Material and tool management with automatic deduction per project. Keep track of your inventory at all times.',
    slug: 'lagerverwaltung',
    bulletsDe: [
      'Material- und Werkzeugverwaltung an einem Ort',
      'Automatischer Abzug pro Projekt',
      'Lagerbestandsübersicht in Echtzeit',
      'Mindestbestand-Warnungen bei niedrigem Vorrat',
      'Lieferanten-Verlinkung für schnelle Nachbestellung',
      'Barcode-Scanner für schnelle Erfassung',
    ],
    bulletsEn: [
      'Material and tool management in one place',
      'Automatic deduction per project',
      'Real-time inventory overview',
      'Minimum stock warnings for low supply',
      'Supplier linking for fast reordering',
      'Barcode scanner for quick entry',
    ],
  },
  {
    id: 'buchhaltung',
    icon: 'Calculator',
    titleDe: 'Buchhaltung',
    titleEn: 'Accounting',
    descriptionDe:
      'Einnahmen und Ausgaben verwalten, Kostenmanagement und Export für Ihren Treuhander. Alle Daten sicher auf Schweizer Servern.',
    descriptionEn:
      'Manage income and expenses, cost management, and export for your accountant. All data securely stored on Swiss servers.',
    slug: 'buchhaltung',
    bulletsDe: [
      'Einnahmen und Ausgaben übersichtlich verwalten',
      'Kostenmanagement pro Projekt und Kunde',
      'Export für Ihren Treuhander (CSV, PDF)',
      'Alle Daten sicher auf Schweizer Servern',
      'Automatische Kategorisierung von Belegen',
      'MwSt-Abrechnung vorbereitet für die ESTV',
    ],
    bulletsEn: [
      'Manage income and expenses clearly',
      'Cost management per project and customer',
      'Export for your accountant (CSV, PDF)',
      'All data securely stored on Swiss servers',
      'Automatic categorization of receipts',
      'VAT statement prepared for Swiss tax authority',
    ],
  },
  {
    id: 'mitarbeiter-app',
    icon: 'Smartphone',
    titleDe: 'Mitarbeiter-App',
    titleEn: 'Employee App',
    descriptionDe:
      'Aufgaben einsehen, Zeiten erfassen, Fotos hochladen und mit dem Team kommunizieren - alles vom Smartphone.',
    descriptionEn:
      'View tasks, track time, upload photos, and communicate with the team - all from your smartphone.',
    slug: 'mitarbeiter-app',
    bulletsDe: [
      'Aufgaben und Tagesprogramm auf dem Smartphone',
      'Zeiterfassung mit einem Klick starten',
      'Fotos hochladen und Projekt zuordnen',
      'Kommunikation mit dem Büro in Echtzeit',
      'Offline-Modus für Baustellen ohne Empfang',
      'Push-Benachrichtigungen bei neuen Aufgaben',
    ],
    bulletsEn: [
      'Tasks and daily schedule on your smartphone',
      'Start time tracking with one click',
      'Upload photos and assign to project',
      'Real-time communication with the office',
      'Offline mode for construction sites without reception',
      'Push notifications for new tasks',
    ],
  },
  {
    id: 'kundenportal',
    icon: 'Globe',
    titleDe: 'Kundenportal',
    titleEn: 'Customer Portal',
    descriptionDe:
      'Teilen Sie den Projektfortschritt mit Ihren Kunden. Transparente Kommunikation und Fortschrittsfotos schaffen Vertrauen.',
    descriptionEn:
      'Share project progress with your customers. Transparent communication and progress photos build trust.',
    slug: 'kundenportal',
    bulletsDe: [
      'Projektfortschritt mit Kunden teilen',
      'Transparente Kommunikation über alle Phasen',
      'Fortschrittsfotos automatisch bereitstellen',
      'Kunden können Offerten digital freigeben',
      'Rechnungen und Dokumente im Portal einsehen',
      'Keine App-Installation für Kunden nötig',
    ],
    bulletsEn: [
      'Share project progress with customers',
      'Transparent communication across all phases',
      'Automatically provide progress photos',
      'Customers can digitally approve quotes',
      'View invoices and documents in the portal',
      'No app installation required for customers',
    ],
  },
  {
    id: 'service-abos',
    icon: 'RefreshCw',
    titleDe: 'Service-Abos',
    titleEn: 'Service Subscriptions',
    descriptionDe:
      'Wiederkehrende Aufträge verwalten mit automatischer Projekterstellung. Perfekt für Wartungsvertraege und Serviceabonnements.',
    descriptionEn:
      'Manage recurring orders with automatic project creation. Perfect for maintenance contracts and service subscriptions.',
    slug: 'service-abos',
    bulletsDe: [
      'Wiederkehrende Aufträge automatisch verwalten',
      'Automatische Projekterstellung nach Zeitplan',
      'Wartungsvertraege digital abbilden',
      'Erinnerungen für faellige Service-Einsaetze',
      'Abrechnung automatisch generieren',
      'Kundenhistorie mit allen Service-Einsaetzen',
    ],
    bulletsEn: [
      'Automatically manage recurring orders',
      'Automatic project creation on schedule',
      'Digitally map maintenance contracts',
      'Reminders for due service calls',
      'Automatically generate billing',
      'Customer history with all service calls',
    ],
  },
];
