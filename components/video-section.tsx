"use client";

export function VideoSection() {
  return (
    <section className="border-b border-white/10 bg-[#0e0f10] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
          See It Work
        </p>
        <h2 className="mx-auto mb-12 max-w-2xl font-display text-4xl font-bold uppercase leading-tight text-[#f4f2ee] sm:text-5xl">
          Real Sear. Real Sizzle. Real Iron.
        </h2>

        <div className="mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-md border border-white/10 shadow-2xl">
          <video
            src="https://g.tlcdn.com/gen/05f1d52607b44040bbb6d8b6d7b16e9c.mp4"
            poster="https://g.tlcdn.com/gen/c596e3e47d5d410dbc284c055fb19c2d.png"
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
