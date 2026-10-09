import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseSection } from "@/components/case-study/section";
import { MetricGrid } from "@/components/case-study/metric-grid";
import { PersonaCard } from "@/components/case-study/persona-card";
import { DecisionBlock } from "@/components/case-study/decision-block";
import { CaseImage } from "@/components/case-study/case-image";
import { CaseNav } from "@/components/case-study/case-nav";
import { caseStudies, caseStudySlugs } from "@/content/case-studies";
import type { CaseSlug } from "@/content/types";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

function assertSlug(value: string): asserts value is CaseSlug {
  if (!caseStudySlugs.includes(value as CaseSlug)) notFound();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  assertSlug(slug);
  const s = caseStudies[slug];
  return {
    title: `${s.title} · Stephanie Michelfelder`,
    description: s.shortDescription,
    openGraph: {
      title: `${s.title} · Stephanie Michelfelder`,
      description: s.shortDescription,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  assertSlug(slug);
  const study = caseStudies[slug];

  return (
    <>
      <Header />
      <main>
        <CaseHero study={study} />

        <CaseSection eyebrow="Context" title="The problem">
          <p className="text-lg text-muted leading-relaxed">{study.context}</p>
          <div className="mt-6">
            <MetricGrid metrics={study.metrics} />
          </div>
        </CaseSection>

        <CaseSection eyebrow="Objectives" title="What we set out to do">
          <ul className="grid sm:grid-cols-2 gap-3">
            {study.objectives.map((obj) => (
              <li
                key={obj}
                className="card rounded-2xl p-4 flex items-start gap-3"
              >
                <span
                  aria-hidden
                  className="mt-0.5 w-5 h-5 rounded-full card flex items-center justify-center text-accent text-xs font-bold shrink-0"
                >
                  ✓
                </span>
                <span className="text-sm leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection eyebrow="Strategy & scoping" title="How I framed the work">
          <div className="card rounded-3xl p-6 md:p-8">
            <p className="text-base text-muted leading-relaxed">
              {study.scoping}
            </p>
          </div>
        </CaseSection>

        <CaseSection eyebrow="Constraints" title="What made it hard">
          <ul className="space-y-3">
            {study.challenges.map((ch) => (
              <li
                key={ch}
                className="card rounded-2xl p-4 flex items-start gap-3 text-sm leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-1 w-2 h-2 rounded-full bg-accent-warm shrink-0"
                />
                <span>{ch}</span>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection eyebrow="Research" title="What we learned">
          {study.research.quantitative && (
            <>
              <MetricGrid metrics={study.research.quantitative} />
              {study.research.quantitativeNote && (
                <p className="text-sm text-muted italic mt-4">
                  {study.research.quantitativeNote}
                </p>
              )}
            </>
          )}
          <div className="card rounded-3xl p-6 md:p-8 mt-6">
            <p className="text-xs text-accent tracking-widest uppercase mb-3">
              Qualitative insight
            </p>
            <p className="text-base text-muted leading-relaxed">
              {study.research.qualitative}
            </p>
          </div>

          {study.research.personas && study.research.personas.length > 0 && (
            <div className="space-y-5 mt-6">
              <p className="text-xs text-accent tracking-widest uppercase">
                Personas
              </p>
              {study.research.personas.map((p) => (
                <PersonaCard key={p.name} persona={p} />
              ))}
            </div>
          )}
        </CaseSection>

        <CaseSection eyebrow="Process" title="How it came together">
          <div className="space-y-8">
            {study.process.map((step, i) => (
              <div key={step.title} className="grid md:grid-cols-[auto_1fr] gap-6">
                <div className="md:w-14 shrink-0">
                  <span className="font-headline text-3xl">
                    0{i + 1}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-xl">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.body}</p>
                  {step.image && (
                    <CaseImage {...step.image} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection eyebrow="Design decisions" title="Calls I made, and their cost">
          <div className="space-y-5">
            {study.decisions.map((d) => (
              <DecisionBlock key={d.decision} decision={d} />
            ))}
          </div>
        </CaseSection>

        <CaseSection eyebrow="Solution" title="What shipped">
          <div className="space-y-10">
            {study.solution.map((s) => (
              <div key={s.title} className="space-y-4">
                <h3 className="font-headline text-xl">
                  {s.title}
                </h3>
                <p className="text-muted leading-relaxed">{s.description}</p>
                <CaseImage {...s.image} caption={s.caption} />
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection eyebrow="Impact" title="Outcomes">
          <MetricGrid metrics={study.outcomes} />
        </CaseSection>

        <CaseSection eyebrow="Reflections" title="What I learned">
          <div className="card rounded-3xl p-6 md:p-8">
            <p className="text-base text-muted leading-relaxed">
              {study.reflections}
            </p>
          </div>
        </CaseSection>

        <CaseNav next={study.next} />
      </main>
      <Footer />
    </>
  );
}
