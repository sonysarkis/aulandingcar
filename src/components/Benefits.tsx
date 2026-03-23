import { Award, Clock, Shield, Wrench } from "lucide-react";

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-12">
      <div className="rounded-[2rem] border p-6 backdrop-blur sm:p-8 lg:p-10 border-white/10 bg-white/5">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium border-white/10 bg-white/5 text-neutral-300">
              ¿Por qué elegirnos?
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              Más que un concesionario, somos tu aliado en cada kilómetro.
            </h2>
            <p className="mt-4 text-lg font-normal leading-8 text-neutral-300">
              En Super Motors combinamos calidad, transparencia y un servicio personalizado que nos diferencia. Cada cliente es único, y cada vehículo que ofrecemos está respaldado por nuestra reputación.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Award strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Vehículos certificados</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Cada auto cuenta con historial verificado e inspección mecánica completa.</p>
            </div>
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Clock strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Proceso ágil</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Desde la cotización hasta la entrega, simplificamos cada paso para ti.</p>
            </div>
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Shield strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Compra con confianza</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">Transparencia total en precios, condiciones y documentación del vehículo.</p>
            </div>
            <div className="rounded-[1.5rem] border p-5 border-white/10 bg-neutral-900/60">
              <Wrench strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">Soporte postventa</h3>
              <p className="mt-2 text-base font-normal leading-7 text-neutral-300">No desaparecemos después de la compra. Estamos contigo a largo plazo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
