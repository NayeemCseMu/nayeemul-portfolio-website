import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import About from "@/components/About";
import CareerEvolution from "@/components/CareerEvolution";
import FeaturedProject from "@/components/FeaturedProject";
import AnalyticsSection from "@/components/AnalyticsSection";
import CloudSection from "@/components/CloudSection";
import SoftwareEngineeringSection from "@/components/SoftwareEngineeringSection";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import GithubCTA from "@/components/GithubCTA";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <About />
      <CareerEvolution />
      <FeaturedProject />
      <AnalyticsSection />
      {/* <CloudSection /> */}
      <SoftwareEngineeringSection />
      <Skills />
      <Experience />
      <GithubCTA />
      <ResumeCTA />
      <Contact />
    </>
  );
}
