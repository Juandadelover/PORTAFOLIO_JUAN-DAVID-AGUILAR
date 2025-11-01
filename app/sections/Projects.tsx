'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "App de Gestión de Tareas",
    description: "Aplicación móvil desarrollada con Flutter y Supabase para la gestión eficiente de tareas personales y de equipo. Incluye notificaciones, recordatorios y sincronización en tiempo real.",
    tech: ["Flutter", "Supabase", "Material Design"],
    image: "/assets/proyecto1.jpg",
    github: "https://github.com/tuusuario/proyecto1",
    demo: "https://demo-proyecto1.com"
  },
  {
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico con características como carrito de compras, pagos en línea y sistema de inventario en tiempo real.",
    tech: ["Flutter", "Supabase", "Stripe"],
    image: "/assets/proyecto2.jpg",
    github: "https://github.com/tuusuario/proyecto2",
    demo: "https://demo-proyecto2.com"
  },
  {
    title: "Chat en Tiempo Real",
    description: "Aplicación de mensajería instantánea con funciones de chat grupal, mensajes directos y compartición de archivos.",
    tech: ["Flutter", "Supabase Realtime", "Storage"],
    image: "/assets/proyecto3.jpg",
    github: "https://github.com/tuusuario/proyecto3",
    demo: "https://demo-proyecto3.com"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-800" id="proyectos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-800">
                {/* Aquí irá la imagen del proyecto */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}