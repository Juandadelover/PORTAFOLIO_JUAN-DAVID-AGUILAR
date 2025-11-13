'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiCode, HiExternalLink } from 'react-icons/hi';
import { ProjectCard } from './ProjectCard';
import { Project } from '../../config/projects';

const projects: Project[] = [
  {
    id: 0,
    title: "La Felicidá - Plataforma E-commerce de Café Premium",
    description: "Transformamos la experiencia de compra de café premium en una aventura digital inmersiva, conectando productores locales con amantes del café en todo el mundo.",
    longDescription: "La Felicidá es más que una tienda en línea; es una ventana digital al mundo del café premium y la cultura local. Desarrollamos una plataforma e-commerce que no solo vende productos, sino que cuenta historias, crea conexiones y genera experiencias memorables. Desde la selección del café hasta la reserva de experiencias turísticas, cada aspecto fue diseñado pensando en la conversión y el engagement del usuario.\n\nLa plataforma integra ventas de café premium, productos artesanales y experiencias turísticas en una interfaz intuitiva y cautivadora. El diseño responsive, las animaciones fluidas y la carga optimizada garantizan una experiencia de usuario excepcional en cualquier dispositivo.",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS", "Framer Motion", "i18n"],
    images: [
      {
        url: "/img/Proyecto 1/lafelicidaHome.png",
        caption: "Landing page moderna y atractiva que transmite la esencia de tu marca"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCafe.png",
        caption: "Catálogo de productos que destaca la calidad de tu oferta"
      },
      {
        url: "/img/Proyecto 1/lafelicidaDetalleCafe.png",
        caption: "Detalles de producto que generan confianza y aumentan conversiones"
      },
      {
        url: "/img/Proyecto 1/lafelicidaCarrito.png",
        caption: "Carrito de compras optimizado para maximizar ventas"
      },
      {
        url: "/img/Proyecto 1/lafelicidaServicios.png",
        caption: "Presentación profesional de servicios y experiencias"
      },
      {
        url: "/img/Proyecto 1/lafelicidaAgenteIA.png",
        caption: "Asistente virtual con IA para atención 24/7"
      }
    ],
    demo: "https://cafefelicida.vercel.app",
    gradient: "from-amber-600 to-yellow-600",
    category: "E-commerce"
  },
  {
    id: 1,
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos en línea y sistema de inventario en tiempo real.",
    longDescription: "Plataforma completa de e-commerce con gestión de productos, carrito de compras, pasarela de pagos integrada, sistema de inventario automatizado y panel de administración.",
    tech: ["Flutter", "Supabase", "Stripe", "REST API"],
    images: [
      {
        url: "/assets/proyecto2/catalogo.jpg",
        caption: "Catálogo de productos"
      },
      {
        url: "/assets/proyecto2/carrito.jpg",
        caption: "Carrito de compras integrado"
      },
      {
        url: "/assets/proyecto2/pagos.jpg",
        caption: "Proceso de pago seguro"
      },
      {
        url: "/assets/proyecto2/inventario.jpg",
        caption: "Panel de gestión de inventario"
      }
    ],
    demo: "https://demo-proyecto2.com",
    gradient: "from-purple-600 to-pink-600",
    category: "E-commerce"
  },
  {
    id: 2,
    title: "Chat en Tiempo Real",
    description: "Aplicación de mensajería instantánea con funciones de chat grupal, mensajes directos y compartición de archivos.",
    longDescription: "App de mensajería con chat en tiempo real, grupos, llamadas de voz, compartición de multimedia, cifrado end-to-end y sincronización multiplataforma.",
    tech: ["Flutter", "Supabase Realtime", "Storage", "WebRTC"],
    images: [
      {
        url: "/assets/proyecto3/chat.jpg",
        caption: "Interfaz principal de chat"
      },
      {
        url: "/assets/proyecto3/grupos.jpg",
        caption: "Gestión de grupos y canales"
      },
      {
        url: "/assets/proyecto3/llamadas.jpg",
        caption: "Llamadas de voz y video"
      },
      {
        url: "/assets/proyecto3/archivos.jpg",
        caption: "Compartición de archivos multimedia"
      }
    ],
    demo: "https://demo-proyecto3.com",
    gradient: "from-green-600 to-teal-600",
    category: "Social App"
  }
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="proyectos"
    >

      {/* Efectos de fondo estáticos */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute -bottom-44 -left-32 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute inset-x-0 top-1/3 mx-auto w-[55rem] h-[55rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[150px] opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6"
          >
            <HiCode className="w-4 h-4" />
            Portafolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
              Destacados
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Una selección de mis trabajos más recientes, donde combino diseño elegante con funcionalidad robusta.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {projects.filter(project => project.id === 0).map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isHovered={hoveredIndex === index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Juandadelover"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            aria-label="Visitar repositorio de GitHub de Juan David Aguilar"
          >
            <HiCode className="w-5 h-5" />
            Ver más en GitHub
            <HiExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}