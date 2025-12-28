import ClientList from "./components/ClientList";
import Hero from "./components/Hero";
import { getClients } from "@/lib/actions/getClients";

interface HomePageProps {
  searchParams?: { page?: string };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const page = parseInt(searchParams?.page || "1");
  const { clients, totalPages, currentPage } = await getClients(page, 20);

  return (
    <>
      <Hero />

      <div className="">
        <ClientList clients={clients} />

        {/* Pagination */}
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </>
  );
}

// Pagination Component
function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number }) {
  return (
    <div className="flex bg-[#0B0E11] justify-center gap-3">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <a
          key={page}
          href={`/?page=${page}`}
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
