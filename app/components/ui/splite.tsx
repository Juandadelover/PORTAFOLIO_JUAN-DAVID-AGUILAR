'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Solo cargar Spline cuando el componente esté en el viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { 
        rootMargin: '100px', // Cargar 100px antes de que sea visible
        threshold: 0.1 
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
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
  )
}
