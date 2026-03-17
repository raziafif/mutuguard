import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.VERCEL) {
    return NextResponse.json({ requests: [] });
  }
  try {
    const { getAllDemoRequests } = await import("@/lib/db");
    const requests = getAllDemoRequests();
    return NextResponse.json({ requests });
  } catch {
    return NextResponse.json({ requests: [] });
  }
}
