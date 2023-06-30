import { NextResponse } from "next/server";
import { schema } from "./validator";

export async function GET() {
  return NextResponse.json({
    message: "Hello dolly!! This is a GET request",
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    await schema.validate(body);
    return NextResponse.json({
      message: "Hello dolly!! This is a POST request",
      body,
    });
  } catch (error) {
    return NextResponse.json(error, { status: 403 });
  }
}
