import type { Metadata } from "next";
import { Navbar } from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import { Suspense } from "react";
import Providers from "./providers/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan David Aguilar | Desarrollador Full Stack",
  description: "Portfolio profesional de Juan David Aguilar - Desarrollador especializado en Flutter, Supabase y aplicaciones web modernas",
  keywords: ["desarrollo web", "software", "programación", "frontend", "backend", "full-stack", "flutter", "supabase", "react"],
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
