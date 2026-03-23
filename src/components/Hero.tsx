"use client";

import { ArrowRight, ChevronRight, Sparkles, ShieldCheck, BadgeDollarSign } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CarModel = dynamic(() => import("./CarModel"), { ssr: false });

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-10">
      <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-6 lg:pr-8">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium backdrop-blur border-white/10 bg-white/5 text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-lime-400"></span>
            Compra, vende o encuentra tu próximo auto con una experiencia premium.
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Tu próximo vehículo empieza con una presencia que sí transmite confianza.
          </h1>

          <p className="mt-6 max-w-xl text-lg font-normal leading-8 text-neutral-300">
            Comprar un auto no tiene por qué ser un dolor de cabeza. En SUPER MOTORS hacemos que el proceso sea fácil, rápido y seguro. Te acompañamos en cada paso para que encuentres el vehículo perfecto para ti.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#lead-form" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition text-neutral-950 bg-lime-400 hover:bg-lime-300">
              Obtener cotización
              <ArrowRight strokeWidth={1.5} className="h-4 w-4" />
            </Link>
            <Link href="#inventario" className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-base font-medium backdrop-blur transition border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10">
              Ver inventario
              <ChevronRight strokeWidth={1.5} className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border p-5 backdrop-blur border-white/10 bg-white/5">
              <div className="text-2xl font-semibold tracking-tight text-white">+250</div>
              <div className="mt-2 text-sm font-medium text-neutral-400">Vehículos gestionados</div>
            </div>
            <div className="rounded-3xl border p-5 backdrop-blur border-white/10 bg-white/5">
              <div className="text-2xl font-semibold tracking-tight text-white">24h</div>
              <div className="mt-2 text-sm font-medium text-neutral-400">Respuesta promedio</div>
            </div>
            <div className="rounded-3xl border p-5 backdrop-blur border-white/10 bg-white/5">
              <div className="text-2xl font-semibold tracking-tight text-white">98%</div>
              <div className="mt-2 text-sm font-medium text-neutral-400">Clientes satisfechos</div>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative h-full min-h-[28rem] rounded-[2rem] border p-4 shadow-2xl backdrop-blur border-white/10 bg-white/5 shadow-black/30">
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"></div>
            <div className="relative flex h-full flex-col rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/70">
              <div className="flex items-center justify-between border-b pb-4 border-white/10">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Experiencia Inmersiva</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">Descubre cada detalle</h2>
                </div>
                <div className="rounded-full border px-3 py-1 text-xs font-medium border-lime-400/20 bg-lime-400/10 text-lime-300">
                  Interactivo 360°
                </div>
              </div>

              <div className="relative mt-5 flex min-h-[450px] w-full flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_32%),linear-gradient(to_bottom_right,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] border-white/10 md:min-h-[350px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-30"></div>
                <div className="absolute top-6 z-30 w-full px-4 text-center pointer-events-none opacity-60 transition-opacity hover:opacity-100 md:top-8">
                  <p className="text-xs font-semibold tracking-widest uppercase md:text-sm text-lime-400">Modelo 3D</p>
                  <p className="mt-1 text-[10px] font-medium md:text-xs text-neutral-400">Arrastra para rotar el vehículo</p>
                </div>
                <CarModel />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border p-4 border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                      <ShieldCheck strokeWidth={1.5} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Compra segura</p>
                      <p className="text-xs font-medium text-neutral-400">Proceso claro y confiable</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border p-4 border-white/10 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                      <BadgeDollarSign strokeWidth={1.5} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Tasación rápida</p>
                      <p className="text-xs font-medium text-neutral-400">Mejor propuesta inicial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
