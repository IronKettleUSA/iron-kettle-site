"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface InfoPageShellProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function InfoPageShell({ eyebrow, title, children }: InfoPageShellProps) {
  return (
    <main className="min-h-screen bg-[#0a0b0c]">
      <Navbar />
      <section className="border-b border-white/10 pb-20 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(18,92%,52%)]">
            {eyebrow}
          </p>
          <h1 className="mb-10 font-display text-4xl font-bold uppercase leading-tight text-[#f4f2ee] sm:text-5xl">
            {title}
          </h1>
          <div className="space-y-6 text-base leading-relaxed text-[#b8b5ad] [&_a]:text-[hsl(18,92%,52%)] [&_a]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-[#e9e7e2] [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-[#e9e7e2]">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
