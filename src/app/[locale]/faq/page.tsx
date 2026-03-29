import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { FAQContent } from "./FAQContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "FAQ - Häufige Fragen zu Finito Pro",
    description:
      "Antworten auf die häufigsten Fragen zu Finito Pro: Testversion, Preise, Funktionen, Datensicherheit, Mobile App und mehr.",
    path: "/faq",
    locale,
    keywords: [
      "Finito Pro FAQ",
      "KMU Software Fragen",
      "Handwerker Software Hilfe",
      "Finito Pro Testversion",
      "Schweizer Software FAQ",
    ],
  });
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <FAQContent />;
}
