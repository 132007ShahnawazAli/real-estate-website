"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: "LIFETIME SALES VOLUME", value: "$2.4B+" },
  { label: "OFF-MARKET TRANSACTIONS", value: "45%" },
  { label: "YEARS OF EXCELLENCE", value: "25" },
];

export default function MarketData() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftTextRef = useRef<HTMLHeadingElement>(null);
  const rightTextRef = useRef<HTMLParagraphElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: "top 75%", 
          once: true 
        }
      });

      tl.from(leftTextRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(rightTextRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .from(statRefs.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50 text-slate-900 px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32 font-sans select-none z-20"
    >
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-6">
          <h2 
            ref={leftTextRef}
            className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.3] font-normal text-slate-900 max-w-xl"
          >
            A handpicked team of advisors, driven by market intelligence and a deeply rooted disdain for the ordinary.
          </h2>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col gap-16 md:gap-24 pt-2">
          
          <p 
            ref={rightTextRef}
            className="text-sm md:text-[15px] leading-[1.7] text-slate-600 max-w-lg"
          >
            With no traditional agents, we take individual responsibility and do whatever it takes to bring value — taking ownership of every transaction. Unorthodox to some, but works for us. Our clients thrive on discretion, precision, and high standards.
          </p>

          <div className="flex flex-col gap-16">
            {STATS.map((stat, i) => (
              <div 
                key={i}
                ref={(el) => { statRefs.current[i] = el; }}
                className="relative pl-5 flex flex-col"
              >
                {/* L-Bracket styling matching the image */}
                <div className="absolute left-0 top-5 w-3 h-10 border-l border-b border-slate-200" />
                
                <div className="text-[10px] uppercase font-mono tracking-widest mb-4 z-10 text-slate-500">
                  {stat.label}
                </div>
                
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[90px] leading-none font-normal tracking-tighter text-slate-900">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
