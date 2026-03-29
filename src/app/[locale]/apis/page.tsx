import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { APIsContent } from "./APIsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "API Dokumentation - Finito Pro",
    description:
      "Finito Pro REST API Dokumentation. Integrieren Sie Finito Pro in Ihre bestehenden Systeme mit unserer umfassenden API.",
    path: "/apis",
    locale,
    keywords: [
      "Finito Pro API",
      "KMU Software API",
      "REST API Integration",
      "Schweizer Software API",
    ],
  });
}

export default async function APIsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <APIsContent />;
}
