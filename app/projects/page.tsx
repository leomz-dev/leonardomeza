import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Proyectos - Leonardo Meza",
    description: "Explora el portafolio completo de proyectos de Leonardo Meza, desde aplicaciones web hasta soluciones empresariales.",
};

export default function ProjectsPage() {
    const projects = [
        {
            id: "ecommerce",
            title: "E-Commerce Platform",
            description: "Plataforma de comercio electrónico completa con pasarela de pagos integrada, gestión de inventario en tiempo real, panel de administración avanzado y sistema de recomendaciones personalizadas.",
            tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
            features: ["Pagos seguros", "Gestión de inventario", "Analytics", "SEO optimizado"],
            link: "#"
        },
        {
            id: "dashboard",
            title: "Dashboard Analítico",
            description: "Sistema de visualización de datos en tiempo real para análisis de métricas de negocio, con gráficos interactivos, reportes personalizables y exportación de datos.",
            tags: ["React", "D3.js", "Node.js", "MongoDB"],
            features: ["Visualización en tiempo real", "Reportes personalizados", "Exportación de datos", "API REST"],
            link: "#"
        },
        {
            id: "mobile-app",
            title: "App Móvil Híbrida",
            description: "Aplicación móvil multiplataforma para gestión de tareas y colaboración en equipo, con sincronización en la nube y notificaciones push.",
            tags: ["React Native", "Firebase", "Redux", "TypeScript"],
            features: ["Multiplataforma", "Sincronización en la nube", "Notificaciones push", "Modo offline"],
            link: "#"
        },
        {
            id: "cms",
            title: "Sistema de Gestión de Contenidos",
            description: "CMS headless personalizado con editor de contenido intuitivo, gestión de medios y API GraphQL para integración flexible.",
            tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3"],
            features: ["Editor WYSIWYG", "Gestión de medios", "API GraphQL", "Multi-idioma"],
            link: "#"
        },
        {
            id: "booking",
            title: "Sistema de Reservas",
            description: "Plataforma de reservas en línea con calendario interactivo, gestión de disponibilidad, pagos integrados y notificaciones automáticas.",
            tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
            features: ["Calendario interactivo", "Pagos automáticos", "Notificaciones", "Panel de administración"],
            link: "#"
        },
        {
            id: "portfolio",
            title: "Portfolio Interactivo",
            description: "Sitio web portfolio con animaciones avanzadas, modo oscuro, optimización de rendimiento y diseño responsive premium.",
            tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
            features: ["Animaciones fluidas", "Modo oscuro", "SEO optimizado", "Performance 100/100"],
            link: "#"
        }
    ];

    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mb-16">
                        <h1 className="mb-6">Proyectos</h1>
                        <p className="text-xl text-muted-foreground">
                            Una colección de proyectos que demuestran mi experiencia en desarrollo full-stack, diseño UI/UX y soluciones tecnológicas innovadoras.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                id={project.id}
                                className="group p-8 rounded-lg border border-border bg-card hover-lift"
                            >
                                <h2 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h2>

                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold mb-3">Características principales:</h3>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                                <span className="text-primary">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                                >
                                    Ver detalles
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
