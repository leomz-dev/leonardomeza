import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import MasonryGallery from "@/components/ui/mansorygallery";

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

                <div className="mt-8">
                    <MasonryGallery
                        items={moments.map(m => ({
                            src: m.image,
                            alt: m.title,
                            title: m.title,
                            description: m.description
                        }))}
                    />
                </div>
            </div>
        </section>
    );
}
