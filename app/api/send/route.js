import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "The contact form is currently paused." },
    { status: 503 }
  );
}
