'use client';

import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import { SplineScene } from '@/components/ui/splite';
import { Card } from '@/components/ui/card';
import { SpotlightStatic } from '@/components/ui/spotlight-static';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Fondo con gradientes animados */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_100%)]" />
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Card principal con escena 3D */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-0">
        <Card className="w-full min-h-[600px] md:h-[650px] lg:h-[700px] bg-black/[0.96] border-gray-800 relative overflow-hidden">
          {/* Spotlight estático detrás del robot - posicionado a la derecha */}
          <SpotlightStatic
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Contenido izquierdo */}
            <div className="flex-1 p-6 sm:p-8 md:p-12 relative z-10 flex flex-col justify-center">
              {/* Badge animado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm w-fit"
              >
                <HiSparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">Disponible para proyectos</span>
              </motion.div>

              {/* Saludo y Título */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-3 font-light">
                  ¡Hola! 👋 Soy
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block text-white mb-2">Juan David</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Aguilar
                  </span>
                </h1>
              </motion.div>

              {/* Subtítulo con iconos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="flex flex-wrap items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-blue-400/30 backdrop-blur-xl w-fit">
                  <div className="flex items-center gap-2 text-white">
                    <HiCode className="w-5 h-5 text-blue-300" />
                    <span className="text-base sm:text-lg font-semibold">Desarrollador Full Stack</span>
                  </div>
                  <span className="hidden sm:inline text-blue-300/80">•</span>
                  <div className="flex items-center gap-2 text-white">
                    <HiLightningBolt className="w-5 h-5 text-purple-300" />
                    <span className="text-base sm:text-lg font-semibold">Flutter & Supabase</span>
                  </div>
                </div>
              </motion.div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-300 max-w-lg mb-8 leading-relaxed"
              >
                Creando experiencias digitales excepcionales con código limpio y diseño intuitivo. 
                Especializado en desarrollo móvil y aplicaciones web modernas.
              </motion.p>

              {/* Botones de acción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contacto"
                  className="group relative inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-base overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-shadow duration-500"
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
                  <span className="relative z-10 flex items-center gap-2">
                    Contactar
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>
                
                <motion.a
                  href="#proyectos"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-xl font-bold text-base border-2 border-blue-500/50 hover:border-blue-500 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    Ver Proyectos
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
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

            {/* Versión móvil - Imagen estática o contenido alternativo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:hidden flex items-center justify-center py-8 px-4"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                {/* Glow effect decorativo */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-40"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
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
                    <HiCode className="w-16 h-16 text-blue-400/80" />
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
          className="flex flex-col items-center gap-2 mt-8"
        >
          <span className="text-sm text-gray-500">Descubre más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiArrowDown className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de luz en el fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}
