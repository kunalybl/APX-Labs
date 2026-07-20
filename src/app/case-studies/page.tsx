import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ScreenshotShowcase } from "@/components/proof/screenshot-showcase";
import { EvidenceWall } from "@/components/proof/evidence-wall";
import { VideoTestimonials } from "@/components/proof/video-testimonials";
import { CTA } from "@/components/sections/cta";
import { getProof, getScreenshots } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Case Studies & Proof",
  description:
    "Real campaigns, real replies, real booked meetings. The unedited proof behind APX Labs growth infrastructure.",
};

export default function CaseStudiesPage() {
  const proof = getProof();
  const screenshots = getScreenshots();

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The proof, unedited"
        description="No borrowed logos. No invented metrics. Just real campaigns, real replies and real meetings booked for real businesses."
      />

      <Section>
        <Reveal>
          <SectionHeader eyebrow="Campaigns" title="Live campaign dashboards" description="Straight from the systems running today." />
        </Reveal>
        <div className="mt-12">
          <ScreenshotShowcase assets={screenshots} />
        </div>
      </Section>

      <Section className="border-t border-line bg-bg-subtle/40">
        <Reveal>
          <SectionHeader align="center" eyebrow="Evidence wall" title="Replies & booked meetings" description="The receipts, exactly as they landed." />
        </Reveal>
        <div className="mt-14">
          <EvidenceWall assets={proof} />
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeader eyebrow="On camera" title="Client testimonials" description="Owners and founders, in their own words." />
        </Reveal>
        <div className="mt-12">
          <VideoTestimonials />
        </div>
      </Section>

      <CTA />
    </>
  );
}
