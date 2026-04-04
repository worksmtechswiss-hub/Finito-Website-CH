export interface FaqEntry {
  id: string;
  questionDe: string;
  questionEn: string;
  answerDe: string;
  answerEn: string;
}

export const faqEntries: FaqEntry[] = [
  {
    id: 'kostenlose-testphase',
    questionDe: 'Gibt es eine kostenlose Testphase?',
    questionEn: 'Is there a free trial?',
    answerDe:
      'Ja, Sie können Finito Pro 30 Tage lang kostenlos und unverbindlich testen. Alle Funktionen des KMU-Pakets stehen Ihnen während der Testphase vollstaendig zur Verfügung. Keine Kreditkarte erforderlich, keine automatische Verlaengerung.',
    answerEn:
      'Yes, you can try Finito Pro free for 30 days with no obligation. All features of the SME plan are fully available during the trial period. No credit card required, no automatic renewal.',
  },
  {
    id: 'kündigung',
    questionDe: 'Kann ich jederzeit kündigen?',
    questionEn: 'Can I cancel at any time?',
    answerDe:
      'Ja, Sie können Ihr Abonnement jederzeit kündigen. Es gibt keine Mindestlaufzeit und keine versteckten Kosten. Nach der Kündigung haben Sie noch bis zum Ende der bezahlten Periode Zugriff auf alle Funktionen. Ihre Daten können Sie jederzeit exportieren.',
    answerEn:
      'Yes, you can cancel your subscription at any time. There is no minimum contract term and no hidden costs. After cancellation, you still have access to all features until the end of the paid period. You can export your data at any time.',
  },
  {
    id: 'individuelle-funktionen',
    questionDe: 'Kann ich individuelle Funktionen anfordern?',
    questionEn: 'Can I request custom features?',
    answerDe:
      'Ja, wir freuen uns über Ihr Feedback! Teilen Sie uns Ihre Wünsche über das Feedback-Formular in der App mit. Wir prüfen jeden Vorschlag und setzen häufig gewünschte Funktionen in unsere Roadmap auf. Im Grossfirmen-Paket können individuelle Anpassungen direkt umgesetzt werden.',
    answerEn:
      'Yes, we welcome your feedback! Share your wishes through the feedback form in the app. We review every suggestion and add frequently requested features to our roadmap. In the Enterprise plan, custom adaptations can be implemented directly.',
  },
  {
    id: 'projektübersicht',
    questionDe: 'Wie behalte ich den Überblick über alle Projekte?',
    questionEn: 'How do I keep track of all projects?',
    answerDe:
      'Das Dashboard zeigt Ihnen alle aktiven Projekte mit Fortschrittsanzeige auf einen Blick. Zusaetzlich gibt es eine separate Projektübersicht mit Filtern nach Status, Prioritaet, Kunde und Zeitraum. Sie können zwischen Listen-, Kalender- und Board-Ansicht wechseln.',
    answerEn:
      'The dashboard shows you all active projects with progress indicators at a glance. Additionally, there is a separate project overview with filters by status, priority, customer, and time period. You can switch between list, calendar, and board views.',
  },
  {
    id: 'datenspeicherung',
    questionDe: 'Wie lange werden meine Daten gespeichert?',
    questionEn: 'How long is my data retained?',
    answerDe:
      'Ihre Daten werden verschluesselt auf Schweizer Servern für mindestens 25 Jahre gespeichert. Dies ist besonders wichtig für Garantiefaelle, Versicherungsansprueche und gesetzliche Aufbewahrungspflichten. Sie haben jederzeit volle Kontrolle über Ihre Daten und können diese exportieren oder loeschen lassen.',
    answerEn:
      'Your data is stored encrypted on Swiss servers for at least 25 years. This is particularly important for warranty cases, insurance claims, and legal retention requirements. You always have full control over your data and can export or request deletion at any time.',
  },
  {
    id: 'mobile-version',
    questionDe: 'Gibt es eine mobile Version?',
    questionEn: 'Is there a mobile version?',
    answerDe:
      'Ja, Finito Pro funktioniert auf jedem Smartphone und Tablet. Die Webanwendung ist vollstaendig responsive und optimiert für die mobile Nutzung. Ihre Mitarbeiter können Zeiten erfassen, Fotos hochladen und Aufgaben verwalten - alles direkt vom Smartphone, auch ohne Internetverbindung dank Offline-Modus.',
    answerEn:
      'Yes, Finito Pro works on every smartphone and tablet. The web application is fully responsive and optimized for mobile use. Your employees can track time, upload photos, and manage tasks - all directly from their smartphone, even without an internet connection thanks to offline mode.',
  },
  {
    id: 'rechnungen-erstellen',
    questionDe: 'Wie erstelle ich Rechnungen?',
    questionEn: 'How do I create invoices?',
    answerDe:
      'Rechnungen können auf zwei Arten erstellt werden: Automatisch aus einem abgeschlossenen Projekt oder einer akzeptierten Offerte mit einem Klick, oder manuell mit Freitext-Positionen. Alle Rechnungen enthalten automatisch den Schweizer QR-Code für einfache Zahlung. Die MwSt wird automatisch berechnet.',
    answerEn:
      'Invoices can be created in two ways: Automatically from a completed project or an accepted quote with one click, or manually with free-text line items. All invoices automatically include the Swiss QR code for easy payment. VAT is calculated automatically.',
  },
  {
    id: 'zahlungsmethoden',
    questionDe: 'Welche Zahlungsmethoden werden akzeptiert?',
    questionEn: 'What payment methods are accepted?',
    answerDe:
      'Wir akzeptieren Kreditkarten (Visa, Mastercard) und Zahlung auf Rechnung. Sie können zwischen monatlicher und jaehrlicher Abrechnung wählen. Bei jaehrlicher Zahlung erhalten Sie einen Rabatt von 10%. Die Rechnung wird jeweils am Monatsanfang gestellt.',
    answerEn:
      'We accept credit cards (Visa, Mastercard) and payment by invoice. You can choose between monthly and annual billing. With annual payment, you receive a 10% discount. The invoice is issued at the beginning of each month.',
  },
  {
    id: 'teammitglieder-rechte',
    questionDe: 'Kann ich Teammitglieder mit verschiedenen Rechten einladen?',
    questionEn: 'Can I invite team members with different permissions?',
    answerDe:
      'Ja, Sie können für jedes Teammitglied individuelle Zugriffsrechte festlegen. Vom Administrator mit vollen Rechten über Projektleiter bis zu Mitarbeitern, die nur ihre eigenen Aufgaben und Zeiterfassung sehen. So schuetzen Sie sensible Geschaeftsdaten und geben jedem genau die Rechte, die er braucht.',
    answerEn:
      'Yes, you can set individual access rights for each team member. From administrator with full rights, to project managers, to employees who only see their own tasks and time tracking. This way you protect sensitive business data and give everyone exactly the permissions they need.',
  },
  {
    id: 'integration-tools',
    questionDe: 'Laesst sich Finito Pro mit anderen Tools verbinden?',
    questionEn: 'Can Finito Pro integrate with other tools?',
    answerDe:
      'Ja, Finito Pro bietet eine API für die Integration mit anderen Systemen. Standardmaessig können Sie Daten in gaengige Formate (CSV, PDF, JSON) exportieren, die von den meisten Buchhaltungs- und ERP-Systemen importiert werden können. Im Grossfirmen-Paket sind individuelle Integrationen möglich.',
    answerEn:
      'Yes, Finito Pro offers an API for integration with other systems. By default, you can export data in common formats (CSV, PDF, JSON) that can be imported by most accounting and ERP systems. In the Enterprise plan, custom integrations are possible.',
  },
  {
    id: 'technischer-support',
    questionDe: 'Welchen technischen Support gibt es?',
    questionEn: 'What technical support is available?',
    answerDe:
      'Unser Support-Team steht Ihnen per E-Mail und In-App-Chat zur Verfügung. Im KMU-Paket erhalten Sie Prioritaets-Support mit schnelleren Antwortzeiten. Im Grossfirmen-Paket haben Sie einen dedizierten Ansprechpartner mit garantierter Reaktionszeit gemäss SLA. Zusaetzlich gibt es eine umfangreiche Wissensdatenbank mit Anleitungen und Videos.',
    answerEn:
      'Our support team is available via email and in-app chat. In the SME plan, you receive priority support with faster response times. In the Enterprise plan, you have a dedicated contact person with guaranteed response times per SLA. Additionally, there is a comprehensive knowledge base with guides and videos.',
  },
  {
    id: 'wartungsvertraege',
    questionDe: 'Kann ich wiederkehrende Wartungs- und Serviceaufträge verwalten?',
    questionEn: 'Can I manage recurring maintenance and service contracts?',
    answerDe:
      'Ja, mit der Service-Abo-Funktion können Sie wiederkehrende Aufträge automatisieren. Definieren Sie Intervalle (woechentlich, monatlich, quartalsweise, jaehrlich), und Finito Pro erstellt automatisch die entsprechenden Projekte und Aufgaben. Inklusive Erinnerungen, automatischer Rechnungsstellung und lueckenloser Dokumentation aller Einsaetze.',
    answerEn:
      'Yes, with the service subscription feature, you can automate recurring orders. Define intervals (weekly, monthly, quarterly, yearly), and Finito Pro automatically creates the corresponding projects and tasks. Including reminders, automatic invoicing, and complete documentation of all service calls.',
  },
];
