import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] blob bg-accent/10 blur-[80px] animate-float" />
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] blob-2 bg-accent-warm/10 blur-[80px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-light/5 blur-[60px] animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <div className="relative">
                <Image
                  src="/profile.png"
                  alt="Stephanie Michelfelder"
                  width={64}
                  height={64}
                  className="rounded-full ring-2 ring-accent/30 ring-offset-2 ring-offset-background"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div>
                <p className="font-display text-base font-bold">
                  Stephanie Michelfelder
                </p>
                <p className="text-sm font-mono text-accent">
                  Lead Product Designer
                </p>
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.92] tracking-tight animate-fade-up stagger-1">
              I design
              <br />
              <span className="gradient-text">AI-first</span>
              <br />
              products.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-muted max-w-xl leading-relaxed animate-fade-up stagger-2">
              10+ years shipping digital products end-to-end. From scoping to
              production-ready React. Currently driving AI-first design at{" "}
              <span className="text-foreground font-medium">Workerbase</span>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up stagger-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:shadow-lg hover:shadow-accent/25 transition-all hover:-translate-y-0.5"
              >
                View my work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full glass font-medium hover:bg-accent/10 transition-all"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted animate-fade-up stagger-4">
              <span className="glass px-3 py-1 rounded-full text-xs font-medium">
                Barcelona, Spain
              </span>
              <span className="glass px-3 py-1 rounded-full text-xs font-medium">
                EN / ES / DE
              </span>
              <span className="glass px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </span>
            </div>
          </div>

          <div className="hidden lg:block relative animate-fade-in stagger-2">
            <div className="relative">
              {/* Decorative ring behind the image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-warm/20 blur-xl animate-glow" />
              <div className="relative glass rounded-3xl p-3 overflow-hidden">
                <Image
                  src="/projects/hero.png"
                  alt="Portfolio preview"
                  width={781}
                  height={1540}
                  className="w-full h-auto max-h-[65vh] object-contain object-top rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
