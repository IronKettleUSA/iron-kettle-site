"use client";

import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <div className="font-display text-lg font-bold tracking-wide text-[#e9e7e2]">
          IRON KETTLE <span className="text-[hsl(18,92%,52%)]">USA</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#b8b5ad] transition-colors hover:text-[hsl(18,92%,52%)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-[#6b6862]">
          &copy; {new Date().getFullYear()} Iron Kettle USA. Built for real
          cookouts.
        </p>
      </div>
    </footer>
  );
}
