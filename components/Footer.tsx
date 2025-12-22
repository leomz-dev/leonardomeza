"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { href: "/about", label: "Sobre mí" },
        { href: "/projects", label: "Proyectos" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contacto" }
    ];

    const socialLinks = [
        { href: "https://github.com/leomz-dev", label: "GitHub", icon: Github },
        { href: "https://linkedin.com/in/leonardo-meza", label: "LinkedIn", icon: Linkedin },
        { href: "https://twitter.com/leonardo_meza", label: "Twitter", icon: Twitter },
        { href: "https://instagram.com/leonardo_meza", label: "Instagram", icon: Instagram }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Logo bounce in
        if (logoRef.current) {
            gsap.fromTo(
                logoRef.current,
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Nav links stagger
        if (navRef.current) {
            const links = navRef.current.querySelectorAll("a");
            gsap.fromTo(
                links,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        // Social icons pop in with rotation
        if (socialsRef.current) {
            const icons = socialsRef.current.querySelectorAll("a");
            gsap.fromTo(
                icons,
                {
                    opacity: 0,
                    scale: 0,
                    rotation: -180,
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    delay: 0.4,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Link hover animation
    const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            y: enter ? -3 : 0,
            color: enter ? "var(--foreground)" : "",
            duration: 0.3,
            ease: "power2.out",
        });
    };

    // Social icon hover animation
    const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            scale: enter ? 1.2 : 1,
            rotation: enter ? 15 : 0,
            y: enter ? -5 : 0,
            duration: 0.3,
            ease: "power2.out",
        });

        const icon = e.currentTarget.querySelector("svg");
        if (icon) {
            gsap.to(icon, {
                scale: enter ? 1.1 : 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    };

    return (
        <footer ref={footerRef} className="bg-background border-t border-border/30">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">
                    {/* Logo/Brand */}
                    <div ref={logoRef} className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground tracking-tight">
                            LEONARDO
                        </span>
                        <span className="text-xl font-light text-muted-foreground tracking-tight">
                            MEZA
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav ref={navRef} className="flex items-center gap-6 md:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors duration-200"
                                onMouseEnter={(e) => handleLinkHover(e, true)}
                                onMouseLeave={(e) => handleLinkHover(e, false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div ref={socialsRef} className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-200"
                                    onMouseEnter={(e) => handleSocialHover(e, true)}
                                    onMouseLeave={(e) => handleSocialHover(e, false)}
                                >
                                    <IconComponent className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
