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
    src: "/v1.mp4",
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
    src: "/v2.mp4",
  },
  {
    id: "04",
    name: "Onyx Ridge",
    location: "Jackson Hole, Wyoming",
    tag: "Modern Cabin",
    year: "2024",
    price: "$6,500,000",
    beds: "6",
    baths: "5",
    area: "4,500",
    description:
      "Dark timber and sheer glass carve a bold silhouette against the snow-dusted Tetons.",
    src: "/v3.mp4",
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
    src: "/v4.mp4",
  },
  {
    id: "06",
    name: "The Foundry",
    location: "Tribeca, New York",
    tag: "Penthouse Loft",
    year: "2023",
    price: "$12,000,000",
    beds: "3",
    baths: "4",
    area: "3,200",
    description:
      "Industrial heritage reimagined with monolithic marble islands and brass accents.",
    src: "/v5.mp4",
  },
  {
    id: "07",
    name: "Villa Blanca",
    location: "Montecito, California",
    tag: "Mediterranean",
    year: "2022",
    price: "$7,200,000",
    beds: "5",
    baths: "6",
    area: "5,500",
    description:
      "Classic arches meet modern minimalism, surrounded by ancient olive trees and coastal breezes.",
    src: "/v6.mp4",
  },
  {
    id: "08",
    name: "Echo Valley",
    location: "Sedona, Arizona",
    tag: "Desert Modern",
    year: "2024",
    price: "$4,800,000",
    beds: "4",
    baths: "4",
    area: "3,600",
    description:
      "Rammed earth walls seamlessly blend the residence into the surrounding red rock canyons.",
    src: "/v7.mp4",
  },
  {
    id: "09",
    name: "The Canopy",
    location: "Portland, Oregon",
    tag: "Eco Retreat",
    year: "2023",
    price: "$3,900,000",
    beds: "3",
    baths: "3",
    area: "2,800",
    description:
      "Elevated living amongst old-growth pines. A masterclass in sustainable luxury and organic design.",
    src: "/v8.mp4",
  },
  {
    id: "10",
    name: "Aura",
    location: "Austin, Texas",
    tag: "Urban Estate",
    year: "2025",
    price: "$5,400,000",
    beds: "5",
    baths: "6",
    area: "4,800",
    description:
      "Expansive indoor-outdoor living spaces framing the city skyline with effortless elegance.",
    src: "/v9.mp4",
  },
  {
    id: "11",
    name: "Solstice Point",
    location: "Maui, Hawaii",
    tag: "Tropical Villa",
    year: "2024",
    price: "$14,500,000",
    beds: "6",
    baths: "7",
    area: "6,200",
    description:
      "An architectural masterpiece where volcanic stone and vanishing glass walls embrace the Pacific horizon.",
    src: "/V10.mp4",
  },
  {
    id: "16",
    name: "Iron & Oak",
    location: "Austin, Texas",
    tag: "Hill Country Modern",
    year: "2025",
    price: "$3,600,000",
    beds: "4",
    baths: "3",
    area: "3,200",
    description:
      "A masterful blend of raw industrial elements and warm natural woods set against rolling hills.",
    src: "/v11.mp4",
  },
  {
    id: "17",
    name: "The Pinnacle",
    location: "Park City, Utah",
    tag: "Ski Chalet",
    year: "2024",
    price: "$8,200,000",
    beds: "7",
    baths: "8",
    area: "6,500",
    description:
      "Ski-in, ski-out luxury defined by grand vaulted ceilings and panoramic snowy vistas.",
    src: "/v1.mp4",
  },
  {
    id: "18",
    name: "Whispering Willows",
    location: "Charleston, South Carolina",
    tag: "Southern Estate",
    year: "2022",
    price: "$4,500,000",
    beds: "5",
    baths: "5",
    area: "4,200",
    description:
      "Gracious verandas and ancient trees draped in Spanish moss frame this historic Southern gem.",
    src: "/v2.mp4",
  },
  {
    id: "19",
    name: "Nordic Light",
    location: "Seattle, Washington",
    tag: "Minimalist Waterfront",
    year: "2023",
    price: "$6,100,000",
    beds: "3",
    baths: "3",
    area: "2,700",
    description:
      "Clean lines and walls of glass embrace the Pacific Northwest's dramatic light and moody waters.",
    src: "/v3.mp4",
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
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Wipe panel refs — one per column line (3 panels for 4-column grid)
  const wipePanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gridLinesRef = useRef<HTMLDivElement>(null);

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

      // Initial states — all overlays hidden, all bg videos hidden except first
      overlayRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });
      bgRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0 });
      });

      // Initial state — wipe panels fully retracted (scaleX: 0, growing from right)
      wipePanelRefs.current.forEach((el) => {
        if (el) gsap.set(el, { scaleX: 0, transformOrigin: "right center" });
      });

      // Phase 1: frame expands to fullscreen
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

      // Phase 2: pin the section, detect scroll steps, auto-play each transition
      let currentSlide = 0;
      let isAnimating = false;

      // Show first overlay
      gsap.set(overlayRefs.current[0], { opacity: 1 });

      const playTransition = (fromIdx: number, toIdx: number) => {
        if (isAnimating) return;
        if (toIdx < 0 || toIdx >= PROJECTS.length) return;
        isAnimating = true;

        const prevOverlay = overlayRefs.current[fromIdx];
        const nextOverlay = overlayRefs.current[toIdx];

        const tl = gsap.timeline({
          onComplete: () => {
            currentSlide = toIdx;
            isAnimating = false;
          },
        });

        tl
          // Hide current overlay text
          .to(prevOverlay, { opacity: 0, duration: 0.2, ease: "power1.in" })
          .to(wipePanelRefs.current, {
            scaleX: 1,
            transformOrigin: "right center",
            duration: 0.3,
            ease: "power2.inOut",
          }, "-=0.1")
          .call(() => {
            bgRefs.current.forEach((el, idx) => {
              if (el) gsap.set(el, { opacity: idx === toIdx ? 1 : 0 });
            });
            wipePanelRefs.current.forEach((el) => {
              if (el) gsap.set(el, { transformOrigin: "left center" });
            });
          })
          .to({}, { duration: 0.7 })
          .to(wipePanelRefs.current, {
            scaleX: 0,
            duration: 0.3,
            ease: "power2.inOut",
          })
          // Reset transformOrigin for next transition
          .call(() => {
            wipePanelRefs.current.forEach((el) => {
              if (el) gsap.set(el, { transformOrigin: "right center" });
            });
          })
          .to(nextOverlay, { opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.2");
      };

      // Pin section and use scroll to advance slides
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
    };
  }, []);

  return (
    <>
      {/* ══ INTRO ════════════════════════════════════════════════ */}
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

      {/* ══ EXPANDING IMAGE + CARD SCROLL ══════════════════════ */}
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
              style={{ zIndex: 1, opacity: i === 0 ? 1 : 0 }}
            >
              <video
                src={project.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/65 pointer-events-none" />
            </div>
          ))}

          {/* Column grid lines — always on top of panels, dimmed white matching PageIntro */}
          <div ref={gridLinesRef} className="absolute inset-0 pointer-events-none grid grid-cols-4" style={{ zIndex: 30 }}>
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
            <div className="border-r border-white/10 h-full"></div>
            <div className="h-full"></div>
          </div>

          {/* Wipe panels — left-positioned with 1px overlap to prevent gaps */}
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
              }}
            />
          ))}

          {/* Per-project overlays (text / info card) */}
          {PROJECTS.map((project, i) => (
            <div
              key={`overlay-${project.id}`}
              ref={(el) => { overlayRefs.current[i] = el; }}
              className="absolute inset-0 z-20 pointer-events-none px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 flex flex-col justify-end"
            >
              <div className="flex items-end justify-between w-full gap-10">

                {/* Left: project name */}
                <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white font-sans leading-[0.9] tracking-tight">
                  {project.name}
                </h3>

                {/* Right: info card */}
                <div className="shrink-0 w-64 sm:w-72 md:w-80 bg-black/55 backdrop-blur-md border border-white/10 p-6 md:p-8 pointer-events-auto">
                  {/* Price + counter */}
                  <div className="flex items-end justify-between mb-5">
                    <span className="text-2xl md:text-3xl font-light text-white font-sans">{project.price}</span>
                    <span className="text-xs font-mono text-white/30 pb-1">
                      {project.id} / {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
                    </span>
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8L5.5 11.5L6.207 10.793L3.914 8.5H14V7.5H3.914L6.207 5.207L5.5 4.5L2 8Z"
                        fill="currentColor"
                      />
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