import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { VideoTestimonials } from "@/components/proof/video-testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeader
          eyebrow="In their words"
          title="Owners and founders, on camera"
          description="The people who run these businesses, telling you in their own words what changed after we built their pipeline — unscripted and unedited."
        />
      </Reveal>
      <div className="mt-12">
        <VideoTestimonials />
      </div>
    </Section>
  );
}
