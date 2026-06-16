import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = process.env.CONTACT_FROM_EMAIL ?? "Instituto Curvelo <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL ?? "contato@institutocurvelo.org.br";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim() || "Contato pelo site";
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet: log so the form still works in development.
    console.warn("[contact] RESEND_API_KEY not set — submission logged only:", {
      name,
      email,
      subject,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Site] ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\n${message}`,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
