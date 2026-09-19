"use client";

export function StarterKitTeaser() {
  return (
    <section className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
          Coming Soon
        </p>
        <h2 className="font-display text-4xl font-bold uppercase leading-tight text-[#f4f2ee] sm:text-5xl">
          The Iron Kettle Starter Kit
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#b8b5ad]">
          Our burger press, paired with our own small-batch homemade beef
          tallow. Everything you need for a real smash burger — no seed oils,
          no shortcuts. Join the waitlist below to be first in line.
        </p>
        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4 rounded-md border border-dashed border-white/20 p-6">
          <div className="font-display text-sm uppercase tracking-widest text-[#7d7a73]">
            Press + Tallow &middot; Bundle Pricing TBA
          </div>
        </div>
      </div>
    </section>
  );
}
