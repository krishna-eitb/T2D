"use client";

import { useState } from "react";
import ClientCard from "./ClientCard";
type Client = {
  _id: string;
  name: string;
  address?: string;
  mapUrl?: string;
};

type ClientListProps = {
  clients: Client[];
};
export default function ClientList({ clients }:ClientListProps) {
  const [search, setSearch] = useState("");

  const filtered = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-[#0B0E11] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Section header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-xs tracking-[0.3em] text-white/50">
            VERIFIED NETWORK
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted Food Logistics Partners
          </h2>
          <p className="mt-4 text-white/60">
            Search verified logistics providers operating across the food
            supply chain.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 max-w-lg">
          <input
            className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/40 outline-none backdrop-blur transition focus:border-white/40"
            placeholder="Search by company or location"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((client) => (
            <ClientCard key={client._id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
