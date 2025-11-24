"use client"

import { Home, User, Briefcase, Mail } from "lucide-react"
import { NavItem } from "./tubelight-navbar"

/**
 * Configuración de items de navegación
 * Basado en las secciones actuales del portafolio:
 * - Inicio: Página principal
 * - Sobre Mí: Sección #sobre-mi
 * - Proyectos: Sección #proyectos  
 * - Contacto: Sección #contacto
 */
export const navItems: NavItem[] = [
  {
    name: "Inicio",
    url: "/",
    icon: Home
  },
  {
    name: "Sobre Mí", 
    url: "/#sobre-mi",
    icon: User
  },
  {
    name: "Proyectos",
    url: "/#proyectos", 
    icon: Briefcase
  },
  {
    name: "Contacto",
    url: "/#contacto",
    icon: Mail
  }
]