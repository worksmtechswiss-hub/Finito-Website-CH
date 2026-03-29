import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WorkflowSteps } from "@/components/sections/WorkflowSteps";
import { SavingsBanner } from "@/components/sections/SavingsBanner";
import { VorherNachher } from "@/components/sections/VorherNachher";
import { PraxisBeispiele } from "@/components/sections/PraxisBeispiele";
import { MitarbeiterApp } from "@/components/sections/MitarbeiterApp";
import { BranchenGrid } from "@/components/sections/BranchenGrid";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { organizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Finito Pro | KMU Software Schweiz - Projektmanagement, Rechnungen & CRM",
  description:
    "Finito Pro - Die All-in-One KMU Software für Schweizer Handwerksbetriebe. Projekte verwalten, QR-Rechnungen erstellen, Zeiterfassung & CRM. 30 Tage gratis testen!",
  keywords:
    "KMU Software Schweiz, Projektmanagement Software, Handwerker Software, QR Rechnung Software, Schweizer Software",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <TrustBanner />
      <WorkflowSteps />
      <SavingsBanner />
      <VorherNachher />
      <PraxisBeispiele />
      <MitarbeiterApp />
      <BranchenGrid />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
