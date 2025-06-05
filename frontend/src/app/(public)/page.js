import CaseStudiesSample from "@/components/CaseStudiesSample";
import HeroSection from "@/components/HeroSection";
import BrandsWeWorkWith from "@/components/BrandsWeWorkWith";
import OurExpertise from "@/components/OurExpertise";
import ReadyToScaleCta from "@/components/ReadyToScaleCTA";
import React from "react";
import ResultsWeGet from "@/components/ResultsWeGet";
import StatsAll from "@/components/StatsAll";
import MarketingHero from "@/components/MarketingHero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarketingHero/>
      <StatsAll />
      <BrandsWeWorkWith />
      <ResultsWeGet />
      <OurExpertise />
      <CaseStudiesSample />
      {/* CTA Section */}
      <ReadyToScaleCta />
    </main>
  );
}
