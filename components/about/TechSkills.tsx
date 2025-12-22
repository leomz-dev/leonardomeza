"use client";

import { Monitor, Server } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function TechSkills() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
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

        // Cards animation
        if (cardsContainerRef.current) {
            const cards = cardsContainerRef.current.children;

            Array.from(cards).forEach((card, index) => {
                // Card slide in
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: index === 0 ? -80 : 80,
                        rotateY: index === 0 ? -15 : 15,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsContainerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // Icon animation
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
                            duration: 0.6,
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

                // List items stagger
                const listItems = card.querySelectorAll("li");
                gsap.fromTo(
                    listItems,
                    {
                        opacity: 0,
                        x: -20,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.4,
                        stagger: 0.1,
                        delay: index * 0.15 + 0.4,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cardsContainerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // Bullet points pop
                const bullets = card.querySelectorAll(".rounded-full");
                gsap.fromTo(
                    bullets,
                    {
                        scale: 0,
                    },
                    {
                        scale: 1,
                        duration: 0.3,
                        stagger: 0.1,
                        delay: index * 0.15 + 0.5,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: cardsContainerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Card hover effect
    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            y: enter ? -8 : 0,
            scale: enter ? 1.02 : 1,
            boxShadow: enter
                ? "0 20px 40px rgba(0, 0, 0, 0.15)"
                : "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.4,
            ease: "power2.out",
        });

        const icon = e.currentTarget.querySelector("svg");
        if (icon) {
            gsap.to(icon, {
                rotation: enter ? 10 : 0,
                scale: enter ? 1.1 : 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <section ref={sectionRef} className="mb-20 px-6" style={{ perspective: "1000px" }}>
            <h2
                ref={titleRef}
                className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight"
            >
                Habilidades Técnicas
            </h2>
            <div ref={cardsContainerRef} className="grid md:grid-cols-2 gap-6">
                {/* Frontend */}
                <div
                    className="group p-6 rounded-2xl bg-white dark:bg-card-dark/40 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Monitor className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span>
                            React & Next.js
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                            TypeScript
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-3"></span>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-3"></span>
                            Responsive Design
                        </li>
                    </ul>
                </div>

                {/* Backend */}
                <div
                    className="group p-6 rounded-2xl bg-white dark:bg-card-dark/40 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Server className="w-8 h-8 text-green-600 dark:text-green-400" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3"></span>
                            Node.js & Express
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                            PostgreSQL & MongoDB
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3"></span>
                            RESTful APIs
                        </li>
                        <li className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></span>
                            Authentication & Security
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
