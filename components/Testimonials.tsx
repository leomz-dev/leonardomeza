"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            quote: "Leonardo entregó un proyecto excepcional que superó nuestras expectativas. Su atención al detalle y profesionalismo son incomparables.",
            author: "María González",
            title: "CEO, TechStart Colombia"
        },
        {
            quote: "Trabajar con Leonardo fue una experiencia fantástica. Transformó nuestra visión en una realidad digital impresionante.",
            author: "Carlos Méndez",
            title: "Director de Producto, InnovateLab"
        },
        {
            quote: "La capacidad de Leonardo para resolver problemas complejos y crear soluciones elegantes es verdaderamente admirable.",
            author: "Ana Rodríguez",
            title: "CTO, Digital Solutions"
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
                    y: 50,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
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

        // Cards stagger animation
        if (cardsContainerRef.current) {
            const cards = cardsContainerRef.current.children;

            Array.from(cards).forEach((card, index) => {
                // Card slide up
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 80,
                        rotateX: 15,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
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

                // Quote icon animation
                const quoteIcon = card.querySelector(".lucide-quote");
                if (quoteIcon) {
                    gsap.fromTo(
                        quoteIcon,
                        {
                            opacity: 0,
                            scale: 0,
                            rotation: -180,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 0.6,
                            delay: index * 0.15 + 0.4,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: cardsContainerRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }

                // Text reveal
                const quoteText = card.querySelector(".text-lg");
                if (quoteText) {
                    gsap.fromTo(
                        quoteText,
                        {
                            opacity: 0,
                            y: 20,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: index * 0.15 + 0.3,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: cardsContainerRef.current,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                }

                // Author slide up
                const authorSection = card.querySelector(".border-t");
                if (authorSection) {
                    gsap.fromTo(
                        authorSection,
                        {
                            opacity: 0,
                            y: 20,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: index * 0.15 + 0.5,
                            ease: "power2.out",
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
            y: enter ? -10 : 0,
            scale: enter ? 1.03 : 1,
            boxShadow: enter
                ? "0 25px 50px rgba(0, 0, 0, 0.2)"
                : "0 0 0 rgba(0, 0, 0, 0)",
            duration: 0.4,
            ease: "power2.out",
        });

        // Quote icon pulse on hover
        const quoteIcon = e.currentTarget.querySelector(".lucide-quote");
        if (quoteIcon) {
            gsap.to(quoteIcon, {
                scale: enter ? 1.2 : 1,
                rotation: enter ? 10 : 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <section ref={sectionRef} className="section-padding" style={{ perspective: "1000px" }}>
            <div className="container-custom">
                <h2 ref={titleRef} className="mb-12">Lo que dicen sobre mí</h2>

                <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-border/50 shadow-sm transition-all duration-300 cursor-pointer"
                            style={{ transformStyle: "preserve-3d" }}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                <p className="text-lg mb-6 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                                <div className="border-t border-border/50 pt-4">
                                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{testimonial.title}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
