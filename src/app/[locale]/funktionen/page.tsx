import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { FunktionenOverview } from "./FunktionenOverview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Alle Funktionen - Finito Pro KMU Software",
    description:
      "Entdecken Sie alle 13 Funktionen von Finito Pro: Dashboard, Projektmanagement, QR-Rechnungen, Offerten, Zeiterfassung, CRM, Ferienmanagement und mehr.",
    path: "/funktionen",
    locale,
    keywords: [
      "Finito Pro Funktionen",
      "KMU Software Funktionen",
      "Handwerker Software Features",
      "Schweizer Business Software",
      "Projektmanagement",
      "QR-Rechnungen",
      "Zeiterfassung",
    ],
  });
}

export default async function FunktionenPage() {
  return <FunktionenOverview />;
}
