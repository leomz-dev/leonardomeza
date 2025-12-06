import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Lightbulb } from "lucide-react";

export default function Skills() {
    const skills = [
        {
            title: "Desarrollo Full-Stack",
            description: "Creación de aplicaciones web modernas con React, Next.js, Node.js y bases de datos SQL/NoSQL.",
            icon: Code2
        },
        {
            title: "Diseño UI/UX",
            description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales que convierten visitantes en clientes.",
            icon: Palette
        },
        {
            title: "Soluciones Innovadoras",
            description: "Desarrollo de soluciones tecnológicas personalizadas que resuelven problemas reales de negocio.",
            icon: Lightbulb
        }
    ];

    return (
        <section className="section-padding bg-accent/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <Card
                                key={index}
                                className="animate-slide-up border-none shadow-sm hover-lift bg-card/50 backdrop-blur-sm"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="pt-6">
                                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/5">
                                        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="mb-3">{skill.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {skill.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
