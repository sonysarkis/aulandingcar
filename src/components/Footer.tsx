import { CarFront, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <CarFront strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <div className="text-base font-semibold tracking-tight text-white">SUPER MOTORS</div>
                <div className="text-xs font-medium text-neutral-400">No solo carros, experiencias.</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              Tu concesionario de confianza en Atlanta. Vehículos inspeccionados, financiamiento flexible y un equipo dedicado a encontrar tu auto ideal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">Navegación</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-neutral-400">
              <li><Link href="#inventario" className="transition hover:text-white">Inventario</Link></li>
              <li><Link href="#proceso" className="transition hover:text-white">Proceso</Link></li>
              <li><Link href="#beneficios" className="transition hover:text-white">Ventajas</Link></li>
              <li><Link href="#contacto" className="transition hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">Servicios</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-neutral-400">
              <li><Link href="#lead-form" className="transition hover:text-white">Comprar vehículo</Link></li>
              <li><Link href="#lead-form" className="transition hover:text-white">Vender mi auto</Link></li>
              <li><Link href="#lead-form" className="transition hover:text-white">Financiamiento</Link></li>
              <li><Link href="#lead-form" className="transition hover:text-white">Car Finder</Link></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm font-medium text-neutral-400">
              <li>📍 Atlanta, Georgia</li>
              <li>📞 (678) 736-8898</li>
              <li>✉️ info@supermotors.com</li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-neutral-400 transition hover:text-lime-400"><Facebook strokeWidth={1.5} className="h-5 w-5" /></a>
              <a href="#" className="text-neutral-400 transition hover:text-lime-400"><Instagram strokeWidth={1.5} className="h-5 w-5" /></a>
              <a href="#" className="text-neutral-400 transition hover:text-lime-400"><Youtube strokeWidth={1.5} className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Super Motors. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="#" className="transition hover:text-neutral-300">Política de privacidad</Link>
            <Link href="#" className="transition hover:text-neutral-300">Términos de servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
