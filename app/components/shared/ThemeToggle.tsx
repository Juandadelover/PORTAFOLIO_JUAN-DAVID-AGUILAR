'use client'

import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-gray-700' 
          : 'bg-blue-100 hover:bg-blue-200 text-blue-600 border border-blue-200'
      } shadow-lg`}
      aria-label="Cambiar tema"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : 360,
          scale: [1, 1.2, 1]
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
  )
}