import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { MarktplatzContent } from "./MarktplatzContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Marktplatz - Finito Pro Erweiterungen",
    description:
      "Entdecken Sie Erweiterungen und Integrationen für Finito Pro. Verbinden Sie Ihre Lieblings-Tools und erweitern Sie den Funktionsumfang.",
    path: "/marktplatz",
    locale,
    keywords: [
      "Finito Pro Marktplatz",
      "KMU Software Erweiterungen",
      "Business Software Integrationen",
      "Finito Pro Add-Ons",
    ],
  });
}

export default async function MarktplatzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <MarktplatzContent />;
}
