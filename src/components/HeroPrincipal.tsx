"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

const images = [
    {
        url: "../images/professional-maintenance-worker-fixing-industrial-.jpg",
        alt: "Professional maintenance service",
    },
    {
        url: "../images/clean-modern-facility-with-well-maintained-systems.jpg",
        alt: "Well-maintained facility",
    },
    {
        url: "../images/maintenance-technician-inspecting-hvac-system.jpg",
        alt: "Expert maintenance inspection",
    },
]

export function MaintenanceHero() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* Image Carousel Background */}
            <div className="absolute inset-0 z-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-primary/60" />
                        <img src={image.url || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex min-h-screen items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-accent/90 px-4 py-1.5 text-sm font-medium text-accent-foreground backdrop-blur-sm">
                                    Servicios de mantenimiento profesional
                                </div>
                                <h1 className="text-balance font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                    Excelencia en cada detalle
                                </h1>
                                <p className="text-pretty text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                                    Soluciones de mantenimiento confiables que garantizan el correcto funcionamiento de sus operaciones. Servicio de calidad, confiabilidad y experiencia en la que puede confiar.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                                <Button
                                    size="lg"
                                    className="group bg-accent text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
                                >
                                    Mas información
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                                >
                                    <Phone className="mr-2 h-5 w-5" />
                                    Contactar
                                </Button>
                            </div>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {["Servicio 24/7", "Con licencia y asegurada", "Respuesta rápida"].map((feature) => (
                                    <div
                                        key={feature}
                                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                                    >
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Spacer for desktop, hidden on mobile */}
                        <div className="hidden lg:block" />
                    </div>
                </div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2 rounded-full transition-all ${index === currentImage ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
