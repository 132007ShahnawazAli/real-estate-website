import React from "react";
import Image from "next/image";

export default function OurMission() {
  return (
    <section className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-16 md:gap-24">
      {/* 1. Top Section: Core Heading & Chamfered Call-to-Action */}
      <div className="w-full flex flex-col items-start gap-8 max-w-4xl pt-4">
        {/* Monospaced Section Tag */}
        <div className="flex items-center gap-2 font-spline text-xs uppercase  text-zinc-900 select-none">
          <div className="h-2 w-2 bg-black  "></div>
          <span className="text-base font-mono">OUR MISSION</span>
        </div>

        {/* Large Mission Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight  text-zinc-950 font-sans">
          Privacy, space and comfort <br /> in perfect harmony.
        </h2>

        {/* Reusable Black Chamfered Button */}
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

      {/* 2. Lower Section: Dual Column Flexbox Layout (Team image left, curation copy right) */}
      <div className="flex flex-col md:flex-row w-full justify-between items-end gap-10 md:gap-16">
        {/* Left Side: Editorial team photo container */}
        <div className="w-full md:w-[45%]">
          <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-zinc-100 border border-zinc-200/50">
            <Image
              src="/team.jpg"
              alt="Real Estate Advisory Curation Team"
              fill
              className="object-cover mix-blend-luminosity"
              priority
            />
          </div>
        </div>

        {/* Right Side: Paragraph Curation Text */}
        <div className="w-full md:w-[45%] pb-4">
          <p className="text-base sm:text-lg font-medium leading-tight font-sans text-zinc-700 tracking-wide">
            Every property we present is the result of deliberate curation
            — not volume. We evaluate location, architecture, and long-
            term value before anything reaches our portfolio. Our standard
            is not what the market accepts, but what discerning buyers
            deserve.
          </p>
        </div>
      </div>
    </section>
  );
}
