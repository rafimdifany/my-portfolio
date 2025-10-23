import { NextResponse } from "next/server";

type AnalyticsRequest = {
  name: string;
  payload?: Record<string, unknown>;
  timestamp?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as AnalyticsRequest;

  if (!body?.name) {
    return NextResponse.json({ error: "Missing event name" }, { status: 400 });
  }

  console.info("[analytics]", body);

  return NextResponse.json({ received: true }, { status: 202 });
}
