export type Testimonial = {
  youtubeId: string;
  name: string;
  company: string;
  role?: string;
};

/** Client video testimonials, hosted on YouTube. Order = display order. */
export const testimonials: Testimonial[] = [
  { youtubeId: "1P4nE8hdQEk", name: "Andre Ramy", company: "Beacon Energy Solutions", role: "Founder" },
  { youtubeId: "w053_pokPfY", name: "Charlie", company: "Ecology Solar", role: "Owner" },
  { youtubeId: "ZhEhH88tra4", name: "Linda Callahan", company: "WhySurge", role: "Director" },
  { youtubeId: "oB2Mvrq3uSI", name: "Vladimir Marchenko", company: "Wolf River Electric", role: "Owner" },
];
