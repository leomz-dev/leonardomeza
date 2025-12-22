"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    const sectionRef = useRef<HTMLElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const infoCardsRef = useRef<HTMLDivElement>(null);
    const formCardRef = useRef<HTMLDivElement>(null);
    const decorativeRef1 = useRef<HTMLDivElement>(null);
    const decorativeRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ delay: 0.2 });

        // Subtitle animation
        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        // Title split text animation
        if (titleRef.current) {
            tl.fromTo(
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
                },
                "-=0.3"
            );
        }

        // Description
        tl.fromTo(
            descriptionRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
        );

        // Info cards slide in from left
        if (infoCardsRef.current) {
            const cards = infoCardsRef.current.children;
            tl.fromTo(
                cards,
                {
                    opacity: 0,
                    x: -50,
                    rotateY: -15,
                },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                "-=0.3"
            );
        }

        // Form card scale up from center with blur
        if (formCardRef.current) {
            tl.fromTo(
                formCardRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 50,
                    filter: "blur(10px)",
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );

            // Form inputs stagger
            const inputs = formCardRef.current.querySelectorAll("input, select, textarea");
            tl.fromTo(
                inputs,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.4"
            );

            // Submit button bounce in
            const submitBtn = formCardRef.current.querySelector("button[type='submit']");
            if (submitBtn) {
                tl.fromTo(
                    submitBtn,
                    {
                        opacity: 0,
                        scale: 0,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(1.7)",
                    },
                    "-=0.2"
                );

                // Continuous pulse animation on submit button
                gsap.to(submitBtn, {
                    boxShadow: "0 0 30px rgba(23, 74, 189, 0.5)",
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        }

        // Floating animation for decorative elements
        if (decorativeRef1.current) {
            gsap.to(decorativeRef1.current, {
                y: -20,
                x: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        if (decorativeRef2.current) {
            gsap.to(decorativeRef2.current, {
                y: 15,
                x: -15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Button animation on submit
        const btn = e.currentTarget.querySelector("button[type='submit']");
        if (btn) {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out",
            });
        }

        console.log("Form submitted:", formData);
        alert("¡Gracias por tu mensaje! Te responderé pronto.");
        setFormData({ name: "", email: "", service: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Focus animation for inputs
    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1.02,
            boxShadow: "0 0 20px rgba(23, 74, 189, 0.3)",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    // Info card hover
    const handleInfoHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            x: enter ? 10 : 0,
            scale: enter ? 1.02 : 1,
            duration: 0.3,
            ease: "power2.out",
        });

        const icon = e.currentTarget.querySelector(".w-12");
        if (icon) {
            gsap.to(icon, {
                scale: enter ? 1.1 : 1,
                rotation: enter ? 5 : 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <section ref={sectionRef} className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Side - Info */}
                        <div className="space-y-8">
                            {/* Subtitle */}
                            <p
                                ref={subtitleRef}
                                className="text-sm uppercase tracking-widest text-muted-foreground font-medium"
                            >
                                Estoy aquí para ayudarte
                            </p>

                            {/* Main Title */}
                            <h1
                                ref={titleRef}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                <span className="text-secondary"><i className="bg-clip-text text-transparent bg-linear-to-r from-secondary via-secondary/70 to-secondary/40">Hablemos</i></span> sobre tu próximo proyecto
                            </h1>

                            {/* Description */}
                            <p
                                ref={descriptionRef}
                                className="text-lg text-muted-foreground max-w-md leading-relaxed"
                            >
                                ¿Tienes una idea increíble en mente? Me encantaría escucharla y ayudarte a hacerla realidad. Contáctame.
                            </p>

                            {/* Contact Info Cards */}
                            <div ref={infoCardsRef} className="space-y-4 pt-4" style={{ perspective: "1000px" }}>
                                {/* Email */}
                                <div
                                    className="flex items-center gap-4 group cursor-pointer"
                                    onMouseEnter={(e) => handleInfoHover(e, true)}
                                    onMouseLeave={(e) => handleInfoHover(e, false)}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center transition-colors">
                                        <Mail className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">E-mail</p>
                                        <a
                                            href="mailto:leomeza152463@gmail.com"
                                            className="text-foreground font-medium hover:text-secondary transition-colors"
                                        >
                                            leomeza152463@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div
                                    className="flex items-center gap-4 group cursor-pointer"
                                    onMouseEnter={(e) => handleInfoHover(e, true)}
                                    onMouseLeave={(e) => handleInfoHover(e, false)}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center transition-colors">
                                        <Phone className="w-5 h-5 text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Teléfono</p>
                                        <a
                                            href="tel:+573046101560"
                                            className="text-foreground font-medium hover:text-secondary transition-colors"
                                        >
                                            +57 304 610 1560
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form Card */}
                        <div className="relative">
                            {/* Glassmorphism Card */}
                            <div
                                ref={formCardRef}
                                className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl shadow-black/20"
                            >
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent rounded-2xl pointer-events-none" />

                                <form onSubmit={handleSubmit} className="relative space-y-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            required
                                            placeholder="Tu nombre"
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            required
                                            placeholder="tu@email.com"
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all"
                                        />
                                    </div>

                                    {/* Service Select */}
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="block text-sm font-medium text-muted-foreground">
                                            Servicio
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all appearance-none cursor-pointer"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a1a1aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 1rem center',
                                                backgroundSize: '1.25rem',
                                            }}
                                        >
                                            <option value="" disabled className="bg-card text-muted-foreground">
                                                Selecciona un servicio...
                                            </option>
                                            <option value="web" className="bg-card text-foreground">Desarrollo Web</option>
                                            <option value="mobile" className="bg-card text-foreground">Desarrollo Móvil</option>
                                            <option value="design" className="bg-card text-foreground">Diseño UI/UX</option>
                                            <option value="consulting" className="bg-card text-foreground">Consultoría</option>
                                            <option value="other" className="bg-card text-foreground">Otro</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            required
                                            rows={4}
                                            placeholder="Cuéntame sobre tu proyecto..."
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="group flex items-center gap-3 w-50px pl-2 pr-6 py-2 rounded-full bg-secondary text-white font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                            <ArrowRight className="w-5 h-5 text-secondary transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                        <span className="flex-1 text-center">Enviar mensaje</span>
                                    </button>
                                </form>
                            </div>

                            {/* Decorative Elements */}
                            <div ref={decorativeRef1} className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
                            <div ref={decorativeRef2} className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
