"use client";

export default function CTA() {
  return (
    <section className="py-32 sm:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-dark-900 to-gold/10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold Line Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 sm:px-12 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gold/10 mb-10 animate-pulse-gold">
          <svg className="w-9 h-9 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 leading-tight">
          No Dejes Pasar{" "}
          <span className="text-gradient-gold">Esta Oportunidad</span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Nuestro inventario se actualiza constantemente. Tu auto ideal puede
          estar disponible hoy y no mañana. Actúa ahora.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#contact"
            className="group px-10 py-4.5 bg-gradient-to-r from-gold to-gold-dark text-dark-900 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 btn-shine flex items-center justify-center gap-3"
            style={{ paddingTop: '18px', paddingBottom: '18px' }}
          >
            Cotiza Ahora — Es Gratis
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:+15551234567"
            className="px-10 glass text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
            style={{ paddingTop: '18px', paddingBottom: '18px' }}
          >
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
