import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Motors | Vehículos Premium & Financiamiento a tu Medida",
  description:
    "Descubre nuestra selección exclusiva de vehículos premium. Financiamiento personalizado, garantía extendida y servicio postventa de primer nivel. Tu próximo auto te espera.",
  keywords: ["autos premium", "concesionario", "financiamiento automotriz", "vehículos de lujo", "comprar auto"],
  openGraph: {
    title: "Elite Motors | Vehículos Premium & Financiamiento a tu Medida",
    description: "Descubre nuestra selección exclusiva de vehículos premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-neutral-950 text-white antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
