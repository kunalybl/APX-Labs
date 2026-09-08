import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/legal-layout";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of the APX Labs website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="September 8, 2026">
      <p>
        Welcome to {site.legalName}. By accessing or using our website and services, you
        agree to the following terms.
      </p>

      <LegalSection heading="1. Use of Services">
        <p>
          You agree to use our services only for lawful purposes. You must not misuse,
          disrupt, or attempt to gain unauthorized access to our systems or services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Services Provided">
        <p>
          {site.legalName} provides marketing, lead generation, and automation services. We do
          not guarantee specific results, including but not limited to the number of leads,
          appointments, or revenue outcomes.
        </p>
      </LegalSection>

      <LegalSection heading="3. Payments">
        <p>
          All payments are final unless otherwise stated in a written agreement. Failure to
          complete payment may result in suspension or termination of services.
        </p>
      </LegalSection>

      <LegalSection heading="4. Communication Consent">
        <p>
          By providing your contact information, you consent to receive communications from us
          via email, phone, and SMS. You can opt out of SMS communications at any time by
          following the instructions provided in the message.
        </p>
      </LegalSection>

      <LegalSection heading="5. Intellectual Property">
        <p>
          All content, branding, materials, and systems provided by {site.legalName} remain the
          intellectual property of {site.legalName} unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection heading="6. Limitation of Liability">
        <p>
          {site.legalName} is not liable for any indirect, incidental, or consequential damages
          arising from the use or inability to use our services.
        </p>
      </LegalSection>

      <LegalSection heading="7. Termination">
        <p>
          We reserve the right to suspend or terminate services at any time if these terms are
          violated.
        </p>
      </LegalSection>

      <LegalSection heading="8. Updates to Terms">
        <p>
          We may update these Terms and Conditions from time to time. Continued use of our
          services constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="9. SMS Terms of Service">
        <p>
          <strong>Program Name:</strong> {site.legalName} Messaging Program
        </p>
        <p>
          <strong>Program Description:</strong> By opting in, you agree to receive SMS messages
          from {site.legalName} related to service updates, appointment and strategy-call
          reminders, follow-ups, and promotional communications.
        </p>
        <p>
          You can cancel the SMS service at any time. Simply text &quot;STOP&quot; to the number
          you received messages from. Upon sending &quot;STOP,&quot; we will confirm your
          unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS
          messages from us. To rejoin, sign up as you did initially, and we will resume sending
          SMS messages to you.
        </p>
        <p>
          For help, text &quot;HELP&quot; to the number you received messages from, or contact us
          at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>Carriers are not liable for delayed or undelivered messages.</p>
        <p>
          As always, message and data rates may apply for messages sent to you from us and to us
          from you. Message frequency varies. For questions about your text plan or data plan,
          contact your wireless provider.
        </p>
        <p>
          For privacy-related inquiries, please refer to our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="10. Contact Information">
        <p>
          If you have any questions regarding these Terms and Conditions, please contact us at:
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
