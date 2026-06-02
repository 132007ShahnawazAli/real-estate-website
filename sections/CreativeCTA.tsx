"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CreativeCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a scrub timeline for the whole section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // Starts when the top of the section hits the bottom of viewport
          end: "bottom top", // Ends when the bottom of section hits top of viewport
          scrub: 1.5,
        }
      });

      // Subtle parallax on the center content as a whole to prevent overlapping
      tl.to(centerContentRef.current, { y: -60, ease: "none" }, 0);

      // Distinct parallax and rotation on the scattered images
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        
        // Vary the speeds and rotations
        const yMove = i % 2 === 0 ? -150 : 100;
        const rotate = i % 2 === 0 ? 25 : -20;
        
        // Set initial slight rotation
        gsap.set(img, { rotation: i % 2 === 0 ? -10 : 10 });

        tl.to(img, {
          y: yMove,
          rotation: rotate,
          ease: "none"
        }, 0);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-[#E5E4DF] flex flex-col items-center justify-center overflow-hidden py-32 z-10"
    >
      {/* Decorative scattered images */}
      
      {/* Top Left */}
      <div 
        ref={el => { imagesRef.current[0] = el; }}
        className="absolute top-[5%] left-[5%] md:left-[12%] w-32 md:w-56 aspect-[3/4] z-10 group cursor-pointer"
      >
        <Image 
          src="/casa-terracotta.jpg" 
          alt="Properties" 
          fill 
          className="object-cover transition-all duration-700 ease-out filter grayscale mix-blend-multiply opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 shadow-xl"
        />
      </div>
      
      {/* Bottom Left */}
      <div 
        ref={el => { imagesRef.current[1] = el; }}
        className="absolute bottom-[10%] left-[10%] md:left-[22%] w-40 md:w-64 aspect-square z-10 group cursor-pointer"
      >
        <Image 
          src="/villa.jpg" 
          alt="Properties" 
          fill 
          className="object-cover transition-all duration-700 ease-out filter grayscale mix-blend-multiply opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 shadow-xl"
        />
      </div>

      {/* Top Right */}
      <div 
        ref={el => { imagesRef.current[2] = el; }}
        className="absolute top-[15%] right-[5%] md:right-[15%] w-36 md:w-60 aspect-[4/3] z-10 group cursor-pointer"
      >
        <Image 
          src="/team.jpg" 
          alt="Properties" 
          fill 
          className="object-cover transition-all duration-700 ease-out filter grayscale mix-blend-multiply opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 shadow-xl"
        />
      </div>

      {/* Bottom Right */}
      <div 
        ref={el => { imagesRef.current[3] = el; }}
        className="absolute bottom-[15%] right-[10%] md:right-[20%] w-28 md:w-48 aspect-[3/4] z-10 group cursor-pointer"
      >
        <Image 
          src="/testimonial-1.png" 
          alt="Properties" 
          fill 
          className="object-cover transition-all duration-700 ease-out filter grayscale mix-blend-multiply opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 shadow-xl"
        />
      </div>

      {/* Center Content */}
      <div ref={centerContentRef} className="relative z-30 flex flex-col items-center text-center gap-8 mt-12 max-w-4xl px-6">
        
        <div className="flex items-center gap-2 font-spline text-xs uppercase text-zinc-900">
          <div className="h-2 w-2 bg-black shrink-0" />
          <span className="text-base font-mono">THE NEXT STEP</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans leading-[1.1]">
          <span className="block">Ready to make a move?</span>
          <span className="block text-zinc-500">Your next chapter begins here.</span>
        </h2>
        
        <div className="mt-8">
          <Button label="START THE CONVERSATION" />
        </div>
      </div>
    </section>
  );
}
