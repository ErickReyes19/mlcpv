
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function WhyChooseUs() {
    const benefits = [
        {
            title: "Experiencia Comprobada",
            description: "Más de 15 años brindando servicios de mantenimiento de calidad superior",
        },
        {
            title: "Profesionales Certificados",
            description: "Equipo altamente capacitado y certificado en todas las áreas de mantenimiento",
        },
        {
            title: "Disponibilidad 24/7",
            description: "Servicio de emergencia disponible las 24 horas del día, los 7 días de la semana",
        },
        {
            title: "Garantía de Satisfacción",
            description: "Respaldamos nuestro trabajo con una garantía completa de satisfacción del cliente",
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image Section - Left */}
                    <div className="relative h-100 md:h-125 lg:h-150 rounded-xl overflow-hidden">
                        <img
                            src="../images/happy-maintenance-worker.jpg"
                            alt="Trabajador de mantenimiento profesional y feliz"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
                    </div>

                    {/* Content Section - Right */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">La Mejor Elección</Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
                                ¿Por Qué Elegirnos?
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                            Somos líderes en servicios de mantenimiento integral, combinando experiencia, profesionalismo y dedicación
                            para ofrecer soluciones excepcionales. Nuestro compromiso con la excelencia y la satisfacción del cliente
                            nos distingue en la industria. Cada proyecto es ejecutado con precisión, utilizando las mejores prácticas
                            y tecnología de vanguardia para garantizar resultados duraderos.
                        </p>

                        <div className="space-y-4 pt-4">
                            {benefits.map((benefit, index) => (
                                <Card key={index} className="p-4 border-border hover:border-accent transition-colors">
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </div>


                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
