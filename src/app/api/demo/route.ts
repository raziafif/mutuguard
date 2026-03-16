import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DEMO_EMAIL = "fraziafif@gmail.com";

function buildEmailHtml(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  company_size: string;
  message: string;
}): string {
  return `
    <h2>New MutuGuard Demo Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p>
    <p><strong>Company Size:</strong> ${escapeHtml(data.company_size || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message || "—").replace(/\n/g, "<br>")}</p>
    <hr>
    <p><em>Sent from MutuGuard website</em></p>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: "MutuGuard <onboarding@resend.dev>",
        to: [DEMO_EMAIL],
        replyTo: email,
        subject: `MutuGuard Demo Request - ${company}`,
        html: buildEmailHtml({ name, company, email, phone, company_size, message }),
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: error.message || "Failed to send email." },
          { status: 500 }
        );
      }
    } else {
      // Local dev without Resend: save to SQLite
      try {
        const { insertDemoRequest } = await import("@/lib/db");
        insertDemoRequest({ name, company, email, phone, company_size, message });
      } catch {
        return NextResponse.json(
          { error: "Email service not configured. Set RESEND_API_KEY for production." },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { success: true, message: "Demo request received successfully." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Demo API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { getAllDemoRequests } = await import("@/lib/db");
    const requests = getAllDemoRequests();
    return NextResponse.json({ requests });
  } catch {
    return NextResponse.json({ requests: [] });
  }
}
