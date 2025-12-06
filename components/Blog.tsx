import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar } from "lucide-react";

export default function Blog() {
    const posts = [
        {
            title: "El Futuro del Desarrollo Web con IA",
            excerpt: "Explorando cómo la inteligencia artificial está transformando la manera en que construimos aplicaciones web.",
            date: "2024-12-01",
            category: "Tecnología",
            href: "/blog/futuro-desarrollo-web-ia"
        },
        {
            title: "Optimización de Performance en React",
            excerpt: "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React y ofrecer experiencias más rápidas.",
            date: "2024-11-20",
            category: "Desarrollo",
            href: "/blog/optimizacion-react"
        }
    ];

    return (
        <section className="section-padding bg-accent/30">
            <div className="container-custom">
                <h2 className="mb-12">Últimas publicaciones</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {posts.map((post, index) => (
                        <Link
                            key={index}
                            href={post.href}
                            className="group block"
                        >
                            <Card className="h-full hover-lift border-border/50 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>{post.date}</span>
                                        </div>
                                        <Separator orientation="vertical" className="h-4" />
                                        <Badge variant="outline" className="font-normal">
                                            {post.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="leading-relaxed">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild variant="ghost" className="group">
                        <Link href="/blog">
                            Ver todas las publicaciones
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
