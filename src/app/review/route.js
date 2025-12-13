import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const { stars, review } = await req.json();

    if (!stars || !review) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "reviews.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    const reviews = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    reviews.push({
      stars,
      review,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
