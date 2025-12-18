import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const pages = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  const services = ["Refrigeración", "Electricidad", "Plomería", "Carpintería", "Jardinería"]

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Mantenimiento lo hacemos por ti</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Brindamos servicios de mantenimiento de alta calidad con profesionalismo y dedicación.
            </p>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Páginas</h3>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <a href={page.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Choluteca, Honduras</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+504 0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">info@mantenimiento.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Mantenimiento Profesional lo hacemos por ti. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
