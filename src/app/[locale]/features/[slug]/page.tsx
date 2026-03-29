import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata, breadcrumbSchema } from "@/lib/seo";
import { featurePages, featureSlugs } from "@/data/feature-pages";
import { FeatureDetailClient } from "./FeatureDetailClient";

/* ========================================
   Static Params - pre-generate all 13 slugs
   ======================================== */

export function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

/* ========================================
   Metadata - per feature SEO
   ======================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const feature = featurePages[slug];

  if (!feature) {
    return {};
  }

  return generatePageMetadata({
    title: feature.metaTitle,
    description: feature.metaDescription,
    path: `/features/${slug}`,
    locale,
    keywords: feature.keywords,
  });
}

/* ========================================
   Page Component
   ======================================== */

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const feature = featurePages[slug];

  if (!feature) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Funktionen", path: "/funktionen" },
              { name: feature.title, path: `/features/${slug}` },
            ])
          ),
        }}
      />
      <FeatureDetailClient slug={slug} />
    </>
  );
}
