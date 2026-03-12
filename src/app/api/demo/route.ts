import { NextRequest, NextResponse } from "next/server";
import { insertDemoRequest, getAllDemoRequests } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, company_size, message } = body;

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    insertDemoRequest({ name, company, email, phone, company_size, message });

    return NextResponse.json(
      { success: true, message: "Demo request received successfully." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const requests = getAllDemoRequests();
    return NextResponse.json({ requests });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
