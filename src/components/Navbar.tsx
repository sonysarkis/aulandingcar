"use client";
import { useState, useEffect } from "react";
import { CarFront, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Home", id: "home" },
  { href: "#inventario", label: "Inventario", id: "inventario" },
  { href: "#proceso", label: "Proceso", id: "proceso" },
  { href: "#beneficios", label: "Ventajas", id: "beneficios" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["contacto", "beneficios", "inventario", "proceso"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            return;
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // Also detect when at the very top
    const handleTopScroll = () => {
      if (window.scrollY < 200) setActiveSection("home");
    };
    window.addEventListener("scroll", handleTopScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-neutral-950/60 backdrop-blur-2xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border shadow-2xl backdrop-blur border-white/10 bg-white/5 shadow-black/20">
            <CarFront strokeWidth={1.5} className="h-5 w-5 text-lime-400" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-white">SUPER MOTORS</div>
            <div className="text-xs font-medium text-neutral-400">No solo carros, experiencias.</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+16787368898"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200"
          >
            <PhoneCall strokeWidth={1.5} className="h-4 w-4 text-lime-400" />
            Llámanos
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
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  activeSection === link.id
                    ? "bg-white/10 text-white"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a
                href="tel:+16787368898"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-center text-sm font-medium backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-neutral-200"
              >
                <PhoneCall strokeWidth={1.5} className="h-4 w-4 text-lime-400" />
                Llámanos
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
