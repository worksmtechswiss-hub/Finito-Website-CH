export interface FeaturePageData {
  slug: string;
  iconName: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problemText: string;
  solutionText: string;
  subFeatures: { title: string; description: string }[];
  targetUsers: { role: string; description: string }[];
  relatedSlugs: string[];
}

export const featurePages: Record<string, FeaturePageData> = {
  dashboard: {
    slug: "dashboard",
    iconName: "LayoutDashboard",
    title: "Dashboard",
    description:
      "Alle wichtigen Kennzahlen Ihres Betriebs auf einen Blick. Finanzielle KPIs, aktive Projekte, Mitarbeiterauslastung und Jahresberichte - alles in Echtzeit.",
    metaTitle: "Dashboard - KPI-Übersicht für KMU | Finito Pro",
    metaDescription:
      "Behalten Sie den Überblick über Ihren Handwerksbetrieb: Umsatz, offene Rechnungen, Cashflow und Projektfortschritt in einem Dashboard.",
    keywords: [
      "KMU Dashboard",
      "Handwerker Dashboard",
      "KPI Übersicht",
      "Business Intelligence KMU",
      "Finanzübersicht",
    ],
    problemText:
      "Viele Handwerksbetriebe haben keinen schnellen Überblick über ihre finanzielle Situation. Offene Rechnungen, laufende Projekte und Mitarbeiterauslastung sind in verschiedenen Excel-Tabellen oder gar auf Papier verteilt. Wichtige Entscheidungen werden aus dem Bauchgefuehl statt auf Basis von Zahlen getroffen.",
    solutionText:
      "Mit dem Finito Pro Dashboard sehen Sie auf einen Blick, wie es Ihrem Betrieb geht. Umsatz, offene Rechnungen, Cashflow und aktive Projekte werden in Echtzeit angezeigt. Individuelle Widgets lassen sich frei konfigurieren, und automatische Monats- sowie Jahresberichte erleichtern das Gespraech mit Ihrem Treuhander.",
    subFeatures: [
      {
        title: "Finanzielle KPIs in Echtzeit",
        description:
          "Umsatz, offene Rechnungen, Cashflow und Gewinnmarge werden laufend berechnet und übersichtlich dargestellt. Vergleichen Sie Ihre Zahlen mit dem Vorjahr und erkennen Sie Trends fruehzeitig.",
      },
      {
        title: "Projektfortschritt auf einen Blick",
        description:
          "Alle aktiven Projekte mit Fortschrittsanzeige, zugewiesenen Mitarbeitern und Deadline-Warnungen. Erkennen Sie sofort, welche Projekte im Zeitplan sind und wo es hakt.",
      },
      {
        title: "Automatische Berichte",
        description:
          "Monats- und Jahresberichte werden automatisch als PDF erstellt. Perfekt für das Gespraech mit Ihrem Treuhander oder für die eigene Planung. Individuell konfigurierbare Berichtsvorlagen.",
      },
      {
        title: "Individuelle Widgets",
        description:
          "Passen Sie Ihr Dashboard an Ihre Beduerfnisse an. Wählen Sie aus verschiedenen Widgets wie Umsatzdiagramme, Aufgabenlisten, Mitarbeiterkalender oder Kundenranking.",
      },
    ],
    targetUsers: [
      {
        role: "Geschäftsführer",
        description:
          "Überblick über die finanzielle Lage des gesamten Betriebs und Grundlage für strategische Entscheidungen.",
      },
      {
        role: "Projektleiter",
        description:
          "Alle laufenden Projekte im Blick, Ressourcenplanung und Deadline-Management an einem Ort.",
      },
      {
        role: "Büro / Administration",
        description:
          "Schneller Zugriff auf offene Rechnungen, ausstehende Zahlungen und Tagesüberblick.",
      },
    ],
    relatedSlugs: ["buchhaltung", "projektmanagement", "zeiterfassung"],
  },

  projektmanagement: {
    slug: "projektmanagement",
    iconName: "FolderKanban",
    title: "Projektmanagement",
    description:
      "Verwalten Sie alle Projekte mobil. Aufgaben zuweisen, Foto-Dokumentation erstellen und Ihr Team jederzeit koordinieren - von der Baustelle bis ins Büro.",
    metaTitle: "Projektmanagement für Handwerker | Finito Pro",
    metaDescription:
      "Mobile Projektverwaltung für KMU: Aufgaben, Foto-Dokumentation, Team-Koordination und Projektvorlagen. Speziell für Handwerksbetriebe.",
    keywords: [
      "Projektmanagement Handwerker",
      "Mobile Aufgabenverwaltung",
      "Baustellen Management",
      "KMU Projektsoftware",
      "Team Koordination",
    ],
    problemText:
      "Aufträge werden per Telefon vergeben, Änderungen gehen unter und niemand weiss genau, wie weit ein Projekt wirklich ist. Ohne zentrale Verwaltung fehlt der Überblick, und Fehler durch mangelnde Kommunikation kosten Zeit und Geld.",
    solutionText:
      "Finito Pro bringt all Ihre Projekte an einen Ort. Aufgaben werden digital zugewiesen und per App vom Team bestaetigt. Jedes Projekt hat eine komplette Chronik mit Fotos, Zeiten und Materialien. So wissen Sie immer, wo Ihr Betrieb steht.",
    subFeatures: [
      {
        title: "Mobile Aufgabenverwaltung",
        description:
          "Erstellen und vergeben Sie Aufgaben direkt auf der Baustelle. Jeder Mitarbeiter sieht seine Aufgaben auf dem Smartphone und kann den Status per Fingertipp aktualisieren. Push-Benachrichtigungen sorgen dafür, dass nichts untergeht.",
      },
      {
        title: "Foto-Dokumentation im Projekt",
        description:
          "Fotografieren Sie den Baufortschritt direkt in der App. Die Fotos werden automatisch dem richtigen Projekt und der richtigen Aufgabe zugeordnet. GPS-Daten und Zeitstempel garantieren eine lückenlose Dokumentation.",
      },
      {
        title: "Team-Koordination in Echtzeit",
        description:
          "Sehen Sie jederzeit, welcher Mitarbeiter wo im Einsatz ist. Änderungen werden sofort an alle Betroffenen kommuniziert. Konflikte bei der Planung werden automatisch erkannt und angezeigt.",
      },
      {
        title: "Projektvorlagen und Automatisierung",
        description:
          "Erstellen Sie Vorlagen für wiederkehrende Aufträge und sparen Sie bei der Projektanlage wertvolle Zeit. Aufgabenlisten, Checklisten und Materialbedarfe können standardisiert werden.",
      },
    ],
    targetUsers: [
      {
        role: "Projektleiter / Chef",
        description:
          "Projekte planen, Aufgaben verteilen und den Überblick über alle Baustellen behalten.",
      },
      {
        role: "Mitarbeiter auf der Baustelle",
        description:
          "Aufgaben einsehen, Status aktualisieren und Fotos direkt vom Einsatzort hochladen.",
      },
      {
        role: "Büro / Administration",
        description:
          "Projektkosten verfolgen, Materialbestellungen ausloesen und Kundenrückfragen beantworten.",
      },
    ],
    relatedSlugs: ["zeiterfassung", "foto-dokumentation", "mitarbeiter-app"],
  },

  rechnungen: {
    slug: "rechnungen",
    iconName: "Receipt",
    title: "QR-Rechnungen",
    description:
      "Erstellen Sie professionelle Schweizer QR-Rechnungen in Sekunden. Automatische MwSt-Berechnung, Zahlungserinnerungen und nahtloser Bankabgleich.",
    metaTitle: "QR-Rechnungen erstellen - Schweizer Standard | Finito Pro",
    metaDescription:
      "Schweizer QR-Rechnungen nach ISO 20022 in Sekunden erstellen. Automatische MwSt, Zahlungserinnerungen und Bankabgleich für Handwerksbetriebe.",
    keywords: [
      "QR Rechnung Schweiz",
      "Schweizer QR Rechnung erstellen",
      "ISO 20022",
      "MwSt Rechnung",
      "Handwerker Rechnung",
      "Rechnungssoftware KMU",
    ],
    problemText:
      "Rechnungen schreiben ist für viele Handwerker eine leidige Pflicht. Excel-Vorlagen sind fehleranfällig, die MwSt-Berechnung wird manuell gemacht und ob der Kunde gezahlt hat, muss man im E-Banking nachschauen. Zahlungserinnerungen werden vergessen oder zu spaet verschickt.",
    solutionText:
      "Mit Finito Pro erstellen Sie QR-Rechnungen nach Schweizer Standard in unter einer Minute. Die MwSt wird automatisch berechnet, Zahlungserinnerungen werden automatisch verschickt und der Bankabgleich zeigt Ihnen sofort, welche Rechnungen bezahlt sind.",
    subFeatures: [
      {
        title: "QR-Rechnungen nach ISO 20022",
        description:
          "Erstellen Sie normkonforme Schweizer QR-Rechnungen mit wenigen Klicks. Der QR-Code wird automatisch generiert und kann direkt per PDF versendet oder ausgedruckt werden. Kompatibel mit allen Schweizer Banken.",
      },
      {
        title: "Automatische MwSt-Berechnung",
        description:
          "Wählen Sie den MwSt-Satz (8.1%, 2.6% oder 0%) pro Position und Finito Pro berechnet alles automatisch. Die MwSt-Abrechnung für die ESTV wird vorbereitet und kann direkt exportiert werden.",
      },
      {
        title: "Zahlungserinnerungen und Mahnwesen",
        description:
          "Legen Sie fest, wann und wie oft Erinnerungen verschickt werden. Finito Pro überwacht die Zahlungseingaenge und verschickt Erinnerungen automatisch per E-Mail. Bei Bedarf können auch Mahnungen per Post versendet werden.",
      },
      {
        title: "Bankabgleich und Teilzahlungen",
        description:
          "Verbinden Sie Ihr Bankkonto und sehen Sie sofort, welche Rechnungen bezahlt wurden. Teilzahlungen und Ratenzahlungen werden automatisch zugeordnet und der Restsaldo korrekt berechnet.",
      },
    ],
    targetUsers: [
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Überblick über offene Rechnungen und Cashflow. Professionelles Auftreten gegenüber Kunden.",
      },
      {
        role: "Büro / Buchhaltung",
        description:
          "Rechnungen effizient erstellen, MwSt korrekt abrechnen und den Zahlungseingang überwachen.",
      },
      {
        role: "Treuhander",
        description:
          "Saubere Exporte für die Buchhaltung, korrekte MwSt-Abrechnungen und lückenlose Belege.",
      },
    ],
    relatedSlugs: ["offerten", "buchhaltung", "kundenportal"],
  },

  offerten: {
    slug: "offerten",
    iconName: "FileText",
    title: "Offerten",
    description:
      "Schnelle digitale Offerten mit gespeicherten Leistungskatalogen. Per Knopfdruck vom Angebot zum Auftrag - professionell und zeitsparend.",
    metaTitle: "Digitale Offerten erstellen - KMU Software | Finito Pro",
    metaDescription:
      "Professionelle Offerten in Minuten erstellen: Leistungskataloge, Ein-Klick-Umwandlung zum Auftrag und digitale Kundenfreigabe.",
    keywords: [
      "Offerten erstellen",
      "Digitale Offerte",
      "Angebotssoftware KMU",
      "Leistungskatalog",
      "Handwerker Offerte",
    ],
    problemText:
      "Offerten werden oft in Word oder Excel erstellt - jedes Mal von Grund auf. Leistungen und Preise müssen aus dem Kopf zusammengesucht werden. Die Nachverfolgung offener Angebote geht unter und potenzielle Aufträge gehen verloren, weil zu spaet nachgehakt wird.",
    solutionText:
      "Finito Pro speichert Ihre Leistungskataloge und Preislisten zentral. Erstellen Sie eine neue Offerte in Minuten, indem Sie einfach die passenden Leistungen auswählen. Wird die Offerte akzeptiert, wandeln Sie sie mit einem Klick in einen Auftrag um - ohne Neueingabe.",
    subFeatures: [
      {
        title: "Gespeicherte Leistungskataloge",
        description:
          "Hinterlegen Sie alle Ihre Dienstleistungen, Materialien und Standardpreise in einem Katalog. Bei der Offerterstellung wählen Sie einfach aus und passen Mengen oder Preise bei Bedarf an. Kein muehsames Zusammensuchen mehr.",
      },
      {
        title: "Professionelles Design",
        description:
          "Ihre Offerten werden im Firmendesign mit Logo, Farben und korrektem Layout erstellt. Optionale und alternative Positionen können separat ausgewiesen werden. Der Kunde erhaelt ein PDF oder kann die Offerte digital im Kundenportal freigeben.",
      },
      {
        title: "Ein-Klick-Umwandlung zum Auftrag",
        description:
          "Wenn der Kunde zusagt, genuegt ein Klick: Finito Pro erstellt automatisch das Projekt, die Aufgaben und den Materialbedarf aus der Offerte. Keine doppelte Dateneingabe, keine Übertragungsfehler.",
      },
      {
        title: "Nachverfolgung offener Offerten",
        description:
          "Finito Pro erinnert Sie automatisch an offene Offerten. Sie sehen auf einen Blick, welche Angebote noch ausstehend sind, welche abgelaufen und welche akzeptiert wurden. So geht kein Auftrag mehr verloren.",
      },
    ],
    targetUsers: [
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Schneller professionelle Offerten erstellen und die Auftragsquote erhöhen.",
      },
      {
        role: "Projektleiter",
        description:
          "Vom Angebot direkt zum Projekt mit allen Aufgaben und Materialbedarfen.",
      },
      {
        role: "Büro / Innendienst",
        description:
          "Offerten nachverfolgen, Kundenrückfragen beantworten und Auftragsbestaetigung versenden.",
      },
    ],
    relatedSlugs: ["rechnungen", "projektmanagement", "crm"],
  },

  zeiterfassung: {
    slug: "zeiterfassung",
    iconName: "Clock",
    title: "Zeiterfassung",
    description:
      "Projektbasierte Zeiterfassung mit einem Klick. Monatsberichte, Überstunden-Tracking und direkter Export für die Lohnbuchhaltung - auch unterwegs.",
    metaTitle: "Zeiterfassung für Handwerker - Mobil & Einfach | Finito Pro",
    metaDescription:
      "Mobile Zeiterfassung pro Projekt und Aufgabe. Monatsberichte, Überstunden-Tracking, GPS und Export für die Lohnbuchhaltung.",
    keywords: [
      "Zeiterfassung KMU",
      "Mobile Zeiterfassung",
      "Handwerker Zeiterfassung",
      "Stempeluhr App",
      "Arbeitszeiterfassung Schweiz",
    ],
    problemText:
      "Zeiterfassung per Stundenzettel ist ungenau, geht verloren und verursacht am Monatsende viel Aufwand. Die Zuordnung zu Projekten fehlt oft, was die Nachkalkulation erschwert. Überstunden werden nicht sauber erfasst und führen zu Unstimmigkeiten.",
    solutionText:
      "Finito Pro macht Zeiterfassung so einfach wie möglich. Mitarbeiter starten und stoppen die Zeiterfassung per App mit einem Klick. Jede Stunde wird automatisch dem richtigen Projekt zugeordnet. Am Monatsende erstellt Finito Pro automatisch die Berichte für die Lohnbuchhaltung.",
    subFeatures: [
      {
        title: "Ein-Klick-Zeiterfassung",
        description:
          "Starten und stoppen Sie die Zeiterfassung per Fingertipp auf dem Smartphone. Wählen Sie Projekt und Aufgabe und Finito Pro macht den Rest. Pausen- und Fahrzeiten können separat erfasst werden.",
      },
      {
        title: "Automatische Monatsberichte",
        description:
          "Am Monatsende erstellt Finito Pro automatisch einen Bericht pro Mitarbeiter. Arbeitsstunden, Überstunden, Ferientage und Absenzen werden übersichtlich zusammengefasst und können als CSV oder PDF exportiert werden.",
      },
      {
        title: "Überstunden-Tracking",
        description:
          "Definieren Sie Sollstunden pro Mitarbeiter und Finito Pro berechnet die Überstunden automatisch. Der Saldo wird laufend aktualisiert und ist jederzeit einsehbar - für den Mitarbeiter und für den Chef.",
      },
      {
        title: "GPS-basierte Baustellenerfassung",
        description:
          "Auf Wunsch erfasst Finito Pro den Standort bei Start und Stopp der Zeiterfassung. So können Sie nachweisen, dass Ihre Mitarbeiter wirklich auf der richtigen Baustelle waren.",
      },
    ],
    targetUsers: [
      {
        role: "Mitarbeiter auf der Baustelle",
        description:
          "Zeiten einfach und schnell direkt vor Ort per App erfassen. Kein Papierkram mehr.",
      },
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Überblick über die Arbeitszeiten des gesamten Teams und fundierte Nachkalkulation.",
      },
      {
        role: "Büro / Lohnbuchhaltung",
        description:
          "Automatische Monatsberichte und Export für die Lohnabrechnung ohne manuellen Aufwand.",
      },
    ],
    relatedSlugs: ["projektmanagement", "mitarbeiter-app", "buchhaltung"],
  },

  crm: {
    slug: "crm",
    iconName: "UserCircle",
    title: "CRM & Kundenverwaltung",
    description:
      "Alle Kundendaten an einem Ort. Kontakthistorie, wiederkehrende Aufträge und individuelles Kundenportal - für langfristige Kundenbeziehungen.",
    metaTitle: "CRM für Handwerksbetriebe - Kundenverwaltung | Finito Pro",
    metaDescription:
      "Zentrale Kundenverwaltung für KMU: Kontakthistorie, Projekte, Rechnungen und Kundenportal an einem Ort. Speziell für Handwerksbetriebe.",
    keywords: [
      "CRM Handwerker",
      "Kundenverwaltung KMU",
      "Kontaktmanagement",
      "Kundenhistorie",
      "CRM Software Schweiz",
    ],
    problemText:
      "Kundendaten liegen in verschiedenen Ordnern, im Handy und in E-Mails verteilt. Wer hat wann was bestellt? Welche Absprachen wurden getroffen? Ohne zentrale Verwaltung kostet jede Kundenanfrage unnötig Zeit und die persönliche Betreuung leidet.",
    solutionText:
      "Finito Pro sammelt alle Informationen zu einem Kunden an einem Ort: Kontaktdaten, alle Projekte, Offerten, Rechnungen, Fotos und Notizen. So können Sie bei jedem Anruf sofort sehen, worum es geht, und bieten Ihren Kunden einen erstklassigen Service.",
    subFeatures: [
      {
        title: "Zentrale Kontaktverwaltung",
        description:
          "Alle Kontaktdaten, Adressen und Ansprechpersonen an einem Ort. Mit der leistungsstarken Suche finden Sie jeden Kunden in Sekunden. Tags und Kategorien ermöglichen eine gezielte Segmentierung.",
      },
      {
        title: "Komplette Kundenhistorie",
        description:
          "Jeder Kundenkontakt wird dokumentiert: Projekte, Offerten, Rechnungen, Fotos und Notizen. So sehen Sie auf einen Blick die gesamte Geschichte eines Kunden und können sofort reagieren.",
      },
      {
        title: "Wiederkehrende Aufträge",
        description:
          "Planen Sie regelmässige Einsaetze pro Kunde automatisch. Finito Pro erinnert Sie an fällige Wartungen und erstellt die Projekte auf Wunsch automatisch. Perfekt für Serviceabos und Wartungsvertraege.",
      },
      {
        title: "Kundenportal",
        description:
          "Geben Sie Ihren Kunden Zugang zu einem eigenen Portal. Dort können sie den Projektfortschritt verfolgen, Offerten freigeben, Rechnungen einsehen und Fotos anschauen - ohne App-Installation.",
      },
    ],
    targetUsers: [
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Langfristige Kundenbeziehungen pflegen und den Überblick über alle Kunden behalten.",
      },
      {
        role: "Büro / Innendienst",
        description:
          "Bei Kundenanfragen sofort alle relevanten Informationen parat haben.",
      },
      {
        role: "Projektleiter",
        description:
          "Kundenhistorie einsehen, um bei neuen Projekten auf frueheren Erfahrungen aufzubauen.",
      },
    ],
    relatedSlugs: ["kundenportal", "service-abos", "offerten"],
  },

  ferienmanagement: {
    slug: "ferienmanagement",
    iconName: "CalendarDays",
    title: "Ferienmanagement",
    description:
      "Mobile Ferienantraege, Resttage-Übersicht und Genehmigungsworkflow. Mit dem Teamkalender vermeiden Sie Engpässe und planen voraus.",
    metaTitle: "Ferienmanagement für KMU - Ferienantraege digital | Finito Pro",
    metaDescription:
      "Digitales Ferienmanagement für KMU: Mobile Ferienantraege, Genehmigungsworkflow, Resttage und Teamkalender. Schweizer Feiertage inklusive.",
    keywords: [
      "Ferienmanagement KMU",
      "Ferienantrag digital",
      "Ferienplaner Schweiz",
      "Abwesenheitsmanagement",
      "Ferienplanung Handwerker",
    ],
    problemText:
      "Ferienantraege per E-Mail oder muendlich führen zu Chaos. Wer hat noch wie viele Tage? Sind genuegend Mitarbeiter für die Baustelle da? Ohne zentrale Planung kommt es immer wieder zu Engpässen, und die Resttageberechnung am Jahresende ist ein Albtraum.",
    solutionText:
      "Mit Finito Pro beantragen Mitarbeiter ihre Ferien direkt vom Smartphone. Der Vorgesetzte sieht im Teamkalender sofort, ob genuegend Personal verfügbar ist, und kann den Antrag per Klick genehmigen oder ablehnen. Resttage werden automatisch berechnet.",
    subFeatures: [
      {
        title: "Mobile Ferienantraege",
        description:
          "Mitarbeiter stellen ihren Ferienantrag direkt über die App. Sie wählen den Zeitraum, und der Antrag wird sofort an den Vorgesetzten weitergeleitet. Kein Papierkram, kein E-Mail-Chaos.",
      },
      {
        title: "Genehmigungsworkflow",
        description:
          "Vorgesetzte erhalten eine Push-Benachrichtigung und können den Antrag mit einem Klick genehmigen oder ablehnen. Der Mitarbeiter wird automatisch über die Entscheidung informiert.",
      },
      {
        title: "Teamkalender und Engpasswarnung",
        description:
          "Der Teamkalender zeigt auf einen Blick, wer wann abwesend ist. Drohen Engpässe, warnt Finito Pro automatisch. So stellen Sie sicher, dass immer genuegend Mitarbeiter verfügbar sind.",
      },
      {
        title: "Automatische Resttageberechnung",
        description:
          "Ferienanspruch, genommene Tage und Resttage werden automatisch berechnet - auch bei Teilzeitpensum. Schweizer Feiertage und kantonale Feiertage sind bereits vorkonfiguriert.",
      },
    ],
    targetUsers: [
      {
        role: "Mitarbeiter",
        description:
          "Ferien einfach per App beantragen und jederzeit den eigenen Restsaldo einsehen.",
      },
      {
        role: "Vorgesetzte / Chef",
        description:
          "Ferienantraege genehmigen und sicherstellen, dass genuegend Personal verfügbar ist.",
      },
      {
        role: "HR / Administration",
        description:
          "Ferienkonten automatisch führen und saubere Berichte für die Lohnbuchhaltung erstellen.",
      },
    ],
    relatedSlugs: ["mitarbeiter-app", "zeiterfassung", "dashboard"],
  },

  "foto-dokumentation": {
    slug: "foto-dokumentation",
    iconName: "Camera",
    title: "Foto-Dokumentation",
    description:
      "Vorher/Nachher-Fotos mit automatischer Projektzuordnung. Zeitstempel und GPS-Daten für lückenlose Qualitätsnachweise - direkt vom Smartphone.",
    metaTitle: "Foto-Dokumentation für Baustellen | Finito Pro",
    metaDescription:
      "Digitale Foto-Dokumentation für Handwerker: Vorher/Nachher-Fotos, automatische Projektzuordnung, GPS und Zeitstempel für Qualitätsnachweise.",
    keywords: [
      "Foto Dokumentation Baustelle",
      "Baustellenfotos",
      "Vorher Nachher Fotos",
      "Qualitätsnachweis",
      "Fotodokumentation Handwerker",
    ],
    problemText:
      "Fotos von der Baustelle landen auf privaten Smartphones und sind spaeter nicht mehr auffindbar. Ohne Zuordnung zum Projekt sind sie wertlos für die Dokumentation. Bei Reklamationen oder Versicherungsfällen fehlen die Nachweise, und muehsames Suchen in WhatsApp-Gruppen beginnt.",
    solutionText:
      "Mit Finito Pro fotografieren Ihre Mitarbeiter direkt in der App. Jedes Foto wird automatisch dem richtigen Projekt zugeordnet, mit Zeitstempel und GPS-Daten versehen. So haben Sie jederzeit einen lückenlosen Nachweis - für Kunden, Versicherungen und die eigene Qualitätssicherung.",
    subFeatures: [
      {
        title: "Automatische Projektzuordnung",
        description:
          "Fotos, die in der Finito Pro App aufgenommen werden, werden automatisch dem aktiven Projekt zugeordnet. Kein muehsames Sortieren oder nachtraegliches Zuordnen mehr. Alles ist sofort am richtigen Ort.",
      },
      {
        title: "Vorher/Nachher-Vergleich",
        description:
          "Dokumentieren Sie den Zustand vor und nach Ihren Arbeiten. Finito Pro ermöglicht eine übersichtliche Vorher/Nachher-Ansicht, die Sie direkt mit dem Kunden teilen können.",
      },
      {
        title: "Zeitstempel und GPS-Daten",
        description:
          "Jedes Foto wird automatisch mit Zeitstempel und GPS-Koordinaten versehen. So haben Sie einen rechtssicheren Nachweis, wann und wo die Arbeit durchgeführt wurde.",
      },
      {
        title: "Unbegrenzter Speicherplatz",
        description:
          "Speichern Sie so viele Fotos, wie Sie möchten. Alle Bilder werden sicher auf Schweizer Servern gespeichert und sind jederzeit über die App oder das Web zugaenglich. Archivierung für mindestens 25 Jahre.",
      },
    ],
    targetUsers: [
      {
        role: "Mitarbeiter auf der Baustelle",
        description:
          "Fotos direkt vor Ort aufnehmen und automatisch dem Projekt zuordnen lassen.",
      },
      {
        role: "Projektleiter",
        description:
          "Baufortschritt aus der Ferne verfolgen und Qualität anhand der Fotos prüfen.",
      },
      {
        role: "Geschäftsführer",
        description:
          "Qualitätsnachweise für Kunden und Versicherungen jederzeit verfügbar.",
      },
    ],
    relatedSlugs: ["projektmanagement", "mitarbeiter-app", "kundenportal"],
  },

  lagerverwaltung: {
    slug: "lagerverwaltung",
    iconName: "Package",
    title: "Lagerverwaltung",
    description:
      "Material- und Werkzeugverwaltung mit automatischem Abzug pro Projekt. Behalten Sie den Überblick über Ihren Lagerbestand und bestellen Sie rechtzeitig nach.",
    metaTitle: "Lagerverwaltung für Handwerksbetriebe | Finito Pro",
    metaDescription:
      "Digitale Lagerverwaltung für KMU: Materialverfolgung, automatischer Projektabzug, Mindestbestand-Warnungen und Barcode-Scanner.",
    keywords: [
      "Lagerverwaltung KMU",
      "Material Tracking",
      "Handwerker Lager",
      "Bestandsverwaltung",
      "Inventarverwaltung Schweiz",
    ],
    problemText:
      "Der Lagerbestand wird per Zettel oder gar nicht geführt. Materialien fehlen dann, wenn man sie braucht, und Nachbestellungen erfolgen zu spaet. Die Zuordnung von Material zu Projekten fehlt, was die Nachkalkulation unmöglich macht.",
    solutionText:
      "Finito Pro erfasst jedes Material digital. Wenn Mitarbeiter Material für ein Projekt entnehmen, wird der Bestand automatisch aktualisiert und dem Projekt zugeordnet. Bei niedrigem Vorrat warnt Sie das System automatisch, und die Nachbestellung ist nur einen Klick entfernt.",
    subFeatures: [
      {
        title: "Digitale Materialverwaltung",
        description:
          "Erfassen Sie alle Materialien, Werkzeuge und Verbrauchsmittel in einem digitalen Lager. Jeder Artikel hat eine Beschreibung, Kategorie, Lieferant und aktuellen Bestand.",
      },
      {
        title: "Automatischer Projektabzug",
        description:
          "Wenn ein Mitarbeiter Material für ein Projekt entnimmt, genuegt ein Scan mit der App. Der Bestand wird automatisch reduziert und die Kosten dem Projekt zugeordnet.",
      },
      {
        title: "Mindestbestand-Warnungen",
        description:
          "Definieren Sie für jedes Material einen Mindestbestand. Faellt der Vorrat darunter, erhalten Sie automatisch eine Warnung. So bestellen Sie rechtzeitig und vermeiden Ausfallzeiten.",
      },
      {
        title: "Barcode-Scanner und Lieferanten",
        description:
          "Erfassen Sie Materialien per Barcode-Scanner in Sekunden. Hinterlegen Sie Lieferanten mit Bestellnummern für eine schnelle Nachbestellung. Bestell-Links führen direkt zum richtigen Produkt.",
      },
    ],
    targetUsers: [
      {
        role: "Lagerverantwortlicher",
        description:
          "Lagerbestände digital führen, Materialein- und -ausgaenge verbuchen und Bestellungen ausloesen.",
      },
      {
        role: "Mitarbeiter auf der Baustelle",
        description:
          "Material per App-Scan dem Projekt zuordnen und Nachbestellungen melden.",
      },
      {
        role: "Geschäftsführer",
        description:
          "Materialkosten pro Projekt nachvollziehen und die Nachkalkulation verbessern.",
      },
    ],
    relatedSlugs: ["projektmanagement", "buchhaltung", "mitarbeiter-app"],
  },

  buchhaltung: {
    slug: "buchhaltung",
    iconName: "Calculator",
    title: "Buchhaltung",
    description:
      "Einnahmen und Ausgaben übersichtlich verwalten. Kostenmanagement pro Projekt, MwSt-Abrechnung und sauberer Export für Ihren Treuhander.",
    metaTitle: "Einfache Buchhaltung für KMU | Finito Pro",
    metaDescription:
      "KMU-Buchhaltung leicht gemacht: Einnahmen/Ausgaben, MwSt-Abrechnung, Projektkosten und Export für den Treuhander. Schweizer Server.",
    keywords: [
      "KMU Buchhaltung",
      "Buchhaltung Handwerker",
      "Einnahmen Ausgaben Rechnung",
      "MwSt Abrechnung Schweiz",
      "Treuhander Export",
    ],
    problemText:
      "Die Buchhaltung ist für viele KMU ein notwendiges Uebel. Belege stapeln sich, die MwSt-Abrechnung wird hektisch am Quartalsende gemacht und der Treuhander bekommt einen Schuhkarton voller Quittungen. Der Überblick über die Finanzen geht dabei verloren.",
    solutionText:
      "Finito Pro erfasst Einnahmen und Ausgaben laufend und automatisch. Rechnungen werden direkt verbucht, Belege können per Foto erfasst werden. Am Quartalsende ist die MwSt-Abrechnung bereits vorbereitet und der Export für Ihren Treuhander ist nur einen Klick entfernt.",
    subFeatures: [
      {
        title: "Einnahmen und Ausgaben verwalten",
        description:
          "Alle Einnahmen und Ausgaben werden laufend erfasst und kategorisiert. Rechnungen, die Sie über Finito Pro erstellen, werden automatisch als Einnahme verbucht. Belege können per Foto erfasst werden.",
      },
      {
        title: "Kostenmanagement pro Projekt",
        description:
          "Sehen Sie auf einen Blick, wie viel jedes Projekt wirklich gekostet hat. Material, Arbeitszeit und Zusatzkosten werden automatisch erfasst und dem Projekt zugeordnet. So wird die Nachkalkulation zum Kinderspiel.",
      },
      {
        title: "MwSt-Abrechnung vorbereitet",
        description:
          "Finito Pro berechnet die geschuldete MwSt automatisch und erstellt die Abrechnung für die ESTV. So sparen Sie am Quartalsende Stunden an Arbeit und vermeiden teure Fehler.",
      },
      {
        title: "Export für den Treuhander",
        description:
          "Exportieren Sie alle Buchungen, Belege und Berichte im passenden Format für Ihren Treuhander. CSV, PDF und weitere Formate werden unterstützt. Alle Daten sicher auf Schweizer Servern.",
      },
    ],
    targetUsers: [
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Überblick über die finanzielle Situation und fundierte Grundlage für Geschäftsentscheidungen.",
      },
      {
        role: "Büro / Buchhaltung",
        description:
          "Einnahmen und Ausgaben effizient erfassen, MwSt abrechnen und Belege verwalten.",
      },
      {
        role: "Treuhander",
        description:
          "Saubere, strukturierte Daten und Belege für eine effiziente Zusammenarbeit.",
      },
    ],
    relatedSlugs: ["rechnungen", "dashboard", "zeiterfassung"],
  },

  "mitarbeiter-app": {
    slug: "mitarbeiter-app",
    iconName: "Smartphone",
    title: "Mitarbeiter-App",
    description:
      "Aufgaben einsehen, Zeiten erfassen, Fotos hochladen und mit dem Team kommunizieren - alles vom Smartphone, auch ohne Internetempfang.",
    metaTitle: "Mitarbeiter-App für Handwerker - Mobile Baustellen-App | Finito Pro",
    metaDescription:
      "Die Mitarbeiter-App für Handwerksbetriebe: Aufgaben, Zeiterfassung, Fotos und Kommunikation auf dem Smartphone. Auch offline nutzbar.",
    keywords: [
      "Mitarbeiter App",
      "Handwerker App",
      "Baustellen App",
      "Mobile Zeiterfassung",
      "Offline App Baustelle",
    ],
    problemText:
      "Mitarbeiter auf der Baustelle haben keinen Zugang zu den Büro-Systemen. Informationen werden per Telefon oder WhatsApp ausgetauscht, was zu Missverstaendnissen führt. Stundenzettel werden am Abend aus dem Gedaechtnis ausgefuellt und Fotos landen auf privaten Handys.",
    solutionText:
      "Die Finito Pro Mitarbeiter-App bringt alles Wichtige auf das Smartphone Ihrer Mitarbeiter. Aufgaben, Zeiterfassung, Foto-Dokumentation und Kommunikation sind über eine einzige App erreichbar. Der Offline-Modus sorgt dafür, dass alles auch ohne Internetempfang funktioniert.",
    subFeatures: [
      {
        title: "Aufgaben auf dem Smartphone",
        description:
          "Jeder Mitarbeiter sieht seine Aufgaben und den Tagesplan auf dem Smartphone. Status-Updates können per Fingertipp gesetzt werden. Push-Benachrichtigungen informieren über neue oder geänderte Aufgaben.",
      },
      {
        title: "Zeiterfassung mit einem Klick",
        description:
          "Start, Pause und Stopp der Zeiterfassung direkt in der App. Die Zeit wird automatisch dem aktiven Projekt zugeordnet. Auch Fahrzeit und Pausen werden korrekt erfasst.",
      },
      {
        title: "Fotos direkt hochladen",
        description:
          "Fotos direkt aus der App aufnehmen und hochladen. Automatische Projektzuordnung, Zeitstempel und GPS-Daten sorgen für eine lückenlose Dokumentation. Kein Suchen auf dem privaten Handy mehr.",
      },
      {
        title: "Offline-Modus für die Baustelle",
        description:
          "Auf Baustellen ohne Empfang funktioniert die App offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder eine Verbindung besteht.",
      },
    ],
    targetUsers: [
      {
        role: "Mitarbeiter / Monteur",
        description:
          "Aufgaben, Zeiten und Fotos direkt auf der Baustelle verwalten - schnell und unkompliziert.",
      },
      {
        role: "Vorarbeiter / Teamleiter",
        description:
          "Tagesplanung koordinieren, Team-Status prüfen und Änderungen sofort kommunizieren.",
      },
      {
        role: "Geschäftsführer",
        description:
          "Echtzeit-Überblick über den Einsatz und Fortschritt aller Mitarbeiter.",
      },
    ],
    relatedSlugs: ["zeiterfassung", "foto-dokumentation", "projektmanagement"],
  },

  kundenportal: {
    slug: "kundenportal",
    iconName: "Users",
    title: "Kundenportal",
    description:
      "Teilen Sie den Projektfortschritt mit Ihren Kunden. Transparente Kommunikation, Fortschrittsfotos und digitale Freigaben schaffen Vertrauen.",
    metaTitle: "Kundenportal für Handwerksbetriebe | Finito Pro",
    metaDescription:
      "Digitales Kundenportal für KMU: Projektfortschritt teilen, Offerten freigeben und Rechnungen einsehen. Keine App-Installation nötig.",
    keywords: [
      "Kundenportal",
      "Kundenkommunikation",
      "Projektfortschritt teilen",
      "Digitale Freigabe",
      "Kundenzufriedenheit Handwerk",
    ],
    problemText:
      "Kunden fragen staendig nach dem Stand ihres Projekts. Jeder Anruf kostet Zeit und unterbricht den Arbeitsfluss. Offerten werden per Post unterschrieben zurückgeschickt, Rechnungen gehen verloren und die Kommunikation ist ineffizient.",
    solutionText:
      "Mit dem Finito Pro Kundenportal geben Sie Ihren Kunden genau den Einblick, den sie brauchen. Projektfortschritt, Fotos, Offerten und Rechnungen sind jederzeit online abrufbar. Offerten können digital freigegeben werden - ohne E-Mail-Ping-Pong.",
    subFeatures: [
      {
        title: "Projektfortschritt transparent teilen",
        description:
          "Ihre Kunden sehen den aktuellen Stand ihres Projekts in Echtzeit. Status-Updates, Meilensteine und der zeitliche Verlauf sind übersichtlich dargestellt. Keine Nachfragen mehr nötig.",
      },
      {
        title: "Fotos und Dokumentation teilen",
        description:
          "Teilen Sie Fortschrittsfotos automatisch mit Ihren Kunden. Vorher/Nachher-Vergleiche und die komplette Fotodokumentation sind im Portal zugaenglich. Perfekt für einen professionellen Auftritt.",
      },
      {
        title: "Digitale Offerten-Freigabe",
        description:
          "Kunden können Offerten direkt im Portal prüfen und digital freigeben oder Änderungen anfordern. Keine Postlaufzeiten, keine vergessenen Unterschriften. Der gesamte Prozess wird beschleunigt.",
      },
      {
        title: "Rechnungen und Dokumente einsehen",
        description:
          "Alle Rechnungen und relevanten Dokumente sind im Portal abrufbar. Der Kunde hat jederzeit den Überblick über offene und bezahlte Rechnungen. Keine App-Installation für Ihre Kunden nötig - alles im Browser.",
      },
    ],
    targetUsers: [
      {
        role: "Ihre Kunden (Privat und Gewerbe)",
        description:
          "Projektfortschritt, Fotos und Rechnungen jederzeit einsehen - transparent und bequem.",
      },
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Professioneller Auftritt und weniger Kundenrückfragen dank Transparenz.",
      },
      {
        role: "Büro / Innendienst",
        description:
          "Weniger Telefonate und E-Mails, da Kunden sich selbst informieren können.",
      },
    ],
    relatedSlugs: ["crm", "foto-dokumentation", "offerten"],
  },

  "service-abos": {
    slug: "service-abos",
    iconName: "Repeat",
    title: "Service-Abos",
    description:
      "Wiederkehrende Aufträge verwalten mit automatischer Projekterstellung. Perfekt für Wartungsvertraege, Serviceabonnements und regelmässige Einsaetze.",
    metaTitle: "Service-Abos & Wartungsvertraege verwalten | Finito Pro",
    metaDescription:
      "Wiederkehrende Aufträge automatisch verwalten: Wartungsvertraege, Service-Abos, automatische Projekterstellung und Abrechnung für KMU.",
    keywords: [
      "Service Abo",
      "Wartungsvertrag Software",
      "Wiederkehrende Aufträge",
      "Automatische Projekterstellung",
      "Servicevertrag KMU",
    ],
    problemText:
      "Wiederkehrende Aufträge müssen jedes Mal manuell angelegt werden. Wartungsintervalle werden vergessen, und der Kunde ist unzufrieden. Die Abrechnung von Serviceabos ist aufwaendig und fehleranfällig, und irgendwann verliert man den Überblick, welcher Kunde welchen Service hat.",
    solutionText:
      "Finito Pro automatisiert wiederkehrende Aufträge komplett. Definieren Sie einmalig den Rhythmus (woechentlich, monatlich, jaehrlich) und Finito Pro erstellt automatisch das Projekt, die Aufgaben und die Rechnung. Kein Vergessen, keine doppelte Arbeit.",
    subFeatures: [
      {
        title: "Automatische Projekterstellung",
        description:
          "Definieren Sie ein Service-Abo mit Rhythmus, Aufgaben und Materialien. Finito Pro erstellt zum definierten Zeitpunkt automatisch ein neues Projekt mit allen Details. Ihr Team weiss sofort, was zu tun ist.",
      },
      {
        title: "Wartungsvertraege digital abbilden",
        description:
          "Bilden Sie Wartungsvertraege mit allen Konditionen digital ab. Leistungsumfang, Intervalle und Vertragslaufzeit sind übersichtlich dokumentiert. Bei Änderungen wird der Vertrag versioniert.",
      },
      {
        title: "Erinnerungen und Benachrichtigungen",
        description:
          "Erhalten Sie rechtzeitig Erinnerungen für fällige Service-Einsaetze. Auch Ihre Kunden können automatisch informiert werden. So geht kein Termin mehr unter.",
      },
      {
        title: "Automatische Abrechnung",
        description:
          "Nach jedem Service-Einsatz kann die Rechnung automatisch erstellt werden. Pauschalen, Stundensaetze oder individuelle Preise - alles wird korrekt abgerechnet und dem Kunden zugestellt.",
      },
    ],
    targetUsers: [
      {
        role: "Geschäftsführer / Inhaber",
        description:
          "Planbare, wiederkehrende Einnahmen durch automatisierte Serviceabos und Wartungsvertraege.",
      },
      {
        role: "Disponent / Planer",
        description:
          "Automatische Projekterstellung und Mitarbeiterzuordnung für wiederkehrende Einsaetze.",
      },
      {
        role: "Büro / Buchhaltung",
        description:
          "Automatische Rechnungsstellung und saubere Zuordnung von Einnahmen zu Vertraegen.",
      },
    ],
    relatedSlugs: ["crm", "projektmanagement", "rechnungen"],
  },
};

export const featureSlugs = Object.keys(featurePages);
