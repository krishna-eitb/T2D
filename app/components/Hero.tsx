export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero.webp"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="/dineshbg.mp4" type="video/mp4" />
      </video>

      {/* Soft vignette + grain */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          
          {/* Luxury badge */}
          <div className="mb-8 flex justify-center">
            <span className="rounded-full border border-white/15 bg-white/5 px-5 py-1.5 text-xs tracking-[0.35em] text-white/80 backdrop-blur-md">
              VERIFIED DIRECTORY
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Powering Reliable
            <span className="block font-light text-white/70">
             Food Logistics at Scale
            </span>
          </h1>

          {/* Subtle divider */}
          <div className="mx-auto mt-8 h-px w-24 bg-white/20" />

          {/* Supporting text */}
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A curated directory of verified businesses with real addresses,
            real people, and real presence.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button className="group relative overflow-hidden rounded-full border border-white/30 px-10 py-3 text-sm font-medium tracking-wide text-white">
              <span className="relative z-10">Explore Directory</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
