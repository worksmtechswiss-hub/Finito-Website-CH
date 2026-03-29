import type { Metadata } from "next";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { AutomationenContent } from "./AutomationenContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Automationen & Zeitersparnis | Finito Pro",
    description:
      "Entdecken Sie wie Finito Pro Ihre Prozesse automatisiert. Praxisbeispiele zeigen: Bis zu 30% Zeitersparnis und weniger Fehler.",
    path: "/automationen",
    locale,
    keywords: [
      "Automatisierung KMU",
      "Zeitersparnis Software",
      "Handwerker Automatisierung",
      "Prozessoptimierung Schweiz",
      "Offerten automatisieren",
      "QR-Rechnungen automatisch",
      "Zeiterfassung automatisch",
    ],
  });
}

export default async function AutomationenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Automationen", path: "/automationen" },
            ])
          ),
        }}
      />
      <AutomationenContent />
    </>
  );
}
