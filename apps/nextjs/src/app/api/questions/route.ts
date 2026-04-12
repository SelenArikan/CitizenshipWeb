import { NextRequest, NextResponse } from "next/server";

import { createQuestion } from "@/lib/questions";
import { getSafeLocale } from "@/lib/seo";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const question = typeof body.question === "string" ? body.question.trim() : "";
    const locale = getSafeLocale(typeof body.lang === "string" ? body.lang : "tr");
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const replyMode = body.replyMode === "private" ? "private" : "public";

    if (!question) {
      return NextResponse.json(
        { success: false, error: "question_required" },
        { status: 400 },
      );
    }

    if (replyMode === "private" && !email) {
      return NextResponse.json(
        { success: false, error: "private_email_required" },
        { status: 400 },
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "invalid_email" },
        { status: 400 },
      );
    }

    if (question.length > 2000) {
      return NextResponse.json(
        { success: false, error: "question_too_long" },
        { status: 400 },
      );
    }

    const created = createQuestion({
      name,
      email,
      phone,
      question,
      locale,
      replyMode,
    });

    return NextResponse.json({ success: true, id: created?.id ?? null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
