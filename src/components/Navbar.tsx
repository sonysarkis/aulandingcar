"use client";
import { useState } from "react";
import { CarFront, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border shadow-2xl backdrop-blur border-white/10 bg-white/5 shadow-black/20">
            <CarFront strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-white">SUPER MOTORS</div>
            <div className="text-xs font-medium text-neutral-400">No solo carros, experiencias</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#inventario" className="text-sm font-medium transition hover:text-white text-neutral-300">Inventario</Link>
          <Link href="#proceso" className="text-sm font-medium transition hover:text-white text-neutral-300">Proceso</Link>
          <Link href="#beneficios" className="text-sm font-medium transition hover:text-white text-neutral-300">Ventajas</Link>
          <Link href="#contacto" className="text-sm font-medium transition hover:text-white text-neutral-300">Contacto</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+16787368898" className="rounded-full border px-4 py-2 text-sm font-medium backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200">
            (678) 736-8898
          </a>
          <Link href="#lead-form" className="rounded-full px-4 py-2 text-sm font-semibold transition text-neutral-950 bg-lime-400 hover:bg-lime-300">
            Solicitar oferta
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur md:hidden border-white/10 bg-white/5 text-white"
        >
          {isOpen ? <X strokeWidth={1.5} className="h-5 w-5" /> : <Menu strokeWidth={1.5} className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            <Link href="#inventario" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">
              Inventario
            </Link>
            <Link href="#proceso" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">
              Proceso
            </Link>
            <Link href="#beneficios" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">
              Ventajas
            </Link>
            <Link href="#contacto" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">
              Contacto
            </Link>
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a href="tel:+16787368898" className="rounded-full border px-4 py-2.5 text-center text-sm font-medium backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200">
                (678) 736-8898
              </a>
              <Link href="#lead-form" onClick={() => setIsOpen(false)} className="rounded-full px-4 py-2.5 text-center text-sm font-semibold transition text-neutral-950 bg-lime-400 hover:bg-lime-300">
                Solicitar oferta
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
