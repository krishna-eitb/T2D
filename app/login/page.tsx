// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async () => {
//     const res = await fetch("/api/login", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     const data = await res.json();
//     if (res.ok) {
//       localStorage.setItem("token", data.token);
//       router.push("/admin");
//     } else {
//       setError(data.error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0B0B0D] text-white">
//       <div className="bg-white/5 p-10 rounded-2xl backdrop-blur max-w-md w-full">
//         <h1 className="text-2xl font-semibold mb-6">Admin Login</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//           className="w-full mb-4 p-3 rounded bg-white/10"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="w-full mb-4 p-3 rounded bg-white/10"
//         />
//         {error && <p className="text-red-400 mb-2">{error}</p>}
//         <button
//           onClick={handleLogin}
//           className="w-full bg-indigo-500 py-3 rounded hover:bg-indigo-600 transition"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (res.ok) {
      router.replace("/admin");
      router.refresh();
    } else {
      setError(data.error || "Invalid credentials");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/login.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Admin Access
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Secure logistics partner dashboard
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-medium transition hover:opacity-90"
        >
          Sign in
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-white/40">
          Authorized personnel only
        </p>
      </div>
    </div>
  );
}
