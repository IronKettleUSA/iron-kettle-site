import { WaitlistEntry } from "@/types";

const entries: WaitlistEntry[] = [];

export function addWaitlistEntry(email: string): WaitlistEntry {
  const entry = { email, createdAt: new Date().toISOString() };
  entries.push(entry);
  return entry;
}

export function getWaitlistCount(): number {
  return entries.length;
}
