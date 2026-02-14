'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '../../config/site'
import { ThemeToggle } from './ThemeToggle'
import { HiCode } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    isDark
      ? ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.95)']
      : ['rgba(248, 250, 252, 0)', 'rgba(248, 250, 252, 0.9)']
  )

  const navContainerClasses = useMemo(() => {
    if (scrolled) {
      return isDark
        ? 'backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'backdrop-blur-xl border-b border-slate-200/80 shadow-[0_12px_36px_rgba(148,163,184,0.25)]'
    }
    return isDark ? 'backdrop-blur-sm border-b border-transparent' : 'backdrop-blur-md border-b border-transparent'
  }, [isDark, scrolled])

  const navLinkClass = useMemo(
    () =>
      `relative ${
        isDark
          ? 'text-slate-200 hover:text-white'
          : 'text-slate-600 hover:text-slate-900'
      } px-4 py-2 rounded-lg text-sm font-medium transition-all group`,
    [isDark]
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navContainerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Nombre */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                }`}
              >
                <HiCode className="w-6 h-6 text-white" />
              </motion.div>
              <div className="hidden md:flex flex-col">
                <span
                  className={`font-bold text-lg bg-gradient-to-r ${
                    isDark
                      ? 'from-blue-400 to-purple-400'
                      : 'from-indigo-600 via-purple-500 to-blue-500'
                  } text-transparent bg-clip-text`}
                >
                  {siteConfig.name}
                </span>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Full Stack Developer
                </p>
              </div>
              <span className="md:hidden text-sm font-bold text-slate-900 dark:text-white">
                {siteConfig.name.split(' ')[0]}
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {siteConfig.mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={navLinkClass}
                  >
                    <span className="relative z-10">{item.title}</span>
                    <motion.div
                      className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                        isDark ? 'bg-white/5' : 'bg-slate-200/70'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className={`ml-4 pl-4 border-l ${isDark ? 'border-white/10' : 'border-slate-200/70'}`}>
              <ThemeToggle />
            </div>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-2 px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-blue-600 text-white border border-blue-500/60 hover:bg-blue-700 hover:border-blue-600 drop-shadow-[0_15px_35px_rgba(37,99,235,0.25)]'
              }`}
            >
              Contactar
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div
              className={`px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl border-t ${
                isDark
                  ? 'bg-gray-900/95 border-white/10'
                  : 'bg-white/95 border-slate-200/70 shadow-[0_25px_45px_rgba(15,23,42,0.12)]'
              }`}
            >
              {siteConfig.mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isDark
                        ? 'text-slate-200 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        isDark ? 'bg-blue-500' : 'bg-indigo-500'
                      }`}
                    />
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contacto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: siteConfig.mainNav.length * 0.1 }}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-center mt-4 px-6 py-3 rounded-lg text-base font-semibold shadow-lg ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-blue-600 text-white border border-blue-500/60 hover:bg-blue-700 hover:border-blue-600 drop-shadow-[0_18px_45px_rgba(37,99,235,0.2)]'
                }`}
              >
                Contactar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}