import type { Persona } from "@/content/types";

export function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article className="card rounded-3xl p-6 md:p-8">
      <header className="flex items-center gap-4 mb-5">
        <div
          aria-hidden
          className="w-14 h-14 rounded-full card flex items-center justify-center font-headline text-xl text-accent"
        >
          {persona.name
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <p className="font-headline text-lg">
            {persona.name}
          </p>
          <p className="text-sm text-muted">{persona.role}</p>
        </div>
      </header>

      <p className="text-sm text-muted leading-relaxed mb-6">{persona.bio}</p>

      <div className="grid sm:grid-cols-3 gap-5">
        <PersonaList title="Needs" items={persona.needs} />
        <PersonaList title="Pain points" items={persona.painPoints} />
        <PersonaList title="Motivations" items={persona.motivations} />
      </div>
    </article>
  );
}

function PersonaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs text-accent tracking-widest uppercase mb-2">
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-foreground/80 leading-relaxed flex gap-2"
          >
            <span className="text-accent shrink-0" aria-hidden>
              ·
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
