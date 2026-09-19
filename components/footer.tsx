"use client";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="font-display text-lg font-bold tracking-wide text-[#e9e7e2]">
          IRON KETTLE <span className="text-[hsl(18,92%,52%)]">USA</span>
        </div>
        <p className="text-sm text-[#6b6862]">
          &copy; {new Date().getFullYear()} Iron Kettle USA. Built for real
          cookouts.
        </p>
      </div>
    </footer>
  );
}
