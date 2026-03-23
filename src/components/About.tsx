"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="py-32 sm:py-40 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-dark-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="reveal">
            <div className="relative">
              {/* 
                PLACEHOLDER: Reemplaza este bloque con una imagen real del showroom/equipo
                Ejemplo:
                <img
                  src="/about/showroom.jpg"
                  alt="Nuestro showroom"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              */}
              <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center overflow-hidden relative">
                {/* Decorative car silhouette */}
                <svg className="w-48 h-48 text-dark-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
                <span className="absolute bottom-4 text-xs text-dark-400">Imagen del showroom</span>

                {/* Gold accent border */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/20 -z-10" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-4 sm:right-8 glass-strong rounded-2xl p-6 shadow-2xl shadow-black/30">
                <div className="text-3xl font-heading font-bold text-gradient-gold">+15</div>
                <div className="text-sm text-gray-400">Años en el mercado</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-gold bg-gold/10 rounded-full mb-6">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Más Que un Concesionario,{" "}
              <span className="text-gradient-gold">Somos Tu Aliado</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Con más de 15 años en el sector automotriz, hemos construido una
              reputación basada en la confianza, la transparencia y la excelencia
              en cada transacción. No vendemos autos, creamos experiencias.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Nuestro equipo de expertos se dedica a entender tus necesidades y
              encontrar el vehículo perfecto para ti, con opciones de
              financiamiento que se adaptan a cualquier presupuesto.
            </p>

            {/* Value props */}
            <div className="space-y-4 mb-8">
              {[
                "Inspección de 150+ puntos en cada vehículo",
                "Equipo certificado y apasionado por los autos",
                "Proceso de compra 100% transparente",
                "Financiamiento aprobado en 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 btn-shine"
            >
              Conoce Más
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
