import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { name, email, subject, message } = req.body || {};

	// Backend validations
	if (!name || name.trim().length < 2) {
		return res
			.status(400)
			.json({ message: "Name must be at least 2 characters." });
	}

	if (!email || !EMAIL_REGEX.test(email)) {
		return res
			.status(400)
			.json({ message: "Provided email is not valid." });
	}

	if (!subject || subject.trim().length < 3) {
		return res
			.status(400)
			.json({ message: "Subject must be at least 3 characters." });
	}

	if (!message || message.trim().length < 10) {
		return res
			.status(400)
			.json({ message: "Message must be at least 10 characters." });
	}

	try {
		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			return res.status(500).json({
				message: "Missing RESEND_API_KEY environment variable.",
			});
		}

		const resend = new Resend(apiKey);
		const toEmail =
			process.env.CONTACT_RECIPIENT_EMAIL ||
			"latepassenger.music@outlook.com";
		const fromEmail =
			process.env.RESEND_FROM_EMAIL ||
			"EuroWave Nights <onboarding@resend.dev>";

		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			replyTo: email.trim(),
			subject: `[EuroWave Nights] ${subject.trim()}`,
			html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #070A16; color: #F2F6FF; padding: 32px; border-radius: 8px; border: 1px solid #36508A;">
          <h2 style="color: #4EA1FF; margin: 0 0 16px 0;">New Contact Transmission</h2>
          <hr style="border: 0; border-top: 1px solid #36508A; margin: 16px 0;" />
          <p><strong>Name / Callsign:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}" style="color: #FF5FBF; text-decoration: none;">${email.trim()}</a></p>
          <p><strong>Subject:</strong> ${subject.trim()}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 16px; background-color: #111B36; border-left: 4px solid #FF5FBF; border-radius: 4px; white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
          <p style="font-size: 11px; color: #8A9AC8; margin-top: 24px;">TIMESTAMP: ${new Date().toUTCString()} | TRANSMISSION: SECURE</p>
        </div>
      `,
		});

		if (error) {
			console.error("Resend delivery error:", error);
			return res.status(400).json({ message: error.message });
		}

		return res.status(200).json({
			success: true,
			message: "Message sent successfully.",
			id: data?.id,
		});
	} catch (error) {
		console.error("Server error:", error);
		return res
			.status(500)
			.json({ message: "An error occurred while sending the email." });
	}
}
