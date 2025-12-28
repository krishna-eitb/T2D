"use client";

import { deleteClient } from "./action";
import { useState } from "react";
import AdminForm from "./AdminForm";

export default function AdminClientList({ clients }: { clients: any[] }) {
  const [editClient, setEditClient] = useState<any | null>(null);

  return (
    <>
      {/* Edit Modal */}
      {editClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0B0B0D] p-8 shadow-2xl ring-1 ring-white/10">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Edit Partner
            </h2>

            <AdminForm
              clientToEdit={editClient}
              onSuccess={() => setEditClient(null)}
            />

            <button
              className="absolute top-4 right-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white/60 hover:bg-white/20 hover:text-white transition"
              onClick={() => setEditClient(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Clients List */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {clients.map((client) => (
          <div
            key={client._id}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-lg transition hover:shadow-2xl hover:scale-[1.02] hover:border-white/20"
          >
            {/* Header */}
            <div>
              <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-white/90">
                {client.name}
              </h3>
              <p className="mt-2 text-sm text-white/50 group-hover:text-white/70">
                {client.address || "Address available on request"}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs font-medium text-white/40">
                VERIFIED PARTNER
              </span>

              <div className="flex gap-3">
                {/* Edit Button */}
                <button
                  onClick={() => setEditClient(client)}
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 text-xs font-medium text-white shadow-md hover:opacity-90 transition"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <form action={() => deleteClient(client._id)}>
                  <button className="rounded-full bg-red-500/80 px-4 py-1 text-xs font-medium text-white shadow-md hover:bg-red-500/90 transition">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
