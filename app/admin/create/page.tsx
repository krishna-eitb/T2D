import AdminForm from "../AdminForm";

export default function CreatePartnerPage() {
  return (
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
        <h1 className="text-3xl font-semibold text-white mb-6">Add New Partner</h1>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-lg max-w-2xl">
          <AdminForm />
        </div>
      </main>
    </div>
  );
}
