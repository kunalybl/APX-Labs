import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the APX Labs website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 19, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the{" "}
        {site.legalName} website and services. By using our website or engaging our services,
        you agree to these Terms.
      </p>

      <LegalSection heading="1. Services">
        <p>
          APX Labs provides growth infrastructure and marketing services, which may include
          prospect research, outreach, email infrastructure, landing pages, CRM automation,
          follow-up systems and analytics. The specific scope of any engagement is defined in a
          separate written agreement or proposal.
        </p>
      </LegalSection>

      <LegalSection heading="2. Engagement & payment">
        <p>
          Fees, billing cycles and deliverables are set out in your service agreement. Unless
          otherwise stated, fees are due as invoiced. Late payments may result in suspension of
          services.
        </p>
      </LegalSection>

      <LegalSection heading="3. Client responsibilities">
        <ul>
          <li>Provide accurate information and timely feedback needed to deliver services.</li>
          <li>Ensure your offers, claims and outreach comply with applicable laws and regulations.</li>
          <li>Maintain ownership and appropriate use of any domains, inboxes and data used in your campaigns.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. No guarantee of results">
        <p>
          We apply proven systems and best practices, but outcomes depend on factors outside our
          control — including your market, offer, pricing and sales execution. We do not guarantee
          specific results, revenue or number of meetings.
        </p>
      </LegalSection>

      <LegalSection heading="5. Intellectual property">
        <p>
          Deliverables created specifically for you under a paid engagement are yours upon full
          payment. Underlying methods, tools, templates and know-how remain the property of APX Labs.
        </p>
      </LegalSection>

      <LegalSection heading="6. Confidentiality">
        <p>
          Each party agrees to protect the other&apos;s confidential information and use it only for
          the purpose of the engagement.
        </p>
      </LegalSection>

      <LegalSection heading="7. Limitation of liability">
        <p>
          To the maximum extent permitted by law, APX Labs is not liable for indirect, incidental or
          consequential damages. Our total liability for any claim is limited to the fees paid for the
          services giving rise to the claim.
        </p>
      </LegalSection>

      <LegalSection heading="8. Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
