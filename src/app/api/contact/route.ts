import { NextResponse } from "next/server"
import { Resend } from "resend"

const apikey = process.env.RESEND_KEY
const resend = new Resend(apikey)

export async function POST(req: Request) {
  console.log(apikey)
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    const emailResult = await resend.emails.send({
      from: "Top Pro Painting <onboarding@resend.dev>",
      to: "alfredo@toppropaint.com", // Replace with your email
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    // Return success response with both email result and redirect URL
    return NextResponse.json({
      ...emailResult,
      success: true,
      redirectUrl: "/thank-you",
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email", success: false }, { status: 500 })
  }
}

