import { NextResponse } from "next/server";
import { seedAdmins } from "@/lib/seedAdmins";

export async function GET() {
  await seedAdmins();
  return NextResponse.json({ success: true });
}
