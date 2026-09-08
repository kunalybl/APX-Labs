import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal-layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How APX Labs collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 8, 2026">
      <p>
        This Privacy Policy explains how {site.legalName} (&quot;APX Labs&quot;,
        &quot;we&quot;, &quot;us&quot;) collects, uses and safeguards information when you
        visit our website or engage our services. We are committed to handling your data
        transparently and responsibly.
      </p>

      <LegalSection heading="1. Information we collect">
        <p>We collect information you provide directly and information gathered automatically:</p>
        <ul>
          <li><strong>Contact details</strong> — name, email, phone number, company and message when you request a strategy call or opt in to SMS.</li>
          <li><strong>Usage data</strong> — pages visited, referring source and device information collected via standard analytics.</li>
          <li><strong>Service data</strong> — information required to deliver our services under a signed agreement.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. How we use information">
        <ul>
          <li>To respond to inquiries and schedule strategy calls.</li>
          <li>To provide, operate and improve our services.</li>
          <li>To communicate about your account, engagement or support requests.</li>
          <li>To comply with legal obligations and enforce our agreements.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we share information">
        <p>
          We do not sell your personal information. We share data only with trusted service
          providers (such as hosting, analytics and CRM platforms) who process it on our
          behalf under confidentiality obligations, or where required by law.
        </p>
        <p>
          <strong>SMS &amp; mobile opt-in data:</strong> Mobile information and SMS/text-messaging
          opt-in consent are never shared with third parties or affiliates, and are never sold or
          used for marketing or promotional purposes by anyone other than {site.legalName}.
        </p>
      </LegalSection>

      <LegalSection heading="4. Data retention & security">
        <p>
          We retain information only as long as necessary for the purposes described here or as
          required by law, and we apply reasonable technical and organizational measures to
          protect it against unauthorized access, loss or misuse.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your rights">
        <p>
          Depending on your location, you may have the right to access, correct, delete or
          restrict the use of your personal information. To exercise these rights, contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="6. Cookies">
        <p>
          We use essential and analytics cookies to operate the site and understand how it is
          used. You can control cookies through your browser settings.
        </p>
      </LegalSection>

      <LegalSection heading="7. Changes to this policy">
        <p>
          We may update this policy from time to time. Material changes will be reflected by the
          &quot;Last updated&quot; date above.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
