import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { TeamContent } from "./TeamContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Team & Story - Finito Pro",
    description:
      "Lernen Sie das Team hinter Finito Pro kennen. Unsere Mission: KMU in der Schweiz mit einfacher, leistungsstarker Software zu unterstützen.",
    path: "/team",
    locale,
    keywords: [
      "Finito Pro Team",
      "Schweizer Startup",
      "KMU Software Schweiz",
      "Software für Handwerker",
    ],
  });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  return <TeamContent />;
}
