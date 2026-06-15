export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-foreground text-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-light/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono text-accent-light tracking-widest uppercase mb-6">
            Let&apos;s get in touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Seeking a strategic role
            <br />
            where I can shape
            <br />
            product decisions.
          </h2>
          <p className="text-lg opacity-70 mb-10 max-w-lg mx-auto">
            Looking for my next role leading product design at an AI-first
            company. Not just designing — shaping what gets built and why.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:stephanie.michelfelder@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium text-lg hover:bg-accent-light transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.5 6.5L9.03 10.88a1.67 1.67 0 001.94 0L17.5 6.5M4.17 15.83h11.66a1.67 1.67 0 001.67-1.66V5.83a1.67 1.67 0 00-1.67-1.66H4.17a1.67 1.67 0 00-1.67 1.66v8.34a1.67 1.67 0 001.67 1.66z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Say hello
            </a>
            <a
              href="https://linkedin.com/in/stephanie-michelfelder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-background/20 font-medium text-lg hover:bg-background/10 transition-colors"
            >
              LinkedIn
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
