// components/PageIntro.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageIntro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        const rects = rectRefs.current;
        if (!container || rects.some((r) => !r)) return;

        // Lock scroll during animation
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = "";
                gsap.set(container, { display: "none" });
            },
        });

        // Hold for a moment, then stagger each rect sliding up
        tl.to({}, { duration: 0.3 }) // brief pause before animating
            .to(rects, {
                yPercent: -100,
                duration: 0.8,
                ease: "power3.inOut",
                stagger: 0.08,
            });

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

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
                    className="h-full flex-1 border-r border-white/10 last:border-r-0"
                    style={{ backgroundColor: "#0a0a0a" }} />
            ))}
        </div>
    );
}