"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Default easing for smooth animations
const defaultEase = "power3.out";
const elasticEase = "elastic.out(1, 0.5)";
const bounceEase = "back.out(1.7)";

/**
 * Hook for fade-in animation on mount
 */
export function useGSAPFadeIn(
    ref: RefObject<HTMLElement | null>,
    options: {
        delay?: number;
        duration?: number;
        y?: number;
        x?: number;
        scale?: number;
        rotation?: number;
    } = {}
) {
    const { delay = 0, duration = 1, y = 50, x = 0, scale = 1, rotation = 0 } = options;

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y,
                x,
                scale: scale === 1 ? 0.95 : scale,
                rotation,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotation: 0,
                duration,
                delay,
                ease: defaultEase,
            }
        );
    }, [ref, delay, duration, y, x, scale, rotation]);
}

/**
 * Hook for stagger animation on children
 */
export function useGSAPStagger(
    containerRef: RefObject<HTMLElement | null>,
    selector: string,
    options: {
        delay?: number;
        duration?: number;
        stagger?: number;
        y?: number;
        x?: number;
        rotation?: number;
        scale?: number;
    } = {}
) {
    const { delay = 0, duration = 0.8, stagger = 0.1, y = 40, x = 0, rotation = 0, scale = 0.9 } = options;

    useEffect(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.querySelectorAll(selector);
        if (elements.length === 0) return;

        gsap.fromTo(
            elements,
            {
                opacity: 0,
                y,
                x,
                rotation,
                scale,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                rotation: 0,
                scale: 1,
                duration,
                delay,
                stagger,
                ease: bounceEase,
            }
        );
    }, [containerRef, selector, delay, duration, stagger, y, x, rotation, scale]);
}

/**
 * Hook for scroll-triggered reveal animation
 */
export function useGSAPScrollReveal(
    ref: RefObject<HTMLElement | null>,
    options: {
        start?: string;
        end?: string;
        y?: number;
        x?: number;
        rotation?: number;
        scale?: number;
        duration?: number;
        scrub?: boolean | number;
        markers?: boolean;
    } = {}
) {
    const {
        start = "top 85%",
        end = "top 20%",
        y = 80,
        x = 0,
        rotation = 0,
        scale = 0.95,
        duration = 1,
        scrub = false,
        markers = false,
    } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y,
                x,
                rotation,
                scale,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                rotation: 0,
                scale: 1,
                duration,
                ease: defaultEase,
                scrollTrigger: {
                    trigger: element,
                    start,
                    end,
                    scrub,
                    markers,
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref, start, end, y, x, rotation, scale, duration, scrub, markers]);
}

/**
 * Hook for scroll-triggered stagger animation
 */
export function useGSAPScrollStagger(
    containerRef: RefObject<HTMLElement | null>,
    selector: string,
    options: {
        start?: string;
        stagger?: number;
        y?: number;
        x?: number;
        duration?: number;
        rotation?: number;
    } = {}
) {
    const { start = "top 80%", stagger = 0.15, y = 60, x = 0, duration = 0.8, rotation = 0 } = options;

    useEffect(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.querySelectorAll(selector);
        if (elements.length === 0) return;

        gsap.fromTo(
            elements,
            {
                opacity: 0,
                y,
                x,
                rotation,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                rotation: 0,
                scale: 1,
                duration,
                stagger,
                ease: bounceEase,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start,
                    toggleActions: "play none none reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === containerRef.current) {
                    trigger.kill();
                }
            });
        };
    }, [containerRef, selector, start, stagger, y, x, duration, rotation]);
}

/**
 * Hook for parallax effect on scroll
 */
export function useGSAPParallax(
    ref: RefObject<HTMLElement | null>,
    options: {
        speed?: number;
        direction?: "up" | "down";
    } = {}
) {
    const { speed = 50, direction = "up" } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        const yValue = direction === "up" ? -speed : speed;

        gsap.to(element, {
            y: yValue,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref, speed, direction]);
}

/**
 * Hook for text character-by-character animation
 */
export function useGSAPTextReveal(
    ref: RefObject<HTMLElement | null>,
    options: {
        delay?: number;
        duration?: number;
        stagger?: number;
        useScrollTrigger?: boolean;
    } = {}
) {
    const { delay = 0, duration = 0.05, stagger = 0.03, useScrollTrigger = false } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        const text = element.innerText;
        element.innerHTML = "";

        // Split text into characters
        const chars = text.split("").map((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.display = "inline-block";
            span.style.opacity = "0";
            span.style.transform = "translateY(20px) rotateX(-90deg)";
            element.appendChild(span);
            return span;
        });

        const animationConfig: gsap.TweenVars = {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration,
            stagger,
            delay,
            ease: "power2.out",
        };

        if (useScrollTrigger) {
            animationConfig.scrollTrigger = {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
            };
        }

        gsap.to(chars, animationConfig);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref, delay, duration, stagger, useScrollTrigger]);
}

