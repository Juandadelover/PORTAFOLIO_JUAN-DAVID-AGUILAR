'use client';

import { motion } from "framer-motion";
import { HiCode, HiDeviceMobile, HiDatabase, HiChip, HiAcademicCap } from 'react-icons/hi';

export default function About() {
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
      color: 'blue'
    },
    {
      title: 'Backend',
      icon: HiDatabase,
      items: ['Supabase', 'MySQL', 'Node.js', 'REST APIs'],
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple'
    },
    {
      title: 'Mobile',
      icon: HiDeviceMobile,
      items: ['Flutter', 'Dart', 'Android Studio', 'iOS'],
      gradient: 'from-green-500 to-teal-500',
      color: 'green'
    },
    {
      title: 'Herramientas',
      icon: HiChip,
      items: ['Git', 'VS Code', 'Figma', 'Firebase'],
      gradient: 'from-orange-500 to-yellow-500',
      color: 'orange'
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="sobre-mi">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 45, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, -45, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-gradient-to-bl from-purple-500 to-pink-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.03, 0.1, 0.03],
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"
        />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <HiAcademicCap className="w-4 h-4" />
            Sobre Mí
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Conoce mi{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              trayectoria
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Desarrollador apasionado por crear soluciones tecnológicas innovadoras.
            Especializado en Flutter y Supabase, transformo ideas en aplicaciones funcionales y elegantes.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-500 group">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.gradient} mb-4 shadow-lg group-hover:shadow-2xl`}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform">
                  {skill.title}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-300 flex items-center text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Educación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl animate-pulse" />
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-blue-500/10"
          >
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-lg"
              >
                <HiAcademicCap className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Educación
              </h3>
            </motion.div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
                >
                  <motion.div 
                    className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                  </motion.div>
                  
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === 'En curso' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}