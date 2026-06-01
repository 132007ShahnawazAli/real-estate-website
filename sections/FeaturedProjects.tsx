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
    name: "Casa Terracotta",
    location: "Königswinter, Germany",
    tag: "Residential",
    year: "2024",
    beds: "4 Bedrooms",
    baths: "3 Bathrooms",
    area: "2,400 sqft",
    description:
      "A cliff-side residence carved into the hillside, where raw stone meets refined living. Every room opens to an uninterrupted horizon.",
    src: "/casa-terracotta.jpg",
  },
  {
    id: "02",
    name: "Villa Obscura",
    location: "Amalfi Coast, Italy",
    tag: "Luxury Estate",
    year: "2023",
    beds: "6 Bedrooms",
    baths: "5 Bathrooms",
    area: "4,100 sqft",
    description:
      "Perched above the Tyrrhenian Sea, this estate captures light and silence in equal measure. Architecture as atmosphere.",
    src: "/villa.jpg",
  },
  {
    id: "03",
    name: "The Meridian",
    location: "Reykjavik, Iceland",
    tag: "Penthouse",
    year: "2024",
    beds: "3 Bedrooms",
    baths: "2 Bathrooms",
    area: "1,800 sqft",
    description:
      "An urban sanctuary above the Arctic capital. Volcanic stone, geothermal warmth, and a skyline that changes every hour.",
    src: "/team.jpg",
  },
];

