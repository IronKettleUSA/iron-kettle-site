"use client";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-24">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,90,20,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6))]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="rise">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
            First Run &middot; Limited to 100 Units
          </p>
          <h1 className="font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-[#f4f2ee] sm:text-6xl lg:text-7xl">
            This Ain&apos;t Your Mama&apos;s
            <br />
            <span className="text-[hsl(18,92%,52%)]">Burger Press.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#b8b5ad]">
            Heavy. Rugged. Made from 304 stainless steel. Built for years of
            cookouts, with a crispy, edge-to-edge smash-burger crust every
            time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="font-display text-2xl font-bold text-[#6b6862] line-through">
              $69.99
            </span>
            <span className="font-display text-4xl font-bold text-[hsl(18,92%,52%)]">
              $44.99
            </span>
            <span className="rounded-sm bg-[hsl(18,70%,38%)]/20 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-[hsl(18,92%,52%)]">
              First-Run Reservation Price
            </span>
          </div>

          <div className="mt-8">
            <a
              href="#waitlist"
              className="ember-glow inline-block rounded-sm bg-[hsl(18,92%,52%)] px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-[#0a0b0c] transition-transform hover:scale-[1.02]"
            >
              Reserve Your First-Run Press &rarr;
            </a>
            <p className="mt-3 text-sm text-[#7d7a73]">
              No payment today. We&apos;ll email you before the first
              production run ships.
            </p>
          </div>
        </div>

        <div className="relative rise" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 rounded-lg bg-[hsl(18,92%,52%)]/10 blur-3xl" />
          <img
            src="https://g.tlcdn.com/gen/c57a7eb43a2d4449856bcb1d0245a0bb.png"
            alt="Iron Kettle USA stainless steel burger press"
            className="relative w-full rounded-md border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
