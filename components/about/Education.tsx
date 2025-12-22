"use client";

import { Code, BookOpen, Headphones, Trophy } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Education() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title animation
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Description animation
        if (descriptionRef.current) {
            gsap.fromTo(
                descriptionRef.current,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Cards timeline animation
        if (cardsContainerRef.current) {
            const cards = cardsContainerRef.current.children;

            Array.from(cards).forEach((card, index) => {
                // Card reveal
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: index % 2 === 0 ? -60 : 60,
                        rotateY: index % 2 === 0 ? -10 : 10,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        duration: 0.7,
                        delay: index * 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsContainerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // Icon spin
                const icon = card.querySelector("svg");
                if (icon) {
                    gsap.fromTo(
                        icon,
                        {
                            scale: 0,
                            rotation: -180,
                        },
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.5,
                            delay: index * 0.15 + 0.3,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: cardsContainerRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Card hover effect
    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            x: enter ? 10 : 0,
            scale: enter ? 1.02 : 1,
            backgroundColor: enter ? "rgba(255, 255, 255, 0.05)" : "transparent",
            duration: 0.3,
            ease: "power2.out",
        });

        const iconContainer = e.currentTarget.querySelector(".p-2");
        if (iconContainer) {
            gsap.to(iconContainer, {
                scale: enter ? 1.1 : 1,
                rotation: enter ? 5 : 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <section ref={sectionRef} className="mb-20 px-6" style={{ perspective: "1000px" }}>
            <h2
                ref={titleRef}
                className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
            >
                Educación y Certificaciones
            </h2>
            <p
                ref={descriptionRef}
                className="text-lg text-gray-600 dark:text-text-secondary-dark leading-relaxed"
            >
                Constantemente actualizo mis conocimientos a través de cursos, certificaciones y participación activa en la comunidad de desarrolladores.
            </p>
            <div ref={cardsContainerRef} className="mt-8 grid gap-4 md:grid-cols-2">
                <div
                    className="flex items-start gap-4 p-4 rounded-xl border border-transparent transition-all cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                        <Code className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">desarrollador de Software</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Jovenes Creativos - Fundacion ROFE</p>
                    </div>
                </div>
                <div
                    className="flex items-start gap-4 p-4 rounded-xl border border-transparent transition-all cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Bachiller Tecnico Bilingue</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">IEDTB Jorge Nicolas Abello</p>
                    </div>
                </div>
                <div
                    className="flex items-start gap-4 p-4 rounded-xl border border-transparent transition-all cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                        <Headphones className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Tecnico experto bilingüe en BPO </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">SENA</p>
                    </div>
                </div>
                <div
                    className="flex items-start gap-4 p-4 rounded-xl border border-transparent transition-all cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Diplomado en recreación</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Ministerio del deporte</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
