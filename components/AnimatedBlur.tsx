"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";
import GradualBlur from "@/components/ui/gradualblur";

export default function AnimatedBlur() {
    const blurContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (blurContainerRef.current) {
            // Find the footer element
            const footer = document.querySelector("footer");

            if (footer) {
                // Fade out blur when approaching footer
                gsap.to(blurContainerRef.current, {
                    opacity: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footer,
                        start: "top bottom",
                        end: "top 70%",
                        scrub: 1,
                    },
                });
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={blurContainerRef}
            className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
        >
            {/* @ts-ignore */}
            <GradualBlur position="bottom" target="parent" strength={4} height="10rem" />
        </div>
    );
}
