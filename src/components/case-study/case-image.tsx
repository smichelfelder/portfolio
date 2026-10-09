import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Placeholder } from "./placeholder";

export function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

// Renders the image when it exists in /public, otherwise a sized placeholder.
export function CaseImage({
  src,
  alt,
  w,
  h,
  caption,
  eager,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption?: string;
  eager?: boolean;
}) {
  if (!publicFileExists(src)) {
    return <Placeholder w={w} h={h} label={alt} caption={caption} />;
  }

  return (
    <figure className="space-y-3">
      <div
        className="card rounded-2xl overflow-hidden p-1.5 mx-auto"
        style={{ maxWidth: w + 12 }}
      >
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          sizes="(min-width: 1152px) 1056px, 100vw"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="w-full h-auto rounded-xl"
        />
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted italic text-center">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
