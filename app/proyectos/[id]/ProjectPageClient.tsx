'use client';

import { motion } from 'framer-motion';
import { HiChip, HiLightningBolt, HiArrowLeft } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      {/* Botón de regreso */}
      <Link
        href="/#proyectos"
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 hover:border-white/40 transition-all duration-300"
      >
        <HiArrowLeft className="w-6 h-6" />
      </Link>

      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Efectos de fondo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          className="fixed inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl" />
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
        >
          {/* Galería de imágenes */}
          <div className="space-y-12 p-6">
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
                    
                    {/* Overlay gradiente en hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
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
        </motion.div>
      </div>
    </main>
  );
}
