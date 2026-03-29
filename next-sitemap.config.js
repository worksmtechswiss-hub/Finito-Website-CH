/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.finitopro.ch",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  alternateRefs: [
    { href: "https://www.finitopro.ch/de", hreflang: "de" },
    { href: "https://www.finitopro.ch/en", hreflang: "en" },
  ],
  additionalPaths: async () => {
    const features = [
      "rechnungen",
      "crm",
      "projektmanagement",
      "zeiterfassung",
      "offerten",
      "dashboard",
      "ferienmanagement",
      "foto-dokumentation",
      "lagerverwaltung",
      "buchhaltung",
      "mitarbeiter-app",
      "kundenportal",
      "service-abos",
    ];
    const branches = [
      "maler",
      "gipser",
      "elektriker",
      "sanitaer",
      "schreiner",
      "dachdecker",
      "bodenleger",
      "geruestbauer",
      "maurer",
      "facility-service",
      "reinigung",
      "gartenbau",
      "umzug",
      "haustechnik",
      "architekten",
      "agenturen",
      "einmann-betriebe",
    ];

    return [
      ...features.map((f) => ({
        loc: `/features/${f}`,
        priority: 0.9,
        changefreq: "weekly",
      })),
      ...branches.map((b) => ({
        loc: `/branchen/${b}`,
        priority: 0.8,
        changefreq: "monthly",
      })),
    ];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
