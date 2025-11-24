import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases CSS de manera inteligente
 * - clsx: maneja condicionales y arrays
 * - twMerge: resuelve conflictos entre clases de Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}