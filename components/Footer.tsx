"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { href: "/about", label: "Sobre mí" },
            { href: "/projects", label: "Proyectos" },
            { href: "/contact", label: "Contacto" }
        ],
        social: [
            { href: "https://github.com/leomz-dev", label: "GitHub", icon: "github" },
            { href: "https://linkedin.com/in/leonardo-meza", label: "LinkedIn", icon: "linkedin" },
            { href: "https://twitter.com/leonardo_meza", label: "Twitter", icon: "twitter" }
        ]
    };

    return (
        <footer className="border-t border-border bg-card">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="font-bold mb-2">Leonardo Meza</h3>
                        <p className="text-sm text-muted-foreground">
                            Colombia
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Navegación</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Sígueme</h4>
                        <div className="flex gap-4">
                            {footerLinks.social.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label={link.label}
                                >
                                    <span className="text-sm">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Leonardo Meza. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
