"use server";

import { revalidatePath } from "next/cache";
import Client from "../../models/Client";
import dbConnect from "@/lib/db";

/* CREATE */
export async function createClient(formData: FormData) {
  await dbConnect();

  await Client.create({
    name: formData.get("name"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    mapUrl: formData.get("mapUrl"),
  });

  revalidatePath("/admin");
  revalidatePath("/");
}

/* UPDATE */
export async function updateClient(id: string, formData: FormData) {
  await dbConnect();

  await Client.findByIdAndUpdate(id, {
    name: formData.get("name"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    mapUrl: formData.get("mapUrl"),
  });

  revalidatePath("/admin");
  revalidatePath("/");
}

/* DELETE */
export async function deleteClient(id: string) {
  await dbConnect();
  await Client.findByIdAndDelete(id);

  revalidatePath("/admin");
  revalidatePath("/");
}
