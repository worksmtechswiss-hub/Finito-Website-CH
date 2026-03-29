import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { KontaktContent } from "./KontaktContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Kontakt - Finito Pro",
    description:
      "Kontaktieren Sie das Finito Pro Team. Wir helfen Ihnen gerne bei Fragen zu unserer KMU Software. Per E-Mail, WhatsApp oder Kontaktformular.",
    path: "/kontakt",
    locale,
    keywords: [
      "Finito Pro Kontakt",
      "KMU Software Support",
      "Schweizer Software Kontakt",
      "Handwerker Software Hilfe",
    ],
  });
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <KontaktContent />;
}
