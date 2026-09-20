"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0b0c]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-wide text-[#e9e7e2] transition-opacity hover:opacity-80"
        >
          IRON KETTLE <span className="text-[hsl(18,92%,52%)]">USA</span>
        </Link>
        <a
          href="/#waitlist"
          className="rounded-sm border border-[hsl(18,92%,52%)] px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-[hsl(18,92%,52%)] transition-colors hover:bg-[hsl(18,92%,52%)] hover:text-[#0a0b0c]"
        >
          Reserve Now
        </a>
      </div>
    </header>
  );
}
