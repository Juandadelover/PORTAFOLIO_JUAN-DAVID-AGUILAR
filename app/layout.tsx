import type { Metadata } from "next";
import { NavBar } from "./components/ui/tubelight-navbar";
import { navItems } from "./components/ui/navbar-config";
import Footer from "./components/shared/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import Analytics from "./components/Analytics";
import { Suspense } from "react";
import Providers from "./providers/Providers";
import "./globals.css";

// Componente para registrar Service Worker
function ServiceWorker() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `,
      }}
    />
  );
}

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
  metadataBase: new URL('https://eljuandadeloper.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Juan David Aguilar | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador especializado en Flutter, Supabase y aplicaciones web modernas. Explora mis proyectos y habilidades.",
    url: 'https://eljuandadeloper.vercel.app',
    siteName: 'Juan David Aguilar Portfolio',
    images: [
      {
        url: 'https://eljuandadeloper.vercel.app/img/FotoJuanda.webp',
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
    creator: '@juandadeloper', // Reemplaza con tu Twitter
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
    google: 'google56f152f973b4f71f', // Código de verificación de Google Search Console
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Juan David Aguilar",
    "jobTitle": "Desarrollador Full Stack",
    "description": "Desarrollador full stack especializado en Flutter, Supabase, React y Next.js. Crea aplicaciones móviles y web innovadoras con código limpio y arquitectura escalable.",
    "url": "https://eljuandadeloper.vercel.app",
    "image": "https://eljuandadeloper.vercel.app/img/FotoJuanda.webp",
    "sameAs": [
      "https://github.com/tuusuario",
      "https://linkedin.com/in/tuusuario",
      "https://twitter.com/tuusuario"
    ],
    "knowsAbout": [
      "Desarrollo web",
      "Flutter",
      "Supabase",
      "React",
      "Next.js",
      "TypeScript",
      "Desarrollo móvil",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desarrollador de Software",
      "occupationLocation": {
        "@type": "Country",
        "name": "Colombia"
      }
    }
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload fonts for better Core Web Vitals */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="antialiased bg-gray-100 dark:bg-gray-900">
        <ServiceWorker />
        <Analytics />
        <Providers>
          <Suspense fallback={<Loading />}>
            <NavBar items={navItems} />
            <main>
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
