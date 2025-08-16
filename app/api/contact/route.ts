import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "blizzard.mxrouting.net",
  port: Number.parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // Use SSL
  auth: {
    user: process.env.SMTP_USER || process.env.EMAIL_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, project, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Admin email
    const adminMailOptions = {
      from: `"Axora Web Solution" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `🚀 New Project Inquiry - ${project || "General Inquiry"}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    }

    // Auto-reply email to customer
    const customerMailOptions = {
      from: `"Axora Web Solution" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Axora Web Solution! 🚀",
      html: `<p>Dear ${name},</p><p>Thank you for reaching out! We will contact you soon.</p>`,
    }

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
    ])

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: `failed to send email${error}` }, { status: 500 })
  }
}
