import React from "react";

export default function PortfolioStandard() {
  return (
    <section className="relative w-full h-screen bg-[url(/villa-sky.png)] bg-cover bg-center flex flex-col justify-between text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16 font-sans select-none overflow-hidden z-20">
      {/* 1. Backdrop gradient overlay for readability of bottom text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/45 pointer-events-none z-0"></div>

      {/* 2. Top Header Layer (Sky area) */}
      <div className="relative w-full flex justify-between items-center pt-8 z-10">
        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight font-sans text-white">
          Crafted
        </h3>
        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight font-sans text-white/40">
          Exclusive
        </h3>
        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight font-sans text-white/40">
          Legacy
        </h3>
      </div>

      {/* 3. Horizontal Grid Divider */}
      <div className="relative w-full flex items-center gap-6 z-10 my-auto">
        <span className="font-spline text-xs uppercase tracking-widest text-zinc-300">03</span>
        <div className="flex-1 h-[1px] bg-white/20"></div>
        <span className="font-spline text-xs uppercase tracking-widest text-zinc-300">OUR STANDARD</span>
      </div>

      {/* 4. Bottom Curation Statement (Villa overlay area) */}
      <div className="relative w-full flex justify-start items-end z-10 pb-6">
        <p className="text-base sm:text-lg md:text-xl font-normal leading-[1.65] font-sans max-w-3xl text-zinc-200 tracking-wide">
          Every property we present is the result of deliberate curation 
          — not volume. We evaluate location, architecture, and long-
          term value before anything reaches our portfolio. Our standard 
          is not what the market accepts, but what discerning buyers 
          deserve.
        </p>
      </div>
    </section>
  );
}
