'use client';

import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { SpotlightStatic } from '@/components/ui/spotlight-static';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Fondo con gradientes animados */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.04),transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_100%)]" />
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Card principal con escena 3D */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8 md:py-0">
        <Card className="w-full min-h-auto sm:min-h-[600px] md:h-[650px] lg:h-[700px] bg-white/90 dark:bg-black/[0.96] border-gray-200 dark:border-gray-800 relative overflow-hidden shadow-lg sm:shadow-2xl transition-colors duration-300 rounded-xl sm:rounded-2xl">
          {/* Spotlight estático fijo detrás del robot - posicionado en el lado derecho */}
          <SpotlightStatic
            className="-top-40 -right-40 md:right-0 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Contenido izquierdo */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              {/* Badge animado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-3 sm:mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm w-fit mx-auto md:mx-0"
              >
                <HiSparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-400" />
                <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-300 font-medium">Disponible para proyectos</span>
              </motion.div>

              {/* Saludo y Título */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 sm:mb-6"
              >
                <p className="text-sm sm:text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 font-light">
                  ¡Hola! 👋 Soy
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900 dark:text-white mb-1 sm:mb-2">Juan David</span>
                  <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                    Aguilar
                  </span>
                </h1>
              </motion.div>

              {/* Subtítulo con iconos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 sm:mb-6"
              >
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/15 dark:via-purple-500/15 dark:to-pink-500/15 border border-blue-400/30 backdrop-blur-xl w-fit mx-auto md:mx-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-800 dark:text-white">
                    <HiCode className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-300 flex-shrink-0" />
                    <span className="text-xs sm:text-base sm:text-lg font-semibold">Full Stack</span>
                  </div>
                  <span className="hidden sm:inline text-blue-400/80">•</span>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-800 dark:text-white">
                    <HiLightningBolt className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-purple-300 flex-shrink-0" />
                    <span className="text-xs sm:text-base sm:text-lg font-semibold">Flutter & Supabase</span>
                  </div>
                </div>
              </motion.div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mb-4 sm:mb-8 leading-relaxed"
              >
                Creando experiencias digitales excepcionales con código limpio. Especializado en desarrollo móvil y aplicaciones web.
              </motion.p>

              {/* Botones de acción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col xs:flex-row gap-2.5 sm:gap-4 w-full md:w-auto"
              >
                <motion.a
                  href="#contacto"
                  className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 dark:bg-blue-600 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.4)] sm:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] sm:hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-shadow duration-500 flex-1 sm:flex-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 opacity-100"
                    animate={{
                      backgroundPosition: ['100% 0%', '0% 0%', '100% 0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    <span className="hidden xs:inline">Contactar</span>
                    <span className="xs:hidden">Contacto</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      className="hidden sm:inline"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>
                
                <motion.a
                  href="#proyectos"
                  className="group inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base border-2 border-blue-500/50 hover:border-blue-500 backdrop-blur-sm transition-all duration-300 flex-1 sm:flex-none"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span className="hidden xs:inline">Ver Proyectos</span>
                    <span className="xs:hidden">Proyectos</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="hidden sm:inline"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* Contenido derecho - Escena 3D (solo en desktop) */}
            <div className="hidden md:block flex-1 relative min-h-[500px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Versión móvil - Animación decorativa */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:hidden flex items-center justify-center py-4 sm:py-8 px-3 sm:px-4"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                {/* Glow effect decorativo */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30 dark:opacity-40"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Círculo decorativo animado */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-purple-500/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                {/* Icono central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <HiCode className="w-16 h-16 text-blue-500 dark:text-blue-400/80" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </Card>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center gap-1.5 sm:gap-2 mt-4 sm:mt-8"
        >
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Descubre más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiArrowDown className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de luz en el fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}
