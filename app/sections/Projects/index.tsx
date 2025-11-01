'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import type { FC } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import Image from 'next/image'
import { projects } from '@/config/projects'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'backend' | 'all'
}

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'backend'>('all')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  )

  return (
    <section id="projects" className="relative py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-white to-primary-50/30 dark:from-gray-800 dark:to-gray-900"
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(120,119,198,0.1),transparent)] dark:bg-[linear-gradient(45deg,transparent,rgba(120,119,198,0.05),transparent)] bg-repeat-y bg-[length:100%_100%]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
            Mis Proyectos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Una selección de mis proyectos más destacados en desarrollo web, móvil y backend.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'web', 'mobile', 'backend'].map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category as typeof filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className={`px-6 py-2 rounded-full font-medium backdrop-blur-sm ${
                filter === category
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg shadow-primary-500/20 dark:shadow-primary-500/10'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700/90 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl dark:shadow-gray-800/30 overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/10 hover:border-primary-500/20 dark:hover:border-primary-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => {
                        console.log(`Error loading image for ${project.title}`)
                      }}
                    />
                  </motion.div>
                ) : (
                  <ImagePlaceholder title={project.title} />
                )}
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    >
                      <HiExternalLink className="w-5 h-5 mr-2" />
                      Ver Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                    >
                      <HiCode className="w-5 h-5 mr-2" />
                      Ver Código
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects