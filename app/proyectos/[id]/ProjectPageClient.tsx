'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { HiChip, HiLightningBolt, HiArrowLeft, HiExternalLink, HiStar, HiTrendingUp, HiUsers, HiClock } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: {
    url: string;
    caption?: string;
  }[];
  tech: string[];
  demo?: string;
  featured?: boolean;
  category?: string;
}

export default function ProjectPageClient({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main ref={containerRef} className="min-h-screen bg-black">
      {/* Navbar fijo */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#proyectos"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group"
          >
            <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver a Proyectos</span>
          </Link>
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium transition-all hover:scale-105"
            >
              <span>Ver Demo</span>
              <HiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.nav>

      {/* Hero Section premium sin imagen de fondo plana */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-[calc(100vh-4rem)] md:min-h-screen overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-24 bg-gradient-to-br from-[#05060d] via-[#0b1220] to-[#0f172a]"
      >
        {/* Luces y destellos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[460px] h-[460px] bg-gradient-to-tl from-pink-500/20 via-blue-500/20 to-transparent blur-[120px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-gradient-to-br from-white/15 to-transparent blur-3xl opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_rgba(8,11,19,0.95))]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Columna de contenido */}
            <div className="space-y-4 sm:space-y-6 md:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs sm:text-sm font-medium text-blue-200 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
              >
                <span className="inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400 animate-pulse" />
                {project.category ?? 'Proyecto destacado'}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1] sm:leading-tight"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200/90 max-w-2xl leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Métricas destacadas */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl"
              >
                {[ 
                  { icon: HiTrendingUp, value: '+70%', label: 'Ventas', color: 'from-blue-400 to-cyan-300' },
                  { icon: HiClock, value: '24/7', label: 'Disponibilidad', color: 'from-purple-400 to-pink-400' },
                  { icon: HiStar, value: '4.9', label: 'Experiencia', color: 'from-amber-300 to-orange-400' },
                  { icon: HiUsers, value: '+5K', label: 'Clientes', color: 'from-teal-300 to-emerald-400' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.04] backdrop-blur-lg p-2.5 sm:p-3 md:p-4"
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${stat.color} blur-xl`} />
                    <div className="relative flex flex-col gap-1 sm:gap-1.5 md:gap-2">
                      <span className="w-fit rounded-full bg-white/10 p-1 sm:p-1.5 md:p-2">
                        <stat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white/80" />
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-white/60 leading-tight">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA principal */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 md:gap-4"
              >
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-2 md:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm md:text-base font-semibold shadow-[0_20px_45px_rgba(59,130,246,0.35)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.45)] transition-all active:scale-95"
                  >
                    <span className="whitespace-nowrap">Ver demo en vivo</span>
                    <HiExternalLink className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  </a>
                )}

                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-full border border-white/15 text-white/90 text-sm md:text-base hover:text-white hover:border-white/30 transition-colors active:scale-95"
                >
                  <span className="whitespace-nowrap">Hablemos del proyecto</span>
                </Link>
              </motion.div>
            </div>

            {/* Tarjeta visual del proyecto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="relative mt-6 sm:mt-8 lg:mt-0"
            >
              <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-transparent blur-3xl" />
              <div className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-pink-500/25 via-purple-500/25 to-transparent blur-3xl" />

              <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_35px_120px_-35px_rgba(15,23,42,0.9)] overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 pb-2.5 sm:pb-3 md:pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-semibold flex-shrink-0">
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-xs md:text-sm text-white/60">Proyecto destacado</p>
                      <p className="text-sm sm:text-base md:text-lg font-semibold text-white truncate">{project.title}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-white/60 flex-shrink-0">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10">
                      <HiStar className="w-4 h-4 text-amber-300" />
                      4.9
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10">
                      <HiClock className="w-4 h-4 text-blue-200" />
                      3 meses
                    </span>
                  </div>
                </div>

                <div className="relative mx-2.5 sm:mx-3 md:mx-4 mt-3 sm:mt-4 md:mt-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                  <div className="absolute inset-x-3 sm:inset-x-4 md:inset-x-6 top-3 sm:top-4 md:top-6 z-10 flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-white/70 uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em]">Preview</span>
                    <span className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-xs text-white/50">
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="hidden sm:inline">En vivo</span>
                    </span>
                  </div>
                  <div className="aspect-[4/3]">
                    <Image
                      src={project.images[activeImage]?.url || project.images[0].url}
                      alt={project.images[activeImage]?.caption || project.title}
                      fill
                      className="object-cover"
                      priority
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Controles / miniaturas */}
                <div className="px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 pb-4 sm:pb-6 md:pb-8">
                  <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-white/50 mb-2 md:mb-3">Vistas del proyecto</p>
                  <div className="flex gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto pb-1 scrollbar-hide snap-x snap-mandatory">
                    {project.images.map((img, idx) => (
                      <button
                        key={`${img.url}-${idx}`}
                        onClick={() => setActiveImage(idx)}
                        className={`relative h-10 w-16 sm:h-12 sm:w-20 md:h-16 md:w-24 flex-shrink-0 rounded-md sm:rounded-lg md:rounded-xl overflow-hidden border transition-all snap-start ${
                          activeImage === idx
                            ? 'border-blue-400 ring-2 ring-blue-400/40 scale-[1.02]'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <Image
                          src={img.url}
                          alt={img.caption || `${project.title} vista ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Indicador scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hidden sm:block absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/60 text-xs"
          >
            Desliza para explorar
            <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2">
              <motion.span
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-white/70"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contenido Principal */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="group relative w-full"
              >
                {/* Efecto de resplandor en hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Contenedor de imagen con efecto parallax */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={image.url}
                      alt={image.caption || project.title}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority={index === 0}
                      quality={100}
                    />
                    
                    {/* Caption con animación */}
                    {image.caption && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 right-0 p-6"
                      >
                        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                          <p className="text-white text-sm md:text-base font-medium">
                            {image.caption}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Indicador de número de imagen */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="text-white text-sm font-medium">
                        {index + 1} / {project.images.length}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Título del proyecto */}
          <div className="px-6 pt-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Contenido */}
          <div className="p-6 sm:p-8">
            <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
              <div>
                {/* Descripción */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12"
                >
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl font-bold text-blue-400 mb-2"
                      >
                        +70%
                      </motion.div>
                      <div className="text-sm text-gray-400">Aumento en ventas</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-3xl font-bold text-purple-400 mb-2"
                      >
                        24/7
                      </motion.div>
                      <div className="text-sm text-gray-400">Disponibilidad</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-3xl font-bold text-pink-400 mb-2"
                      >
                        +150%
                      </motion.div>
                      <div className="text-sm text-gray-400">ROI promedio</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-3xl font-bold text-blue-400 mb-2"
                      >
                        +5K
                      </motion.div>
                      <div className="text-sm text-gray-400">Clientes alcanzados</div>
                    </div>
                  </div>
                </motion.div>

                {/* ¿Por qué necesitas una web así? */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                      <HiLightningBolt className="w-6 h-6 text-white" />
                    </motion.div>
                    Soluciones Digitales para Café Premium
                  </div>
                  <ul className="grid grid-cols-1 gap-6">
                    {[
                      "Maximiza el Alcance de tu Café Premium: Plataforma digital optimizada para conectar con conocedores del café a nivel global",
                      "Experiencia de Marca Inmersiva: Narración visual y storytelling que transmite la autenticidad y calidad de tu café",
                      "Comercio Electrónico Especializado: Sistema de venta personalizado para las particularidades del café premium",
                      "Gestión Integral del Negocio: Automatización de inventario, pedidos y logística específica para café",
                      "Comunidad y Educación: Espacios interactivos para compartir conocimientos sobre el café y cultura cafetera",
                      "Análisis Avanzado del Mercado: Insights detallados sobre preferencias de café y comportamiento del consumidor",
                      "Integración Omnicanal: Conexión perfecta entre tu presencia digital y experiencias físicas en la finca",
                      "Escalabilidad Estratégica: Infraestructura robusta que crece con tu negocio cafetero"
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group"
                      >
                        <motion.span 
                          className="mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0 group-hover:scale-125 transition-transform"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div>
                {/* Tecnologías */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500"
                    >
                      <HiChip className="w-6 h-6 text-white" />
                    </motion.div>
                    Tecnologías
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                        }}
                        className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm hover:border-blue-500/40 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Botón de acción */}
                {project.demo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 transform shadow-lg"
                    >
                      Ver Proyecto en Vivo
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
