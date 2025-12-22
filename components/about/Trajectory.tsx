"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Trajectory() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title animation
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    x: -50,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    x: 0,
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

        // Content with typing reveal effect
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Underline animation for emphasis
            const underline = document.createElement("div");
            underline.className = "w-16 h-1 bg-gradient-to-r from-secondary to-purple-500 rounded-full mt-8";
            underline.style.transform = "scaleX(0)";
            underline.style.transformOrigin = "left";
            contentRef.current.appendChild(underline);

            gsap.to(underline, {
                scaleX: 1,
                duration: 0.8,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="mb-20 px-6">
            <h2
                ref={titleRef}
                className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
            >
                Mi Trayectoria
            </h2>
            <div
                ref={contentRef}
                className="space-y-6 text-gray-600 dark:text-zinc-400 leading-relaxed text-lg"
            >
                Mi trayectoria comienza en procesos de formación juvenil, donde descubrí el liderazgo como una práctica basada en el servicio, el trabajo en equipo y la acción comunitaria. Estos espacios me permitieron desarrollar habilidades humanas clave y acompañar a otros en su crecimiento personal y colectivo. <br />
                <br />
                Con el tiempo, integré la educación y la tecnología a este camino, formándome en desarrollo web y herramientas digitales aplicadas a proyectos sociales y educativos. Hoy trabajo en iniciativas que conectan liderazgo, aprendizaje e innovación digital, con el propósito de generar impacto real, potenciar talentos y construir soluciones con sentido social.
            </div>
        </section>
    );
}
