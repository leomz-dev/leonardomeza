"use client";

import Link from "next/link";
import Image from "next/image";
import heroImg from "../public/img/heroBack.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Braces, Palette, Lightbulb, Baby, BanknoteArrowUp } from "lucide-react";
// @ts-ignore
import Ribbons from "@/components/ui/ribbons";
import { LogoLoop } from "@/components/ui/carrusel";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleContainerRef = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const logoCarouselRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Master timeline for hero animations
        const tl = gsap.timeline({ delay: 0.3 });

        // Title animation (simple fade-in to preserve gradient)
        if (titleContainerRef.current) {
            tl.fromTo(
                titleContainerRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                }
            );
        }

        // Subtitle animation
        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );

        // Description animation
        tl.fromTo(
            descriptionRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
        );

        // Buttons animation
        if (buttonsRef.current) {
            const buttons = buttonsRef.current.querySelectorAll("button, a");
            tl.fromTo(
                buttons,
                { opacity: 0, y: 30, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                },
                "-=0.3"
            );
        }

        // Mini cards stagger with 3D rotation
        if (cardsContainerRef.current) {
            const cards = cardsContainerRef.current.querySelectorAll(".group");
            tl.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 50,
                    rotateX: -15,
                    rotateY: 10,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "back.out(1.4)",
                },
                "-=0.4"
            );
        }

        // Logo carousel fade in
        tl.fromTo(
            logoCarouselRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.5"
        );

        // Parallax effect on background
        if (backgroundRef.current) {
            gsap.to(backgroundRef.current, {
                y: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Card hover animation
    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            scale: enter ? 1.1 : 1,
            rotateY: enter ? 5 : 0,
            rotateX: enter ? -5 : 0,
            boxShadow: enter
                ? "0 20px 40px rgba(23, 74, 189, 0.3)"
                : "0 0 0 rgba(23, 74, 189, 0)",
            duration: 0.4,
            ease: "power2.out",
        });
    };

    // Button hover animation
    const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            scale: enter ? 1.05 : 1,
            y: enter ? -3 : 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <div ref={backgroundRef} className="absolute inset-0 z-0">
                <Image
                    src={heroImg}
                    alt="Hero background"
                    fill
                    className="object-cover object-[center_top] sm:object-center md:object-[center_-100px] lg:object-[center_-200px]"
                    priority
                    quality={90}
                />
            </div>

            {/* Ribbons Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <Ribbons
                    colors={['#174abd', '#FFD700', '#174abd', '#ffffff']}
                    baseThickness={20}
                    baseFriction={0.05}
                    speedMultiplier={0.5}
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 sm:py-20">
                <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-12">
                    <h1 className="text-balance leading-tight">
                        <span
                            ref={titleContainerRef}
                            className="bg-clip-text text-transparent bg-linear-to-r from-secondary via-secondary/50 to-secondary/20 block"
                        >
                            <i className="text-3xl sm:text-4xl md:text-5xl">Leonardo Meza</i>
                        </span>
                        <span
                            ref={subtitleRef}
                            className="text-primary text-base sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 block"
                        >
                            "Vive el hoy, planea el mañana"
                        </span>
                    </h1>

                    <p
                        ref={descriptionRef}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-primary mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
                    >
                        Tecnologia, Investigacion, Deporte, Recreacion
                    </p>

                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                        <Button
                            asChild
                            size="lg"
                            className="group bg-primary text-background hover:bg-primary/90 shadow-lg text-sm sm:text-base"
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                        >
                            <Link href="/projects">
                                Ver mis proyectos
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-primary/50 bg-card/30 text-primary hover:bg-primary/10 hover:text-primary backdrop-blur-sm text-sm sm:text-base"
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                        >
                            <Link href="/contact">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Hablar conmigo
                            </Link>
                        </Button>
                    </div>

                    {/* Mini Skills Cards */}
                    <div
                        ref={cardsContainerRef}
                        className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 max-w-xs sm:max-w-3xl mx-auto px-2 sm:px-0"
                        style={{ perspective: "1000px" }}
                    >
                        <div
                            className="group h-10 sm:h-12 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 cursor-pointer"
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 h-full">
                                <Braces className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                                <div className="h-3 sm:h-4 w-px bg-primary/30 hidden sm:block"></div>
                                <h4 className="text-[10px] sm:text-xs font-semibold text-primary whitespace-nowrap">Desarrollador</h4>
                            </div>
                        </div>

                        <div
                            className="group h-10 sm:h-12 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 cursor-pointer"
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 h-full">
                                <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                                <div className="h-3 sm:h-4 w-px bg-primary/30 hidden sm:block"></div>
                                <h4 className="text-[10px] sm:text-xs font-semibold text-primary whitespace-nowrap">Diseñador</h4>
                            </div>
                        </div>

                        <div
                            className="group h-10 sm:h-12 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 cursor-pointer"
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 h-full">
                                <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                                <div className="h-3 sm:h-4 w-px bg-primary/30 hidden sm:block"></div>
                                <h4 className="text-[10px] sm:text-xs font-semibold text-primary whitespace-nowrap">Investigador</h4>
                            </div>
                        </div>

                        <div
                            className="group h-10 sm:h-12 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 cursor-pointer"
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 h-full">
                                <Baby className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                                <div className="h-3 sm:h-4 w-px bg-primary/30 hidden sm:block"></div>
                                <h4 className="text-[10px] sm:text-xs font-semibold text-primary whitespace-nowrap">Recreador</h4>
                            </div>
                        </div>

                        <div
                            className="group col-span-2 sm:col-span-1 h-10 sm:h-12 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 mx-auto sm:mx-0 w-fit cursor-pointer"
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 h-full">
                                <BanknoteArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                                <div className="h-3 sm:h-4 w-px bg-primary/30 hidden sm:block"></div>
                                <h4 className="text-[10px] sm:text-xs font-semibold text-primary whitespace-nowrap">Emprendedor</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Carousel */}
                <div ref={logoCarouselRef} className="w-full max-w-4xl mt-6 sm:mt-8 px-4 sm:px-0">
                    <LogoLoop
                        logos={[
                            {
                                node: <Image
                                    src="/logos/logoMindeporte.png"
                                    alt="Mindeporte"
                                    width={100}
                                    height={50}
                                    className="object-contain opacity-60 hover:opacity-100 transition-opacity bg-white p-2 sm:p-3 rounded w-[80px] sm:w-[120px] h-auto"
                                />
                            },
                            {
                                node: <Image
                                    src="/logos/logoRedcolsi.png"
                                    alt="Redcolsi"
                                    width={100}
                                    height={50}
                                    className="object-contain opacity-60 hover:opacity-100 transition-opacity w-[80px] sm:w-[120px] h-auto"
                                />
                            },
                        ]}
                        speed={50}
                        direction="left"
                        gap={30}
                        pauseOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
}
