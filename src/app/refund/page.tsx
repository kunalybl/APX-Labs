import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "APX Labs refund and cancellation policy for our services.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" updated="July 19, 2026">
      <p>
        We want every client to be confident in working with {site.legalName}. This Refund Policy
        explains how refunds and cancellations are handled for our services.
      </p>

      <LegalSection heading="1. Nature of our services">
        <p>
          APX Labs provides professional services that require setup, infrastructure and ongoing work.
          Because significant work often begins immediately, refunds are handled according to the terms
          below and any specifics in your service agreement.
        </p>
      </LegalSection>

      <LegalSection heading="2. Setup & onboarding fees">
        <p>
          Setup and onboarding fees cover work performed at the start of an engagement (such as
          infrastructure configuration and research). Once this work has begun, these fees are generally
          non-refundable.
        </p>
      </LegalSection>

      <LegalSection heading="3. Monthly service fees">
        <ul>
          <li>Monthly fees are billed in advance for the upcoming service period.</li>
          <li>You may cancel future billing with written notice as specified in your agreement.</li>
          <li>Fees for a service period already in progress are non-refundable, as resources are committed to your campaigns.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. How to request a refund or cancellation">
        <p>
          To request a refund or cancel your service, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> with your company name and details of your
          request. We will respond within a reasonable time to review eligible requests in good faith.
        </p>
      </LegalSection>

      <LegalSection heading="5. Exceptions">
        <p>
          Where required by applicable law, or where APX Labs has failed to deliver contracted services,
          we will provide an appropriate remedy or refund. Nothing in this policy limits rights you may
          have under applicable consumer protection laws.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
