"use client"

import React, { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/lib/hooks/useActiveSection"
import { useTheme } from "@/context/ThemeContext"
import { HiSun, HiMoon } from "react-icons/hi"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  
  // Hook personalizado para detección automática de sección activa
  const activeSection = useActiveSection(['sobre-mi', 'proyectos', 'contacto'])
  
  // Mapear sección a nombre de nav item usando useCallback para optimización
  const getActiveTab = useCallback(() => {
    switch(activeSection) {
      case 'sobre-mi': return 'Sobre Mí'
      case 'proyectos': return 'Proyectos'  
      case 'contacto': return 'Contacto'
      case 'inicio': return 'Inicio'
      default: return 'Inicio' // Default cuando no hay sección detectada
    }
  }, [activeSection])

  const activeTab = getActiveTab()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // ✅ Optimización: Debounce para resize listener
    let timeoutId: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 150)
    }

    handleResize()
    window.addEventListener("resize", debouncedResize)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", debouncedResize)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[60] mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        
        {/* Theme Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className={cn(
            "relative cursor-pointer p-2.5 rounded-full transition-all duration-300",
            isDark 
              ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
              : "bg-blue-100 hover:bg-blue-200 text-blue-600"
          )}
          aria-label="Cambiar tema"
        >
          <motion.div
            initial={false}
            animate={{ 
              rotate: isDark ? 0 : 360,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {isDark ? (
              <HiSun className="w-5 h-5" />
            ) : (
              <HiMoon className="w-5 h-5" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}