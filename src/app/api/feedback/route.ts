import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, rating, feedback } = data ?? {};

    if (!name || !email || !feedback || typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Invalid or missing fields" }, { status: 400 });
    }

    // TODO: Persist feedback or send notification
    console.log("FEEDBACK_FORM", { name, email, rating, feedback });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export function GET() {
  return NextResponse.json({ message: "Use POST to submit feedback" });
}