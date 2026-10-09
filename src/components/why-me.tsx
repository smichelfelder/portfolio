import { CountUp } from "@/components/count-up";
import { career } from "@/components/about";
import { Toolkit } from "@/components/toolkit";

const results = [
  { prefix: "−", value: 20, suffix: "%", label: "Feature development time", note: "Since moving final design work into production React" },
  { prefix: "", value: 30, suffix: "+", label: "Production components", note: "Built with shadcn/ui and Tailwind, documented in Storybook" },
  { prefix: "", value: 4, suffix: "", label: "Form factors", note: "Web, mobile, tablet and an industrial smartwatch" },
];

const leadership = [
  "Share product-owner duties with the PM and help run sprints for a team of 10 engineers.",
  "Only designer on a B2B manufacturing platform with 16 enterprise clients.",
  "Led and mentored 3 designers through critiques, feedback and career growth.",
  "Ran culture at Leafnoise and helped the team take more ownership of their work.",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-accent tracking-widest uppercase mb-3">{children}</p>
  );
}

export function WhyMe() {
  return (
    <section id="why-me" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <Eyebrow>Why me</Eyebrow>
            <h2 className="font-headline text-4xl sm:text-5xl">
              Design meets <span className="text-accent">engineering.</span>
            </h2>
          </div>
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              I move between design, product strategy and code. I wireframe in
              Figma and build the final UI straight in production React, so
              there&apos;s no handoff round and features ship sooner.
            </p>
            <p>
              At <span className="text-foreground font-medium">Workerbase</span>{" "}
              I&apos;m the only designer on a B2B manufacturing platform used by
              16 enterprise clients, including{" "}
              <span className="text-foreground font-medium">
                Porsche, thyssenkrupp, Bosch and GKN
              </span>
              . I also design its AI agents and conversational interfaces.
            </p>
          </div>
        </div>

        <div>
          <Eyebrow>Results</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-5 mt-6">
            {results.map((r) => (
              <div key={r.label} className="card rounded-3xl p-8">
                <p className="font-headline text-5xl sm:text-6xl tabular-nums">
                  {r.prefix}
                  <CountUp to={r.value} />
                  {r.suffix}
                </p>
                <p className="mt-3 font-medium">{r.label}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="card rounded-3xl p-8">
            <Eyebrow>Leadership</Eyebrow>
            <ul className="mt-6 space-y-5">
              {leadership.map((item) => (
                <li key={item} className="flex gap-4 leading-relaxed">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-3xl p-8">
            <Eyebrow>Career path</Eyebrow>
            <ul className="mt-6 divide-y divide-border">
              {career.map((job) => (
                <li
                  key={job.period}
                  className="py-3 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4"
                >
                  <div>
                    <span className="font-medium">{job.role}</span>
                    <span className="text-muted"> · {job.company}</span>
                  </div>
                  <span className="text-sm text-muted shrink-0 tabular-nums">
                    {job.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Eyebrow>Toolkit</Eyebrow>
          <h2 className="font-headline text-4xl sm:text-5xl mb-10">
            What I work with.
          </h2>
          <Toolkit />
        </div>
      </div>
    </section>
  );
}
