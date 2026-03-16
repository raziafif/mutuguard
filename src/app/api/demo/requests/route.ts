import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getAllDemoRequests } = await import("@/lib/db");
    const requests = getAllDemoRequests();
    return NextResponse.json({ requests });
  } catch {
    return NextResponse.json({ requests: [] });
  }
}
