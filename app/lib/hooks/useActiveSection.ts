import { useEffect, useState, useCallback } from "react"
import { usePathname } from "next/navigation"

/**
 * Hook personalizado para detección automática de sección activa mediante scroll
 * Utiliza IntersectionObserver para detectar cuando las secciones entran en viewport
 * También detecta la ruta actual para páginas específicas
 * 
 * @param sections Array de IDs de secciones a observar
 * @param options Opciones de configuración del IntersectionObserver
 * @returns ID de la sección activa actualmente
 */
export function useActiveSection(
  sections: string[], 
  options: IntersectionObserverInit = {}
) {
  const [activeSection, setActiveSection] = useState<string>("")
  const pathname = usePathname()

  useEffect(() => {
    // Detectar sección basada en la ruta actual
    if (pathname.startsWith('/proyectos')) {
      setActiveSection('proyectos')
      return
    }

    // Si estamos en la página principal, usar IntersectionObserver
    if (pathname === '/') {
      const observer = new IntersectionObserver(
        (entries) => {
          // Encontrar la entrada con mayor intersectionRatio
          const visibleEntries = entries.filter(entry => entry.isIntersecting)
          
          if (visibleEntries.length > 0) {
            // Ordenar por intersectionRatio descendente y tomar la más visible
            const mostVisible = visibleEntries.reduce((prev, current) => 
              current.intersectionRatio > prev.intersectionRatio ? current : prev
            )
            
            setActiveSection(mostVisible.target.id)
          } else {
            // Si no hay secciones visibles, probablemente estamos en el Hero
            const heroSection = document.querySelector('section, div[class*="hero"], div[class*="h-screen"]')
            if (heroSection && window.scrollY < window.innerHeight * 0.5) {
              setActiveSection('inicio')
            }
          }
        },
        {
          threshold: [0.1, 0.3, 0.5], // Múltiples thresholds para mejor detección
          rootMargin: "-10% 0px -60% 0px", // Ajuste mejorado
          ...options
        }
      )

      // Observar todas las secciones
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.observe(element)
        }
      })

      // Detectar posición inicial
      const checkInitialPosition = () => {
        if (window.scrollY < window.innerHeight * 0.3) {
          setActiveSection('inicio')
        }
      }
      
      checkInitialPosition()
      window.addEventListener('scroll', checkInitialPosition, { once: true })

      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', checkInitialPosition)
      }
    } else {
      // Para otras rutas, resetear a inicio
      setActiveSection('inicio')
    }
  }, [sections, pathname]) // Agregar pathname como dependencia

  return activeSection
}