'use client'

import { useEffect } from 'react'

/**
 * Hook para precargar recursos críticos y mejorar el rendimiento
 * Precarga imágenes que probablemente el usuario verá pronto
 */
export function usePreloadCriticalAssets() {
  useEffect(() => {
    // Precargar imágenes críticas del portafolio
    const criticalImages = [
      '/img/Proyecto 1/lafelicidaHome.png',
      '/img/FotoJuanda.webp',
    ]

    criticalImages.forEach((src) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      // Solo precargar si la imagen aún no está en caché
      if (!document.querySelector(`link[href="${src}"]`)) {
        document.head.appendChild(link)
      }
    })

    // Preconectar a dominios externos
    const externalDomains = [
      'https://prod.spline.design',
    ]

    externalDomains.forEach((domain) => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      if (!document.querySelector(`link[href="${domain}"]`)) {
        document.head.appendChild(link)
      }
    })
  }, [])
}

/**
 * Hook para prefetch de rutas que el usuario probablemente visitará
 * Compatible con App Router de Next.js 13+
 */
export function usePrefetchRoutes() {
  useEffect(() => {
    // Prefetch después de que la página inicial cargue
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // En App Router, el prefetch se hace automáticamente con Link
        // Solo necesitamos crear links invisibles para rutas críticas
        const criticalRoutes = ['/proyectos/0']
        
        criticalRoutes.forEach((route) => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = route
          if (!document.querySelector(`link[rel="prefetch"][href="${route}"]`)) {
            document.head.appendChild(link)
          }
        })
      })
    }
  }, [])
}

/**
 * Componente de utilidad para performance
 */
export default function PerformanceOptimizer() {
  usePreloadCriticalAssets()
  usePrefetchRoutes()
  return null
}
