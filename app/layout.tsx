import type { Metadata } from "next";
import { Navbar } from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import { Suspense } from "react";
import Providers from "./providers/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan David Aguilar | Desarrollador Full Stack - Portafolio Profesional",
  description: "Portafolio de Juan David Aguilar, desarrollador full stack especializado en Flutter, Supabase, React y Next.js. Crea aplicaciones móviles y web innovadoras con código limpio y arquitectura escalable.",
  keywords: ["desarrollador web", "portafolio desarrollador", "flutter developer", "supabase developer", "desarrollo móvil", "full stack developer", "react", "next.js", "typescript", "desarrollo de software"],
  authors: [{ name: "Juan David Aguilar" }],
  creator: "Juan David Aguilar",
  publisher: "Juan David Aguilar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-dominio.com'), // Reemplaza con tu dominio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Juan David Aguilar | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador especializado en Flutter, Supabase y aplicaciones web modernas. Explora mis proyectos y habilidades.",
    url: 'https://tu-dominio.com', // Reemplaza con tu dominio real
    siteName: 'Juan David Aguilar Portfolio',
    images: [
      {
        url: '/img/FotoJuanda.webp',
        width: 1200,
        height: 630,
        alt: 'Juan David Aguilar - Desarrollador Full Stack',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Juan David Aguilar | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador especializado en Flutter, Supabase y aplicaciones web modernas.",
    images: ['/img/FotoJuanda.webp'],
    creator: '@tuusuario', // Reemplaza con tu Twitter
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-verification', // Agrega tu código de verificación de Google Search Console
  },
};

function Loading() {
  return <div className="min-h-screen bg-gray-100 dark:bg-gray-900" />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased bg-gray-100 dark:bg-gray-900">
        <Providers>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