export default function FeaturedProjects() {
  const introRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ── INTRO ANIMATIONS ──────────────────────────────────────────
    const introCtx = gsap.context(() => {
      // Dot flicker
      gsap.fromTo(
        dotRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.08,
          repeat: 6,
          yoyo: true,
          ease: "none",
          scrollTrigger: { trigger: introRef.current, start: "top 75%", once: true },
          onComplete: () => gsap.set(dotRef.current, { opacity: 1 }),
        }
      );

      // Scramble + heading + para + btn
      const tl = gsap.timeline({
        scrollTrigger: { trigger: introRef.current, start: "top 80%", once: true },
      });

      tl.to(scrambleRef.current, {
          duration: 1.2,
          scrambleText: {
            text: "FEATURED PROJECTS",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            revealDelay: 0.3,
            speed: 0.4,
          },
          ease: "none",
        })
        .from(line1Ref.current, { opacity: 0, y: 28, duration: 0.65, ease: "power3.out" }, "-=0.25")
        .from(line2Ref.current, { opacity: 0, y: 28, duration: 0.65, ease: "power3.out" }, "-=0.45")
        .from(paraRef.current,  { opacity: 0, y: 20, duration: 0.55, ease: "power2.out" }, "-=0.35")
        .from(btnRef.current,   { opacity: 0, y: 16, duration: 0.5,  ease: "power2.out" }, "-=0.3");
    }, introRef);

    // ── PINNED CARD STACK ─────────────────────────────────────────
    const pinnedCtx = gsap.context(() => {
      const pinned = pinnedRef.current;
      if (!pinned) return;

      // Initial states
      cardWrapRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { yPercent: i === 0 ? 0 : 100 });
      });
      detailRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 24 });
      });

      // Build pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinned,
          start: "top top",
          end: `+=${PROJECTS.length * 120}%`,
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        },
      });

      // Hold on first slide
      tl.to({}, { duration: 0.6 });

      for (let i = 1; i < PROJECTS.length; i++) {
        const card       = cardWrapRefs.current[i];
        const prevDetail = detailRefs.current[i - 1];
        const nextDetail = detailRefs.current[i];

        tl
          .to(card,       { yPercent: 0,  duration: 0.7, ease: "power2.inOut" }, `s${i}`)
          .to(prevDetail, { opacity: 0, y: -20, duration: 0.3, ease: "power1.in"  }, `s${i}`)
          .to(nextDetail, { opacity: 1, y: 0,   duration: 0.4, ease: "power2.out" }, `s${i}+=0.3`)
          .to({}, { duration: 0.6 });
      }
    }, pinnedRef);

    return () => {
      introCtx.revert();
      pinnedCtx.revert();
    };
  }, []);

  return (
    <>
      {/* ══ INTRO ══════════════════════════════════════════════════ */}
      <div
        ref={introRef}
        className="relative w-full bg-white text-zinc-950 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-12 md:gap-16"
      >
        {/* Label */}
        <div className="flex items-center gap-2 select-none">
          <div ref={dotRef} className="h-2 w-2 bg-black shrink-0" />
          <span ref={scrambleRef} className="text-base font-mono uppercase text-zinc-900">&nbsp;</span>
        </div>

        {/* Heading + right column */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-10 md:gap-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-950 font-sans leading-[1.1] max-w-2xl">
            <span ref={line1Ref} className="block">Properties that define</span>
            <span ref={line2Ref} className="block text-zinc-400">a new standard of living.</span>
          </h2>

          <div className="flex flex-col gap-8 max-w-sm">
            <p
              ref={paraRef}
              className="text-base sm:text-lg font-medium font-sans text-zinc-600"
            >
              Each property in our portfolio is not listed — it is presented.
              Evaluated against a precise standard of location, architecture,
              and enduring value.
            </p>
            <div ref={btnRef}>
              <Button label="VIEW ALL PROJECTS" />
            </div>
          </div>
        </div>
      </div>

      {/* ══ PINNED SCROLL STACK ════════════════════════════════════ */}
      <div
        ref={pinnedRef}
        className="relative w-full bg-[#0e0e0e] font-sans select-none z-20"
        style={{ height: "100vh" }}
      >
        <div className="absolute inset-0 flex">

          {/* ── Left: portrait image cards ── */}
          <div className="relative w-full md:w-[55%] h-full overflow-hidden">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => { cardWrapRefs.current[i] = el; }}
                className="absolute inset-0"
                style={{ zIndex: i + 1 }}
              >
                <Image
                  src={project.src}
                  alt={project.name}
                  fill
                  sizes="55vw"
                  className="object-cover"
                  priority={i === 0}
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                {/* counter top-left */}
                <div className="absolute top-8 left-8 z-10">
                  <span className="font-mono text-[11px] text-white/50 uppercase tracking-widest">
                    {project.id}&nbsp;/&nbsp;0{PROJECTS.length}
                  </span>
                </div>

                {/* tag badge bottom-left */}
                <div className="absolute bottom-8 left-8 z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1">
                    {project.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: detail panels ── */}
          <div className="hidden md:block relative w-[45%] h-full">
            {/* vertical rule */}
            <div className="absolute left-0 top-16 bottom-16 w-px bg-white/10" />

            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => { detailRefs.current[i] = el; }}
                className="absolute inset-0 flex flex-col justify-center px-12 lg:px-16"
              >
                {/* location */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-1.5 w-1.5 bg-white/30 shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {project.location}
                  </span>
                </div>

                {/* name */}
                <h3 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-normal text-white leading-[1.05] mb-3">
                  {project.name}
                </h3>

                {/* year */}
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/25 mb-8">
                  {project.year}
                </span>

                {/* thin rule */}
                <div className="w-10 h-px bg-white/15 mb-7" />

                {/* description */}
                <p className="text-sm text-white/55 font-sans font-medium leading-relaxed mb-8 max-w-[22rem]">
                  {project.description}
                </p>

                {/* stats */}
                <div className="flex flex-col gap-3 mb-9 max-w-[22rem]">
                  {[
                    { label: "Bedrooms",  value: project.beds  },
                    { label: "Bathrooms", value: project.baths },
                    { label: "Area",      value: project.area  },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between border-b border-white/8 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                        {stat.label}
                      </span>
                      <span className="font-mono text-sm text-white/75">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* cta */}
                <button className="group flex items-center gap-3 w-fit">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">
                    View Project
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/15">
            Scroll to explore
          </span>
        </div>
      </div>
    </>
  );
}
