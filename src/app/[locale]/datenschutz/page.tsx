import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { DatenschutzContent } from "./DatenschutzContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Datenschutzerklärung - Finito Pro",
    description:
      "Datenschutzerklärung von Finito Pro. Erfahren Sie, wie wir Ihre Daten schützen und verarbeiten. Schweizer Server, DSGVO-konform.",
    path: "/datenschutz",
    locale,
  });
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <DatenschutzContent />;
}
