'use client';

import { motion } from 'framer-motion';
import { HiEye, HiStar } from 'react-icons/hi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    images: Array<{
      url: string;
      caption: string;
    }>;
    tech: string[];
    demo: string;
    gradient: string;
    category: string;
  };
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function ProjectCard({ project, index, isHovered, onHoverStart, onHoverEnd }: ProjectCardProps) {
  const router = useRouter();

  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.demo, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group relative cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
      onClick={() => router.push(`/proyectos/${index}`)}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
        {/* Indicador de clic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium z-10"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Click para ver más
        </motion.div>

        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
          <Image
            src={project.images[0].url}
            alt={project.images[0].caption}
            fill
            className="object-cover"
          />
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white">
              {project.category}
            </span>
          </div>

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"
          />

          {/* Icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: isHovered ? 0.8 : 1,
                opacity: isHovered ? 0.3 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            >
              <HiStar className="w-20 h-20 text-white/30" />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
            {isHovered ? project.fullDescription : project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action button */}
          <div className="flex pt-4 border-t border-gray-200 dark:border-gray-700">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.demo, '_blank');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium`}
            >
              <HiEye className="w-4 h-4" />
              Ver Proyecto
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}