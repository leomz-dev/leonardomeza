import Image from "next/image";
import { Trees, Braces, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Image */}
                    <div className="relative group animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift aspect-square sm:aspect-4/5 lg:aspect-square">
                            <Image
                                src="/img/heroImg.jpg"
                                alt="Leonardo Meza"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <div>
                            <h2 className="mb-4 text-4xl font-bold tracking-tight">
                                Desarrollando <span className="text-secondary"><i className="text-5xl">soluciones</i></span> para un mundo en evolucion
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Me enfoco en resolver problemas complejos con soluciones que sean eficientes y escalables.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex gap-4">
                                <div className="mt-1 bg-secondary/10 p-2 rounded-lg h-fit">
                                    <Trees className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Investigador </h3>
                                    <p className="text-muted-foreground">
                                        He desarrollado proyectos innovadores que resuelven problemas ambientales como el cambio climático, la generacion de energías renovables y la reduccion de la contaminacion.
                                    </p>
                                    <Link href="/projects" className="inline-flex items-center mt-2 text-secondary hover:text-secondary/80 font-medium text-sm transition-colors">
                                        Ver proyectos <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4">
                                <div className="mt-1 bg-purple-500/10 p-2 rounded-lg h-fit">
                                    <Zap className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Recreador</h3>
                                    <p className="text-muted-foreground">
                                        Soy lider formador de mas de 200 jovenes en recreacion, campismo, habilidades para la vida y desarrollo personal.
                                    </p>
                                    <Link href="/services" className="inline-flex items-center mt-2 text-purple-500 hover:text-purple-400 font-medium text-sm transition-colors">
                                        Conoce mas <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4">
                                <div className="mt-1 bg-teal-500/10 p-2 rounded-lg h-fit">
                                    <Braces className="w-6 h-6 text-teal-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Desarrollador</h3>
                                    <p className="text-muted-foreground">
                                        Desarrollo de software con tecnologías modernas y buenas prácticas de codificación.
                                    </p>
                                    <Link href="/projects" className="inline-flex items-center mt-2 text-teal-500 hover:text-teal-400 font-medium text-sm transition-colors">
                                        Ver proyectos <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground/80 italic">
                                "Comprometido con la excelencia y el desarrollo personal."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
