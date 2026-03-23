"use client";
import { Check, ChevronDown, Send } from "lucide-react";

export default function LeadForm() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="sticky top-8 rounded-[2rem] border p-8 backdrop-blur border-white/10 bg-white/5">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium border-white/10 bg-white/5 text-neutral-300">
              Captura de leads
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              Una sección pensada para convertir con claridad.
            </h2>
            <p className="mt-4 text-lg font-normal leading-8 text-neutral-300">
              Este bloque reemplaza el enfoque más genérico de la referencia por una experiencia más premium, simple de escanear y preparada para ser conectada a tu sistema de automatización.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
                  <Check strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-white">Jerarquía limpia y enfocada</p>
                  <p className="text-sm font-medium text-neutral-400">Campos amplios, orden natural y CTAs visibles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
                  <Check strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-white">Preparado para integración</p>
                  <p className="text-sm font-medium text-neutral-400">Perfecto para reemplazar o conectar con formularios externos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
                  <Check strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-white">Mayor percepción de valor</p>
                  <p className="text-sm font-medium text-neutral-400">Una marca mejor presentada suele convertir mejor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div id="lead-form" className="rounded-[2rem] border p-6 shadow-2xl backdrop-blur sm:p-8 border-white/10 bg-white/5 shadow-black/30">
            <div className="mb-8 flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between border-white/10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Solicita información</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl text-white">Cuéntanos qué vehículo necesitas</h3>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-medium border-lime-400/20 bg-lime-400/10 text-lime-300">
                Respuesta en menos de 24h
              </div>
            </div>

            <form className="grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Nombre completo</label>
                <input type="text" placeholder="Tu nombre" className="w-full rounded-2xl border px-4 py-3 text-base font-normal outline-none transition focus:ring-2 placeholder:text-neutral-500 border-white/10 text-white bg-neutral-900/70 focus:border-lime-400/50 focus:ring-lime-400/20" />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Teléfono</label>
                <input type="tel" placeholder="+1 (000) 000 0000" className="w-full rounded-2xl border px-4 py-3 text-base font-normal outline-none transition focus:ring-2 placeholder:text-neutral-500 border-white/10 text-white bg-neutral-900/70 focus:border-lime-400/50 focus:ring-lime-400/20" />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Correo electrónico</label>
                <input type="email" placeholder="nombre@email.com" className="w-full rounded-2xl border px-4 py-3 text-base font-normal outline-none transition focus:ring-2 placeholder:text-neutral-500 border-white/10 text-white bg-neutral-900/70 focus:border-lime-400/50 focus:ring-lime-400/20" />
              </div>

              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Tipo de interés</label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-2xl border px-4 py-3 pr-10 text-base font-normal outline-none transition focus:ring-2 border-white/10 text-white bg-neutral-900/70 focus:border-lime-400/50 focus:ring-lime-400/20">
                    <option>Comprar vehículo</option>
                    <option>Vender mi vehículo</option>
                    <option>Financiamiento</option>
                    <option>Car finder</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-neutral-300">Vehículo que buscas o detalle de tu solicitud</label>
                <textarea rows={6} placeholder="Ejemplo: Busco un SUV 2020+, color negro, pago financiado..." className="w-full rounded-2xl border px-4 py-3 text-base font-normal outline-none transition focus:ring-2 placeholder:text-neutral-500 border-white/10 text-white bg-neutral-900/70 focus:border-lime-400/50 focus:ring-lime-400/20"></textarea>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-3 block text-sm font-medium text-neutral-300">Presupuesto estimado</label>
                <div className="grid gap-3 sm:grid-cols-4">
                  <button type="button" className="rounded-2xl border px-4 py-3 text-sm font-medium transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200">$5k - $10k</button>
                  <button type="button" className="rounded-2xl border px-4 py-3 text-sm font-medium transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200">$10k - $20k</button>
                  <button type="button" className="rounded-2xl border px-4 py-3 text-sm font-medium border-lime-400/30 bg-lime-400/10 text-lime-300">$20k - $35k</button>
                  <button type="button" className="rounded-2xl border px-4 py-3 text-sm font-medium transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200">$35k+</button>
                </div>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between border-white/10">
                <p className="max-w-xl text-sm font-medium leading-6 text-neutral-400">
                  Al enviar este formulario podrás reemplazar posteriormente esta estructura por tu integración final.
                </p>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition text-neutral-950 bg-lime-400 hover:bg-lime-300">
                  Enviar solicitud
                  <Send strokeWidth={1.5} className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
