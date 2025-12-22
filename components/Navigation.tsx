"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAPFadeIn, useGSAPStagger } from "@/lib/animations";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Sobre mí" },
        { href: "/projects", label: "Proyectos" },
        { href: "#media", label: "Media" },
    ];

    const isActive = (href: string) => pathname === href;

    // Animate navbar on mount
    useEffect(() => {
        const tl = gsap.timeline();

        // Navbar slide down
        tl.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // Logo bounce in
        tl.fromTo(
            logoRef.current,
            { scale: 0, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.4"
        );

        // Links stagger
        if (linksContainerRef.current) {
            const links = linksContainerRef.current.querySelectorAll("a");
            tl.fromTo(
                links,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
                "-=0.3"
            );
        }

        // CTA slide in
        tl.fromTo(
            ctaRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.2"
        );
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (isOpen && mobileMenuRef.current) {
            const links = mobileMenuRef.current.querySelectorAll("a");
            gsap.fromTo(
                mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
            );
            gsap.fromTo(
                links,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, stagger: 0.08, delay: 0.1, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    // Hover animation for links
    const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
        gsap.to(e.currentTarget, {
            scale: enter ? 1.05 : 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    // Logo magnetic effect
    const handleLogoMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
        gsap.to(e.currentTarget, {
            x,
            y,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleLogoLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    };

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Glass Block */}
                    <Link
                        ref={logoRef}
                        href="/"
                        className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-all px-6 py-3 rounded-lg bg-background/10 backdrop-blur-md border border-white/10 min-w-[180px] text-center"
                        onMouseMove={handleLogoMove}
                        onMouseLeave={handleLogoLeave}
                    >
                        Leonardo Meza
                    </Link>

                    {/* Desktop Navigation - Centered Glass Block */}
                    <div
                        ref={linksContainerRef}
                        className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-white/10"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm px-4 py-2 rounded-full transition-all ${isActive(link.href)
                                    ? "bg-white/20 text-foreground font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                                    }`}
                                onMouseEnter={(e) => handleLinkHover(e, true)}
                                onMouseLeave={(e) => handleLinkHover(e, false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop Glass Block with Gradient Border */}
                    <Link
                        ref={ctaRef}
                        href="/contact"
                        className="hidden md:block text-lg font-semibold text-foreground hover:text-foreground/80 transition-all px-6 py-3 rounded-lg bg-background/10 backdrop-blur-md border border-secondary/30 min-w-[180px] text-center shadow-[0_0_15px_rgba(23,74,189,0.1)] hover:shadow-[0_0_25px_rgba(23,74,189,0.2)]"
                        onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(23,74,189,0.3)",
                                duration: 0.3,
                                ease: "power2.out",
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                                scale: 1,
                                boxShadow: "0 0 15px rgba(23,74,189,0.1)",
                                duration: 0.3,
                                ease: "power2.out",
                            });
                        }}
                    >
                        Contacto
                    </Link>

                    {/* Mobile Menu Button - Glass Block */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-3 text-foreground rounded-lg bg-background/10 backdrop-blur-md border border-white/10"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        ref={mobileMenuRef}
                        className="md:hidden py-4 mt-2 rounded-lg bg-background/10 backdrop-blur-md border border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-2 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm px-4 py-2 rounded-lg transition-all ${isActive(link.href)
                                        ? "bg-white/20 text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-foreground font-medium border border-white/10 rounded-lg px-4 py-2 text-center hover:bg-background/20 transition-all mt-2"
                            >
                                Contacto
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
