"use client";

import { useRef, useEffect } from "react";
import MasonryGallery from "@/components/ui/mansorygallery";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Gallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const moments = [
        {
            title: "Conferencia Tech Summit 2024",
            description: "Presentando sobre desarrollo web moderno",
            image: "/gallery/conference.jpg"
        },
        {
            title: "Proyecto en Equipo",
            description: "Colaborando con el equipo de desarrollo",
            image: "/gallery/team.jpg"
        },
        {
            title: "Workshop de React",
            description: "Enseñando React a la comunidad local",
            image: "/gallery/workshop.jpg"
        },
        {
            title: "Hackathon 2024",
            description: "Ganador del primer lugar",
            image: "/gallery/hackathon.jpg"
        },
        {
            title: "Meetup de Desarrolladores",
            description: "Networking con la comunidad tech",
            image: "/gallery/meetup.jpg"
        },
        {
            title: "Lanzamiento de Producto",
            description: "Celebrando el éxito del proyecto",
            image: "/gallery/launch.jpg"
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title text scramble effect
        if (titleRef.current) {
            const originalText = titleRef.current.innerText;
            const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

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
                    onStart: () => {
                        let iteration = 0;
                        const interval = setInterval(() => {
                            if (!titleRef.current) {
                                clearInterval(interval);
                                return;
                            }
                            titleRef.current.innerText = originalText
                                .split("")
                                .map((char, index) => {
                                    if (index < iteration) {
                                        return originalText[index];
                                    }
                                    if (char === " ") return " ";
                                    return chars[Math.floor(Math.random() * chars.length)];
                                })
                                .join("");

                            if (iteration >= originalText.length) {
                                clearInterval(interval);
                                titleRef.current.innerText = originalText;
                            }

                            iteration += 1;
                        }, 40);
                    },
                }
            );
        }

        // Gallery container reveal
        if (galleryRef.current) {
            gsap.fromTo(
                galleryRef.current,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: galleryRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Individual items stagger (targeting images inside MasonryGallery)
            const galleryItems = galleryRef.current.querySelectorAll("img");
            if (galleryItems.length > 0) {
                gsap.fromTo(
                    galleryItems,
                    {
                        opacity: 0,
                        scale: 0.8,
                        y: 40,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        delay: 0.3,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: galleryRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-accent/30">
            <div className="container-custom">
                <h2 ref={titleRef} className="mb-12">Momentos destacados</h2>

                <div ref={galleryRef} className="mt-8">
                    <MasonryGallery
                        items={moments.map(m => ({
                            src: m.image,
                            alt: m.title,
                            title: m.title,
                            description: m.description
                        }))}
                    />
                </div>
            </div>
        </section>
    );
}
