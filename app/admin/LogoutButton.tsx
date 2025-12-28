"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.replace("/login");
    router.refresh(); // clears server cache
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
    >
      Logout
    </button>
  );
}
