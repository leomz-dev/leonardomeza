import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog - Leonardo Meza",
    description: "Artículos sobre desarrollo web, tecnología y mejores prácticas en programación.",
};

export default function BlogPage() {
    const posts = [
        {
            slug: "futuro-desarrollo-web-ia",
            title: "El Futuro del Desarrollo Web con IA",
            excerpt: "Explorando cómo la inteligencia artificial está transformando la manera en que construimos aplicaciones web y las herramientas que están revolucionando el desarrollo.",
            date: "2024-12-01",
            category: "Tecnología",
            readTime: "8 min"
        },
        {
            slug: "optimizacion-react",
            title: "Optimización de Performance en React",
            excerpt: "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React, desde lazy loading hasta memoización y optimización de re-renders.",
            date: "2024-11-20",
            category: "Desarrollo",
            readTime: "10 min"
        },
        {
            slug: "tailwind-mejores-practicas",
            title: "Mejores Prácticas con Tailwind CSS",
            excerpt: "Guía completa sobre cómo aprovechar al máximo Tailwind CSS en proyectos grandes, incluyendo organización, componentes reutilizables y optimización.",
            date: "2024-11-10",
            category: "Diseño",
            readTime: "6 min"
        },
        {
            slug: "typescript-avanzado",
            title: "TypeScript Avanzado: Tipos Genéricos",
            excerpt: "Dominando los tipos genéricos en TypeScript para crear código más flexible, reutilizable y type-safe en aplicaciones empresariales.",
            date: "2024-10-28",
            category: "Desarrollo",
            readTime: "12 min"
        },
        {
            slug: "nextjs-seo",
            title: "SEO en Next.js: Guía Completa",
            excerpt: "Todo lo que necesitas saber sobre optimización SEO en Next.js, desde metadata hasta sitemap, structured data y performance.",
            date: "2024-10-15",
            category: "Tecnología",
            readTime: "9 min"
        },
        {
            slug: "arquitectura-frontend",
            title: "Arquitectura Frontend Escalable",
            excerpt: "Patrones y estrategias para construir aplicaciones frontend que escalen, manteniendo código limpio y mantenible a largo plazo.",
            date: "2024-09-30",
            category: "Arquitectura",
            readTime: "15 min"
        }
    ];

    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mb-16">
                        <h1 className="mb-6">Blog</h1>
                        <p className="text-xl text-muted-foreground">
                            Artículos sobre desarrollo web, tecnología y las últimas tendencias en programación.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block p-6 rounded-lg bg-card border border-border hover-lift"
                            >
                                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <div className="mb-3">
                                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                        {post.category}
                                    </span>
                                </div>

                                <h2 className="text-xl mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:underline">
                                    Leer más
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
