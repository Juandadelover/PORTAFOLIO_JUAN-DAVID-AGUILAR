import type { Metadata } from "next";
import { Navbar } from "./components/shared/Navbar";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import { Suspense } from "react";
import Providers from "./providers/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador de Software",
  description: "Portfolio profesional mostrando mis proyectos y habilidades como desarrollador de software",
  keywords: ["desarrollo web", "software", "programación", "frontend", "backend", "full-stack"],
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
            <main className="pt-16">
              {children}
            </main>
            <WhatsAppButton />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
