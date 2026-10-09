import type { ReactNode } from "react";

export function CaseSection({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="text-sm text-accent tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
        <h2 className="font-headline text-3xl sm:text-4xl mb-8">
          {title}
        </h2>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
