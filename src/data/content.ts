import {
  Search,
  PenLine,
  Server,
  LayoutTemplate,
  Workflow,
  RefreshCw,
  BarChart3,
  Sun,
  HardHat,
  Wind,
  SprayCan,
  Factory,
  Building2,
} from "lucide-react";

/* ---------------- APX Growth Engine ---------------- */
export const engineSteps = [
  {
    id: "research",
    icon: Search,
    name: "AI Prospect Research",
    summary: "We identify in-market decision-makers before your competitors know they exist.",
    detail:
      "Our systems continuously enrich and verify accounts against your exact ICP — title, firmographics, buying signals — so every contact is a real decision-maker, not a scraped guess.",
  },
  {
    id: "outreach",
    icon: PenLine,
    name: "Hyper-Personalized Outreach",
    summary: "Every message is written for one person, at scale — never a spray-and-pray blast.",
    detail:
      "AI drafts research-backed, one-to-one messaging referencing the prospect's business context. Human-quality relevance, machine-scale volume.",
  },
  {
    id: "infrastructure",
    icon: Server,
    name: "Email Infrastructure",
    summary: "Dedicated domains, warmed inboxes, and deliverability engineering that lands in the inbox.",
    detail:
      "SPF, DKIM, DMARC, domain isolation and inbox rotation — the invisible plumbing that keeps you out of spam and in front of buyers.",
  },
  {
    id: "landing",
    icon: LayoutTemplate,
    name: "Landing Pages",
    summary: "Purpose-built pages that turn interest into booked calls.",
    detail:
      "Conversion-focused pages tailored to each industry and campaign — fast, credible, and built to move a warm prospect to a meeting.",
  },
  {
    id: "crm",
    icon: Workflow,
    name: "CRM Automation",
    summary: "Every reply, meeting, and stage syncs automatically — no manual data entry.",
    detail:
      "Leads flow into your pipeline with full context. Your team wakes up to qualified conversations, not a spreadsheet to clean.",
  },
  {
    id: "followup",
    icon: RefreshCw,
    name: "Follow-up Systems",
    summary: "Persistent, tactful follow-up that captures the 80% of deals lost to silence.",
    detail:
      "Multi-touch sequences keep the conversation alive across channels until the prospect is ready — recovering pipeline most teams leave on the table.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    name: "Growth Analytics",
    summary: "A single source of truth from first touch to booked revenue.",
    detail:
      "Live dashboards show exactly what's working — reply rates, meetings booked, pipeline created — so growth becomes a system you can forecast.",
  },
] as const;

/* ---------------- Industries ---------------- */
export const industries = [
  {
    id: "commercial-solar",
    icon: Sun,
    name: "Commercial Solar",
    href: "/solutions/commercial-solar",
    blurb: "Fill the pipeline with qualified C&I solar buyers and facility owners.",
  },
  {
    id: "roofing",
    icon: HardHat,
    name: "Roofing",
    href: "/solutions/roofing",
    blurb: "Predictable commercial roofing appointments with property decision-makers.",
  },
  {
    id: "hvac",
    icon: Wind,
    name: "HVAC",
    href: "/solutions/hvac",
    blurb: "Booked estimates from facility and operations leaders.",
  },
  {
    id: "cleaning",
    icon: SprayCan,
    name: "Cleaning",
    href: "/solutions/cleaning",
    blurb: "Recurring commercial cleaning contracts, sourced and closed.",
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    href: "/contact",
    blurb: "Reach plant managers and procurement leads at scale.",
  },
  {
    id: "local-services",
    icon: Building2,
    name: "Local Services",
    href: "/contact",
    blurb: "Any high-value local service business with a real sales motion.",
  },
] as const;

/* ---------------- Problem framing ---------------- */
export const problems = [
  {
    stat: "Referrals run dry",
    title: "Growth stalls when word-of-mouth plateaus",
    body: "Referrals are unpredictable and uncapped on the downside. When the phone stops ringing, there's no lever to pull.",
  },
  {
    stat: "Ads get expensive",
    title: "Paid channels keep getting more expensive",
    body: "Lead costs climb every quarter and the leads that come through are rarely decision-makers ready to buy.",
  },
  {
    stat: "Cold email fails",
    title: "DIY cold email lands in spam",
    body: "Without infrastructure and personalization, outreach burns your domain and your reputation with nothing to show for it.",
  },
];

/* ---------------- FAQ ---------------- */
export const faqs = [
  {
    q: "Is this just cold email?",
    a: "No. Cold email is one channel inside a complete growth system. We build the research, infrastructure, landing pages, CRM automation, follow-up and analytics that turn outreach into a predictable pipeline you own.",
  },
  {
    q: "How is this different from hiring an SDR or an agency?",
    a: "An SDR is one person with a ceiling. A typical agency sends generic blasts. We build infrastructure — a system that compounds, is measured end-to-end, and produces qualified meetings on your calendar.",
  },
  {
    q: "How long until we see booked meetings?",
    a: "Infrastructure setup and warm-up typically takes the first few weeks. Most partners begin seeing qualified conversations inside the first campaign cycle, then volume compounds as the system tunes.",
  },
  {
    q: "Which industries do you work with?",
    a: "We specialize in commercial solar, roofing, HVAC, cleaning, manufacturing and high-value local service businesses — any company with a real sales motion and a meaningful deal size.",
  },
  {
    q: "Do we own the assets and data?",
    a: "Yes. Domains, inboxes, CRM data and campaign systems are yours. We build growth infrastructure for your business — not a rented audience you lose when you leave.",
  },
  {
    q: "What does a strategy call involve?",
    a: "A focused working session where we map your ICP, current pipeline and goals, then show you exactly how the system would generate qualified meetings for your business. No pressure, no obligation.",
  },
];

/* ---------------- Technology stack ---------------- */
export const techStack = [
  { name: "AI Research Layer", note: "ICP enrichment & signal detection" },
  { name: "Deliverability Engine", note: "SPF · DKIM · DMARC · warm-up" },
  { name: "Personalization Models", note: "1:1 messaging at scale" },
  { name: "CRM Sync", note: "Automated pipeline hygiene" },
  { name: "Sequencing", note: "Multi-touch follow-up" },
  { name: "Analytics", note: "First touch to booked revenue" },
];
