import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { KundenContent } from "./KundenContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Kunden & Referenzen - Finito Pro",
    description:
      "Schweizer Handwerksbetriebe und KMU vertrauen auf Finito Pro. Entdecken Sie Kundenstimmen und Erfolgsgeschichten.",
    path: "/kunden",
    locale,
    keywords: [
      "Finito Pro Kunden",
      "KMU Software Referenzen",
      "Handwerker Software Erfahrungen",
      "Schweizer KMU Erfolgsgeschichten",
    ],
  });
}

export default async function KundenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <KundenContent />;
}
