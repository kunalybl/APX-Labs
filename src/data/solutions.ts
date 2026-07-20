import { Sun, HardHat, Wind, SprayCan, type LucideIcon } from "lucide-react";

export type Solution = {
  slug: string;
  icon: LucideIcon;
  name: string;
  headline: string;
  subhead: string;
  audience: string;
  outcomes: { title: string; body: string }[];
  playbook: { step: string; detail: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "commercial-solar",
    icon: Sun,
    name: "Commercial Solar",
    headline: "Fill your pipeline with qualified C&I solar buyers.",
    subhead:
      "We put your team in front of facility owners, property managers and operators actively positioned to go solar — with the infrastructure to book meetings predictably.",
    audience: "Commercial & industrial solar developers, EPCs and installers.",
    outcomes: [
      { title: "In-market accounts", body: "Target businesses by roof size, energy spend, ownership and location — not generic homeowner lists." },
      { title: "Decision-maker access", body: "Reach owners and facilities leaders who can actually approve a six-figure install." },
      { title: "Booked site assessments", body: "Qualified meetings land on your calendar with full context, ready to quote." },
    ],
    playbook: [
      { step: "Define the ICP", detail: "Facility type, energy profile, ownership and geography that fit your install economics." },
      { step: "Research & verify", detail: "Enrich and verify decision-makers so every contact is real and reachable." },
      { step: "Personalized outreach", detail: "Messaging tailored to each facility's context and incentive landscape." },
      { step: "Book & hand off", detail: "Meetings sync to your CRM with notes, ready for your closer." },
    ],
  },
  {
    slug: "roofing",
    icon: HardHat,
    name: "Roofing",
    headline: "Predictable commercial roofing appointments.",
    subhead:
      "Stop waiting on storms and referrals. We build a steady flow of qualified commercial roofing conversations with the people who own the buildings.",
    audience: "Commercial roofing contractors and re-roof specialists.",
    outcomes: [
      { title: "Property owner access", body: "Reach owners and property managers responsible for aging commercial roofs." },
      { title: "Off-season pipeline", body: "Keep crews booked year-round instead of riding weather cycles." },
      { title: "Higher-value jobs", body: "Focus outreach on the building profiles that fit your best margins." },
    ],
    playbook: [
      { step: "Target the buildings", detail: "Segment by building type, age, size and ownership in your service area." },
      { step: "Reach the owner", detail: "Verified decision-maker contacts, not front-desk dead ends." },
      { step: "Personalized outreach", detail: "Relevant, credible messaging that earns the reply." },
      { step: "Book inspections", detail: "Qualified inspection appointments delivered to your pipeline." },
    ],
  },
  {
    slug: "hvac",
    icon: Wind,
    name: "HVAC",
    headline: "Booked estimates from facility decision-makers.",
    subhead:
      "We connect your commercial HVAC team with facility and operations leaders who need service, retrofits and replacements — on a predictable schedule.",
    audience: "Commercial HVAC and mechanical contractors.",
    outcomes: [
      { title: "Facilities decision-makers", body: "Reach the operations leaders who own comfort, uptime and equipment budgets." },
      { title: "Service & retrofit demand", body: "Surface buildings with aging systems and recurring service needs." },
      { title: "Recurring contracts", body: "Build a pipeline toward maintenance agreements, not just one-off jobs." },
    ],
    playbook: [
      { step: "Map the accounts", detail: "Facility types and sizes that match your service capacity." },
      { step: "Verify contacts", detail: "Reach facilities and operations decision-makers directly." },
      { step: "Personalized outreach", detail: "Messaging built around uptime, efficiency and cost." },
      { step: "Book estimates", detail: "Qualified estimate appointments land on your calendar." },
    ],
  },
  {
    slug: "cleaning",
    icon: SprayCan,
    name: "Cleaning",
    headline: "Recurring commercial cleaning contracts.",
    subhead:
      "We help commercial cleaning companies land the recurring, high-retention accounts that make revenue predictable — by reaching the right facilities leaders first.",
    audience: "Commercial janitorial and facility cleaning companies.",
    outcomes: [
      { title: "Facilities & office managers", body: "Reach the people who choose and renew cleaning vendors." },
      { title: "Recurring revenue", body: "Prioritize accounts that turn into monthly, high-retention contracts." },
      { title: "Route-dense growth", body: "Target accounts that fit your service routes for healthier margins." },
    ],
    playbook: [
      { step: "Define ideal accounts", detail: "Building type, size and location that fit your routes and margins." },
      { step: "Reach the decision-maker", detail: "Verified facilities and office managers, ready to hear an offer." },
      { step: "Personalized outreach", detail: "Trust-building messaging that opens the door to a walkthrough." },
      { step: "Book walkthroughs", detail: "Qualified site walkthroughs delivered to your pipeline." },
    ],
  },
];

export const solutionMap = Object.fromEntries(solutions.map((s) => [s.slug, s]));
