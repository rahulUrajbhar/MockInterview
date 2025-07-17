// app/api/auth/check/route.ts
import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/actions/auth.action";

export async function GET() {
  const isUserAuth = await isAuthenticated();
  return NextResponse.json({ isUserAuth });
}
