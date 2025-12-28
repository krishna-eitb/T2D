import Client from "../../models/Client";
import dbConnect from "@/lib/db";

export async function getClients(page: number = 1, limit: number = 10) {
  await dbConnect();

  const skip = (page - 1) * limit;
  const clients = await Client.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const totalClients = await Client.countDocuments();

  return {
    clients,
    totalPages: Math.ceil(totalClients / limit),
    currentPage: page,
  };
}