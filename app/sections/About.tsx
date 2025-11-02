'use client';

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { HiCode, HiDeviceMobile, HiDatabase, HiChip } from 'react-icons/hi';
import { SkillCard } from '../components/ui/SkillCard';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skills = [
    {
      title: 'Frontend',
      icon: HiCode,
      items: ['HTML5', 'CSS3', 'JavaScript', 'Flutter', 'React', 'Dart'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: HiDatabase,
      items: ['Supabase', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile',
      icon: HiDeviceMobile,
      items: ['Flutter', 'Dart', 'Android Studio'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Herramientas',
      icon: HiChip,
      items: ['Git', 'VS Code', 'Figma'],
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  const education = [
    {
      title: 'Tecnólogo en Análisis y Desarrollo de Software',
      institution: 'SENA',
      period: '2024-2026',
      description: 'Formación especializada en desarrollo de software, metodologías ágiles y arquitectura de sistemas.'
    },
    {
      title: 'Técnico en Sistemas',
      institution: 'SENA',
      period: '2021-2023',
      description: 'Fundamentos de programación, redes y mantenimiento de sistemas informáticos.'
    }
  ];

  const backgroundRef = useRef(null);

  return (
    <section className="relative py-20 overflow-hidden" id="sobre-mi">
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0">
        <motion.div
          ref={backgroundRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
        />
      </div>

      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.15),transparent_50%)]"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.05),transparent_50%)]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4"
          >
            Sobre Mí
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
            Conóceme un poco más
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            ¡Hola! Soy Juan David, un apasionado desarrollador de aplicaciones especializado en Supabase y Flutter. 
            Me encanta crear soluciones tecnológicas que ayuden a las personas y empresas a alcanzar sus objetivos.
          </motion.p>
        </motion.div>

        {/* Grid de Habilidades */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 dark:opacity-10 dark:group-hover:opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50 hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.gradient} mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de Educación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Educación
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-3 top-2 w-6 h-6 bg-primary-500 rounded-full">
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-25" />
                </div>
                <div className="pl-6 border-l-2 border-primary-500/20">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}