import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Leonardo entregó un proyecto excepcional que superó nuestras expectativas. Su atención al detalle y profesionalismo son incomparables.",
            author: "María González",
            title: "CEO, TechStart Colombia"
        },
        {
            quote: "Trabajar con Leonardo fue una experiencia fantástica. Transformó nuestra visión en una realidad digital impresionante.",
            author: "Carlos Méndez",
            title: "Director de Producto, InnovateLab"
        },
        {
            quote: "La capacidad de Leonardo para resolver problemas complejos y crear soluciones elegantes es verdaderamente admirable.",
            author: "Ana Rodríguez",
            title: "CTO, Digital Solutions"
        }
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <h2 className="mb-12">Lo que dicen sobre mí</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-border/50 shadow-sm hover-lift transition-all duration-300"
                        >
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                <p className="text-lg mb-6 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                                <div className="border-t border-border/50 pt-4">
                                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{testimonial.title}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
