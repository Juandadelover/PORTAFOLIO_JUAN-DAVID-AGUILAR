'use client';

import { motion } from "framer-motion";
import { useRef } from 'react';
import { HiCode, HiDeviceMobile, HiDatabase, HiChip, HiAcademicCap, HiLocationMarker, HiSparkles } from 'react-icons/hi';

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skills = [
    {
      title: 'Frontend',
      icon: HiCode,
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Flutter', 'Dart'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: HiDatabase,
      items: ['Supabase', 'MySQL', 'Node.js', 'REST APIs'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile',
      icon: HiDeviceMobile,
      items: ['Flutter', 'Dart', 'Android Studio', 'iOS'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Herramientas',
      icon: HiChip,
      items: ['Git', 'VS Code', 'Figma', 'Firebase'],
      gradient: 'from-orange-500 to-yellow-500',
    }
  ];

  const education = [
    {
      title: 'Ingeniería de Software',
      institution: 'Por definir',
      period: 'Próximamente',
      description: 'Programa planificado orientado al diseño, desarrollo y despliegue de soluciones de software escalables.',
      status: 'Próximamente'
    },
    {
      title: 'Tecnólogo en Análisis y Desarrollo de Software',
      institution: 'SENA',
      period: '2024-2026',
      description: 'Formación especializada en desarrollo de software, metodologías ágiles y arquitectura de sistemas.',
      status: 'En curso'
    },
    {
      title: 'Técnico en Sistemas',
      institution: 'SENA',
      period: '2021-2023',
      description: 'Fundamentos de programación, redes y mantenimiento de sistemas informáticos.',
      status: 'Completado'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="sobre-mi"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Foto + Info Personal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Card Principal con Foto y Descripción */}
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            {/* Gradiente decorativo */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 via-purple-500/5 to-transparent" />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Foto de perfil */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex-shrink-0"
              >
                {/* Contenedor de la foto */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl"
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Rotating border */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[4px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800" />
                  </motion.div>
                  {/* Image */}
                  <motion.div
                    className="absolute inset-3 rounded-full overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src="/img/FotoJuanda.webp"
                      alt="Juan David Aguilar"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Información Personal */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                    <HiSparkles className="w-4 h-4" />
                    Sobre Mí
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Juan David{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                      Aguilar
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
                    Desarrollador Full Stack
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-6">
                    Desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
                    Especializado en <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span> y 
                    <span className="text-purple-600 dark:text-purple-400 font-semibold"> Supabase</span>, 
                    transformo ideas en aplicaciones funcionales y elegantes. Me enfoco en escribir 
                    código limpio y crear experiencias de usuario excepcionales.
                  </p>

                  {/* Info adicional */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HiLocationMarker className="w-5 h-5 text-blue-500" />
                      <span>Colombia</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HiAcademicCap className="w-5 h-5 text-purple-500" />
                      <span>SENA</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HiCode className="w-5 h-5 text-pink-500" />
                      <span>+2 años exp.</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades & Tecnologías
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tecnologías que domino para crear soluciones completas
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative h-full bg-white dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.gradient} mb-4 shadow-lg`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {skill.title}
                  </h4>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-600 dark:text-gray-400 flex items-center text-sm"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.gradient} mr-2 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Formación Académica
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria de aprendizaje en desarrollo de software
            </p>
          </div>

          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0 last:border-l-transparent"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                        edu.status === 'En curso' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : edu.status === 'Completado'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
