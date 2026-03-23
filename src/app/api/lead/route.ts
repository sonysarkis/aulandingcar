import { NextResponse } from "next/server";

/**
 * API Route: POST /api/lead
 *
 * Recibe los datos del formulario de captura de leads (nombre, correo, celular)
 * y los envía al webhook de GoHighLevel (GHL).
 *
 * ═══════════════════════════════════════════════════════════════
 * CONFIGURACIÓN:
 * Coloca la URL de tu webhook de GHL en la variable de entorno:
 *
 *   GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
 *
 * En Vercel: Settings → Environment Variables → Añade GHL_WEBHOOK_URL
 * En local:  Crea un archivo .env.local con la variable
 * ═══════════════════════════════════════════════════════════════
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    // ─── ENVÍO A GOHIGHLEVEL ───────────────────────────────────
    //
    // La variable de entorno GHL_WEBHOOK_URL debe contener la URL
    // del webhook que configuraste en tu cuenta de GoHighLevel.
    //
    // Los campos se mapean así:
    //   name  → Nombre completo del contacto
    //   email → Correo electrónico del contacto
    //   phone → Número de teléfono del contacto
    //
    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error(
        "⚠️  GHL_WEBHOOK_URL no está configurada. El lead se registró en logs pero NO fue enviado a GHL."
      );
      // Registramos el lead en logs para no perder datos mientras configuras
      console.log("📋 Lead recibido:", { name, email, phone, timestamp: new Date().toISOString() });

      return NextResponse.json({
        success: true,
        message: "Lead registrado (webhook no configurado aún).",
      });
    }

    // Enviamos los datos al webhook de GHL
    const ghlResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Campos estándar reconocidos por GHL:
        name,
        email,
        phone,
        // Campos adicionales opcionales:
        source: "Landing Page - Elite Motors",
        tags: ["landing-page", "cotizacion"],
      }),
    });

    if (!ghlResponse.ok) {
      console.error("Error al enviar a GHL:", ghlResponse.status, await ghlResponse.text());
      // Aun así respondemos OK al usuario para no afectar su experiencia
      return NextResponse.json({
        success: true,
        message: "Lead registrado.",
      });
    }

    console.log("✅ Lead enviado exitosamente a GHL:", { name, email });

    return NextResponse.json({
      success: true,
      message: "Lead enviado exitosamente a GoHighLevel.",
    });
  } catch (error) {
    console.error("Error en /api/lead:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
