"use client";

import { Suspense, lazy, useState, useEffect, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Esperar a que la página principal esté interactiva antes de cargar Spline
    // Esto evita que el runtime 3D pesado compita con recursos críticos de carga
    const loadSpline = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "0px", threshold: 0.1 },
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      return observer;
    };

    let observer: IntersectionObserver;

    // Usar requestIdleCallback si está disponible, sino setTimeout con 2s
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => {
        observer = loadSpline();
      }, { timeout: 3000 });
      return () => {
        cancelIdleCallback(id);
        observer?.disconnect();
      };
    } else {
      const timer = setTimeout(() => {
        observer = loadSpline();
      }, 2000);
      return () => {
        clearTimeout(timer);
        observer?.disconnect();
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-full h-full rounded-lg" />
            </div>
          }
        >
          <Spline scene={scene} />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-full h-full rounded-lg" />
        </div>
      )}
    </div>
  );
}
