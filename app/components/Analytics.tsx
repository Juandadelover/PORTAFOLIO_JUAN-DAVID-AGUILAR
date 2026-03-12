"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Reemplaza con tu ID real de Google Analytics (ej: "G-XXXXXXXXXX")
// Deja en blanco para desactivar Analytics
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  if (!GA_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
}
