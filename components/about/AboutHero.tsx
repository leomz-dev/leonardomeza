"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({ delay: 0.3 });

        // Title animation (simple fade-in to preserve gradient styling)
        if (titleRef.current) {
            gsap.set(titleRef.current, { opacity: 1 }); // Ensure visible
            tl.fromTo(
                titleRef.current,
                {
                    opacity: 0,
                    y: 50,
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

        // Paragraph text reveal
        if (textRef.current) {
            tl.fromTo(
                textRef.current,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="mb-20 pt-32 px-6">
            <h1
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-zinc-200 dark:to-zinc-500"
            >
                Sobre mí
            </h1>
            <p
                ref={textRef}
                className="text-lg md:text-xl text-gray-600 dark:text-text-secondary-dark leading-relaxed max-w-3xl"
            >
                Soy una persona apasionada por el liderazgo juvenil, la educación y la tecnología como herramientas de transformación social. Creo en el poder de los procesos comunitarios, el aprendizaje práctico y el uso consciente de lo digital para generar impacto real en las personas y sus entornos. <br />
                <br />
                He encontrado en los espacios formativos —como los campamentos juveniles y los proyectos comunitarios— una escuela de vida donde el liderazgo no se impone, se construye: aprendiendo de otros, compartiendo saberes y asumiendo responsabilidad por el entorno y la comunidad. <br />
                <br />
                Me desarrollo en el área tecnológica, especialmente en el ámbito del desarrollo web y las herramientas digitales, integrando la tecnología con la educación y los procesos sociales. Trabajo en iniciativas que combinan innovación, formación académica y participación juvenil, buscando que la tecnología no sea solo técnica, sino un medio para potenciar talentos, facilitar el aprendizaje y abrir oportunidades. <br />
                <br />
                Creo en una educación cercana, clara y con impacto; en la tecnología con propósito; en el presente como espacio de acción; y en el futuro como algo que se construye con conciencia. Todo lo que hago busca dejar huella, crear soluciones útiles y demostrar que liderar también es servir.
            </p>
        </section>
    );
}
