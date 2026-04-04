export interface BranchUseCase {
  title: string;
  description: string;
}

export interface Branch {
  id: string;
  icon: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  slug: string;
  useCasesDe: BranchUseCase[];
  useCasesEn: BranchUseCase[];
}

export const branches: Branch[] = [
  {
    id: 'maler',
    icon: 'Paintbrush',
    titleDe: 'Maler',
    titleEn: 'Painters',
    descriptionDe:
      'Digitale Offerten mit gespeicherten Leistungskatalogen und transparente Projektfortschritte für Ihre Kunden.',
    descriptionEn:
      'Digital quotes with saved service catalogs and transparent project progress for your customers.',
    slug: 'maler',
    useCasesDe: [
      {
        title: 'Leistungskataloge für schnelle Offerten',
        description:
          'Speichern Sie Ihre häufigsten Malerarbeiten als Katalog ab. Innenanstrich, Fassadenrenovation oder Tapezierarbeiten - erstellen Sie Offerten in Minuten statt Stunden.',
      },
      {
        title: 'Projektfortschritt mit Kunden teilen',
        description:
          'Teilen Sie Vorher/Nachher-Fotos und den aktuellen Stand direkt mit Ihren Kunden über das Kundenportal. Transparenz schafft Vertrauen.',
      },
      {
        title: 'Farbverwaltung und Materialbestellung',
        description:
          'Verwalten Sie Farbtoene, Mengen und Materialbedarf pro Projekt. Automatische Bestandsübersicht verhindert Engpässe auf der Baustelle.',
      },
    ],
    useCasesEn: [
      {
        title: 'Service catalogs for fast quotes',
        description:
          'Save your most common painting jobs as a catalog. Interior painting, facade renovation, or wallpapering - create quotes in minutes instead of hours.',
      },
      {
        title: 'Share project progress with clients',
        description:
          'Share before/after photos and current status directly with your clients through the customer portal. Transparency builds trust.',
      },
      {
        title: 'Color management and material ordering',
        description:
          'Manage color shades, quantities, and material needs per project. Automatic inventory overview prevents shortages on the construction site.',
      },
    ],
  },
  {
    id: 'gipser',
    icon: 'Hammer',
    titleDe: 'Gipser',
    titleEn: 'Plasterers',
    descriptionDe:
      'Digitale Fotoberichte und Lagerverwaltung für Gipserarbeiten. Dokumentieren Sie jeden Arbeitsschritt lückenlos.',
    descriptionEn:
      'Digital photo reports and inventory management for plastering work. Document every step without gaps.',
    slug: 'gipser',
    useCasesDe: [
      {
        title: 'Digitale Fotoberichte',
        description:
          'Dokumentieren Sie Untergrund, Zwischenschritte und Endergebnis mit Fotos direkt im Projekt. Perfekt als Qualitätsnachweis und für Versicherungsfälle.',
      },
      {
        title: 'Lagerverwaltung für Material',
        description:
          'Behalten Sie den Überblick über Gips, Putz, Armierungsgewebe und Werkzeuge. Automatischer Abzug pro Projekt zeigt den tatsächlichen Verbrauch.',
      },
      {
        title: 'Aufmass und Flächenberechnung',
        description:
          'Erfassen Sie Flächen und Mengen direkt vor Ort. Die Daten fliessen automatisch in Ihre Offerten und Rechnungen ein.',
      },
    ],
    useCasesEn: [
      {
        title: 'Digital photo reports',
        description:
          'Document substrate, intermediate steps, and final results with photos directly in the project. Perfect as quality proof and for insurance claims.',
      },
      {
        title: 'Inventory management for materials',
        description:
          'Keep track of plaster, render, reinforcement mesh, and tools. Automatic deduction per project shows actual consumption.',
      },
      {
        title: 'Measurements and area calculations',
        description:
          'Record areas and quantities directly on site. The data automatically flows into your quotes and invoices.',
      },
    ],
  },
  {
    id: 'elektriker',
    icon: 'Zap',
    titleDe: 'Elektriker',
    titleEn: 'Electricians',
    descriptionDe:
      'Schemas auf dem Smartphone und Lagerverwaltung mit Lieferanten-Verlinkung für effiziente Elektroinstallationen.',
    descriptionEn:
      'Schematics on your smartphone and inventory management with supplier links for efficient electrical installations.',
    slug: 'elektriker',
    useCasesDe: [
      {
        title: 'Schemas auf dem Smartphone',
        description:
          'Greifen Sie auf Elektroschemas und technische Dokumente direkt auf der Baustelle zu. Alle Planunterlagen immer dabei, ohne schwere Ordner.',
      },
      {
        title: 'Lagerverwaltung mit Lieferanten-Verlinkung',
        description:
          'Verwalten Sie Kabel, Schalter, Sicherungen und Spezialteile mit direkter Verlinkung zu Ihren Lieferanten für schnelle Nachbestellung.',
      },
      {
        title: 'Regieberichte digital',
        description:
          'Erstellen Sie Regierapporte direkt vor Ort mit Zeiterfassung, Material und Fotos. Der Kunde kann digital unterschreiben.',
      },
    ],
    useCasesEn: [
      {
        title: 'Schematics on your smartphone',
        description:
          'Access electrical schematics and technical documents directly on the construction site. All plans always with you, without heavy folders.',
      },
      {
        title: 'Inventory management with supplier linking',
        description:
          'Manage cables, switches, fuses, and special parts with direct linking to your suppliers for fast reordering.',
      },
      {
        title: 'Digital time and material reports',
        description:
          'Create time and material reports directly on site with time tracking, materials, and photos. The customer can sign digitally.',
      },
    ],
  },
  {
    id: 'sanitaer',
    icon: 'Droplets',
    titleDe: 'Sanitär',
    titleEn: 'Plumbers',
    descriptionDe:
      'Mobile Zeiterfassung beim Kunden und digitale Regierapporte für Sanitärinstallationen und Reparaturen.',
    descriptionEn:
      'Mobile time tracking at the customer site and digital time-and-material reports for plumbing installations and repairs.',
    slug: 'sanitaer',
    useCasesDe: [
      {
        title: 'Mobile Zeiterfassung beim Kunden',
        description:
          'Starten Sie die Zeiterfassung beim Eintreffen und stoppen Sie beim Verlassen. Inklusive Fahrzeit, Arbeitszeit und Pausen - alles sauber getrennt.',
      },
      {
        title: 'Digitale Regierapporte',
        description:
          'Erstellen Sie Regierapporte mit Material, Arbeitszeit und Fotos direkt auf der Baustelle. Lassen Sie den Kunden sofort digital unterschreiben.',
      },
      {
        title: 'Ersatzteil-Verwaltung',
        description:
          'Verwalten Sie Ihren Servicebus-Bestand und bestellen Sie fehlende Teile nach. Automatische Verbrauchserfassung pro Einsatz.',
      },
    ],
    useCasesEn: [
      {
        title: 'Mobile time tracking at the customer site',
        description:
          'Start time tracking on arrival and stop on departure. Including travel time, work time, and breaks - all neatly separated.',
      },
      {
        title: 'Digital time-and-material reports',
        description:
          'Create time-and-material reports with materials, work time, and photos directly on the construction site. Have the customer sign digitally right away.',
      },
      {
        title: 'Spare parts management',
        description:
          'Manage your service van inventory and reorder missing parts. Automatic consumption tracking per job.',
      },
    ],
  },
  {
    id: 'schreiner',
    icon: 'Ruler',
    titleDe: 'Schreiner',
    titleEn: 'Carpenters',
    descriptionDe:
      'Individuelle Auftragsdokumentation und Werkstattkapazitaet im Dashboard für Schreinereien und Moebelbauer.',
    descriptionEn:
      'Custom order documentation and workshop capacity in the dashboard for carpentry shops and furniture makers.',
    slug: 'schreiner',
    useCasesDe: [
      {
        title: 'Individuelle Auftragsdokumentation',
        description:
          'Dokumentieren Sie Sonderanfertigungen mit Massen, Materialwahl und Kundenabsprachen. Jedes Detail ist festgehalten und jederzeit abrufbar.',
      },
      {
        title: 'Werkstattkapazitaet im Dashboard',
        description:
          'Sehen Sie auf einen Blick, welche Aufträge in der Werkstatt sind, wer daran arbeitet und wann die Auslieferung geplant ist.',
      },
      {
        title: 'Offerten für Massanfertigungen',
        description:
          'Erstellen Sie detaillierte Offerten für individuelle Moebel und Einbauten. Mit Positionierung für Material, Arbeitszeit und Montage.',
      },
    ],
    useCasesEn: [
      {
        title: 'Custom order documentation',
        description:
          'Document custom-made items with measurements, material choices, and client agreements. Every detail is recorded and accessible at any time.',
      },
      {
        title: 'Workshop capacity in the dashboard',
        description:
          'See at a glance which orders are in the workshop, who is working on them, and when delivery is planned.',
      },
      {
        title: 'Quotes for custom work',
        description:
          'Create detailed quotes for individual furniture and built-ins. With line items for material, labor, and installation.',
      },
    ],
  },
  {
    id: 'dachdecker',
    icon: 'Home',
    titleDe: 'Dachdecker',
    titleEn: 'Roofers',
    descriptionDe:
      'Mitarbeiterplanung mit Kalender und digitales Projektarchiv für über 25 Jahre. Perfekt für Dachsanierungen und Neubauten.',
    descriptionEn:
      'Employee planning with calendar and digital project archive for over 25 years. Perfect for roof renovations and new builds.',
    slug: 'dachdecker',
    useCasesDe: [
      {
        title: 'Mitarbeiterplanung mit Kalender',
        description:
          'Planen Sie Ihre Teams auf verschiedene Baustellen. Der Kalender zeigt Verfügbarkeit, geplante Einsaetze und Ferien auf einen Blick.',
      },
      {
        title: 'Digitales Projektarchiv für 25+ Jahre',
        description:
          'Speichern Sie alle Projektdaten, Fotos und Dokumente verschlüsselt für mindestens 25 Jahre. Perfekt für Garantiefälle und Nacharbeiten.',
      },
      {
        title: 'Wetter- und Sicherheitsdokumentation',
        description:
          'Dokumentieren Sie Wetterbedingungen und Sicherheitsmassnahmen pro Arbeitstag. Wichtig für die Qualitätssicherung und Haftungsfragen.',
      },
    ],
    useCasesEn: [
      {
        title: 'Employee planning with calendar',
        description:
          'Plan your teams across different construction sites. The calendar shows availability, planned assignments, and vacations at a glance.',
      },
      {
        title: 'Digital project archive for 25+ years',
        description:
          'Store all project data, photos, and documents encrypted for at least 25 years. Perfect for warranty cases and follow-up work.',
      },
      {
        title: 'Weather and safety documentation',
        description:
          'Document weather conditions and safety measures per work day. Important for quality assurance and liability issues.',
      },
    ],
  },
  {
    id: 'bodenleger',
    icon: 'Grid3x3',
    titleDe: 'Bodenleger',
    titleEn: 'Floor Layers',
    descriptionDe:
      'Quadratmeterberechnungen und Restmaterial-Tracking für Parkett, Fliesen und Bodenbelaege aller Art.',
    descriptionEn:
      'Square meter calculations and leftover material tracking for parquet, tiles, and all types of flooring.',
    slug: 'bodenleger',
    useCasesDe: [
      {
        title: 'Quadratmeterberechnungen',
        description:
          'Berechnen Sie Materialmengen anhand von Raumflächen automatisch. Inklusive Verschnitt-Zuschlag und Sonderformate für praezise Bestellungen.',
      },
      {
        title: 'Restmaterial-Tracking',
        description:
          'Verfolgen Sie uebrig gebliebenes Material nach Projekt. Restposten können für kleinere Aufträge oder Reparaturen wiederverwendet werden.',
      },
      {
        title: 'Verlegemuster-Dokumentation',
        description:
          'Dokumentieren Sie das gewaehlte Verlegemuster mit Fotos und Notizen. So ist bei Nachbestellungen oder Reparaturen alles klar.',
      },
    ],
    useCasesEn: [
      {
        title: 'Square meter calculations',
        description:
          'Automatically calculate material quantities based on room areas. Including cutting waste surcharge and special formats for precise orders.',
      },
      {
        title: 'Leftover material tracking',
        description:
          'Track leftover material by project. Remaining stock can be reused for smaller jobs or repairs.',
      },
      {
        title: 'Laying pattern documentation',
        description:
          'Document the chosen laying pattern with photos and notes. This way everything is clear for reorders or repairs.',
      },
    ],
  },
  {
    id: 'gerüstbauer',
    icon: 'Building2',
    titleDe: 'Gerüstbauer',
    titleEn: 'Scaffolders',
    descriptionDe:
      'Gerüstteile-Tracking und automatische Mietabrechnung. Behalten Sie den Überblick über alle Teile und Standorte.',
    descriptionEn:
      'Scaffolding parts tracking and automatic rental billing. Keep track of all parts and locations.',
    slug: 'geruestbauer',
    useCasesDe: [
      {
        title: 'Gerüstteile-Tracking',
        description:
          'Verfolgen Sie jedes Gerüstteil von der Auslieferung bis zur Rücknahme. Wissen Sie immer, welche Teile wo stehen und wie lange.',
      },
      {
        title: 'Automatische Mietabrechnung',
        description:
          'Berechnen Sie Mietkosten automatisch basierend auf Standzeit und Gerüst-Typ. Rechnungen werden automatisch generiert und an den Kunden versendet.',
      },
      {
        title: 'Sicherheitsinspektionen dokumentieren',
        description:
          'Dokumentieren Sie regelmässige Sicherheitsinspektionen mit Fotos und Checklisten. Erfüllen Sie alle gesetzlichen Anforderungen lückenlos.',
      },
    ],
    useCasesEn: [
      {
        title: 'Scaffolding parts tracking',
        description:
          'Track every scaffolding part from delivery to return. Always know which parts are where and for how long.',
      },
      {
        title: 'Automatic rental billing',
        description:
          'Calculate rental costs automatically based on standing time and scaffolding type. Invoices are automatically generated and sent to the customer.',
      },
      {
        title: 'Document safety inspections',
        description:
          'Document regular safety inspections with photos and checklists. Meet all legal requirements without gaps.',
      },
    ],
  },
  {
    id: 'maurer',
    icon: 'Blocks',
    titleDe: 'Maurer',
    titleEn: 'Masons',
    descriptionDe:
      'Automatisches Bautagebuch und Multi-Projekt-Übersicht mit Statusfiltern für Maurerarbeiten und Bauprojekte.',
    descriptionEn:
      'Automatic construction diary and multi-project overview with status filters for masonry and construction projects.',
    slug: 'maurer',
    useCasesDe: [
      {
        title: 'Automatisches Bautagebuch',
        description:
          'Führen Sie das Bautagebuch automatisch mit Wetter, Anwesenheit, Arbeitsfortschritt und Fotos. Alle Eintraege sind rechtssicher dokumentiert.',
      },
      {
        title: 'Multi-Projekt-Übersicht mit Statusfiltern',
        description:
          'Verwalten Sie mehrere Baustellen gleichzeitig. Filtern Sie nach Status, Prioritaet oder Fälligkeit für den perfekten Überblick.',
      },
      {
        title: 'Material- und Betonbestellung',
        description:
          'Berechnen und bestellen Sie Material basierend auf dem Baufortschritt. Automatische Mengenermittlung spart Zeit und reduziert Verschwendung.',
      },
    ],
    useCasesEn: [
      {
        title: 'Automatic construction diary',
        description:
          'Keep the construction diary automatically with weather, attendance, work progress, and photos. All entries are legally documented.',
      },
      {
        title: 'Multi-project overview with status filters',
        description:
          'Manage multiple construction sites simultaneously. Filter by status, priority, or due date for the perfect overview.',
      },
      {
        title: 'Material and concrete ordering',
        description:
          'Calculate and order material based on construction progress. Automatic quantity calculation saves time and reduces waste.',
      },
    ],
  },
  {
    id: 'facility-service',
    icon: 'Building',
    titleDe: 'Facility Service',
    titleEn: 'Facility Services',
    descriptionDe:
      'Automatisierte Wartungsintervalle und Partnerkoordination für professionelles Gebaeudemanagement.',
    descriptionEn:
      'Automated maintenance intervals and partner coordination for professional facility management.',
    slug: 'facility-service',
    useCasesDe: [
      {
        title: 'Automatisierte Wartungsintervalle',
        description:
          'Definieren Sie Wartungsintervalle für Heizung, Lueftung, Aufzuege und mehr. Finito Pro erinnert automatisch und erstellt die Aufträge.',
      },
      {
        title: 'Partnerkoordination',
        description:
          'Koordinieren Sie externe Partner und Subunternehmer über die Plattform. Jeder sieht seine Aufgaben und Termine in Echtzeit.',
      },
      {
        title: 'Gebaeudeverwaltung mit Objektdossier',
        description:
          'Führen Sie ein digitales Dossier pro Gebäudeteil mit Wartungshistorie, Gerätedaten und zustaendigen Personen.',
      },
    ],
    useCasesEn: [
      {
        title: 'Automated maintenance intervals',
        description:
          'Define maintenance intervals for heating, ventilation, elevators, and more. Finito Pro reminds automatically and creates the orders.',
      },
      {
        title: 'Partner coordination',
        description:
          'Coordinate external partners and subcontractors through the platform. Everyone sees their tasks and appointments in real time.',
      },
      {
        title: 'Building management with property dossier',
        description:
          'Maintain a digital dossier per building part with maintenance history, equipment data, and responsible persons.',
      },
    ],
  },
  {
    id: 'reinigung',
    icon: 'Sparkles',
    titleDe: 'Reinigung',
    titleEn: 'Cleaning Services',
    descriptionDe:
      'Routenplanung und Qualitätsdokumentation mit Fotos für professionelle Reinigungsunternehmen.',
    descriptionEn:
      'Route planning and quality documentation with photos for professional cleaning companies.',
    slug: 'reinigung',
    useCasesDe: [
      {
        title: 'Routenplanung für Teams',
        description:
          'Planen Sie optimale Routen für Ihre Reinigungsteams. Sehen Sie welches Team wo eingesetzt wird und minimieren Sie Fahrzeiten.',
      },
      {
        title: 'Qualitätsdokumentation mit Fotos',
        description:
          'Dokumentieren Sie die Reinigungsqualität mit Fotos vor und nach dem Einsatz. Perfekt als Nachweis für Ihre Auftraggeber.',
      },
      {
        title: 'Checklisten pro Objekt',
        description:
          'Erstellen Sie individuelle Reinigungschecklisten pro Gebäudeteil. Mitarbeiter haken die erledigten Aufgaben auf dem Smartphone ab.',
      },
    ],
    useCasesEn: [
      {
        title: 'Route planning for teams',
        description:
          'Plan optimal routes for your cleaning teams. See which team is deployed where and minimize travel time.',
      },
      {
        title: 'Quality documentation with photos',
        description:
          'Document cleaning quality with photos before and after the job. Perfect as proof for your clients.',
      },
      {
        title: 'Checklists per property',
        description:
          'Create individual cleaning checklists per building section. Employees check off completed tasks on their smartphone.',
      },
    ],
  },
  {
    id: 'gartenbau',
    icon: 'TreePine',
    titleDe: 'Gartenbau',
    titleEn: 'Landscaping',
    descriptionDe:
      'Saisonale Projektplanung und Pflanzendokumentation für Gartenbau und Landschaftspflege.',
    descriptionEn:
      'Seasonal project planning and plant documentation for landscaping and garden maintenance.',
    slug: 'gartenbau',
    useCasesDe: [
      {
        title: 'Saisonale Projektplanung',
        description:
          'Planen Sie Ihre Projekte entlang der Jahreszeiten. Automatische Erinnerungen für saisonale Arbeiten wie Rückschnitt, Düngung oder Winterdienst.',
      },
      {
        title: 'Pflanzendokumentation',
        description:
          'Dokumentieren Sie gepflanzte Arten, Standorte und Pflegehinweise pro Garten. Perfekt für wiederkehrende Pflegeaufträge.',
      },
      {
        title: 'Pflegepläne für Kunden',
        description:
          'Erstellen Sie individuelle Pflegepläne und teilen Sie diese mit Ihren Kunden. Mit Fotos des Gartenfortschritts über die Saisons.',
      },
    ],
    useCasesEn: [
      {
        title: 'Seasonal project planning',
        description:
          'Plan your projects along the seasons. Automatic reminders for seasonal work like pruning, fertilizing, or winter service.',
      },
      {
        title: 'Plant documentation',
        description:
          'Document planted species, locations, and care instructions per garden. Perfect for recurring maintenance contracts.',
      },
      {
        title: 'Care plans for clients',
        description:
          'Create individual care plans and share them with your clients. With photos of garden progress across seasons.',
      },
    ],
  },
  {
    id: 'umzug',
    icon: 'Truck',
    titleDe: 'Umzug',
    titleEn: 'Moving Services',
    descriptionDe:
      'Tägliche Routenplanung und Inventarlisten mit Fotodokumentation für Umzugsunternehmen.',
    descriptionEn:
      'Daily route planning and inventory lists with photo documentation for moving companies.',
    slug: 'umzug',
    useCasesDe: [
      {
        title: 'Tägliche Routenplanung',
        description:
          'Planen Sie die täglichen Routen Ihrer Umzugsteams. Optimieren Sie Fahrwege und koordinieren Sie Be- und Entladestellen effizient.',
      },
      {
        title: 'Inventarlisten mit Fotodokumentation',
        description:
          'Erstellen Sie detaillierte Inventarlisten mit Fotos jedes Gegenstand. Perfekt als Nachweis für Versicherungen und gegen Schadensforderungen.',
      },
      {
        title: 'Schadensprotokoll',
        description:
          'Dokumentieren Sie den Zustand von Moebeln und Gegenstaenden vor und nach dem Umzug. Mit Zeitstempel und GPS-Daten für maximale Sicherheit.',
      },
    ],
    useCasesEn: [
      {
        title: 'Daily route planning',
        description:
          'Plan the daily routes of your moving teams. Optimize travel routes and coordinate loading and unloading points efficiently.',
      },
      {
        title: 'Inventory lists with photo documentation',
        description:
          'Create detailed inventory lists with photos of each item. Perfect as proof for insurance and against damage claims.',
      },
      {
        title: 'Damage protocol',
        description:
          'Document the condition of furniture and items before and after the move. With timestamps and GPS data for maximum security.',
      },
    ],
  },
  {
    id: 'haustechnik',
    icon: 'Thermometer',
    titleDe: 'Haustechnik',
    titleEn: 'Building Services',
    descriptionDe:
      'HVAC-Auftragsdokumentation und Wartungsplanung für Heizungs-, Lueftungs- und Klimatechnik.',
    descriptionEn:
      'HVAC job documentation and maintenance scheduling for heating, ventilation, and air conditioning.',
    slug: 'haustechnik',
    useCasesDe: [
      {
        title: 'HVAC-Auftragsdokumentation',
        description:
          'Dokumentieren Sie Heizungs-, Lueftungs- und Klimaanlagen-Arbeiten mit technischen Details, Fotos und Messwerten direkt vor Ort.',
      },
      {
        title: 'Wartungsplanung und -erinnerungen',
        description:
          'Planen Sie regelmässige Wartungen für alle Anlagen. Automatische Erinnerungen stellen sicher, dass kein Termin vergessen wird.',
      },
      {
        title: 'Anlagenhistorie pro Gebäudeteil',
        description:
          'Führen Sie eine lückenlose Historie pro Anlage mit allen Wartungen, Reparaturen und ausgetauschten Teilen.',
      },
    ],
    useCasesEn: [
      {
        title: 'HVAC job documentation',
        description:
          'Document heating, ventilation, and air conditioning work with technical details, photos, and measurements directly on site.',
      },
      {
        title: 'Maintenance scheduling and reminders',
        description:
          'Schedule regular maintenance for all systems. Automatic reminders ensure no appointment is forgotten.',
      },
      {
        title: 'System history per building section',
        description:
          'Maintain a complete history per system with all maintenance, repairs, and replaced parts.',
      },
    ],
  },
  {
    id: 'architekten',
    icon: 'PenTool',
    titleDe: 'Architekten',
    titleEn: 'Architects',
    descriptionDe:
      'Zentrale Projektdokumente und Task-Board für Projektphasen. Behalten Sie den Überblick über alle Bauprojekte.',
    descriptionEn:
      'Central project documents and task board for project phases. Keep track of all construction projects.',
    slug: 'architekten',
    useCasesDe: [
      {
        title: 'Zentrale Projektdokumente',
        description:
          'Verwalten Sie alle Plaene, Berechnungen und Korrespondenz an einem Ort. Jedes Teammitglied hat Zugriff auf die aktuellste Version.',
      },
      {
        title: 'Task-Board für Projektphasen',
        description:
          'Organisieren Sie Projekte in Phasen von der Planung bis zur Abnahme. Weisen Sie Aufgaben zu und verfolgen Sie den Fortschritt in Echtzeit.',
      },
      {
        title: 'Bauherren-Kommunikation',
        description:
          'Teilen Sie Projektfortschritte, Planungsstaende und Entscheidungen transparent mit Ihren Bauherren über das Kundenportal.',
      },
    ],
    useCasesEn: [
      {
        title: 'Central project documents',
        description:
          'Manage all plans, calculations, and correspondence in one place. Every team member has access to the latest version.',
      },
      {
        title: 'Task board for project phases',
        description:
          'Organize projects in phases from planning to handover. Assign tasks and track progress in real time.',
      },
      {
        title: 'Client communication',
        description:
          'Share project progress, planning status, and decisions transparently with your clients through the customer portal.',
      },
    ],
  },
  {
    id: 'agenturen',
    icon: 'Palette',
    titleDe: 'Agenturen',
    titleEn: 'Agencies',
    descriptionDe:
      'Projektbasierte Zeiterfassung für die Abrechnung und individuelle Benutzerrechte für Ihr Team.',
    descriptionEn:
      'Project-based time tracking for billing and individual user permissions for your team.',
    slug: 'agenturen',
    useCasesDe: [
      {
        title: 'Projektbasierte Zeiterfassung für Abrechnung',
        description:
          'Erfassen Sie Zeiten pro Projekt und Kunde für transparente Abrechnungen. Stundenberichte können direkt als Rechnungsgrundlage verwendet werden.',
      },
      {
        title: 'Individuelle Benutzerrechte',
        description:
          'Definieren Sie genau, wer was sehen und bearbeiten darf. Von Projektmanagern über Designer bis zu Freelancern - jeder hat die passenden Rechte.',
      },
      {
        title: 'Kunden- und Projekt-Budgets',
        description:
          'Verwalten Sie Budgets pro Kunde und Projekt. Automatische Warnungen bei Budgetüberschreitung schützen vor finanziellen Überraschungen.',
      },
    ],
    useCasesEn: [
      {
        title: 'Project-based time tracking for billing',
        description:
          'Track time per project and client for transparent billing. Hour reports can be used directly as the basis for invoices.',
      },
      {
        title: 'Individual user permissions',
        description:
          'Define exactly who can see and edit what. From project managers to designers to freelancers - everyone has the right permissions.',
      },
      {
        title: 'Client and project budgets',
        description:
          'Manage budgets per client and project. Automatic warnings when exceeding budgets protect against financial surprises.',
      },
    ],
  },
  {
    id: 'einmann-betriebe',
    icon: 'User',
    titleDe: 'Einmann-Betriebe',
    titleEn: 'One-Person Businesses',
    descriptionDe:
      'Das komplette Büro auf dem Smartphone. Vorlagen sparen bis zu 80% Administrationszeit für Einzelunternehmer.',
    descriptionEn:
      'The complete office on your smartphone. Templates save up to 80% of admin time for sole proprietors.',
    slug: 'einmann-betriebe',
    useCasesDe: [
      {
        title: 'Komplettes Büro auf dem Smartphone',
        description:
          'Offerten, Rechnungen, Zeiterfassung und Kundenverwaltung - alles in einer App. Kein PC nötig, erledigen Sie alles unterwegs.',
      },
      {
        title: 'Vorlagen sparen 80% Administrationszeit',
        description:
          'Nutzen Sie vorgefertigte Vorlagen für Offerten, Rechnungen und Rapporte. Was frueher Stunden dauerte, erledigen Sie jetzt in Minuten.',
      },
      {
        title: 'Automatische Buchhaltungsvorbereitung',
        description:
          'Alle Einnahmen und Ausgaben werden automatisch erfasst. Am Jahresende exportieren Sie alles für Ihren Treuhander mit einem Klick.',
      },
    ],
    useCasesEn: [
      {
        title: 'Complete office on your smartphone',
        description:
          'Quotes, invoices, time tracking, and customer management - all in one app. No PC needed, handle everything on the go.',
      },
      {
        title: 'Templates save 80% of admin time',
        description:
          'Use pre-made templates for quotes, invoices, and reports. What used to take hours, you now complete in minutes.',
      },
      {
        title: 'Automatic accounting preparation',
        description:
          'All income and expenses are recorded automatically. At year-end, export everything for your accountant with one click.',
      },
    ],
  },
];
