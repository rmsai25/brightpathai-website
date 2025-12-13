// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, phone, message } = await req.json();

//     if (!process.env.RESEND_API_KEY) {
//       throw new Error("RESEND_API_KEY is missing in .env.local");
//     }

//     await resend.emails.send({
//       from: "Brightpath AI <onboarding@resend.dev>",

//       // ✅ THIS MUST BE YOUR *RESEND SIGNUP EMAIL*
//       to: ["brightpathai.in@gmail.com"],

//       subject: "New Website Contact Message",
//       html: `
//         <h2>New Contact Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone || "Not provided"}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error("RESEND ERROR:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }





// ---------------------
import { Resend } from "resend";

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body || {};

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Read API key ONLY at runtime
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Do NOT crash build — return runtime error instead
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500 }
      );
    }

    // Create Resend client lazily (safe)
    const resend = new Resend(apiKey);

    // Send email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your-email@example.com"], // 🔁 replace with your email
      subject: `New Contact Message from ${name}`,
      reply_to: email,
      html: `
        <h3>New Get In Touch Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Get-in-touch error:", error);

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