/**
 * Hook for magnetic hover effect
 */
export function useGSAPMagnetic(
    ref: RefObject<HTMLElement | null>,
    options: {
        strength?: number;
    } = {}
) {
    const { strength = 0.3 } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(element, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: elasticEase,
            });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [ref, strength]);
}

/**
 * Hover scale animation utility
 */
export function createHoverAnimation(element: HTMLElement, scale: number = 1.05) {
    const enterAnimation = () => {
        gsap.to(element, {
            scale,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const leaveAnimation = () => {
        gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    element.addEventListener("mouseenter", enterAnimation);
    element.addEventListener("mouseleave", leaveAnimation);

    return () => {
        element.removeEventListener("mouseenter", enterAnimation);
        element.removeEventListener("mouseleave", leaveAnimation);
    };
}

/**
 * Floating animation for decorative elements
 */
export function useGSAPFloat(
    ref: RefObject<HTMLElement | null>,
    options: {
        amplitude?: number;
        duration?: number;
    } = {}
) {
    const { amplitude = 20, duration = 3 } = options;

    useEffect(() => {
        if (!ref.current) return;

        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(ref.current, {
            y: -amplitude,
            duration,
            ease: "sine.inOut",
        });

        return () => {
            tl.kill();
        };
    }, [ref, amplitude, duration]);
}

/**
 * Counter animation for numbers
 */
export function animateCounter(
    element: HTMLElement,
    endValue: number,
    options: {
        duration?: number;
        prefix?: string;
        suffix?: string;
    } = {}
) {
    const { duration = 2, prefix = "", suffix = "" } = options;

    gsap.fromTo(
        { value: 0 },
        { value: endValue },
        {
            duration,
            ease: "power2.out",
            onUpdate: function () {
                element.textContent = `${prefix}${Math.round(this.targets()[0].value)}${suffix}`;
            },
        }
    );
}

/**
 * Line drawing animation for SVG paths
 */
export function useGSAPDrawLine(
    ref: RefObject<SVGPathElement | null>,
    options: {
        duration?: number;
        delay?: number;
        useScrollTrigger?: boolean;
    } = {}
) {
    const { duration = 2, delay = 0, useScrollTrigger = false } = options;

    useEffect(() => {
        if (!ref.current) return;

        const path = ref.current;
        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        const animationConfig: gsap.TweenVars = {
            strokeDashoffset: 0,
            duration,
            delay,
            ease: "power2.inOut",
        };

        if (useScrollTrigger) {
            animationConfig.scrollTrigger = {
                trigger: path,
                start: "top 80%",
                toggleActions: "play none none reverse",
            };
        }

        gsap.to(path, animationConfig);
    }, [ref, duration, delay, useScrollTrigger]);
}

/**
 * Clip path reveal animation
 */
export function useGSAPClipReveal(
    ref: RefObject<HTMLElement | null>,
    options: {
        direction?: "left" | "right" | "top" | "bottom";
        duration?: number;
        delay?: number;
        useScrollTrigger?: boolean;
    } = {}
) {
    const { direction = "left", duration = 1, delay = 0, useScrollTrigger = false } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const clipPaths = {
            left: { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" },
            right: { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" },
            top: { from: "inset(100% 0 0 0)", to: "inset(0% 0 0 0)" },
            bottom: { from: "inset(0 0 100% 0)", to: "inset(0 0 0% 0)" },
        };

        const { from, to } = clipPaths[direction];

        gsap.set(element, { clipPath: from });

        const animationConfig: gsap.TweenVars = {
            clipPath: to,
            duration,
            delay,
            ease: "power3.inOut",
        };

        if (useScrollTrigger) {
            animationConfig.scrollTrigger = {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
            };
        }

        gsap.to(element, animationConfig);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [ref, direction, duration, delay, useScrollTrigger]);
}

/**
 * 3D tilt effect on hover
 */
export function useGSAPTilt(
    ref: RefObject<HTMLElement | null>,
    options: {
        maxRotation?: number;
        perspective?: number;
    } = {}
) {
    const { maxRotation = 10, perspective = 1000 } = options;

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        element.style.perspective = `${perspective}px`;
        element.style.transformStyle = "preserve-3d";

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            const rotateY = (mouseX / (rect.width / 2)) * maxRotation;
            const rotateX = -(mouseY / (rect.height / 2)) * maxRotation;

            gsap.to(element, {
                rotateX,
                rotateY,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: elasticEase,
            });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [ref, maxRotation, perspective]);
}

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
