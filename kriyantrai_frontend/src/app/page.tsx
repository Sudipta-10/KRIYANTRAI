import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsShowcaseSection from "@/components/SolutionsShowcaseSection";
import TrustSection from "@/components/TrustSection";
import FlowSection from "@/components/FlowSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InnovationWorkspaceSection from "@/components/InnovationWorkspaceSection";
import SecurityIntegrationsSection from "@/components/SecurityIntegrationsSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <SolutionsShowcaseSection />
      <TrustSection />
      <FlowSection />
      <TestimonialsSection />
      <InnovationWorkspaceSection />
      <SecurityIntegrationsSection />
      <GettingStartedSection />
      <Footer />
    </main>
  );
}
