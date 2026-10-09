import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { CaseImage, publicFileExists } from "./case-image";

export function CaseHero({ study }: { study: CaseStudy }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        <div className="mb-8">
          <Link
            href="/#work"
            className="text-sm text-accent tracking-widest uppercase link-hover inline-flex items-center gap-2"
          >
            <span aria-hidden>←</span> Back to work
          </Link>
        </div>

        <p className="text-sm text-accent tracking-widest uppercase mb-3">
          {study.company} · {study.year}
        </p>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl leading-[1] mb-6">
          {study.title}
          <br />
          <span className="text-accent">{study.subtitle}</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mb-10">
          {study.tagline}
        </p>

        <div className="card rounded-3xl p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          <Meta label="Role" value={study.role} />
          <Meta label="Duration" value={study.duration} />
          <Meta label="Team" value={study.team} />
          <Meta label="Company" value={study.company} />
        </div>

        <CaseImage
          {...study.heroImage}
          caption={
            publicFileExists(study.heroImage.src)
              ? undefined
              : `Hero image: replace at ${study.heroImage.src}`
          }
          eager
        />

        <div className="flex flex-wrap gap-2 mt-8">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="chip text-xs font-medium px-3 py-1.5 rounded-full text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-accent tracking-widest uppercase mb-1">
        {label}
      </p>
      <p className="text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}
