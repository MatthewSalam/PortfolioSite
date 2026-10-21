import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const initial = escapeHtml((Array.from(name.trim())[0] || "?").toUpperCase());
  const preview = escapeHtml(message.replace(/\s+/g, " ").slice(0, 90));
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    "Re: Your message on my portfolio"
  )}`;
  const receivedAt = new Date().toLocaleString("en-NG", {
    timeZone: "Africa/Lagos",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New portfolio message</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${safeName}: ${preview}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f4f5" style="background:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;border:1px solid #e4e4e7;border-radius:16px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

          <!-- Header -->
          <tr>
            <td bgcolor="#0a0a0a" style="background:#0a0a0a;padding:28px 32px;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#a1a1aa;">
                Portfolio &middot; New message
              </p>
              <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:700;color:#ffffff;">
                You have a new message
              </h1>
            </td>
          </tr>

          <!-- Sender -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" height="48" align="center" valign="middle" bgcolor="#0a0a0a" style="width:48px;height:48px;background:#0a0a0a;border-radius:50%;color:#ffffff;font-size:20px;font-weight:700;line-height:48px;">
                    ${initial}
                  </td>
                  <td style="padding-left:14px;">
                    <p style="margin:0;font-size:17px;font-weight:700;color:#18181b;">${safeName}</p>
                    <p style="margin:2px 0 0;font-size:14px;">
                      <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:20px 32px 8px;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#71717a;">
                Message
              </p>
              <div style="background:#f4f4f5;border-left:3px solid #0a0a0a;border-radius:6px;padding:16px 20px;font-size:15px;line-height:1.65;color:#27272a;white-space:pre-wrap;">${safeMessage}</div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td style="padding:24px 32px 32px;">
              <a href="${replyHref}" style="display:inline-block;background:#0a0a0a;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:999px;">
                Reply to ${safeName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#fafafa" style="background:#fafafa;border-top:1px solid #e4e4e7;padding:18px 32px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#71717a;">
                Received ${escapeHtml(receivedAt)} (WAT) &middot; Sent from your portfolio contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { error: "Contact form isn't configured yet. Please email me directly." },
        { status: 500 }
      );
    }

    const { name, email, message, website } = await req.json();

    // Honeypot: pretend success so bots don't retry
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const cleanName = name.trim().replace(/\s+/g, " ");

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `New portfolio message from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${email}\n\n${message}`,
      html: buildHtml({ name: cleanName, email: email.trim(), message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}