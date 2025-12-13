// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, message } = body;

//     console.log("Request received:", body);

//     // 1️⃣ Create email transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "brightpathai.in@gmail.com",           // <-- replace
//         pass: "BP2025@ai",              // <-- replace (Gmail app password)
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: "team@bpai.in",                     
//       subject: "New Request Access Message",
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     });

//     return NextResponse.json({ ok: true }, { status: 200 });

//   } catch (err) {
//     console.error("Email error:", err);
//     return NextResponse.json({ error: "server error", details: err.message }, { status: 500 });
//   }
// }
    


import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, company, email, usecase } = await req.json();

    // ✅ Verify ENV is loaded
    if (!process.env.MY_EMAIL || !process.env.MY_EMAIL_PASSWORD) {
      throw new Error("Email environment variables not set");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    // ✅ Will throw Gmail auth errors clearly
    await transporter.verify();

    await transporter.sendMail({
      from: `"Brightpath AI" <${process.env.MY_EMAIL}>`,
      to: "team@bpai.in",
      subject: "New Request Access Submission",
      html: `
        <h2>New Request Access Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Use Case:</strong> ${usecase}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
