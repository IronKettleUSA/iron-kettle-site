import { NextResponse } from "next/server";
import { addWaitlistEntry, getWaitlistCount } from "@/lib/store";

const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwNq37tWFhAiaV-JStCPg7nzyE7KKBuB4NVpIfM1FMHFJtlEjswh4iQGgy4tMBHzJl0/exec";

export async function GET() {
  return NextResponse.json({ count: getWaitlistCount() });
}

export async function POST(request: Request) {
  const body = await request.json();
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body?.lastName === "string" ? body.lastName.trim() : "";
  const zipCode = typeof body?.zipCode === "string" ? body.zipCode.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!firstName || !lastName) {
    return NextResponse.json(
      { error: "First and last name required" },
      { status: 400 }
    );
  }

  // Keep a local record as a fallback (non-durable, but harmless).
  const entry = addWaitlistEntry(email, firstName, lastName, zipCode || undefined);

  // Send to the Google Sheet + email notification via Apps Script.
  try {
    await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstName, lastName, zipCode }),
    });
  } catch (err) {
    console.error("Failed to forward waitlist entry to Google Sheet:", err);
  }

  return NextResponse.json({ success: true, entry }, { status: 201 });
}
