import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getAdminFromCookie() {
  const cookieStore = await cookies(); // ✅ await is REQUIRED
  const token = cookieStore.get("admin_token")?.value;

  if (!token) return null;

  try {
    return jwt.verify(token, JWT_SECRET) as {
      id: string;
      username: string;
    };
  } catch {
    return null;
  }
}
