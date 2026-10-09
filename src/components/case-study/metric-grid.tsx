import type { Metric } from "@/content/types";

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div key={m.label} className="card rounded-2xl p-5">
          <p className="font-headline text-3xl">
            {m.value}
          </p>
          <p className="text-sm font-medium mt-2">{m.label}</p>
          {m.note ? (
            <p className="text-xs text-muted mt-1 leading-relaxed">{m.note}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
