"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const darkTextRef = useRef<HTMLHeadingElement>(null);
  const whiteTextLine1Ref = useRef<HTMLSpanElement>(null);
  const whiteTextLine2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      const line1 = whiteTextLine1Ref.current;
      const line2 = whiteTextLine2Ref.current;
      if (!section || !bg || !line1 || !line2) return;

      // Initial states
      gsap.set(darkTextRef.current, { y: -50, opacity: 0 });
      gsap.set([line1, line2], { y: 30, opacity: 0 });

      // Single scrub timeline — everything tied to scroll in both directions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      tl
        // Phase 1: Dark text slides in from top
        .to(darkTextRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        })
        // Hold dark text
        .to({}, { duration: 0.15 })
        // Phase 2: Dark text fades out
        .to(darkTextRef.current, {
          opacity: 0,
          duration: 0.1,
          ease: "power1.in",
        })
        // Phase 3: bg snaps to white AND white text fades in simultaneously
        .to(
          bg,
          { backgroundColor: "#f8fafc", duration: 0.08, ease: "none" },
          "transition"
        )
        .to(
          line1,
          { y: 0, opacity: 1, duration: 0.18, ease: "power3.out" },
          "transition"
        )
        .to(
          line2,
          { y: 0, opacity: 1, duration: 0.18, ease: "power3.out" },
          "transition+=0.08"
        )
        // Hold at end
        .to({}, { duration: 0.35 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen z-20">
      {/* Background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ backgroundColor: "#0f172a" }}
      />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-6 max-w-4xl">
          {/* Dark screen text */}
          <h2
            ref={darkTextRef}
            className="absolute text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white font-sans"
          >
            Every home is built to impress.
            <br />
            <span>But does yours truly </span>
            <span className="text-violet-500">move you?</span>
          </h2>

          {/* White screen text */}
          <div className="flex flex-col items-center gap-2">
            <span
              ref={whiteTextLine1Ref}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] tracking-tight text-slate-900 font-sans"
            >
              We don&apos;t just find homes.
            </span>
            <span
              ref={whiteTextLine2Ref}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] tracking-tight text-slate-900 font-sans"
            >
              We reveal{" "}
              <span className="text-slate-400">where you belong.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
