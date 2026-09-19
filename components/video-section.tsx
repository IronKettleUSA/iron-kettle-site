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
            src="https://g.tlcdn.com/gen/3b76feaef73d404fa94f0f5db5652841.mp4"
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
