"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    word: "Curated",
    para: "Our portfolio is not built on volume — it is built on judgment. Every property is evaluated against a precise standard of location, architecture, and long-term value before it ever reaches our clients.",
  },
  {
    word: "Exclusive",
    para: "We work with a select group of buyers and sellers who understand that exceptional real estate is not listed — it is presented. Access to our portfolio is earned, not open.",
  },
  {
    word: "Enduring",
    para: "The homes we represent are not bought and sold. They are acquired and kept. We source properties whose value is measured not just in price today, but in what they represent for generations.",
  },
];

export default function PortfolioStandard() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wordsRowRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const inner = innerRef.current;
      const wordsRow = wordsRowRef.current;
      if (!section || !inner || !wordsRow) return;

      // Expand inset card to full width on entry
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top top",
          scrub: 0.6,
        },
      }).to(inner, { width: "100%", ease: "power2.inOut" });

      // Helper: swap para text with a quick fade
      const swapPara = (index: number) => {
        const el = paraRef.current;
        if (!el) return;
        gsap.to(el, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            setActiveIndex(index);
            gsap.to(el, { opacity: 1, duration: 0.3 });
          },
        });
      };

      // Pin + scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      tl
        // hold on word 0
        .to({}, { duration: 0.3 })

        // → word 1: Exclusive
        .to(wordsRow, { x: "-28vw", duration: 0.4, ease: "power2.inOut" }, "s1")
        .to(wordRefs.current[0], { opacity: 0.25, duration: 0.25 }, "s1")
        .to(wordRefs.current[1], { opacity: 1, duration: 0.25 }, "s1")
        .call(() => swapPara(1), undefined, "s1+=0.1")
        .to({}, { duration: 0.3 })

        // → word 2: Enduring
        .to(wordsRow, { x: "-56vw", duration: 0.4, ease: "power2.inOut" }, "s2")
        .to(wordRefs.current[1], { opacity: 0.25, duration: 0.25 }, "s2")
        .to(wordRefs.current[2], { opacity: 1, duration: 0.25 }, "s2")
        .call(() => swapPara(2), undefined, "s2+=0.1")

        // hold at end
        .to({}, { duration: 0.4 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center z-20"
      style={{ minHeight: "100vh" }}
    >
      <div
        ref={innerRef}
        className="relative bg-[url(/villa.jpg)] bg-cover bg-center flex flex-col justify-between text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16 font-sans select-none overflow-hidden"
        style={{ width: "91.666667%", minHeight: "100vh" }}
      >
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />

        {/* Words row */}
        <div className="relative w-full z-10 pt-8 overflow-hidden" style={{ minHeight: "180px" }}>
          <div
            ref={wordsRowRef}
            className="flex items-baseline gap-12 sm:gap-20 md:gap-28 lg:gap-36 whitespace-nowrap"
          >
            {SLIDES.map((s, i) => (
              <h3
                key={s.word}
                ref={(el) => { wordRefs.current[i] = el; }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal font-sans text-white shrink-0"
                style={{ opacity: i === 0 ? 1 : 0.25 }}
              >
                {s.word}
              </h3>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative w-full flex items-center gap-6 z-10 my-auto">
          <span className="font-spline text-sm uppercase text-white">03</span>
          <div className="flex-1 h-px bg-white/60" />
          <span className="font-spline text-sm uppercase text-white">OUR STANDARD</span>
        </div>

        {/* Single para — text swaps via React state */}
        <div className="relative w-full z-10 pb-6">
          <p
            ref={paraRef}
            className="max-w-xl text-base sm:text-lg md:text-xl font-medium font-sans text-white/90"
          >
            {SLIDES[activeIndex].para}
          </p>
        </div>
      </div>
    </section>
  );
}
