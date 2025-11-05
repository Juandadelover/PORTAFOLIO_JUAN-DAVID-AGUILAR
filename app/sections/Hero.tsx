'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { HiArrowDown, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  // Partículas flotantes
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0 w-full h-full">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_100%)]" />
        </div>
        
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
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Partículas flotantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10 md:mt-16 space-y-6"
      >
        {/* Badge animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
        >
          <HiSparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">Disponible para proyectos</span>
        </motion.div>

        {/* Foto de perfil mejorada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-gray-900/90" />
          </motion.div>
          {/* Image container */}
          <motion.div
            className="absolute inset-2 rounded-full overflow-hidden ring-4 ring-blue-400/40 shadow-[0_25px_60px_rgba(59,130,246,0.45)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="/img/FotoJuanda.webp"
              alt="Juan David Aguilar"
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
            {/* Overlay gradient for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/35" />
          </motion.div>
        </motion.div>

        {/* Saludo y Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 font-light"
          >
            ¡Hola! 👋 Soy
          </motion.p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
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
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center mb-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-blue-400/30 backdrop-blur-xl shadow-[0_18px_45px_rgba(59,130,246,0.25)]">
            <div className="flex items-center gap-2 text-white">
              <HiCode className="w-5 h-5 text-blue-300" />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">Desarrollador Full Stack</span>
            </div>
            <span className="hidden sm:inline text-blue-300/80">•</span>
            <div className="flex items-center gap-2 text-white">
              <HiLightningBolt className="w-5 h-5 text-purple-300" />
              <span className="text-lg sm:text-xl font-semibold tracking-wide">Flutter & Supabase</span>
            </div>
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.div className="space-y-6 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Creando experiencias digitales excepcionales con código limpio y diseño intuitivo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Especializado en desarrollo móvil y aplicaciones web modernas.
          </motion.p>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
        >
          <motion.a
            href="#contacto"
            className="group relative inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-shadow duration-500 min-w-[200px] justify-center"
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
            <span className="relative z-10 flex items-center justify-center gap-2">
              Contactar
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#proyectos"
            className="group relative inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg border-2 border-blue-500/50 hover:border-blue-500 backdrop-blur-sm transition-all duration-300 min-w-[200px] justify-center"
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
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Descubre más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiArrowDown className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Efecto de luz en el fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
}
