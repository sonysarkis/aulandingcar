import { Search, FileText, Zap } from "lucide-react";

export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border p-6 backdrop-blur border-white/10 bg-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
            <Search strokeWidth={1.5} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Explora o solicita</h3>
          <p className="mt-3 text-base font-normal leading-7 text-neutral-300">
            Muestra tu inventario o permite que el usuario describa el vehículo que desea encontrar.
          </p>
        </div>

        <div className="rounded-[1.75rem] border p-6 backdrop-blur border-white/10 bg-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
            <FileText strokeWidth={1.5} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Captura de lead optimizada</h3>
          <p className="mt-3 text-base font-normal leading-7 text-neutral-300">
            Formulario claro, visual y preparado para integrarse después con tu flujo comercial.
          </p>
        </div>

        <div className="rounded-[1.75rem] border p-6 backdrop-blur border-white/10 bg-white/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-neutral-950 bg-lime-400">
            <Zap strokeWidth={1.5} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-white">Conversión más rápida</h3>
          <p className="mt-3 text-base font-normal leading-7 text-neutral-300">
            Jerarquía visual moderna, llamadas a la acción visibles y una experiencia que inspira valor.
          </p>
        </div>
      </div>
    </section>
  );
}
