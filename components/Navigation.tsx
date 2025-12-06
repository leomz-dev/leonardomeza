"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/about", label: "Sobre mí" },
        { href: "/projects", label: "Proyectos" },
        { href: "/blog", label: "Blog" },
        { href: "/media", label: "Media" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Glass Block */}
                    <Link
                        href="/"
                        className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-all px-6 py-3 rounded-lg bg-background/10 backdrop-blur-md border border-white/10 min-w-[180px] text-center"
                    >
                        Leonardo Meza
                    </Link>

                    {/* Desktop Navigation - Centered Glass Block */}
                    <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm px-4 py-2 rounded-full transition-all ${isActive(link.href)
                                    ? "bg-white/20 text-foreground font-medium"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop Glass Block with Gradient Border */}
                    <Link
                        href="/contact"
                        className="hidden md:block text-lg font-semibold text-foreground hover:text-foreground/80 transition-all px-6 py-3 rounded-lg bg-background/10 backdrop-blur-md border border-secondary/30 min-w-[180px] text-center shadow-[0_0_15px_rgba(23,74,189,0.1)]"
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
                    <div className="md:hidden py-4 mt-2 rounded-lg bg-background/10 backdrop-blur-md border border-white/10">
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
