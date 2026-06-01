"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function OurMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Brief pin: section "claims" the viewport when it arrives ──
      // This creates the deliberate stop / snap-into-place feel.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200",
        pin: true,
        pinSpacing: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Scramble + flicker on label
      // 1. Dot flickers in
      gsap.fromTo(
        dotRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.08,
          repeat: 6,
          yoyo: true,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          onComplete: () => gsap.set(dotRef.current, { opacity: 1 }),
        }
      );
      // 2. Scramble the text
      tl.to(scrambleRef.current, {
        duration: 1.2,
        scrambleText: {
          text: "OUR MISSION",
          chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          revealDelay: 0.3,
          speed: 0.4,
        },
        ease: "none",
      })
        // Heading line 1
        .from(line1Ref.current, {
          opacity: 0, y: 28,
          duration: 0.65, ease: "power3.out",
        }, "-=0.25")
        // Heading line 2
        .from(line2Ref.current, {
          opacity: 0, y: 28,
          duration: 0.65, ease: "power3.out",
        }, "-=0.45")
        // Button
        .from(btnRef.current, {
          opacity: 0, y: 16,
          duration: 0.5, ease: "power2.out",
        }, "-=0.3");

      // Image — reveal from center outward to both sides
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 50%)" },
        {
          clipPath: "inset(0 0%)",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Paragraph — fade in from below
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-16 md:gap-24"
    >
      {/* Top block — label, heading, CTA */}
      <div className="w-full flex flex-col items-start gap-8 max-w-4xl pt-4">
        <div ref={labelRef} className="flex items-center gap-2 font-spline text-xs uppercase text-zinc-900 select-none">
          <div ref={dotRef} className="h-2 w-2 bg-black" />
          <span ref={scrambleRef} className="text-base font-mono">&nbsp;</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans leading-[1.1]">
          <span ref={line1Ref} className="block">Privacy, space and comfort</span>
          <span ref={line2Ref} className="block">in perfect harmony.</span>
        </h2>

        <div ref={btnRef}>
          <Button label="GET A QUOTE" />
        </div>
      </div>

      {/* Bottom block — image + para */}
      <div className="flex flex-col md:flex-row w-full justify-between items-end gap-10 md:gap-16">
        <div className="w-full md:w-[45%]">
          <div
            ref={imageRef}
            className="relative w-full aspect-square md:aspect-4/3 overflow-hidden bg-zinc-100 border border-zinc-200/50"
          >
            <Image
              src="/team.jpg"
              alt="Real Estate Advisory Curation Team"
              fill
              sizes="45vw"
              className="object-cover mix-blend-luminosity"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-[45%] pb-4">
          <p
            ref={paraRef}
            className="text-base sm:text-lg font-medium font-sans text-zinc-700"
          >
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
