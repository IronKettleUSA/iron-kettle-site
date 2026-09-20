"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Loader2, Check } from "lucide-react";

export function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName, zipCode }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 rounded-md border border-[hsl(18,92%,52%)]/40 bg-[hsl(18,92%,52%)]/10 px-6 py-5 font-display text-lg font-semibold text-[hsl(18,92%,52%)]">
        <Check className="h-5 w-5" />
        You&apos;re on the list. We&apos;ll email you the second it launches.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Input
          type="text"
          required
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="h-14 border-white/20 bg-[#0a0b0c] text-base text-[#e9e7e2] placeholder:text-[#6b6862] focus-visible:ring-[hsl(18,92%,52%)]"
        />
        <Input
          type="text"
          required
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="h-14 border-white/20 bg-[#0a0b0c] text-base text-[#e9e7e2] placeholder:text-[#6b6862] focus-visible:ring-[hsl(18,92%,52%)]"
        />
      </div>
      <div className="mt-3">
        <Input
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 border-white/20 bg-[#0a0b0c] text-base text-[#e9e7e2] placeholder:text-[#6b6862] focus-visible:ring-[hsl(18,92%,52%)]"
        />
      </div>
      <div className="mt-3">
        <Input
          type="text"
          inputMode="numeric"
          placeholder="Shipping zip code (optional)"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="h-14 border-white/20 bg-[#0a0b0c] text-base text-[#e9e7e2] placeholder:text-[#6b6862] focus-visible:ring-[hsl(18,92%,52%)]"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="ember-glow mt-3 flex h-14 w-full items-center justify-center rounded-sm bg-[hsl(18,92%,52%)] px-8 font-display text-sm font-bold uppercase tracking-wider text-[#0a0b0c] transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          "Reserve Mine"
        )}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
