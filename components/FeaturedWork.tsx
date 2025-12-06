import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedWork() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Plataforma de comercio electrónico completa con pasarela de pagos, gestión de inventario y panel de administración.",
            tags: ["Next.js", "PostgreSQL", "Stripe"],
            href: "/projects#ecommerce"
        },
        {
            title: "Dashboard Analítico",
            description: "Sistema de visualización de datos en tiempo real para análisis de métricas de negocio y toma de decisiones.",
            tags: ["React", "D3.js", "Node.js"],
            href: "/projects#dashboard"
        },
        {
            title: "App Móvil Híbrida",
            description: "Aplicación móvil multiplataforma para gestión de tareas y colaboración en equipo.",
            tags: ["React Native", "Firebase", "Redux"],
            href: "/projects#mobile-app"
        }
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="mb-12">Trabajo seleccionado</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.href}
                            className="group block"
                        >
                            <Card className="h-full hover-lift border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle className="group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge
                                                key={tagIndex}
                                                variant="secondary"
                                                className="font-normal"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild variant="ghost" className="group">
                        <Link href="/projects">
                            Ver todos los proyectos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
