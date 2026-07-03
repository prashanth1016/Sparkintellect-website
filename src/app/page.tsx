import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhySection } from "@/components/sections/why-section";
import { ServicesSection } from "@/components/sections/services-section";
import { IndustriesSection } from "@/components/sections/industries-section";

const TechnologiesSection = dynamic(
  () => import("@/components/sections/technologies-section").then((m) => m.TechnologiesSection),
  { loading: () => <div className="min-h-[400px] bg-navy" /> }
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/projects-section").then((m) => m.ProjectsSection),
  { loading: () => <div className="min-h-[400px] bg-background-soft" /> }
);
const ProcessSection = dynamic(
  () => import("@/components/sections/process-section").then((m) => m.ProcessSection),
  { loading: () => <div className="min-h-[400px] bg-white" /> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section").then((m) => m.TestimonialsSection),
  { loading: () => <div className="min-h-[300px] bg-background-muted" /> }
);
const CtaSection = dynamic(
  () => import("@/components/sections/cta-section").then((m) => m.CtaSection),
  { loading: () => <div className="min-h-[200px] bg-navy" /> }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ServicesSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
