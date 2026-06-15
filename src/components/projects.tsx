import Image from "next/image";

const projects = [
  {
    title: "iBPM Platform Redesign",
    description:
      "Redesigned a complex B2B manufacturing platform used by 16 enterprise clients including Porsche, thyssenkrupp, Bosch, and GKN. Owned design end-to-end across mobile, tablet, and industrial smartwatch.",
    tags: ["B2B SaaS", "Enterprise", "Cross-platform", "AI Workflows"],
    image: "/projects/ibpm-platform.png",
    gradient: "from-violet-500/30 via-purple-500/20 to-indigo-500/30",
    metrics: "16 enterprise clients",
    year: "2023–Present",
    company: "Workerbase",
  },
  {
    title: "GuardiasYa",
    description:
      "Emergency room finder mobile app. Designed the full UX from user research and personas through taskflows, wireframes, and high-fidelity screens. Focused on making urgent healthcare accessible.",
    tags: ["UX Case Study", "Mobile App", "User Research", "Healthcare"],
    image: "/projects/guardiasya.png",
    gradient: "from-sky-500/30 via-cyan-500/20 to-blue-500/30",
    metrics: "Full UX process",
    year: "2023",
    company: "Personal Project",
  },
  {
    title: "Multi-project UI Kit — Moorea",
    description:
      "Built a scalable design system and UI kit used across multiple products. Defined color palettes, component libraries, typography, and interaction patterns to ensure consistency at scale.",
    tags: ["Design Systems", "UI Kit", "Component Library", "Scalability"],
    image: "/projects/moorea-uikit.png",
    gradient: "from-emerald-500/30 via-green-500/20 to-teal-500/30",
    metrics: "Cross-product system",
    year: "2022",
    company: "Sky Castle Studios",
  },
  {
    title: "Website for Leafnoise",
    description:
      "Led the redesign of Leafnoise's website, defining UX strategy, running stakeholder research, and designing the full site including products, testimonials, and contact flows.",
    tags: ["Website Redesign", "UX Strategy", "Stakeholder Research"],
    image: "/projects/leafnoise.png",
    gradient: "from-lime-500/30 via-yellow-500/20 to-green-500/30",
    metrics: "Full website redesign",
    year: "2020–2021",
    company: "Leafnoise",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
              Selected Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Case Studies
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted max-w-xs text-right">
            From AI-powered enterprise platforms to design systems and mobile
            apps — always shipping end-to-end.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <article
              key={i}
              className="project-card group relative rounded-3xl glass overflow-hidden cursor-pointer"
            >
              <div className="grid md:grid-cols-[1fr,1.2fr] gap-0">
                <div className="p-8 md:p-10 flex flex-col justify-between min-h-[300px] relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-mono text-muted glass px-2.5 py-1 rounded-full">
                        {project.year}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="text-xs font-mono text-accent font-medium">
                        {project.company}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full glass text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative bg-gradient-to-br ${project.gradient} project-image overflow-hidden min-h-[300px]`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 12L12 4M12 4H5M12 4V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
