"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const PROJECTS = [
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
    src: "/vf1.mp4",
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
    src: "/vf2.mp4",
  },
  {
    id: "05",
    name: "Lumina",
    location: "Malibu, California",
    tag: "Oceanfront",
    year: "2025",
    price: "$8,900,000",
    beds: "4",
    baths: "5",
    area: "4,100",
    description:
      "Curved architecture mimicking the waves below. A sanctuary of natural light and bleached oak.",
    src: "/vf3.mp4",
  },
];

export default function FeaturedProjectsAlt() {
  const introRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const scrambleRef = useRef<HTMLSpanElement>(null);
  const h1Ref = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const wipePanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gridLinesRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

      // ── Initial states ──
      overlayRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });
      bgRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0 });
      });
      wipePanelRefs.current.forEach((el) => {
        if (el) gsap.set(el, { scaleX: 0, transformOrigin: "right center" });
      });

      // Only play the first video, pause all others
      videoRefs.current.forEach((vid, i) => {
        if (!vid) return;
        if (i === 0) {
          vid.play().catch(() => { });
          vid.playbackRate = 0.75; // ← slower playback for first video
        } else {
          vid.pause();
        }
      });

      gsap.set(overlayRefs.current[0], { opacity: 1 });

      // ── Phase 1: expand frame ──
      gsap.fromTo(
        frame,
        { width: "82%", height: "78vh", borderRadius: "6px" },
        {
          width: "100%",
          height: "100vh",
          borderRadius: "0px",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 55%",
            end: "top top",
            scrub: 0.6,
          },
        }
      );

      // ── Phase 2: pinned slide transitions ──
      let currentSlide = 0;
      let isAnimating = false;

      const playTransition = (fromIdx: number, toIdx: number) => {
        if (isAnimating) return;
        if (toIdx < 0 || toIdx >= PROJECTS.length) return;
        isAnimating = true;

        const prevOverlay = overlayRefs.current[fromIdx];
        const nextOverlay = overlayRefs.current[toIdx];
        const nextVideo = videoRefs.current[toIdx];

        // Pre-warm the next video BEFORE the wipe covers the screen
        if (nextVideo) {
          nextVideo.play().catch(() => { });
        }

        const tl = gsap.timeline({
          onComplete: () => {
            // Pause the video we just left
            const prevVideo = videoRefs.current[fromIdx];
            if (prevVideo) prevVideo.pause();

            currentSlide = toIdx;
            isAnimating = false;
          },
        });

        tl
          .to(prevOverlay, { opacity: 0, duration: 0.2, ease: "power1.in" })
          // Close wipe
          .to(wipePanelRefs.current, {
            scaleX: 1,
            transformOrigin: "right center",
            duration: 0.3,
            ease: "power2.inOut",
          }, "-=0.1")
          // Swap video under the wipe
          .call(() => {
            bgRefs.current.forEach((el, idx) => {
              if (el) gsap.set(el, { opacity: idx === toIdx ? 1 : 0 });
            });
            wipePanelRefs.current.forEach((el) => {
              if (el) gsap.set(el, { transformOrigin: "left center" });
            });
          })
          // Hold beat
          .to({}, { duration: 0.2 })
          // Open wipe
          .to(wipePanelRefs.current, {
            scaleX: 0,
            duration: 0.3,
            ease: "power2.inOut",
          })
          .call(() => {
            wipePanelRefs.current.forEach((el) => {
              if (el) gsap.set(el, { transformOrigin: "right center" });
            });
          })
          .to(nextOverlay, { opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.2");
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${PROJECTS.length * 200}%`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const step = Math.floor(self.progress * PROJECTS.length * 2);
          const clamped = Math.min(Math.floor(step / 2), PROJECTS.length - 1);
          if (clamped !== currentSlide && !isAnimating) {
            const direction = clamped > currentSlide ? 1 : -1;
            playTransition(currentSlide, currentSlide + direction);
          }
        },
      });
    }, sectionRef);

    return () => {
      introCtx.revert();
      mainCtx.revert();
      // Clean up — pause all videos on unmount
      videoRefs.current.forEach((vid) => vid?.pause());
    };
  }, []);

  return (
    <>
      {/* ══ INTRO ══ */}
      <div
        ref={introRef}
        className="relative w-full bg-slate-50 text-slate-900 px-6 sm:px-12 md:px-16 lg:px-20 py-24 md:py-32 font-sans select-none z-20 flex flex-col gap-12 md:gap-16"
      >
        <div className="flex items-center gap-2 select-none">
          <div ref={dotRef} className="h-2 w-2 bg-slate-900 shrink-0" />
          <span ref={scrambleRef} className="text-base font-mono uppercase text-slate-900">&nbsp;</span>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-10 md:gap-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 font-sans leading-[1.1] max-w-2xl">
            <span ref={h1Ref} className="block">Rooted across America,</span>
            <span ref={h2Ref} className="block text-slate-400">built for distinction.</span>
          </h2>
          <div className="flex flex-col gap-8 max-w-sm">
            <p ref={paraRef} className="text-base sm:text-lg font-medium font-sans text-slate-600">
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

      {/* ══ EXPANDING IMAGE + CARD SCROLL ══ */}
      <div
        ref={sectionRef}
        className="relative w-full flex items-center justify-center z-20 bg-slate-50"
        style={{ minHeight: "100vh" }}
      >
        <div
          ref={frameRef}
          className="relative overflow-hidden mx-auto"
          style={{ width: "82%", height: "78vh" }}
        >
          {/* Background videos */}
          {PROJECTS.map((project, i) => (
            <div
              key={`bg-${project.id}`}
              ref={(el) => { bgRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                zIndex: 1,
                opacity: i === 0 ? 1 : 0,
                willChange: "opacity",        // ← GPU layer hint
              }}
            >
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={project.src}
                loop
                muted
                playsInline
                preload="metadata"            // ← only load metadata upfront, not full video
                className="w-full h-full object-cover"
                style={{ willChange: "transform" }} // ← prevents repaint on compositing
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/65 pointer-events-none" />
            </div>
          ))}

          {/* Column grid lines */}
          <div
            ref={gridLinesRef}
            className="absolute inset-0 pointer-events-none grid grid-cols-4"
            style={{ zIndex: 30 }}
          >
            <div className="border-r border-white/10 h-full" />
            <div className="border-r border-white/10 h-full" />
            <div className="border-r border-white/10 h-full" />
            <div className="h-full" />
          </div>

          {/* Wipe panels */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={`wipe-${i}`}
              ref={(el) => { wipePanelRefs.current[i] = el; }}
              className="absolute top-0 h-full bg-black pointer-events-none"
              style={{
                left: `calc(${i * 25}% - 1px)`,
                width: "calc(25% + 2px)",
                zIndex: 25,
                transform: "scaleX(0)",
                transformOrigin: "right center",
                willChange: "transform",       // ← critical: own GPU layer for transform
              }}
            />
          ))}

          {/* Per-project overlays */}
          {PROJECTS.map((project, i) => (
            <div
              key={`overlay-${project.id}`}
              ref={(el) => { overlayRefs.current[i] = el; }}
              className="absolute inset-0 z-20 pointer-events-none px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 flex flex-col justify-end"
              style={{ willChange: "opacity" }}
            >
              <div className="flex items-end justify-between w-full gap-10">
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white font-sans leading-[0.9] tracking-tight">
                  {project.name}
                </h3>

                {/* Info card — no backdrop-blur to avoid GPU repaints during transition */}
                <div
                  ref={i === 0 ? cardRef : undefined}
                  className="shrink-0 w-64 sm:w-72 md:w-80 bg-black/60 border border-white/10 p-6 md:p-8 pointer-events-auto"
                >
                  <div className="flex items-end justify-between mb-5">
                    <span className="text-2xl md:text-3xl font-light text-white font-sans">{project.price}</span>
                    <span className="text-xs font-mono text-white/30 pb-1">
                      {project.id} / {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5 pb-5 border-b border-white/10">
                    <span className="text-xs font-mono text-white/55">{project.beds} Bed</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-xs font-mono text-white/55">{project.baths} Bath</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-xs font-mono text-white/55">{project.area} sqft</span>
                  </div>

                  <p className="text-sm text-white/60 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <button className="flex items-center gap-2 text-xs font-mono text-white/70 uppercase tracking-[0.15em] group hover:text-white transition-colors duration-200">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M2 8L5.5 11.5L6.207 10.793L3.914 8.5H14V7.5H3.914L6.207 5.207L5.5 4.5L2 8Z" fill="currentColor" />

                    </svg>
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