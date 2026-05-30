import React from "react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[url(/hero-bg.jpg)] bg-cover bg-center flex flex-col justify-between text-white overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 z-10 px-6 sm:px-12 md:px-16 lg:px-20">
        <div className="border-r border-white/30 h-full mix-blend-overlay"></div>
        <div className="border-r border-white/30 h-full mix-blend-overlay"></div>
        <div className="border-r border-white/30 h-full mix-blend-overlay"></div>
        <div className="h-full"></div>
      </div>

      <Navbar />

      <main className="relative w-full px-6 sm:px-12 md:px-16 lg:px-20 pb-16 z-20 mt-auto flex justify-between items-end">
        <div className="flex flex-col gap-10 sm:gap-12 items-start max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-sans text-zinc-100">
            Exceptional homes for those who live with vision.
          </h1>

          <Button label="GET A QUOTE" />
        </div>

        <div className="flex items-center gap-8 relative pb-4 pr-8 select-none">
          <div className="flex items-center gap-8 font-spline text-sm uppercase text-white transition-colors cursor-pointer">
            <span>BLUE HAZE VILLA</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8L5.5 11.5L6.207 10.793L3.914 8.5H14V7.5H3.914L6.207 5.207L5.5 4.5L2 8Z" fill="white" />
            </svg>
          </div>

          <div className="absolute right-0 bottom-[-24px] h-24 w-px bg-white/70 z-20"></div>
        </div>
      </main>
    </div>
  );
}
