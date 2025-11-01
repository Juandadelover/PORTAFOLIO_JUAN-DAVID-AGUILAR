'use client'

import { motion } from 'framer-motion'
import { HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi'
import type { FC } from 'react'

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const skills = [
    { 
      name: 'Frontend', 
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      icon: HiCode
    },
    { 
      name: 'Mobile', 
      items: ['Flutter', 'Dart', 'Firebase', 'React Native', 'iOS', 'Android'],
      icon: HiLightBulb
    },
    { 
      name: 'Backend', 
      items: ['Node.js', 'Python', 'Supabase', 'PostgreSQL', 'MongoDB', 'Express'],
      icon: HiAcademicCap
    },
    { 
      name: 'Tools & Others', 
      items: ['Git', 'VS Code', 'Docker', 'Figma', 'AWS', 'CI/CD', 'Jest', 'Cypress'],
      icon: HiCode
    },
  ]

  const experiences = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "Tech Innovators SA",
      period: "2023 - Presente",
      description: "Liderazgo técnico en el desarrollo de aplicaciones web escalables utilizando Next.js, React y Node.js. Implementación de arquitecturas cloud-native y CI/CD pipelines."
    },
    {
      title: "Desarrollador Frontend",
      company: "Digital Solutions Corp",
      period: "2021 - 2023",
      description: "Desarrollo de interfaces de usuario modernas y responsivas con React y TypeScript. Implementación de sistemas de diseño y optimización de rendimiento."
    },
    {
      title: "Desarrollador Mobile",
      company: "App Creators Ltd",
      period: "2020 - 2021",
      description: "Desarrollo de aplicaciones móviles multiplataforma con Flutter y Firebase. Implementación de funcionalidades en tiempo real y offline-first."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soy un desarrollador de software apasionado por crear soluciones innovadoras.
            Me especializo en el desarrollo web y móvil, con un fuerte enfoque en la experiencia del usuario.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skills.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Experiencia Profesional
          </h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h4>
              <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
          >
            Ver mis proyectos
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About