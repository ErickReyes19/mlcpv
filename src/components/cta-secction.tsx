import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">¿Listo para contratarnos?</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Déjenos ayudarle con todos sus proyectos de mantenimiento. Nuestro equipo está listo para brindarle el mejor
          servicio.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 hover:scale-105 transition-transform"
        >
          <a href="#contacto">Contacto</a>
        </Button>
      </div>
    </section>
  )
}
