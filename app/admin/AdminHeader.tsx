"use client";

import { useRouter } from "next/navigation";

export default function AdminHeader({ username }: { username: string }) {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-3xl font-semibold text-white">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
            {username[0].toUpperCase()}
          </div>
          <span className="text-white/80 text-sm">{username}</span>
        </div>

        <button
          onClick={logout}
          className="rounded-xl bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/20 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
