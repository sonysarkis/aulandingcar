import { LayoutGrid, Smartphone, Gem, Workflow } from "lucide-react";

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-12">
      <div className="rounded-[2rem] border p-6 backdrop-blur sm:p-8 lg:p-10 border-white/10 bg-white/5">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium border-white/10 bg-white/5 text-neutral-300">
              ¿Por qué esta propuesta funciona?
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              Más claridad visual, mejor percepción de marca y una experiencia lista para convertir.
            </h2>
            <p className="mt-4 text-lg font-normal leading-8 text-neutral-300">
              La estructura toma lo esencial de la landing original: hero comercial, acceso al inventario y bloque de captación. Pero la evolución mejora ritmo, contraste, jerarquía y credibilidad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <LayoutGrid strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Estructura modular</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Bloques fáciles de adaptar y exportar.</p>
            </div>
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Smartphone strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Mobile first</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Grid y espaciados ajustados para todos los tamaños.</p>
            </div>
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Gem strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Look premium</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Estética sobria, limpia y tecnológica.</p>
            </div>
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Workflow strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Lista para integrar</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Ideal para conectar después con GoHighLevel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
