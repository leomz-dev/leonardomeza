import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre mí - Leonardo Meza",
    description: "Conoce más sobre Leonardo Meza, su trayectoria profesional y experiencia en desarrollo web y diseño.",
};

export default function AboutPage() {
    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <h1 className="mb-8">Sobre mí</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-muted-foreground mb-6">
                            Soy un desarrollador full-stack apasionado por crear experiencias digitales excepcionales que combinan diseño elegante con funcionalidad robusta.
                        </p>

                        <h2 className="mt-12 mb-4">Mi Trayectoria</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Con varios años de experiencia en el desarrollo web, he trabajado en proyectos que van desde startups innovadoras hasta empresas establecidas, siempre enfocándome en entregar soluciones de alta calidad que superen las expectativas.
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Mi enfoque se centra en la creación de aplicaciones web modernas utilizando las últimas tecnologías como React, Next.js, TypeScript y Node.js, siempre con un ojo puesto en la experiencia del usuario y el rendimiento.
                        </p>

                        <h2 className="mt-12 mb-4">Habilidades Técnicas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h3 className="text-xl mb-3">Frontend</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• React & Next.js</li>
                                    <li>• TypeScript</li>
                                    <li>• Tailwind CSS</li>
                                    <li>• Responsive Design</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h3 className="text-xl mb-3">Backend</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Node.js & Express</li>
                                    <li>• PostgreSQL & MongoDB</li>
                                    <li>• RESTful APIs</li>
                                    <li>• Authentication & Security</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="mt-12 mb-4">Educación y Certificaciones</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Constantemente actualizo mis conocimientos a través de cursos, certificaciones y participación activa en la comunidad de desarrolladores.
                        </p>

                        <h2 className="mt-12 mb-4">Más Allá del Código</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Cuando no estoy programando, disfruto compartir conocimientos con la comunidad tech, participar en hackathons y explorar nuevas tecnologías que puedan mejorar mi trabajo y el de otros desarrolladores.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
