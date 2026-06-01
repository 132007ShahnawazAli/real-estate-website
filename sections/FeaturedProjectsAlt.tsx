"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const PROJECTS = [
  {
    id: "01",
    name: "The Horizon",
    location: "Beverly Hills, California",
    tag: "Luxury Estate",
    year: "2024",
    price: "$4,200,000",
    beds: "5",
    baths: "4",
    area: "3,800",
    description:
      "Where the Pacific meets the sky — an estate designed for those who measure wealth in light and stillness.",
    src: "/villa.jpg",
  },
  {
    id: "02",
    name: "Stone & Silence",
    location: "Aspen, Colorado",
    tag: "Mountain Retreat",
    year: "2023",
    price: "$3,100,000",
    beds: "4",
    baths: "3",
    area: "2,900",
    description:
      "Nestled into the mountainside, this retreat balances raw alpine material with the quiet discipline of form.",
    src: "/casa-terracotta.jpg",
  },
  {
    id: "03",
    name: "Glass Meridian",
    location: "Miami Beach, Florida",
    tag: "Waterfront",
    year: "2024",
    price: "$5,800,000",
    beds: "3",
    baths: "3",
    area: "2,200",
    description:
      "A penthouse suspended between ocean and sky. Floor-to-ceiling glass frames the Atlantic as living canvas.",
    src: "/team.jpg",
  },
];

export default function FeaturedProjectsAlt() {
  // Intro refs
  const introRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  // Pinned section refs
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ═══ INTRO ═══
    const introCtx = gsap.context(() => {
      gsap.fromTo(dotRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.08, repeat: 6, yoyo: true, ease: "none",
        scrollTrigger: { trigger: introRef.current, start: "top 75%", once: true },
        onComplete: () => gsap.set(dotRef.current, { opacity: 1 }),
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: introRef.current, start: "top 80%", once: true },
      });

      tl.to(scrambleRef.current, {
        duration: 1.2,
        scrambleText: { text: "OUR PRESENCE", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", revealDelay: 0.3, speed: 0.4 },
        ease: "none",
      })
        .from(h1Ref.current, { opacity: 0, y: 28, duration: 0.65, ease: "power3.out" }, "-=0.25")
        .from(h2Ref.current, { opacity: 0, y: 28, duration: 0.65, ease: "power3.out" }, "-=0.45")
        .from(paraRef.current, { opacity: 0, y: 20, duration: 0.55, ease: "power2.out" }, "-=0.35")
        .from(btnRef.current, { opacity: 0, y: 16, duration: 0.5, ease: "power2.out" }, "-=0.3");
    }, introRef);

    // ═══ EXPAND + PINNED CARD SCROLL ═══
    const mainCtx = gsap.context(() => {
      const section = sectionRef.current;
      const frame = frameRef.current;
      if (!section || !frame) return;

      // Initial states — images
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { yPercent: i === 0 ? 0 : 100 });
      });

      // Initial states — overlays hidden
      overlayRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { opacity: 0 });
      });

      // Phase 1: frame expands to fullscreen
      gsap.fromTo(frame,
        { width: "82%", height: "78vh", borderRadius: "6px" },
        {
          width: "100%", height: "100vh", borderRadius: "0px",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            end: "top top",
            scrub: 0.6,
          },
        }
      );

      // Phase 2: pin + card transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${PROJECTS.length * 130}%`,
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        },
      });

      // Fade in first overlay
      tl.to(overlayRefs.current[0], { opacity: 1, duration: 0.3, ease: "power2.out" });
      tl.to({}, { duration: 0.7 });

      for (let i = 1; i < PROJECTS.length; i++) {
        const card = cardRefs.current[i];
        const prevOverlay = overlayRefs.current[i - 1];
        const nextOverlay = overlayRefs.current[i];

        tl
          .to(prevOverlay, { opacity: 0, duration: 0.25, ease: "power1.in" }, `p${i}`)
          .to(card, { yPercent: 0, duration: 0.7, ease: "power2.inOut" }, `p${i}`)
          .to(nextOverlay, { opacity: 1, duration: 0.3, ease: "power2.out" }, `p${i}+=0.5`)
          .to({}, { duration: 0.7 });
      }
    }, sectionRef);

    return () => { introCtx.revert(); mainCtx.revert(); };
  }, []);

  return (
    <>
      {/* ══ INTRO ════════════════════════════════════════════════ */}
      <div
        ref={introRef}
        className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-12 md:gap-16"
      >
        <div className="flex items-center gap-2 select-none">
          <div ref={dotRef} className="h-2 w-2 bg-black shrink-0" />
          <span ref={scrambleRef} className="text-base font-mono uppercase text-zinc-900">&nbsp;</span>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-10 md:gap-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans leading-[1.1] max-w-2xl">
            <span ref={h1Ref} className="block">Rooted across America,</span>
            <span ref={h2Ref} className="block text-zinc-400">built for distinction.</span>
          </h2>
          <div className="flex flex-col gap-8 max-w-sm">
            <p ref={paraRef} className="text-base sm:text-lg font-medium font-sans text-zinc-600">
              From coastline estates to mountain retreats — our portfolio spans
              the nation&apos;s most coveted addresses. Every market we enter, we
              redefine.
            </p>
            <div ref={btnRef}>
              <Button label="EXPLORE LOCATIONS" />
            </div>
          </div>
        </div>
      </div>

      {/* ══ EXPANDING IMAGE + CARD SCROLL ══════════════════════ */}
      <div
        ref={sectionRef}
        className="relative w-full flex items-center justify-center z-20 bg-white"
        style={{ minHeight: "100vh" }}
      >
        <div
          ref={frameRef}
          className="relative overflow-hidden mx-auto"
          style={{ width: "82%", height: "78vh" }}
        >
          {/* Stacked project images */}
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{ zIndex: i + 1 }}
            >
              <Image
                src={project.src}
                alt={project.name}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/65 pointer-events-none" />
            </div>
          ))}

          {/* Per-project overlays */}
          {PROJECTS.map((project, i) => (
            <div
              key={`overlay-${project.id}`}
              ref={(el) => { overlayRefs.current[i] = el; }}
              className="absolute inset-0 z-20 pointer-events-none px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 flex flex-col justify-end"
            >
              <div className="flex items-end justify-between w-full gap-10">

                {/* Left: project name only */}
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white font-sans leading-[0.9] tracking-tight">
                  {project.name}
                </h3>

                {/* Right: info card */}
                <div className="shrink-0 w-64 sm:w-72 md:w-80 bg-black/55 backdrop-blur-md border border-white/10 p-6 md:p-8 pointer-events-auto">
                  {/* Price + counter */}
                  <div className="flex items-end justify-between mb-5">
                    <span className="text-2xl md:text-3xl font-light text-white font-sans">{project.price}</span>
                    <span className="text-xs font-mono text-white/30 pb-1">{project.id} / 0{PROJECTS.length}</span>
                  </div>

                  {/* Specs row */}
                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/10">
                    <span className="text-xs font-mono text-white/55">{project.beds} Bed</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-xs font-mono text-white/55">{project.baths} Bath</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-xs font-mono text-white/55">{project.area} sqft</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/60 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-xs font-mono text-white/70 uppercase tracking-[0.15em] group hover:text-white transition-colors duration-200">
                    View Project
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
