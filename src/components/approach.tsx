const principles = [
  {
    number: "01",
    title: "Design in code, not just in Figma",
    description:
      "I wireframe outside of code, then build pixel-perfect designs directly in production React with shadcn/ui and Tailwind — removing the design-to-frontend handoff loop and accelerating delivery.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    number: "02",
    title: "Own the product, not just the pixels",
    description:
      "I partner with the PM on scoping, planning, writing product requirements, sharing product-owner duties, and helping run sprints. Design decisions are product decisions.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    number: "03",
    title: "Design AI that feels human",
    description:
      "I design AI capabilities — agents, conversational interfaces, AI-assisted workflows — on platforms built around multiple LLMs. The goal is making complex systems feel intuitive.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    number: "04",
    title: "Scale through systems",
    description:
      "I build and maintain cross-platform design systems, rebuilding them as production-ready React components. One source of truth across mobile, tablet, web, and industrial smartwatch.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-warm/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">
            Approach
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            How I work.
          </h2>
          <p className="text-muted leading-relaxed">
            I believe the best product designers don&apos;t just hand off
            mockups — they ship. Here&apos;s what makes my process different.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="glass rounded-3xl p-8 md:p-10 group hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d={principle.icon}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-mono text-xs text-accent font-bold">
                  {principle.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
