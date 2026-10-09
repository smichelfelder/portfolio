export type CaseSlug =
  | "ibpm-platform"
  | "digital-checklists"
  | "guardiasya"
  | "moorea-ui-kit"
  | "leafnoise";

export type Metric = {
  value: string;
  label: string;
  note?: string;
};

export type Persona = {
  name: string;
  role: string;
  bio: string;
  needs: string[];
  painPoints: string[];
  motivations: string[];
  avatar?: string;
};

export type ProcessStep = {
  title: string;
  body: string;
  image?: { src: string; alt: string; w: number; h: number; caption: string };
};

export type Decision = {
  decision: string;
  rationale: string;
  tradeoff: string;
};

export type Screen = {
  title: string;
  description: string;
  image: { src: string; alt: string; w: number; h: number };
  caption?: string;
};

export type CaseStudy = {
  slug: CaseSlug;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  company: string;
  role: string;
  duration: string;
  team: string;
  tags: string[];
  heroImage: { src: string; alt: string; w: number; h: number };
  thumbnail: { src: string; alt: string; w: number; h: number };
  shortDescription: string;
  metrics: Metric[];
  context: string;
  objectives: string[];
  scoping: string;
  challenges: string[];
  research: {
    quantitative?: Metric[];
    quantitativeNote?: string;
    qualitative: string;
    personas?: Persona[];
  };
  process: ProcessStep[];
  decisions: Decision[];
  solution: Screen[];
  outcomes: Metric[];
  reflections: string;
  next: { slug: CaseSlug; title: string };
};
