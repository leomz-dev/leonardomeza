import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

export default function Gallery() {
    const moments = [
        {
            title: "Conferencia Tech Summit 2024",
            description: "Presentando sobre desarrollo web moderno",
            image: "/gallery/conference.jpg"
        },
        {
            title: "Proyecto en Equipo",
            description: "Colaborando con el equipo de desarrollo",
            image: "/gallery/team.jpg"
        },
        {
            title: "Workshop de React",
            description: "Enseñando React a la comunidad local",
            image: "/gallery/workshop.jpg"
        },
        {
            title: "Hackathon 2024",
            description: "Ganador del primer lugar",
            image: "/gallery/hackathon.jpg"
        },
        {
            title: "Meetup de Desarrolladores",
            description: "Networking con la comunidad tech",
            image: "/gallery/meetup.jpg"
        },
        {
            title: "Lanzamiento de Producto",
            description: "Celebrando el éxito del proyecto",
            image: "/gallery/launch.jpg"
        }
    ];

    return (
        <section className="section-padding bg-accent/30">
            <div className="container-custom">
                <h2 className="mb-12">Momentos destacados</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moments.map((moment, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-border/50 shadow-sm hover-lift transition-all duration-300 aspect-4/3"
                        >
                            {/* Placeholder for image - will be replaced with actual images */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <Camera className="h-16 w-16 text-primary/20" strokeWidth={1.5} />
                            </div>

                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl mb-2 font-semibold">{moment.title}</h3>
                                    <p className="text-sm text-white/80">{moment.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
