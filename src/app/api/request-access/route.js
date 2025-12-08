import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("Request received:", body);

    // 1️⃣ Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",           // <-- replace
        pass: "YOUR_APP_PASSWORD",              // <-- replace (Gmail app password)
      },
    });

    await transporter.sendMail({
      from: email,
      to: "team@bpai.in",                     
      subject: "New Request Access Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "server error", details: err.message }, { status: 500 });
  }
}
