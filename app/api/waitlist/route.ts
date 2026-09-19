import { NextResponse } from "next/server";
import { addWaitlistEntry, getWaitlistCount } from "@/lib/store";

export async function GET() {
  return NextResponse.json({ count: getWaitlistCount() });
}

export async function POST(request: Request) {
  const body = await request.json();
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const entry = addWaitlistEntry(email);
  return NextResponse.json({ success: true, entry }, { status: 201 });
}
