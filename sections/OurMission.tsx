import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function OurMission() {
  return (
    <section className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-16 md:gap-24">
      <div className="w-full flex flex-col items-start gap-8 max-w-4xl pt-4">
        <div className="flex items-center gap-2 font-spline text-xs uppercase text-zinc-900 select-none">
          <div className="h-2 w-2 bg-black"></div>
          <span className="text-base font-mono">OUR MISSION</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans">
          Privacy, space and comfort <br /> in perfect harmony.
        </h2>

        <Button label="GET A QUOTE" />
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-end gap-10 md:gap-16">
        <div className="w-full md:w-[45%]">
          <div className="relative w-full aspect-square md:aspect-4/3 overflow-hidden bg-zinc-100 border border-zinc-200/50">
            <Image
              src="/team.jpg"
              alt="Real Estate Advisory Curation Team"
              fill
              className="object-cover mix-blend-luminosity"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-[45%] pb-4">
          <p className="text-base sm:text-lg font-medium font-sans text-zinc-700">
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
