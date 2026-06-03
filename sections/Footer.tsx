"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const SOCIAL_LINKS = ["Instagram", "Twitter", "LinkedIn", "Journal"];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const hugeTextRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Live clock
    const interval = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Los_Angeles"
        }) + " PST"
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scale and track-in effect for the massive bottom text
      gsap.fromTo(
        hugeTextRef.current,
        { 
          y: 100, 
          scale: 0.8,
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, originalText: string) => {
    gsap.to(e.currentTarget, {
      duration: 0.6,
      scrambleText: { text: originalText, chars: "upperAndLowerCase", revealDelay: 0, speed: 0.5 },
      ease: "none",
    });
  };

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-slate-950 text-white overflow-hidden pt-32 pb-8 px-6 sm:px-12 md:px-16 lg:px-24 z-20 flex flex-col justify-between"
      style={{ minHeight: "80vh" }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-16 md:gap-0 relative z-10">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2 font-spline text-xs uppercase text-slate-500">
            <div className="h-2 w-2 bg-violet-500 shrink-0" />
            <span className="font-mono tracking-widest">GET IN TOUCH</span>
          </div>

          <div className="flex flex-col gap-2">
            <a 
              href="mailto:hello@horizon.com" 
              className="text-3xl md:text-5xl font-sans font-normal text-white hover:text-violet-400 transition-colors duration-300"
            >
              hello@horizon.com
            </a>
            <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mt-2">
              90210 Beverly Hills, CA
            </p>
          </div>
        </div>

        {/* Right: Nav & Socials */}
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Social</span>
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link}
                href="#"
                onMouseEnter={(e) => handleMouseEnter(e, link)}
                className="text-base font-sans text-zinc-300 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Studio</span>
            <p className="text-base font-sans text-zinc-300">
              LOCAL TIME
            </p>
            <p className="text-sm font-mono text-zinc-400">
              {time || "12:00 PM PST"}
            </p>
          </div>
        </div>
      </div>

      {/* Massive Background/Foreground Typography */}
      <div 
        className="w-full flex justify-center items-end mt-24 md:mt-auto overflow-hidden relative z-0 pointer-events-none"
      >
        <div 
          ref={hugeTextRef}
          className="text-[15vw] leading-[0.75] font-sans font-normal text-center tracking-tighter whitespace-nowrap text-slate-900"
          style={{ transformOrigin: "bottom center" }}
        >
          HORIZON
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-16 md:mt-24 pt-8 border-t border-slate-800 relative z-10 text-xs font-mono uppercase tracking-widest text-slate-600">
        <p>© {new Date().getFullYear()} HORIZON REAL ESTATE</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
