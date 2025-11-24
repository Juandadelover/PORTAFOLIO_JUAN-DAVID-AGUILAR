'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.div
      className="whatsapp-button fixed right-6 z-40"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="https://wa.me/573113678555"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center"
      >
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-xl flex items-center"
        >
          <span className="text-gray-900 dark:text-white font-medium whitespace-nowrap">
            ¿Hablamos de tu proyecto?
          </span>
          <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45" />
          </div>
        </motion.div>

        {/* Botón principal */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          {/* Círculo exterior con efecto de pulso */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-sm animate-pulse" />
          
          {/* Contenedor principal del botón */}
          <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
            {/* Efecto de brillo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icono de WhatsApp */}
            <svg
              className="w-7 h-7 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.92 15.62C16.66 16.39 15.56 17.09 14.78 17.24C14.28 17.33 13.63 17.4 12.05 16.79C9.98 15.97 8.5 13.91 8.35 13.72C8.2 13.53 7.19 12.2 7.19 10.81C7.19 9.42 7.89 8.75 8.14 8.49C8.39 8.23 8.68 8.15 8.86 8.15L9.32 8.16C9.47 8.17 9.69 8.09 9.91 8.62C10.12 9.15 10.66 10.55 10.72 10.69C10.78 10.83 10.82 10.99 10.74 11.17C10.66 11.35 10.62 11.46 10.48 11.63L10.11 12.07C9.97 12.21 9.82 12.36 9.98 12.64C10.14 12.92 10.67 13.78 11.44 14.47C12.45 15.37 13.27 15.64 13.55 15.78C13.83 15.92 14.02 15.9 14.19 15.71C14.36 15.52 14.87 14.93 15.07 14.65C15.27 14.37 15.46 14.41 15.72 14.51C15.98 14.61 17.33 15.27 17.62 15.41C17.91 15.56 18.09 15.63 18.15 15.75C18.21 15.89 18.21 16.57 17.92 17.35L17.92 15.62Z" />
            </svg>
          </div>
        </motion.div>
      </motion.a>
    </motion.div>
  );
}