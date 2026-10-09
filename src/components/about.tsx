import { Toolkit } from "@/components/toolkit";

const facets = [
  {
    icon: "⚽",
    title: "Team player",
    blurb: "Especially on the football pitch.",
  },
  {
    icon: "🏺",
    title: "Detail-oriented",
    blurb: "I have the pottery pieces to show for it.",
  },
  {
    icon: "💡",
    title: "Problem solver",
    blurb: "I love fixing small everyday annoyances.",
  },
  {
    icon: "📍",
    title: "Based in Barcelona",
    blurb: "Working with teams across Europe and LATAM.",
  },
];

export const career = [
  {
    role: "Senior Product Designer",
    company: "Workerbase",
    period: "2023–Present",
    active: true,
  },
  {
    role: "Product Designer",
    company: "Sky Castle Studios",
    period: "2021–2023",
    active: false,
  },
  {
    role: "Head of Design & Culture",
    company: "Leafnoise",
    period: "2020–2021",
    active: false,
  },
  {
    role: "UI/UX Designer",
    company: "Leafnoise",
    period: "2017–2020",
    active: false,
  },
  {
    role: "Lead Graphic Designer",
    company: "PB5LAB",
    period: "2013–2017",
    active: false,
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT: bio, personal facets, stats */}
          <div>
            <p className="text-sm text-accent tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="font-headline text-4xl sm:text-5xl mb-8">
              Hi, I&apos;m
              <br />
              <span className="text-accent">Steph.</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a product designer who also does product strategy and
                code. At{" "}
                <span className="text-foreground font-medium">Workerbase</span>{" "}
                I run an AI-first process: I wireframe in Figma, then build the
                final UI directly in production React. No handoff rounds, and
                features ship faster.
              </p>
              <p>
                I&apos;m the only designer on a complex B2B manufacturing
                platform used by 16 enterprise clients like Porsche,
                thyssenkrupp, Bosch and GKN. I cover mobile, tablet and an
                industrial smartwatch, plus the AI agents and conversational
                interfaces.
              </p>
            </div>

            {/* Personal facets, from the original Figma portfolio */}
            <div className="card rounded-3xl p-6 mt-10">
              <h3 className="text-xs text-accent tracking-widest uppercase mb-5">
                Off the clock
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {facets.map((facet) => (
                  <div
                    key={facet.title}
                    className="card rounded-2xl p-4 flex items-start gap-3"
                  >
                    <span className="text-2xl leading-none mt-0.5" aria-hidden>
                      {facet.icon}
                    </span>
                    <div>
                      <p className="font-medium text-sm">{facet.title}</p>
                      <p className="text-xs text-muted leading-relaxed mt-0.5">
                        {facet.blurb}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "10+", label: "Years in design" },
                { value: "16", label: "Enterprise clients" },
                { value: "3", label: "Languages" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card rounded-2xl p-5 text-center"
                >
                  <p className="font-headline text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: skills, career */}
          <div className="space-y-6">
            <Toolkit />

            {/* Career path: timeline with gradient spine */}
            <div className="card rounded-3xl p-6">
              <h3 className="text-xs text-accent tracking-widest uppercase mb-5">
                Career Path
              </h3>
              <div className="relative pl-6">
                <span
                  aria-hidden
                  className="absolute left-[7px] top-1.5 bottom-1.5 w-px bg-border"
                />
                <ul className="space-y-4">
                  {career.map((job) => (
                    <li
                      key={job.period}
                      className="relative flex items-center justify-between text-sm group"
                    >
                      <span
                        aria-hidden
                        className={`absolute -left-[22px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ring-4 ring-background ${
                          job.active
                            ? "bg-green-500 animate-pulse"
                            : "bg-accent/40"
                        }`}
                      />
                      <div>
                        <span className="font-medium">{job.role}</span>
                        <span className="text-muted"> · {job.company}</span>
                      </div>
                      <span className="text-xs text-muted shrink-0 ml-3">
                        {job.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
