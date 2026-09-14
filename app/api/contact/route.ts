import { NextRequest, NextResponse } from "next/server";
import { ContactFormData } from "@/types/contact";
import { validateContactForm } from "@/helpers/form.helpers";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.success) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body: ContactFormData = await req.json();
    const errors = validateContactForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(body);
    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
