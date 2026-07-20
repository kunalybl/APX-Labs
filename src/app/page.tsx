import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Problem } from "@/components/sections/problem";
import { GrowthEngine } from "@/components/sections/growth-engine";
import { Industries } from "@/components/sections/industries";
import { CaseStudies } from "@/components/sections/case-studies";
import { Evidence } from "@/components/sections/evidence";
import { Testimonials } from "@/components/sections/testimonials";
import { TechStack } from "@/components/sections/tech-stack";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { getProof, getScreenshots } from "@/lib/assets";

export default function HomePage() {
  const proof = getProof();
  const screenshots = getScreenshots();

  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <GrowthEngine />
      <Industries />
      <CaseStudies screenshots={screenshots} />
      <Evidence proof={proof} />
      <Testimonials />
      <TechStack />
      <FAQ />
      <CTA />
    </>
  );
}
