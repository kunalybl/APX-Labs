import * as React from "react";
import { Database, ShieldCheck, MailCheck, LineChart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const signals = [
  { icon: Database, label: "You own the data", note: "Domains, inboxes & CRM" },
  { icon: MailCheck, label: "Inbox-grade deliverability", note: "SPF · DKIM · DMARC" },
  { icon: ShieldCheck, label: "Verified decision-makers", note: "ICP-matched, not scraped" },
  { icon: LineChart, label: "Measured to revenue", note: "First touch → booked" },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-bg-subtle/50 py-10">
      <Container>
        <Reveal className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.14em] text-fg-subtle">
            Built for teams who want pipeline they can predict
          </p>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {signals.map((s) => (
            <RevealItem
              key={s.label}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:items-start md:text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-elevated text-accent">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <div className="text-sm font-semibold text-fg">{s.label}</div>
                <div className="text-xs text-fg-subtle">{s.note}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
