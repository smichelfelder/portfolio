import Link from "next/link";

export function CaseNav({
  next,
}: {
  next: { slug: string; title: string };
}) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <Link
          href={`/work/${next.slug}`}
          className="card group block rounded-3xl p-8 md:p-10 transition-all hover:-translate-y-1"
        >
          <p className="text-sm text-accent tracking-widest uppercase mb-3">
            Next case study
          </p>
          <p className="font-headline text-2xl sm:text-3xl flex items-center gap-3 group-hover:text-accent">
            {next.title}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-2"
            >
              →
            </span>
          </p>
        </Link>
      </div>
    </section>
  );
}
