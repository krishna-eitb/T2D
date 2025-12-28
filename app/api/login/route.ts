// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import Admin from "@/models/Admin";
// import { signToken } from "@/lib/auth";

// export async function POST(req: NextRequest) {
//   await dbConnect();
//   const { username, password } = await req.json();

//   const admin = await Admin.findOne({ username });
//   if (!admin) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

//   const isValid = await admin.comparePassword(password);
//   if (!isValid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

//   const token = signToken({ id: admin._id, username: admin.username });

//   return NextResponse.json({ token, username: admin.username });
// }
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  await dbConnect();
  const { username, password } = await req.json();

  const admin = await Admin.findOne({ username });
  if (!admin) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: admin._id, username: admin.username },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  const response = NextResponse.json({ success: true });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
