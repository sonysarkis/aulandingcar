import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Inventory() {
  return (
    <section id="inventario" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium border-white/10 bg-white/5 text-neutral-300">
            Inventario destacado
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">Busca tu próximo auto, ahora con una presencia más refinada.</h2>
          <p className="mt-4 text-lg font-normal leading-8 text-neutral-300">
            Encuentra el auto perfecto para ti con nuestra amplia selección de vehículos de calidad inspeccionados y listos para entrega inmediata. 
          </p>
        </div>
        <Link href="#" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10">
          Ver todo el inventario
          <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article className="group overflow-hidden rounded-[1.75rem] border backdrop-blur transition hover:-translate-y-1 border-white/10 bg-white/5 hover:border-white/20">
          <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80" alt="SUV premium gris" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">SUV destacado</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Lexus RX</h3>
              </div>
              <div className="rounded-full px-3 py-1 text-sm font-semibold text-neutral-950 bg-lime-400">$4,585</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Automático</span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Financiable</span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Inspeccionado</span>
            </div>
          </div>
        </article>

        <article className="group overflow-hidden rounded-[1.75rem] border backdrop-blur transition hover:-translate-y-1 border-white/10 bg-white/5 hover:border-white/20">
          <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80" alt="Sedán premium negro" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Sedán ejecutivo</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Lexus RX 2006</h3>
              </div>
              <div className="rounded-full px-3 py-1 text-sm font-semibold text-neutral-950 bg-lime-400">$5,485</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Bajo consumo</span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Historial claro</span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Listo para entrega</span>
            </div>
          </div>
        </article>

        <article className="group overflow-hidden rounded-[1.75rem] border backdrop-blur transition hover:-translate-y-1 md:col-span-2 xl:col-span-1 border-white/10 bg-white/5 hover:border-white/20">
          <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80" alt="Sedán plateado premium" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">Oferta especial</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Nissan Altima</h3>
              </div>
              <div className="rounded-full px-3 py-1 text-sm font-semibold text-neutral-950 bg-lime-400">$5,985</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Excelente estado</span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Interior premium</span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium border-white/10 text-neutral-300">Entrega inmediata</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
