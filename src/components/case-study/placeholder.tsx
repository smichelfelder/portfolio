export function Placeholder({
  w,
  h,
  label,
  caption,
}: {
  w: number;
  h: number;
  label: string;
  caption?: string;
}) {
  const aspect = `${w} / ${h}`;
  return (
    <figure className="space-y-3">
      <div
        className="card rounded-2xl relative overflow-hidden"
        style={{ aspectRatio: aspect }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-xs text-accent tracking-widest uppercase mb-2">
              Image placeholder
            </p>
            <p className="text-sm text-muted">{label}</p>
            <p className="text-xs text-muted/70 mt-2">
              {w} × {h}
            </p>
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted italic text-center">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
