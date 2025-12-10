import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedWork() {
    const projects = [
        {
            title: "FluxDrive",
            description: "Un reductor de velocidad generador de energia eco-sostenible. Diseñado para aprovechar el tráfico vehicular y convertir la energía cinética en electricidad limpia para la iluminación pública.",
            tags: ["Investigacion", "Innovacion", "Energia", "Eco-sostenible"],
            href: "/projects#fluxdrive",
            image: "https://proinbal.es/web2/wp-content/uploads/2020/12/reductores_de_velocidad_proin_1.jpg",
            demoLink: "#",
            learnMoreLink: "/projects#fluxdrive"
        },
        {
            title: "Playlib",
            description: "Plataforma de biblioteca de juegos interactivo. Permite a los usuarios organizar su colección, descubrir nuevos títulos y compartir reseñas con una comunidad apasionada.",
            tags: ["Next.js", "TypeScript", "TailwindCSS", "Node.js"],
            href: "/projects#playlib",
            image: "/img/playlibCap.png",
            demoLink: "#",
            learnMoreLink: "/projects#playlib"
        },
        {
            title: "Alert-Me",
            description: "Alert-Me es un sistema integral de alerta temprana para prevenir desastres por desbordamientos en calles y caños via mensajes de texto y notificaciones en tiempo real.",
            tags: ["Investigacion", "Innovacion", "SAT", "Eco-sostenible"],
            href: "/projects#alert-me",
            image: "/img/alertMeCap.png",
            demoLink: "#",
            learnMoreLink: "/projects#alert-me"
        }
    ];

    return (
        <section className="section-padding overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <h2 className="mb-4">Proyectos <span className="inline-block px-3 py-2 bg-clip-text text-transparent bg-linear-to-r from-secondary to-white"><i className="text-5xl">favoritos</i></span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Una selección de mis trabajos más recientes y destacados, donde combino innovación, diseño y funcionalidad.
                    </p>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            {/* Text Content */}
                            <div className="flex-1 space-y-3">


                                <h3 className="inline-block px-3 py-4 bg-clip-text text-transparent bg-linear-to-r from-secondary to-white"><i className="text-5xl">
                                    {project.title}
                                </i>
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed -mt-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge
                                            key={tagIndex}
                                            variant="secondary"
                                            className="font-normal bg-secondary/20 backdrop-blur-md text-secondary-foreground border border-secondary/30 px-3 py-1"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    <Button variant="outline" size="lg" asChild className="gap-2">
                                        <Link href={project.demoLink}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16" /></svg>
                                            Demo
                                        </Link>
                                    </Button>
                                    <Button size="lg" asChild className="gap-2">
                                        <Link href={project.learnMoreLink}>
                                            Saber más
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-xl blur-3xl opacity-30 -z-10 transition-opacity duration-500 group-hover:opacity-50" />
                                <div className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-background/50">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <div className="ml-4 h-6 w-full max-w-[200px] rounded-full bg-background border border-border text-xs flex items-center px-3 text-foreground truncate shadow-sm">
                                            {project.title.toLowerCase()}.com
                                        </div>
                                    </div>
                                    <div className="aspect-video w-full relative">
                                        {/* Using standard img tag as Next.js Image might require config for external domains or specific setup. 
                                            Assuming local images work fine with standard img or Next.js Image if configured. 
                                            Using standard img for simplicity and robustness in this refactor unless Next.js Image was working perfectly before. 
                                            Wait, the user had an error with Next.js Image before. I'll use standard img for now to avoid that, or just standard Next.js Image if imports allow. 
                                            I'll use a standard img tag with object-cover.
                                        */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button asChild variant="ghost" size="lg" className="group text-lg">
                        <Link href="/projects">
                            Ver todos los proyectos
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
