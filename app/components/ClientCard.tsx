import Image from "next/image";
type Client = {
  name: string;
  address?: string;
  mapUrl?: string;
};

type ClientCardProps = {
  client: Client;
};
export default function ClientCard({ client }:ClientCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/25">
      
      {client.mapUrl && (
        <a
          href={client.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-40 w-full overflow-hidden"
        >
          {/* Map preview */}
          <Image
            src="/map.jpg"
            alt="Location preview"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />

          {/* Marker */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <span className="absolute -inset-3 rounded-full bg-red-500/30 blur-md" />
              <span className="relative h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-500/40" />
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />

          {/* Label */}
          <span className="absolute bottom-3 right-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
            Open in Maps →
          </span>
        </a>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-medium tracking-tight text-white">
          {client.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {client.address || "Address available on request"}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <div className="flex items-center justify-between">
          <span className="text-xs tracking-wide text-white/40">
            VERIFIED PARTNER
          </span>

          <span className="text-sm font-medium text-white/80">
            View location →
          </span>
        </div>
      </div>
    </div>
  );
}
