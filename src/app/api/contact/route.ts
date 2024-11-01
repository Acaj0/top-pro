import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend('re_FyGTW6MZ_59XgkERja6wQJpWEh8p3gx42')

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, service, message } = body

    const data = await resend.emails.send({
      from: "Top Pro Painting <onboarding@resend.dev>",
      to: "acaj007.games@gmail.com", // Replace with your email
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

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}