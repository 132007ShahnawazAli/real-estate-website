import React from "react";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[url(/hero-bg.jpg)] bg-cover bg-center flex flex-col justify-between text-white overflow-hidden font-sans select-none">
      {/* 1. Backdrop overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

      {/* 2. Faint vertical grid lines overlay - 3 equally spaced dividers separating 4 balanced columns */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 z-10 px-6 sm:px-12 md:px-16 lg:px-20">
        <div className="border-r border-white/30 h-full mix-blend-overlay"></div>
        <div className="border-r border-white/30 h-full mix-blend-overlay"></div>
        <div className="border-r border-white/30 h-full mix-blend-overlay"></div>
        <div className="h-full"></div>
      </div>

      {/* 3. Reusable Navbar Component */}
      <Navbar />

      {/* 4. Bottom Hero Content area (Floating layout aligned perfectly to the x-axis padding boundaries) */}
      <main className="relative w-full px-6 sm:px-12 md:px-16 lg:px-20 pb-16 z-20 mt-auto flex justify-between items-end">
        {/* Left Side: Heading + Floating chamfered Quote Button */}
        <div className="flex flex-col gap-10 sm:gap-12 items-start max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] font-sans text-zinc-100">
            Exceptional glazing for those who build with vision.
          </h1>

          {/* Premium Chamfered button matching the reference layout exactly */}
          <button
            className="w-[242px] h-[52px] bg-black hover:bg-zinc-900 transition-colors flex items-center justify-center gap-4 text-white font-spline text-sm uppercase  cursor-pointer select-none"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
            </svg>
            <span>GET A QUOTE</span>
          </button>
        </div>

        {/* Right Side: Villa name detail with vertical divider on the far-right padding boundary */}
        <div className="flex items-center gap-8 relative pb-4 pr-8 select-none">
          <div className="flex items-center gap-8 font-spline text-sm uppercase text-white transition-colors cursor-pointer">
            <span>BLUE HAZE VILLA</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8L5.5 11.5L6.207 10.793L3.914 8.5H14V7.5H3.914L6.207 5.207L5.5 4.5L2 8Z" fill="white" />
            </svg>
          </div>

          {/* Highlighted vertical segment aligned perfectly at the far-right margin padding boundary */}
          <div className="absolute right-0 bottom-[-24px] h-24 w-[1px] bg-white/70 z-20"></div>
        </div>
      </main>
    </div>
  );
}
