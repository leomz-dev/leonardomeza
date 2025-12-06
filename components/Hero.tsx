import Link from "next/link";
import Image from "next/image";
import heroImg from "../public/img/heroImgg.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";


export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center animate-fade-in relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImg}
                    alt="Hero background"
                    fill
                    className="object-cover object-center md:object-[center_-100px] lg:object-[center_-200px]"
                    priority
                    quality={90}
                />

            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-balance leading-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary via-secondary/70 to-secondary/40"><i className="text-4xl md:text-5xl">
                            Leonardo Meza</i></span>
                        <br />
                        <span className="text-primary text-xl md:text-2xl lg:text-3xl -mt-3 block">"Vive el hoy, planea el mañana"</span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-primary mb-8 max-w-2xl mx-auto">
                        Desarrollo web, diseño de experiencias y soluciones tecnológicas innovadoras desde Colombia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="group bg-primary text-background hover:bg-primary/90 shadow-lg"
                        >
                            <Link href="/projects">
                                Ver mis proyectos
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-primary/50 bg-background text-primary hover:bg-primary/10 hover:text-primary backdrop-blur-sm"
                        >
                            <Link href="/contact">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Hablar conmigo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
