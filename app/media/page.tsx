import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media - Leonardo Meza",
    description: "Galería de momentos destacados, conferencias, workshops y eventos de Leonardo Meza.",
};

export default function MediaPage() {
    const mediaItems = [
        {
            title: "Conferencia Tech Summit 2024",
            description: "Presentando sobre desarrollo web moderno y las últimas tendencias en React y Next.js",
            category: "Conferencia",
            date: "2024-11-15"
        },
        {
            title: "Proyecto en Equipo",
            description: "Colaborando con el equipo de desarrollo en un proyecto de e-commerce de gran escala",
            category: "Trabajo",
            date: "2024-10-20"
        },
        {
            title: "Workshop de React",
            description: "Enseñando React y mejores prácticas a la comunidad local de desarrolladores",
            category: "Workshop",
            date: "2024-09-10"
        },
        {
            title: "Hackathon 2024",
            description: "Ganador del primer lugar en el hackathon nacional de innovación tecnológica",
            category: "Evento",
            date: "2024-08-25"
        },
        {
            title: "Meetup de Desarrolladores",
            description: "Networking con la comunidad tech y compartiendo experiencias sobre desarrollo full-stack",
            category: "Meetup",
            date: "2024-07-30"
        },
        {
            title: "Lanzamiento de Producto",
            description: "Celebrando el exitoso lanzamiento de una plataforma SaaS para gestión empresarial",
            category: "Lanzamiento",
            date: "2024-06-15"
        },
        {
            title: "Podcast Tech Talk",
            description: "Invitado especial en podcast hablando sobre el futuro del desarrollo web",
            category: "Podcast",
            date: "2024-05-20"
        },
        {
            title: "Certificación AWS",
            description: "Obteniendo certificación AWS Solutions Architect Associate",
            category: "Logro",
            date: "2024-04-10"
        },
        {
            title: "Open Source Contribution",
            description: "Contribuyendo a proyectos open source populares de la comunidad React",
            category: "Contribución",
            date: "2024-03-05"
        }
    ];

    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mb-16">
                        <h1 className="mb-6">Media & Momentos</h1>
                        <p className="text-xl text-muted-foreground">
                            Una colección de momentos destacados, conferencias, workshops y eventos en los que he participado.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediaItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-lg bg-muted aspect-4/3"
                            >
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                    <span className="text-6xl opacity-20">📸</span>
                                </div>

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="mb-2">
                                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl mb-2">{item.title}</h3>
                                        <p className="text-sm text-white/80 mb-2">{item.description}</p>
                                        <p className="text-xs text-white/60">{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
