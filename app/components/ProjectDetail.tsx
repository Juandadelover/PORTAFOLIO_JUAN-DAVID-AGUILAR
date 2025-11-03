'use client';

import { motion } from 'framer-motion';
import { HiX, HiLink, HiCode, HiChip, HiLightningBolt } from 'react-icons/hi';
import Image from 'next/image';

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    images: {
      url: string;
      caption: string;
    }[];
    technologies: string[];
    features: string[];
    demoUrl?: string;
    codeUrl?: string;
  };
  onClose: () => void;
  isOpen: boolean;
}

export default function ProjectDetail({ project, onClose, isOpen }: ProjectDetailProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Fondo con blur y animación */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ 
          opacity: 1,
          backdropFilter: "blur(8px)",
          transition: { duration: 0.4 }
        }}
        exit={{ 
          opacity: 0,
          backdropFilter: "blur(0px)",
          transition: { duration: 0.3 }
        }}
        className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/95 to-blue-900/95"
      />

      {/* Efectos de fondo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
        onClick={e => e.stopPropagation()}
      >
        {/* Carrusel de imágenes */}
        <div className="relative h-72 sm:h-96">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          >
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full flex-shrink-0 snap-center">
                <Image
                  src={image.url}
                  alt={image.caption || project.title}
                  className="object-cover"
                  fill
                  quality={95}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
                {image.caption && (
                  <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/50 backdrop-blur-sm p-2 rounded-lg">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
          
          {/* Indicadores de navegación */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                onClick={() => {
                  const elements = document.querySelectorAll('.snap-center');
                  elements[index]?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
          
          {/* Overlay con título flotante */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h2>
          </div>
          
          {/* Botón de cerrar mejorado */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 hover:border-white/40 transition-all duration-300"
          >
            <HiX className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Contenido */}
        <div className="p-6 sm:p-8">
          {/* Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Estadísticas impactantes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl font-bold text-amber-400 mb-2"
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
                  className="text-3xl font-bold text-amber-400 mb-2"
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
                  className="text-3xl font-bold text-amber-400 mb-2"
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
                  className="text-3xl font-bold text-amber-400 mb-2"
                >
                  +5K
                </motion.div>
                <div className="text-sm text-gray-400">Clientes alcanzados</div>
              </div>
            </div>
          </motion.div>

          {/* Tecnologías con animación mejorada */}
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
              {project.technologies.map((tech, index) => (
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

          {/* Características con animación mejorada */}
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
              ¿Por qué necesitas una web así?
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Aumenta tus ventas con una presencia online 24/7",
                "Alcanza clientes en todo el mundo sin límites geográficos",
                "Destaca tu marca con un diseño profesional y único",
                "Ofrece una experiencia de compra moderna y confiable",
                "Automatiza procesos y reduce costos operativos",
                "Construye una comunidad alrededor de tu marca",
                "Analiza y mejora basado en datos reales",
                "Crece y escala tu negocio sin limitaciones"
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
                    className="mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 flex-shrink-0 group-hover:scale-125 transition-transform"
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

          {/* Enlaces mejorados */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl text-white font-bold overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
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
                <span className="relative flex items-center gap-2">
                  <HiLink className="w-5 h-5" />
                  Ver Proyecto
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}