import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/lib/seo";
import { BlogListContent } from "./BlogListContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Blog - Finito Pro | Tipps für Schweizer KMU und Handwerker",
    description:
      "Praxisnahe Tipps, Ratgeber und Branchenwissen für Schweizer KMU und Handwerksbetriebe. Digitalisierung, Zeiterfassung, QR-Rechnungen und mehr.",
    path: "/blog",
    locale,
    keywords: [
      "KMU Blog",
      "Handwerker Software Blog",
      "Digitalisierung KMU Schweiz",
      "Zeiterfassung Tipps",
      "QR-Rechnung Schweiz",
    ],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogListContent />;
}
