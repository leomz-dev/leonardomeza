"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function FeaturedWork() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const projectsContainerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: "FluxDrive",
            description: "Un reductor de velocidad generador de energia eco-sostenible. Diseñado para aprovechar el tráfico vehicular y convertir la energía cinética en electricidad limpia para la iluminación pública.",
            tags: ["Investigacion", "Innovacion", "Energia", "Eco-sostenible"],
            href: "/projects#fluxdrive",
            image: "https://proinbal.es/web2/wp-content/uploads/2020/12/reductores_de_velocidad_proin_1.jpg",
            demoLink: "#",
            learnMoreLink: "/projects#fluxdrive"
        },
        {
            title: "Playlib",
            description: "Plataforma de biblioteca de juegos interactivo. Permite a los usuarios organizar su colección, descubrir nuevos títulos y compartir reseñas con una comunidad apasionada.",
            tags: ["Next.js", "TypeScript", "TailwindCSS", "Node.js"],
            href: "/projects#playlib",
            image: "/img/playlibCap.png",
            demoLink: "playlib-frontend.vercel.app",
            learnMoreLink: "/projects#playlib"
        },
        {
            title: "Alert-Me",
            description: "Alert-Me es un sistema integral de alerta temprana para prevenir desastres por desbordamientos en calles y caños via mensajes de texto y notificaciones en tiempo real.",
            tags: ["Investigacion", "Innovacion", "SAT", "Eco-sostenible"],
            href: "/projects#alert-me",
            image: "/img/alertMeCap.png",
            demoLink: "alert-me-one.vercel.app",
            learnMoreLink: "/projects#alert-me"
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title animation
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
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

        // Projects animation
        if (projectsContainerRef.current) {
            const projectCards = projectsContainerRef.current.children;

            Array.from(projectCards).forEach((card, index) => {
                const imageSection = card.querySelector(".flex-1.w-full");
                const textSection = card.querySelector(".flex-1.space-y-3");
                const isEven = index % 2 === 0;

                // Image section animation
                if (imageSection) {
                    gsap.fromTo(
                        imageSection,
                        {
                            opacity: 0,
                            x: isEven ? -100 : 100,
                            rotateY: isEven ? -15 : 15,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            rotateY: 0,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }

                // Text section animation
                if (textSection) {
                    gsap.fromTo(
                        textSection,
                        {
                            opacity: 0,
                            x: isEven ? 100 : -100,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 1,
                            delay: 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );

                    // Badges stagger
                    const badges = textSection.querySelectorAll(".flex-wrap > span");
                    if (badges.length > 0) {
                        gsap.fromTo(
                            badges,
                            {
                                opacity: 0,
                                scale: 0,
                                y: 20,
                            },
                            {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                duration: 0.4,
                                stagger: 0.1,
                                delay: 0.5,
                                ease: "back.out(1.7)",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top 80%",
                                    toggleActions: "play none none reverse",
                                },
                            }
                        );
                    }
                }
            });
        }

        // CTA button animation
        if (ctaRef.current) {
            gsap.fromTo(
                ctaRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
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

    // 3D tilt effect on project cards
    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(card, {
            rotateX: -rotateX,
            rotateY: -rotateY,
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    };

    // Button hover animations
    const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            scale: enter ? 1.05 : 1,
            y: enter ? -2 : 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    return (
        <section ref={sectionRef} className="section-padding overflow-hidden">
            <div className="container-custom">
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="mb-4">Proyectos <span className="inline-block px-3 py-2 bg-clip-text text-transparent bg-linear-to-r from-secondary to-white"><i className="text-5xl">favoritos</i></span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Una selección de mis trabajos más recientes y destacados, donde combino innovación, diseño y funcionalidad.
                    </p>
                </div>

                <div ref={projectsContainerRef} className="space-y-24 md:space-y-32" style={{ perspective: "1000px" }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                            style={{ transformStyle: "preserve-3d" }}
                        >

                            {/* Image Content */}
                            <div
                                className="flex-1 w-full relative group"
                                onMouseMove={handleCardHover}
                                onMouseLeave={handleCardLeave}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-xl blur-3xl opacity-30 -z-10 transition-opacity duration-500 group-hover:opacity-50" />
                                <div className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-500">
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <div className="ml-4 h-6 w-full max-w-[200px] rounded-full bg-background border border-border text-xs flex items-center px-3 text-foreground truncate shadow-sm">
                                            {project.title.toLowerCase()}.com
                                        </div>
                                    </div>
                                    <div className="aspect-video w-full relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 space-y-3">
                                <h3 className="inline-block px-3 py-4 bg-clip-text text-transparent bg-linear-to-r from-secondary to-white"><i className="text-5xl">
                                    {project.title}
                                </i>
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed -mt-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge
                                            key={tagIndex}
                                            variant="secondary"
                                            className="font-normal bg-secondary/20 backdrop-blur-md text-secondary-foreground border border-secondary/30 px-3 py-1"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        asChild
                                        className="gap-2"
                                        onMouseEnter={(e) => handleButtonHover(e, true)}
                                        onMouseLeave={(e) => handleButtonHover(e, false)}
                                    >
                                        <Link href={project.demoLink}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16" /></svg>
                                            Demo
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        asChild
                                        className="gap-2"
                                        onMouseEnter={(e) => handleButtonHover(e, true)}
                                        onMouseLeave={(e) => handleButtonHover(e, false)}
                                    >
                                        <Link href={project.learnMoreLink}>
                                            Saber más
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={ctaRef} className="text-center mt-20">
                    <Button
                        asChild
                        variant="ghost"
                        size="lg"
                        className="group text-lg"
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                    >
                        <Link href="/projects">
                            Ver todos los proyectos
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
