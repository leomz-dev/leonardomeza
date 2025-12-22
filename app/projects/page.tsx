"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function ProjectsPage() {
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            id: "fluxdrive",
            title: "FluxDrive",
            description: "Un reductor de velocidad generador de energía eco-sostenible. Diseñado para aprovechar el tráfico vehicular y convertir la energía cinética en electricidad limpia.",
            image: "https://proinbal.es/web2/wp-content/uploads/2020/12/reductores_de_velocidad_proin_1.jpg",
            link: "#fluxdrive"
        },
        {
            id: "playlib",
            title: "Playlib",
            description: "Plataforma de biblioteca de juegos interactivo. Permite a los usuarios organizar su colección y descubrir nuevos títulos con una comunidad apasionada.",
            image: "/img/playlibCap.png",
            link: "#playlib"
        },
        {
            id: "alertme",
            title: "Alert-Me",
            description: "Sistema integral de alerta temprana para prevenir desastres por desbordamientos en calles y caños via mensajes de texto en tiempo real.",
            image: "/img/alertMeCap.png",
            link: "#alertme"
        },
        {
            id: "Boll-e",
            title: "Ai-BPO",
            description: "call center especializado en atencion al cliente y ventas con IA, en vez de tener un humano, una ia logra lo mismo y con mas efeiciencia.",
            image: "/img/bolleCap.png",
            link: "boll-e-bpo.vercel.app"
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ delay: 0.2 });

        // Title animation
        if (titleRef.current) {
            tl.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.9,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                }
            );
        }

        // Description
        if (descriptionRef.current) {
            tl.fromTo(
                descriptionRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.5"
            );
        }

        // Project cards stagger
        if (gridRef.current) {
            const cards = gridRef.current.querySelectorAll("article");

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.95,
                        rotateX: 10,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        duration: 0.8,
                        delay: 0.3 + index * 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                // Image zoom on scroll
                const image = card.querySelector("img");
                if (image) {
                    gsap.fromTo(
                        image,
                        { scale: 1.2 },
                        {
                            scale: 1,
                            duration: 1.2,
                            delay: 0.3 + index * 0.15,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%",
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

    // Card hover effect with 3D tilt
    const handleCardHover = (e: React.MouseEvent<HTMLElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        gsap.to(card, {
            rotateX: -rotateX,
            rotateY: -rotateY,
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(23, 74, 189, 0.2)",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleCardLeave = (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    };

    // Button hover animation
    const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
        const arrow = e.currentTarget.querySelector("span:last-child");
        if (arrow) {
            gsap.to(arrow, {
                x: enter ? 5 : 0,
                scale: enter ? 1.1 : 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <main className="pt-24 min-h-screen bg-background">
            <section className="section-padding">
                <div className="container-custom" style={{ perspective: "1000px" }}>
                    {/* Hero Title - Mis Proyectos con focus */}
                    <div className="text-center mb-16 md:mb-24">
                        <div ref={titleRef}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                                <span className="inline-block px-4 py-8 bg-clip-text text-transparent bg-linear-to-r from-secondary via-white to-secondary">
                                    <i className="text-6xl md:text-7xl lg:text-8xl">Mis Proyectos</i>
                                </span>
                            </h1>
                        </div>
                        <p
                            ref={descriptionRef}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Una colección de proyectos que demuestran mi experiencia en desarrollo full-stack, diseño UI/UX y soluciones innovadoras.
                        </p>
                    </div>

                    {/* Grid de Proyectos */}
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                id={project.id}
                                className="group rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                                style={{ transformStyle: "preserve-3d" }}
                                onMouseMove={handleCardHover}
                                onMouseLeave={handleCardLeave}
                            >
                                {/* Imagen del Proyecto */}
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Contenido del Proyecto */}
                                <div className="p-6 space-y-4">
                                    {/* Título */}
                                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                                        {project.title}
                                    </h2>

                                    {/* Descripción */}
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Botón View */}
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-3 mt-2 group/btn"
                                        onMouseEnter={(e) => handleButtonHover(e, true)}
                                        onMouseLeave={(e) => handleButtonHover(e, false)}
                                    >
                                        <span className="text-sm font-medium text-foreground">View</span>
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
