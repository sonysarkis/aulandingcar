"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Compró un BMW X5",
    rating: 5,
    text: "Increíble experiencia de compra. El equipo fue profesional, transparente y me ayudaron a encontrar exactamente lo que buscaba. El proceso de financiamiento fue rápido y sin complicaciones.",
    avatar: "CM",
  },
  {
    name: "María Elena Torres",
    role: "Compró un Mercedes-Benz C300",
    rating: 5,
    text: "Después de visitar varios concesionarios, aquí encontré la diferencia. La atención personalizada y la calidad de los vehículos es incomparable. 100% recomendados.",
    avatar: "MT",
  },
  {
    name: "Roberto García",
    role: "Compró un Audi Q7",
    rating: 5,
    text: "Lo que más me impresionó fue la transparencia en todo el proceso. Sin letra chica, sin sorpresas. Mi Audi Q7 estaba en condiciones impecables. Volveré sin duda.",
    avatar: "RG",
  },
  {
    name: "Ana Patricia Ruiz",
    role: "Compró una Tesla Model 3",
    rating: 5,
    text: "Me asesoraron perfectamente en mi transición al mundo eléctrico. El equipo conoce cada detalle de los autos que vende. Servicio excepcional de principio a fin.",
    avatar: "AR",
  },
  {
    name: "Diego Fernández",
    role: "Compró un Porsche Cayenne",
    rating: 5,
    text: "Busqué durante meses un Cayenne en las condiciones que quería. Ellos lo tenían y el precio fue justo. La garantía que ofrecen me dio tranquilidad total.",
    avatar: "DF",
  },
  {
    name: "Laura Sánchez",
    role: "Compró un Range Rover Sport",
    rating: 5,
    text: "La experiencia premium que prometen es real. Desde el primer contacto hasta la entrega del vehículo, todo fue impecable. Un servicio de otro nivel.",
    avatar: "LS",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const updateScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="py-32 sm:py-40 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-gold bg-gold/10 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Lo Que Dicen{" "}
            <span className="text-gradient-gold">Nuestros Clientes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestro mayor logro y
            nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide reveal"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-shrink-0 w-[340px] sm:w-[400px] p-8 rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500 snap-start"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-dark-900 font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
