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

      {/* Hero Section con imagen principal */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de fondo con parallax */}
        <div className="absolute inset-0">
          <Image
            src={project.images[activeImage]?.url || project.images[0].url}
            alt={project.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            {project.category && (
              <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-4">
                {project.category}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            {project.description}
          </motion.p>

          {/* Miniaturas de imágenes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-2 justify-center flex-wrap max-w-2xl mx-auto"
          >
            {project.images.slice(0, 6).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === idx
                    ? 'border-blue-500 scale-110'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <Image
                  src={img.url}
                  alt={`Vista ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Estadísticas destacadas */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: HiTrendingUp, value: '+70%', label: 'Aumento en ventas', color: 'from-blue-500 to-cyan-500' },
              { icon: HiClock, value: '24/7', label: 'Disponibilidad', color: 'from-purple-500 to-pink-500' },
              { icon: HiStar, value: '+150%', label: 'ROI promedio', color: 'from-pink-500 to-red-500' },
              { icon: HiUsers, value: '+5K', label: 'Clientes alcanzados', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`} />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <stat.icon className="w-8 h-8 mb-4 text-white" />
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de imágenes mejorada */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Galería del Proyecto
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explora cada detalle de esta solución digital premium
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gray-800">
                  <Image
                    src={image.url}
                    alt={image.caption || project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Descripción y características */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Sobre el Proyecto
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {project.longDescription}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <HiLightningBolt className="w-5 h-5 text-white" />
                  </div>
                  Características Clave
                </h3>
                <ul className="space-y-3">
                  {[
                    'Diseño responsive y optimizado para todos los dispositivos',
                    'Experiencia de usuario intuitiva y moderna',
                    'Integración con sistemas de pago seguros',
                    'Panel de administración completo',
                    'Optimización SEO y rendimiento',
                    'Soporte multiidioma',
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Tecnologías y CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Tecnologías */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <HiChip className="w-5 h-5 text-white" />
                  </div>
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/20 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              {project.demo && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      ¿Listo para ver el proyecto en acción?
                    </h4>
                    <p className="text-gray-400 mb-6">
                      Explora la demo en vivo y descubre todas las funcionalidades
                    </p>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 transform shadow-lg"
                    >
                      <span>Ver Proyecto en Vivo</span>
                      <HiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Trabajemos juntos para crear algo increíble
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold transition-all hover:scale-105"
            >
              Contáctame
              <HiArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
