import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { AGBsContent } from "./AGBsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Allgemeine Geschäftsbedingungen - Finito Pro",
    description:
      "Allgemeine Geschäftsbedingungen (AGB) von Finito Pro. Nutzungsbedingungen für unsere KMU Software.",
    path: "/agbs",
    locale,
  });
}

export default async function AGBsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <AGBsContent />;
}
