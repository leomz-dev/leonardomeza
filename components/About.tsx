"use client";

import Image from "next/image";
import { Trees, Braces, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Image reveal with clip-path
        if (imageContainerRef.current) {
            gsap.fromTo(
                imageContainerRef.current,
                {
                    clipPath: "inset(0 100% 0 0)",
                    opacity: 0,
                },
                {
                    clipPath: "inset(0 0% 0 0)",
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: imageContainerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Image inner scale effect
            const imageElement = imageContainerRef.current.querySelector("img");
            if (imageElement) {
                gsap.fromTo(
                    imageElement,
                    { scale: 1.3 },
                    {
                        scale: 1,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: imageContainerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }

        // Title animation with gradient reveal
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Features stagger animation
        if (featuresRef.current) {
            const features = featuresRef.current.querySelectorAll(".flex.gap-4");

            features.forEach((feature, index) => {
                const icon = feature.querySelector(".bg-secondary\\/10, .bg-purple-500\\/10, .bg-teal-500\\/10");
                const content = feature.querySelector("div:last-child");

                // Feature container slide in
                gsap.fromTo(
                    feature,
                    {
                        opacity: 0,
                        x: 80,
                        rotateY: 10,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: feature,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // Icon rotation
                if (icon) {
                    gsap.fromTo(
                        icon,
                        {
                            rotation: -180,
                            scale: 0,
                        },
                        {
                            rotation: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: index * 0.2 + 0.3,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: feature,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }
            });
        }

        // Quote animation at bottom
        const quote = sectionRef.current?.querySelector(".italic");
        if (quote) {
            gsap.fromTo(
                quote,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: quote,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Hover effect for feature cards
    const handleFeatureHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            x: enter ? 10 : 0,
            scale: enter ? 1.02 : 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    // Arrow hover animation
    const handleArrowHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
        const arrow = e.currentTarget.querySelector("svg");
        if (arrow) {
            gsap.to(arrow, {
                x: enter ? 5 : 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                        <div
                            ref={imageContainerRef}
                            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square sm:aspect-4/5 lg:aspect-square"
                        >
                            <Image
                                src="/img/aboutImg.png"
                                alt="Leonardo Meza"
                                fill
                                className="object-cover object-[40%_30%] transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div ref={contentRef} className="flex flex-col space-y-8">
                        <div>
                            <h2 ref={titleRef} className="mb-4 text-4xl font-bold tracking-tight">
                                Desarrollando <span className="inline-block px-2 pb-3 bg-clip-text text-transparent bg-linear-to-r from-secondary to-white"><i className="text-5xl">soluciones</i></span> para un mundo en evolucion
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Me enfoco en resolver problemas complejos con soluciones que sean eficientes y escalables.
                            </p>
                        </div>

                        {/* Features List */}
                        <div ref={featuresRef} className="space-y-6">
                            {/* Feature 1 */}
                            <div
                                className="flex gap-4 cursor-pointer"
                                onMouseEnter={(e) => handleFeatureHover(e, true)}
                                onMouseLeave={(e) => handleFeatureHover(e, false)}
                            >
                                <div className="mt-1 bg-secondary/10 p-2 rounded-lg h-fit">
                                    <Trees className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Investigador </h3>
                                    <p className="text-muted-foreground">
                                        He desarrollado proyectos innovadores que resuelven problemas ambientales como el cambio climático, la generacion de energías renovables y la reduccion de la contaminacion.
                                    </p>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center mt-2 text-secondary hover:text-secondary/80 font-medium text-sm transition-colors"
                                        onMouseEnter={(e) => handleArrowHover(e, true)}
                                        onMouseLeave={(e) => handleArrowHover(e, false)}
                                    >
                                        Ver proyectos <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div
                                className="flex gap-4 cursor-pointer"
                                onMouseEnter={(e) => handleFeatureHover(e, true)}
                                onMouseLeave={(e) => handleFeatureHover(e, false)}
                            >
                                <div className="mt-1 bg-purple-500/10 p-2 rounded-lg h-fit">
                                    <Zap className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Recreador</h3>
                                    <p className="text-muted-foreground">
                                        Soy lider formador de mas de 200 jovenes en recreacion, campismo, habilidades para la vida y desarrollo personal.
                                    </p>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center mt-2 text-purple-500 hover:text-purple-400 font-medium text-sm transition-colors"
                                        onMouseEnter={(e) => handleArrowHover(e, true)}
                                        onMouseLeave={(e) => handleArrowHover(e, false)}
                                    >
                                        Conoce mas <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div
                                className="flex gap-4 cursor-pointer"
                                onMouseEnter={(e) => handleFeatureHover(e, true)}
                                onMouseLeave={(e) => handleFeatureHover(e, false)}
                            >
                                <div className="mt-1 bg-teal-500/10 p-2 rounded-lg h-fit">
                                    <Braces className="w-6 h-6 text-teal-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Desarrollador</h3>
                                    <p className="text-muted-foreground">
                                        Desarrollo de software con tecnologías modernas y buenas prácticas de codificación.
                                    </p>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center mt-2 text-teal-500 hover:text-teal-400 font-medium text-sm transition-colors"
                                        onMouseEnter={(e) => handleArrowHover(e, true)}
                                        onMouseLeave={(e) => handleArrowHover(e, false)}
                                    >
                                        Ver proyectos <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground/80 italic">
                                "Comprometido con la excelencia y el desarrollo personal."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <BackgroundBeams />
        </section >
    );
}
