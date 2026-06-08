// components/PageIntro.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function PageIntro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const rects = rectRefs.current;
        if (!container || rects.some((r) => !r)) return;

        // Lock scroll during animation
        document.body.style.overflow = "hidden";

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = "";
                    setIsComplete(true);
                },
            });

            // Hold for a moment, then stagger each rect sliding up
            tl.to({}, { duration: 0.3 }) // brief pause before animating
                .to(rects, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power3.inOut",
                    stagger: 0.08,
                    force3D: true, // Force GPU hardware acceleration
                });
        });

        return () => {
            document.body.style.overflow = "";
            ctx.revert(); // Prevent GSAP duplication bugs in Strict Mode
        };
    }, []);

    if (isComplete) return null; // Completely unmount after animation

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex pointer-events-none"
            aria-hidden="true"
        >
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => { rectRefs.current[i] = el; }}
                    className="h-full flex-1 border-r border-white/10 last:border-r-0 will-change-transform transform-gpu"
                    style={{ backgroundColor: "#0a0a0a" }} />
            ))}
        </div>
    );
}