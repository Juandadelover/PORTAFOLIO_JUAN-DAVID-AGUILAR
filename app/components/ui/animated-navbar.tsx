  "use client"

import React from "react"
import { motion } from "framer-motion"
import { NavBar } from "./tubelight-navbar"
import { navItems } from "./navbar-config"

/**
 * Variantes de animación para el navbar con Framer Motion
 * Animación de entrada suave desde abajo hacia arriba
 */
const navVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      duration: 0.6
    }
  }
}

/**
 * Componente wrapper del NavBar con animaciones de entrada mejoradas
 * Incluye animaciones suaves de aparición y transiciones fluidas
 */
export function AnimatedNavBar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavBar items={navItems} />
    </motion.div>
  )
}