import { WaitlistEntry } from "@/types";

const entries: WaitlistEntry[] = [];

export function addWaitlistEntry(
  email: string,
  firstName: string,
  lastName: string,
  zipCode?: string
): WaitlistEntry {
  const entry = {
    email,
    firstName,
    lastName,
    zipCode,
    createdAt: new Date().toISOString(),
  };
  entries.push(entry);
  return entry;
}

export function getWaitlistCount(): number {
  return entries.length;
}
