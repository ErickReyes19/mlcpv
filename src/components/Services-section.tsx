import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Snowflake, Zap, Droplets, Hammer, Leaf } from "lucide-react"

const services = [
    {
        icon: Snowflake,
        title: "Refrigeración",
        description:
            "Instalación, mantenimiento y reparación experta de sistemas de refrigeración comerciales y residenciales. Garantizamos una eficiencia óptima de enfriamiento y ahorro de energía para sus equipos.",
    },
    {
        icon: Zap,
        title: "Electricidad",
        description:
            "Servicios eléctricos integrales que incluyen instalaciones, reparaciones e inspecciones de seguridad. Nuestros electricistas certificados manejan desde iluminación hasta proyectos completos de recableado.",
    },
    {
        icon: Droplets,
        title: "Plomería",
        description:
            "Soluciones profesionales de plomería para reparación de fugas, instalación de tuberías, limpieza de drenajes y reemplazo de accesorios. Disponibles para emergencias y mantenimiento programado.",
    },
    {
        icon: Hammer,
        title: "Carpintería",
        description:
            "Trabajos de carpintería especializada que van desde muebles y gabinetes a medida hasta reparaciones estructurales y remodelaciones. Aportamos calidad y atención al detalle en cada proyecto.",
    },
    {
        icon: Leaf,
        title: "Jardinería",
        description:
            "Servicios completos de jardinería y mantenimiento de áreas verdes que incluyen cuidado del césped, poda, sistemas de riego y siembra estacional. Ayudamos a crear y mantener espacios exteriores hermosos.",
    },
]


export function ServicesSection() {
    return (
        <section className="py-16 px-4 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                        Nuestros servicios profesionales
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                        Soluciones integrales de mantenimiento brindadas por profesionales experimentados dedicados a la excelencia y la satisfacción del cliente.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur"
                            >
                                <CardHeader>
                                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gray-400 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-xl md:text-2xl text-foreground">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
