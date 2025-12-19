import Link from "next/link";
import Image from "next/image";
import heroImg from "../public/img/heroBack.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Braces, Palette, Lightbulb, Baby, BanknoteArrowUp } from "lucide-react";
// @ts-ignore
import Ribbons from "@/components/ui/ribbons";
import { LogoLoop } from "@/components/ui/carrusel";


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

            {/* Ribbons Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <Ribbons
                    colors={['#174abd', '#FFD700', '#174abd', '#ffffff']}
                    baseThickness={20}
                    baseFriction={0.05}
                    speedMultiplier={0.5}
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-screen py-20">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-balance leading-tight">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary via-secondary/70 to-secondary/40"><i className="text-4xl md:text-5xl">
                            Leonardo Meza</i></span>
                        <br />
                        <span className="text-primary text-xl md:text-2xl lg:text-3xl -mt-2 block">"Vive el hoy, planea el mañana"</span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-primary mb-8 max-w-2xl mx-auto">
                        Tecnologia, Investigacion, Deporte, Recreacion
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
                            className="border-primary/50 bg-card/30 text-primary hover:bg-primary/10 hover:text-primary backdrop-blur-sm"
                        >
                            <Link href="/contact">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Hablar conmigo
                            </Link>
                        </Button>
                    </div>

                    {/* Mini Skills Cards */}
                    <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        <div className="group h-12 px-3 py-2 rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                            <div className="flex items-center gap-2 h-full">
                                <Braces className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <div className="h-4 w-px bg-primary/30"></div>
                                <h4 className="text-xs font-semibold text-primary whitespace-nowrap">Desarrollador</h4>
                            </div>
                        </div>

                        <div className="group h-12 px-3 py-2 rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                            <div className="flex items-center gap-2 h-full">
                                <Palette className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <div className="h-4 w-px bg-primary/30"></div>
                                <h4 className="text-xs font-semibold text-primary whitespace-nowrap">Diseñador</h4>
                            </div>
                        </div>

                        <div className="group h-12 px-3 py-2 rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                            <div className="flex items-center gap-2 h-full">
                                <Lightbulb className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <div className="h-4 w-px bg-primary/30"></div>
                                <h4 className="text-xs font-semibold text-primary whitespace-nowrap">Investigador</h4>
                            </div>
                        </div>
                        <div className="group h-12 px-3 py-2 rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                            <div className="flex items-center gap-2 h-full">
                                <Baby className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <div className="h-4 w-px bg-primary/30"></div>
                                <h4 className="text-xs font-semibold text-primary whitespace-nowrap">Recreador</h4>
                            </div>
                        </div>
                        <div className="group h-12 px-3 py-2 rounded-xl bg-card/30 backdrop-blur-md transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                            <div className="flex items-center gap-2 h-full">
                                <BanknoteArrowUp className="h-4 w-4 text-primary" strokeWidth={1.5} />
                                <div className="h-4 w-px bg-primary/30"></div>
                                <h4 className="text-xs font-semibold text-primary whitespace-nowrap">Emprendedor</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Carousel */}
                <div className="w-full max-w-4xl mt-8">
                    <LogoLoop
                        logos={[
                            {
                                node: <Image
                                    src="/logos/logoMindeporte.png"
                                    alt="Mindeporte"
                                    width={120}
                                    height={60}
                                    className="object-contain opacity-60 hover:opacity-100 transition-opacity bg-white p-3 rounded"
                                />
                            },
                            {
                                node: <Image
                                    src="/logos/logoRedcolsi.png"
                                    alt="Redcolsi"
                                    width={120}
                                    height={60}
                                    className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                                />
                            },
                        ]}
                        speed={50}
                        direction="left"
                        gap={40}
                        pauseOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
}
