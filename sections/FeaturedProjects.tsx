import React from "react";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <section className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-16 md:gap-24">
      {/* 1. Top Section: Header & Call-to-Action */}
      <div className="w-full flex flex-col items-start gap-8 max-w-4xl pt-4">
        {/* Monospaced Section Tag with updated block indicator */}
        <div className="flex items-center gap-2 font-spline text-xs text-zinc-900 select-none">
          <div className="h-2 w-2 bg-black"></div>
          <span className="text-base font-mono uppercase">FEATURED PROJECTS</span>
        </div>

        {/* Curation Heading - NO tracking or leading properties */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans">
          Privacy, space and comfort <br /> in perfect harmony.
        </h2>

        {/* Reusable Black Chamfered Button */}
        <button
          className="w-[242px] h-[52px] bg-black hover:bg-zinc-900 transition-colors flex items-center justify-center gap-4 text-white font-spline text-sm uppercase cursor-pointer select-none"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
        >
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
          </svg>
          <span>GET A QUOTE</span>
        </button>
      </div>

      {/* 2. Lower Section: Project Detail Flexbox Layout */}
      <div className="flex flex-col md:flex-row w-full justify-between items-end gap-10 md:gap-16">
        {/* Left Side: Terracotta project image container */}
        <div className="w-full md:w-[45%]">
          <div className="relative w-full aspect-square md:aspect-4/3 overflow-hidden bg-zinc-100 border border-zinc-200/50">
            <Image
              src="/casa-terracotta.jpg"
              alt="Casa Terracotta Premium Residence"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Specifications & Project Overview */}
        <div className="w-full md:w-[45%] pb-4">

          {/* Location indicator with block indicator */}
          <div className="flex items-center gap-2 font-spline text-xs text-zinc-600 select-none mb-4">
            <div className="h-2 w-2 bg-black"></div>
            <span className="text-sm font-mono font-medium">Königswinter, Germany</span>
          </div>

          {/* Project Title - NO tracking or leading properties */}
          <h3 className="text-3xl sm:text-4xl font-normal text-zinc-950 font-sans mb-4">
            Casa Terracotta
          </h3>

          {/* Description Paragraph - NO tracking or leading properties */}
          <p className="text-base sm:text-lg font-medium text-zinc-700 font-sans mb-8">
            Our glazing collection is defined by exceptional craftsmanship, refined design, and enduring quality. Made for bold architecture and uncompromising vision.
          </p>

          {/* Specifications List */}
          <div className="flex flex-col gap-4 mb-8">
            {/* Bedrooms */}
            <div className="flex items-center gap-3 font-spline text-sm text-zinc-900 select-none">
              <svg className="w-4 h-4 fill-current text-zinc-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7c-1.1 0-2 .9-2 2v3h14V9c0-1.1-.9-2-2-2H7zm-3 7v6h2v-2h12v2h2v-6H4z" />
              </svg>
              <span className="font-mono">2 Bedrooms</span>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center gap-3 font-spline text-sm text-zinc-900 select-none">
              <svg className="w-4 h-4 fill-none stroke-current text-zinc-900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18a4 4 0 004 4h8a4 4 0 004-4v-4H4v4zM2 8h20v2H2V8zm12-4h-4v4h4V4z" />
              </svg>
              <span className="font-mono">2 Bathrooms</span>
            </div>

            {/* Sqft */}
            <div className="flex items-center gap-3 font-spline text-sm text-zinc-900 select-none">
              <svg className="w-4 h-4 fill-none stroke-current text-zinc-900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3H3v18h18V3zM9 21v-8h12M9 13H3" />
              </svg>
              <span className="font-mono">1,000sqft</span>
            </div>
          </div>

          {/* Project Overview Button */}
          <button
            className="w-[242px] h-[52px] bg-black hover:bg-zinc-900 transition-colors flex items-center justify-center gap-4 text-white font-spline text-sm uppercase cursor-pointer select-none"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
            </svg>
            <span>Project Overview</span>
          </button>
        </div>
      </div>
    </section>
  );
}
