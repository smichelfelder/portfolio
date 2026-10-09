const principles = [
  {
    number: "01",
    title: "Figma for ideas, code for the final UI",
    description:
      "I wireframe in Figma, then build the final UI directly in production React with shadcn/ui and Tailwind. Fewer handoff rounds, faster releases.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    number: "02",
    title: "Think like a product owner",
    description:
      "I scope with the PM, write requirements, share product-owner duties and help run sprints. Most design calls end up being product calls anyway.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    number: "03",
    title: "Make AI easy to trust",
    description:
      "I design agents, conversational UIs and AI-assisted workflows on a multi-LLM platform. People should understand what the AI did and be able to override it.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    number: "04",
    title: "Build systems that scale",
    description:
      "I build cross-platform design systems and ship them as React components in Storybook. One source of truth for mobile, tablet, web and smartwatch.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            Approach
          </p>
          <h2 className="font-headline text-4xl sm:text-5xl mb-6">
            How I work.
          </h2>
          <p className="text-muted leading-relaxed">
            My work doesn&apos;t stop at a Figma file. This is how I get
            things from an idea to production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="card rounded-3xl p-8 md:p-10 group transition-all duration-500 hover:-translate-y-1"
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
                <span className="text-xs text-accent font-bold">
                  {principle.number}
                </span>
              </div>
              <h3 className="font-headline text-xl mb-3">
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
