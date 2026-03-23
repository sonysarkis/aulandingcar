import { Search, ShieldCheck, Handshake } from "lucide-react";

export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border p-6 backdrop-blur border-white/10 bg-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
            <Search strokeWidth={1.5} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Encuentra tu auto ideal</h3>
          <p className="mt-3 text-base font-normal leading-7 text-neutral-300">
            Explora nuestro inventario actualizado o cuéntanos exactamente qué vehículo buscas. Nosotros lo encontramos por ti.
          </p>
        </div>

        <div className="rounded-[1.75rem] border p-6 backdrop-blur border-white/10 bg-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
            <ShieldCheck strokeWidth={1.5} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Inspección y garantía</h3>
          <p className="mt-3 text-base font-normal leading-7 text-neutral-300">
            Cada vehículo pasa por una inspección rigurosa de más de 150 puntos. Comprá con la tranquilidad que mereces.
          </p>
        </div>

        <div className="rounded-[1.75rem] border p-6 backdrop-blur border-white/10 bg-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
            <Handshake strokeWidth={1.5} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Financiamiento flexible</h3>
          <p className="mt-3 text-base font-normal leading-7 text-neutral-300">
            Trabajamos con múltiples opciones de financiamiento para que tu próximo auto se adapte a tu presupuesto, sin sorpresas.
          </p>
        </div>
      </div>
    </section>
  );
}
