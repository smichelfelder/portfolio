import type { Decision } from "@/content/types";

export function DecisionBlock({ decision }: { decision: Decision }) {
  return (
    <article className="card rounded-3xl p-6 md:p-8">
      <h3 className="font-headline text-xl mb-5">
        {decision.decision}
      </h3>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <p className="text-xs text-accent tracking-widest uppercase mb-2">
            Rationale
          </p>
          <p className="text-sm text-muted leading-relaxed">
            {decision.rationale}
          </p>
        </div>
        <div>
          <p className="text-xs text-accent-warm tracking-widest uppercase mb-2">
            Trade-off
          </p>
          <p className="text-sm text-muted leading-relaxed">
            {decision.tradeoff}
          </p>
        </div>
      </div>
    </article>
  );
}
