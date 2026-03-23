import { CarFront, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border shadow-2xl backdrop-blur border-white/10 bg-white/5 shadow-black/20">
            <CarFront strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-white">Aurum Motors</div>
            <div className="text-xs font-medium text-neutral-400">Luxury mobility redefined</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#inventario" className="text-sm font-medium transition hover:text-white text-neutral-300">Inventario</Link>
          <Link href="#proceso" className="text-sm font-medium transition hover:text-white text-neutral-300">Proceso</Link>
          <Link href="#beneficios" className="text-sm font-medium transition hover:text-white text-neutral-300">Ventajas</Link>
          <Link href="#contacto" className="text-sm font-medium transition hover:text-white text-neutral-300">Contacto</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+10000000000" className="rounded-full border px-4 py-2 text-sm font-medium backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200">
            (678) 736-8898
          </a>
          <Link href="#lead-form" className="rounded-full px-4 py-2 text-sm font-semibold transition text-neutral-950 bg-lime-400 hover:bg-lime-300">
            Solicitar oferta
          </Link>
        </div>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur md:hidden border-white/10 bg-white/5 text-white">
          <Menu strokeWidth={1.5} className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
