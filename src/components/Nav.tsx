// src/components/Nav.tsx
"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  { name: "Plometia", href: "/servicios/plomeria" },
  { name: "Refrigeración", href: "/servicios/refrigeracion" },
  { name: "Carpintería", href: "/servicios/Carpinteria" },
  { name: "Jardinería", href: "/servicios/Jardineria" },
];

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar({ page }: { page: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold">Logo</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href === "/servicios" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                    {item.name}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-56">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.href} asChild>
                        <a href={service.href} className="cursor-pointer">
                          {service.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                  {page === item.href ? (
                    <div className="block w-full h-1 mt-1 bg-blue-500" />
                  ) : (
                    <div className="block w-full h-1 mt-1 bg-transparent" />
                  )}
                </a>
              )
            )}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left">Menú</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-4 px-4">
                {navItems.map((item) =>
                  item.href === "/servicios" ? (
                    <div key={item.href} className="space-y-2">
                      <p className="text-lg font-medium">{item.name}</p>
                      <div className="pl-4 space-y-2">
                        {services.map((service) => (
                          <a
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
