// import AdminClientList from "./AdminClientList";
// import { getClients } from "@/lib/actions/getClients";

// interface AdminPageProps {
//   searchParams?: { page?: string };
// }

// export default async function AdminPage({ searchParams }: AdminPageProps) {
//   const page = parseInt(searchParams?.page || "1");
//   const { clients, totalPages, currentPage } = await getClients(page, 10);

//   return (
//     <div className="min-h-screen bg-[#0B0B0D] flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#0C0C0F] border-r border-white/10 p-6 flex flex-col">
//         <h2 className="text-2xl font-bold text-white mb-8">Admin Panel</h2>
//         <nav className="flex flex-col gap-4 text-white/70">
//           <a href="/admin" className="hover:text-white transition">Dashboard</a>
//           <a href="/admin/create" className="hover:text-white transition">Add Partner</a>
//           <a href="#" className="hover:text-white transition">Reports</a>
//           <a href="#" className="hover:text-white transition">Settings</a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
//           <button className="rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">
//             Logout
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           <StatCard title="Total Clients" value={clients.length * currentPage} />
//           <StatCard title="Verified Partners" value={clients.filter(c => c.mapUrl).length} />
//           <StatCard title="Pending Approvals" value={0} />
//         </div>

//         {/* Clients List Panel */}
//         <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-lg">
//           <h2 className="text-xl font-semibold text-white mb-4">Clients</h2>
//           <AdminClientList clients={clients} />

//           {/* Pagination */}
//           <Pagination totalPages={totalPages} currentPage={currentPage} />
//         </div>
//       </main>
//     </div>
//   );
// }

// // Stat Card Component
// function StatCard({ title, value }: { title: string; value: number }) {
//   return (
//     <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 shadow-lg hover:shadow-2xl transition">
//       <p className="text-sm text-white/50">{title}</p>
//       <p className="mt-2 text-2xl font-bold text-white">{value}</p>
//     </div>
//   );
// }

// // Pagination Component
// function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number }) {
//   return (
//     <div className="mt-6 flex justify-center gap-3">
//       {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//         <a
//           key={page}
//           href={`/admin?page=${page}`}
//           className={`px-3 py-1 rounded ${
//             page === currentPage ? "bg-indigo-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
//           } transition`}
//         >
//           {page}
//         </a>
//       ))}
//     </div>
//   );
// }
// import AdminPageWrapper from "./AdminPageWrapper";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import AdminClientList from "./AdminClientList";
import { getClients } from "@/lib/actions/getClients";
import { redirect } from "next/navigation";
import { getAdminFromCookie } from "@/lib/auth";
import LogoutButton from "./LogoutButton";



interface AdminPageProps {
  searchParams?: { page?: string };
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  
const admin = await getAdminFromCookie();

  if (!admin) {
    redirect("/login");
  }

  const page = parseInt(searchParams?.page || "1");
  const { clients, totalPages, currentPage } = await getClients(page, 10);

  return (
    // <AdminPageWrapper>
      <div className="min-h-screen bg-[#0B0B0D] flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0C0C0F] border-r border-white/10 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-8">Admin Panel</h2>
          <nav className="flex flex-col gap-4 text-white/70">
            <a href="/admin" className="hover:text-white transition">Dashboard</a>
            <a href="/admin/create" className="hover:text-white transition">Add Partner</a>
            <a href="#" className="hover:text-white transition">Reports</a>
            <a href="#" className="hover:text-white transition">Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
            <LogoutButton/>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatCard title="Total Clients" value={clients.length * currentPage} />
            <StatCard title="Verified Partners" value={clients.filter(c => c.mapUrl).length} />
            <StatCard title="Pending Approvals" value={0} />
          </div>

          {/* Clients List Panel */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Clients</h2>
            <AdminClientList clients={clients} />

            {/* Pagination */}
            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        </main>
      </div>
    // </AdminPageWrapper>
  );
}

// Stat Card Component
function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 shadow-lg hover:shadow-2xl transition">
      <p className="text-sm text-white/50">{title}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

// Pagination Component
function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number }) {
  return (
    <div className="mt-6 flex justify-center gap-3">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <a
          key={page}
          href={`/admin?page=${page}`}
          className={`px-3 py-1 rounded ${
            page === currentPage ? "bg-indigo-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
          } transition`}
        >
          {page}
        </a>
      ))}
    </div>
  );
}
