import { CountUp } from "@/components/count-up";

const stats = [
  { prefix: "", value: 10, suffix: "+", label: "Years of experience" },
  { prefix: "−", value: 20, suffix: "%", label: "Feature dev time" },
  { prefix: "", value: 16, suffix: "", label: "Enterprise clients" },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <p className="text-xl sm:text-2xl text-muted animate-fade-up stagger-1">
            👋 Hey there, I&apos;m{" "}
            <span className="font-headline text-foreground">Steph</span>!
          </p>

          <h1 className="mt-4 font-headline text-5xl sm:text-6xl md:text-7xl leading-[1] animate-fade-up stagger-1">
            <span className="text-accent">AI-native</span>
            <br />
            Product Designer.
          </h1>

          <dl className="mt-12 grid grid-cols-3 max-w-2xl border-t border-border animate-fade-up stagger-2">
            {stats.map((stat) => (
              <div key={stat.label} className="pt-6 pr-4">
                <dd className="font-headline text-4xl sm:text-5xl tabular-nums">
                  {stat.prefix}
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </dd>
                <dt className="mt-2 text-xs font-medium tracking-widest uppercase text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <p className="mt-12 text-lg text-muted max-w-xl leading-relaxed animate-fade-up stagger-3">
            I&apos;m a product designer in Barcelona. I take features from
            scoping and requirements all the way to production React, and I
            design the AI features at the core of the product. No handoff in
            between.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up stagger-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium transition-opacity hover:opacity-85"
            >
              View my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/Stephanie-Michelfelder-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full chip font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
