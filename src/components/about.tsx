const skills = [
  {
    category: "Product & Leadership",
    items: [
      "Product Strategy",
      "Product Ownership",
      "Roadmap & Sprint Mgmt",
      "Requirements Writing",
      "Team Leadership",
    ],
  },
  {
    category: "Design",
    items: [
      "Design Systems",
      "Design Thinking",
      "User Research",
      "Information Architecture",
      "Figma",
    ],
  },
  {
    category: "Build & AI",
    items: [
      "AI-first Design",
      "React",
      "shadcn/ui",
      "Tailwind",
      "Cursor & Claude",
      "HTML/CSS/JS",
    ],
  },
];

const career = [
  { role: "Senior Product Designer", company: "Workerbase", period: "2023–Present", active: true },
  { role: "Product Designer", company: "Sky Castle Studios", period: "2021–2023", active: false },
  { role: "Head of Design & Culture", company: "Leafnoise", period: "2020–2021", active: false },
  { role: "UI/UX Designer", company: "Leafnoise", period: "2017–2020", active: false },
  { role: "Lead Graphic Designer", company: "PB5LAB", period: "2013–2017", active: false },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 lg:gap-24">
          <div>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Design meets
              <br />
              <span className="gradient-text">engineering.</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a product designer who works at the intersection of
                design and product strategy. I own product design end-to-end —
                from scoping and requirements to shipping production-ready
                frontend — and partner closely with product and engineering on
                roadmap, prioritization, and delivery.
              </p>
              <p>
                At Workerbase, I drive an AI-first design process: wireframe
                outside of code, then build pixel-perfect designs directly in
                production React — eliminating design-to-frontend handoff cycles
                and accelerating delivery. I also design the product&apos;s AI
                capabilities: AI agents, conversational interfaces, and
                AI-assisted workflows on a platform built around multiple LLMs.
              </p>
              <p>
                I&apos;m the sole designer for a complex B2B manufacturing
                platform used by 16 enterprise clients including Porsche,
                thyssenkrupp, Bosch, and GKN — owning design across mobile,
                tablet, and industrial smartwatch.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "10+", label: "Years in design" },
                { value: "16", label: "Enterprise clients" },
                { value: "3", label: "Languages" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-5 text-center">
                  <p className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Skills */}
            {skills.map((group) => (
              <div key={group.category} className="glass rounded-2xl p-6">
                <h3 className="text-xs font-mono text-accent tracking-widest uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Career path */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xs font-mono text-accent tracking-widest uppercase mb-5">
                Career Path
              </h3>
              <div className="space-y-3">
                {career.map((job) => (
                  <div
                    key={job.period}
                    className="flex items-center justify-between text-sm group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${job.active ? "bg-green-500 animate-pulse" : "bg-border"}`} />
                      <div>
                        <span className="font-medium">{job.role}</span>
                        <span className="text-muted"> · {job.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted">
                      {job.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
