import Image from "next/image";
import Link from "next/link";
import { caseStudyList } from "@/content/case-studies";
import { publicFileExists } from "@/components/case-study/case-image";

export function Projects() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="font-headline text-4xl sm:text-5xl">
            Selected Cases
          </h2>
        </div>

        <div className="grid gap-8">
          {caseStudyList.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="project-card group relative rounded-3xl card overflow-hidden block"
            >
              <article>
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                  <div className="p-8 md:p-10 flex flex-col justify-between min-h-[300px] relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="text-xs text-muted chip px-2.5 py-1 rounded-full">
                          {project.year}
                        </span>
                        <span className="h-px flex-1 bg-border" />
                        <span className="text-xs text-accent font-medium">
                          {project.company}
                        </span>
                      </div>
                      <h3 className="font-headline text-2xl sm:text-3xl mb-4 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="text-xs text-muted">
                        {project.tags.join(" · ")}
                      </p>
                      <dl className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                        {project.metrics.slice(0, 3).map((metric) => (
                          <div key={metric.label}>
                            <dd className="font-headline text-2xl sm:text-3xl">
                              {metric.value}
                            </dd>
                            <dt className="text-xs text-muted mt-1 leading-snug">
                              {metric.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                        View case study
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                          <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div
                    className={`relative bg-background md:border-l border-border project-image overflow-hidden min-h-[300px] flex items-center justify-center`}
                  >
                    {publicFileExists(project.thumbnail.src) ? (
                      <div className="absolute top-10 left-10 right-0 bottom-0 rounded-tl-xl overflow-hidden border-t border-l border-border transition-transform duration-500 group-hover:scale-[1.02] origin-top-left">
                        <Image
                          src={project.thumbnail.src}
                          alt={project.thumbnail.alt}
                          fill
                          sizes="(min-width: 768px) 640px, 100vw"
                          className="object-cover object-left-top"
                        />
                      </div>
                    ) : (
                      <div className="text-center p-6">
                        <p className="text-xs text-accent/80 tracking-widest uppercase mb-2">
                          {project.role.split(" (")[0]}
                        </p>
                        <p className="font-headline text-2xl text-accent">
                          {project.subtitle}
                        </p>
                        <p className="text-xs text-muted mt-3">
                          Replace with {project.thumbnail.src}
                        </p>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
