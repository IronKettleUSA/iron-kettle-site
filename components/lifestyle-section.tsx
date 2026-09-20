"use client";

export function LifestyleSection() {
  return (
    <section className="border-b border-white/10 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
            Built For It
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-[#f4f2ee] sm:text-5xl">
            Crispy, Edge-to-Edge Crust.
            <br />
            Every Single Time.
          </h2>
          <p className="mt-6 max-w-md text-lg text-[#b8b5ad]">
            The weight does the work. Drop your ball of beef on a screaming
            hot griddle, press down, and let 3.57 lbs of solid stainless steel
            deliver the sear real smash burgers are known for.
          </p>
          <ul className="mt-8 space-y-3 text-[#e9e7e2]">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18,92%,52%)]" />
              Works on grills, griddles, cast iron, and flat tops
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18,92%,52%)]" />
              Doubles as a grill weight for bacon and pressed sandwiches
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(18,92%,52%)]" />
              Rust-resistant stainless — hand wash recommended, zero seasoning
            </li>
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src="https://g.tlcdn.com/gen/c9cf3892fc4745dfb5bd53539ef583c2.png"
            alt="Iron Kettle burger press in use, searing a smash burger"
            className="w-full rounded-md border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
