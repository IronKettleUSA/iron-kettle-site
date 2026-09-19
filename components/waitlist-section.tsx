"use client";

import { WaitlistForm } from "@/components/waitlist-form";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-b border-white/10 bg-[#0e0f10] py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,90,20,0.12),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
          Limited First Run &middot; 100 Units
        </p>
        <h2 className="font-display text-4xl font-bold uppercase leading-tight text-[#f4f2ee] sm:text-5xl">
          Reserve Yours Before They&apos;re Gone.
        </h2>
        <p className="mt-6 max-w-lg text-lg text-[#b8b5ad]">
          Pre-order price locked at{" "}
          <span className="font-semibold text-[hsl(18,92%,52%)]">$44.99</span>{" "}
          — 35% off the $69.99 launch price. Ships in 3–4 weeks.
        </p>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
