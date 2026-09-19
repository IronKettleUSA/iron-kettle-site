"use client";

const specs = [
  { label: "Material", value: "304 Stainless Steel — Throughout" },
  { label: "Net Weight", value: "1.62 kg / 3.57 lb" },
  { label: "Base Diameter", value: "150 mm / 5.9 in" },
  { label: "Base Thickness", value: "10 mm / 0.39 in" },
  { label: "Handle", value: "Heavy-Duty U-Style Stainless" },
  { label: "Branding", value: "Laser-Engraved Iron Kettle Mark" },
  { label: "Surface", value: "Flat Stainless Pressing Surface" },
  { label: "Construction", value: "Commercial-Grade, Built to Last" },
];

export function SpecsSection() {
  return (
    <section className="border-b border-white/10 bg-[#0e0f10] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
            The Specs
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight text-[#f4f2ee] sm:text-5xl">
            No Gimmicks. Just Steel.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-[#0e0f10] p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-[#7d7a73]">
                {spec.label}
              </p>
              <p className="mt-2 text-lg font-medium text-[#e9e7e2]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[#b8b5ad]">
          Unlike cast iron competitors, 304 stainless steel won&apos;t rust,
          won&apos;t need seasoning, and cleans up in the dishwasher. This is
          a tool built for real use — not a drawer decoration.
        </p>
      </div>
    </section>
  );
}
