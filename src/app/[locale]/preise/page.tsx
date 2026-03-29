import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PreiseContent } from "./PreiseContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Preise - Finito Pro KMU Software",
    description:
      "Finito Pro Preise: Starter gratis, KMU ab CHF 30/Monat. Alle Funktionen im Vergleich. 30 Tage kostenlos testen - keine Kreditkarte nötig.",
    path: "/preise",
    locale,
    keywords: [
      "Finito Pro Preise",
      "KMU Software Kosten",
      "Handwerker Software Preise",
      "Schweizer Software günstig",
      "Business Software Vergleich",
    ],
  });
}

export default async function PreisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <PreiseContent />;
}
