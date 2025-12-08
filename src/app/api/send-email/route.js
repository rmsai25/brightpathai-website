import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Brightpath AI Contact" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL, 
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
