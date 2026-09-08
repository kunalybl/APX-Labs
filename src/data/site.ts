export const site = {
  name: "APX Labs",
  legalName: "APX Labs",
  tagline: "Growth infrastructure for local businesses.",
  description:
    "APX Labs builds AI-powered customer acquisition systems that generate qualified meetings and predictable sales pipeline for local and commercial service businesses.",
  url: "https://apx-ai.co",
  email: "kunal@apx-ai.co",
  phone: "+1 (917) 718-4299",
  phoneHref: "+19177184299",
  // Calendly base link + theme params so the widget blends with the dark UI.
  calendly:
    "https://calendly.com/kunalybl/30min?hide_gdpr_banner=1&background_color=0b0e13&text_color=f2f4f7&primary_color=4d8ef8",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Commercial Solar", href: "/solutions/commercial-solar", description: "Fill the pipeline with qualified C&I solar buyers." },
      { label: "Roofing", href: "/solutions/roofing", description: "Predictable commercial roofing appointments." },
      { label: "HVAC", href: "/solutions/hvac", description: "Booked estimates from facility decision-makers." },
      { label: "Cleaning", href: "/solutions/cleaning", description: "Recurring commercial cleaning contracts." },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav = [
  {
    title: "Solutions",
    links: [
      { label: "Commercial Solar", href: "/solutions/commercial-solar" },
      { label: "Roofing", href: "/solutions/roofing" },
      { label: "HVAC", href: "/solutions/hvac" },
      { label: "Cleaning", href: "/solutions/cleaning" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Resources", href: "/resources" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];
