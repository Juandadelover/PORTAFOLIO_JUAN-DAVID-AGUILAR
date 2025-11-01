'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden"
        >
          <img
            src="/img/FotoJuanda.png"
            alt="Juan David Aguilar"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Juan David Aguilar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Desarrollador de Software
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Desarrollador móvil - Flutter - Supabase
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Proyectos
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Contáctame
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}