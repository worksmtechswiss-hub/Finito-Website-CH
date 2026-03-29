"use client";

import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { featurePages } from "@/data/feature-pages";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  CalendarDays,
  Camera,
  Package,
  Calculator,
  Smartphone,
  Users,
  Repeat,
  UserCircle,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  FileText,
  Clock,
  CalendarDays,
  Camera,
  Package,
  Calculator,
  Smartphone,
  Users,
  Repeat,
  UserCircle,
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] || LayoutDashboard;
}

export function FeatureDetailClient({ slug }: { slug: string }) {
  const feature = featurePages[slug];

  if (!feature) {
    return null;
  }

  const icon = getIcon(feature.iconName);

  // Resolve related features with their icons
  const relatedFeatures = feature.relatedSlugs
    .map((relSlug) => {
      const rel = featurePages[relSlug];
      if (!rel) return null;
      return {
        slug: relSlug,
        title: rel.title,
        icon: getIcon(rel.iconName),
      };
    })
    .filter(Boolean) as { slug: string; title: string; icon: LucideIcon }[];

  return (
    <FeatureShowcase
      featureId={feature.slug}
      icon={icon}
      title={feature.title}
      description={feature.description}
      problemText={feature.problemText}
      solutionText={feature.solutionText}
      subFeatures={feature.subFeatures}
      targetUsers={feature.targetUsers}
      relatedFeatures={relatedFeatures}
    />
  );
}
