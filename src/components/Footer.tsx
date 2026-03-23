import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-4 lg:px-8">
      <div className="flex flex-col gap-5 rounded-[1.75rem] border px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between border-white/10 bg-white/5">
        <div>
          <p className="text-base font-medium text-white">Aurum Motors</p>
          <p className="mt-1 text-sm font-medium text-neutral-400">Landing automotriz moderna, premium y lista para exportar.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-400">
          <Link href="#" className="transition hover:text-white">Inventario</Link>
          <Link href="#" className="transition hover:text-white">Financiamiento</Link>
          <Link href="#" className="transition hover:text-white">Sell Your Car</Link>
          <Link href="#" className="transition hover:text-white">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
