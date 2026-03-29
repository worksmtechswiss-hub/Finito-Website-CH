import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ImpressumContent } from "./ImpressumContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Impressum - Finito Pro",
    description:
      "Impressum von Finito Pro. Angaben gemäss Schweizer Recht. Kontaktinformationen und rechtliche Hinweise.",
    path: "/impressum",
    locale,
  });
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <ImpressumContent />;
}
