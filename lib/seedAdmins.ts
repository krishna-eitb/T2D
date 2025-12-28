import dbConnect from "./db";
import Admin from "@/models/Admin";

export async function seedAdmins() {
  await dbConnect();

  // Clean slate
  await Admin.deleteMany({});

  const admins = [
    { username: "admin", password: "123jhejhjkas" },
    { username: "admin2", password: "123jhejhjkasfdvf" },
  ];

  for (const data of admins) {
    const admin = new Admin(data);
    await admin.save(); // bcrypt runs correctly here
  }

  console.log("Admins seeded successfully");
}
