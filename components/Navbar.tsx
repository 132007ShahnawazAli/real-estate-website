"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const bottomRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.fromTo(
        menuContainerRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power3.out", delay: 0.25 }
      );

      gsap.fromTo(
        bottomRefs.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out", delay: 0.4 }
      );

      // Removed overflow hidden to keep scrollbar visible
    } else {
      gsap.to(menuContainerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.in",
        delay: 0.2,
      });

      // Removed overflow auto
    }

    return () => {
      // Cleanup
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative w-full h-fit flex justify-between items-center px-6 sm:px-12 md:px-16 lg:px-20 py-5 z-[60]">
        <span className="text-white font-medium font-neue text-base">FLUIDGLASS</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer backdrop-blur-md overflow-hidden h-12 ${
            isOpen 
              ? "w-12 bg-[#151515] hover:bg-black rounded-none" 
              : "w-[290px] bg-black/70 hover:bg-black/90"
          }`}
        >
          {/* Closed state: MENU + Hamburger */}
          <div className={`absolute inset-0 flex items-center justify-between px-5 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
          }`}>
            <p className="font-spline text-white text-sm shrink-0">MENU</p>
            <svg width="19" height="7" viewBox="0 0 19 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <line y1="0.5" x2="19" y2="0.5" stroke="white" />
              <line y1="6.5" x2="19" y2="6.5" stroke="white" />
            </svg>
          </div>

          {/* Open state: X icon */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-[-90deg] pointer-events-none"
          }`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
        </button>
        <button className="flex gap-4 items-center cursor-pointer group">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
            <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
          </svg>
          <span className="text-sm text-white font-spline font-regular">GET A QUOTE</span>
        </button>
      </div>

      {/* Fullscreen Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 invisible opacity-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
      >
        {/* Menu Container */}
        <div
          ref={menuContainerRef}
          className="bg-[#151515] w-full max-w-md md:max-w-lg lg:max-w-xl p-8 md:p-12 flex flex-col justify-between shadow-2xl relative"
        >
          <span className="text-zinc-500 font-spline text-xs tracking-widest uppercase mb-8 block">Menu</span>

          <nav className="flex flex-col gap-2 mb-16">
            {["About", "Collection", "Projects", "Approach", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                ref={(el) => { linksRef.current[i] = el; }}
                className="text-white font-neue text-4xl md:text-4xl font-normal tracking-tight hover:text-zinc-400 transition-colors w-fit"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 text-zinc-400 font-spline text-sm">
              <div ref={(el) => { bottomRefs.current[0] = el; }} className="flex flex-col gap-1">
                <a href="#" className="hover:text-white transition-colors">News</a>
                <a href="#" className="hover:text-white transition-colors">Showroom</a>
              </div>
              <div ref={(el) => { bottomRefs.current[1] = el; }} className="flex flex-col gap-1">
                <a href="tel:02081567290" className="hover:text-white transition-colors">020 8156 7290</a>
                <a href="mailto:sales@fluid.glass" className="hover:text-white transition-colors">sales@fluid.glass</a>
              </div>
            </div>

            <div ref={(el) => { bottomRefs.current[2] = el; }}>
              <button className="w-full bg-[#0D0D0D] hover:bg-black transition-colors text-white font-spline text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-4 group">
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
                </svg>
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
