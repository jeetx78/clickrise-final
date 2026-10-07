import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, need, message } = body ?? {};
    if (!name || !email) return NextResponse.json({ error: "Name and email are required." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "admin@clickriseproductions.com";
    if (!apiKey) return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });

    const html = `<div style="font-family:Arial,sans-serif;line-height:1.6"><h2>New ClickRise enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p><p><strong>Service:</strong> ${escapeHtml(need || "—")}</p><p><strong>Message:</strong><br/>${escapeHtml(message || "—").replace(/\n/g,"<br/>")}</p></div>`;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "ClickRise Website <onboarding@resend.dev>", to: [to], reply_to: email, subject: `New ClickRise enquiry${need ? ` — ${need}` : ""}`, html }),
    });
    if (!response.ok) {
  const errorText = await response.text();

  console.error("RESEND ERROR:", errorText);

  return NextResponse.json(
    {
      error: "Email provider rejected the message.",
      details: errorText,
    },
    { status: 502 }
  );
}
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Unable to process enquiry." }, { status: 500 }); }
}

function escapeHtml(value: unknown) {
  return String(value).replace(/[&<>'"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[c] || c));
}
