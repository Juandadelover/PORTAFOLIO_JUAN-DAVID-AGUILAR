'use client';

import { motion } from 'framer-motion';
import { HiSparkles, HiTrendingUp, HiLightningBolt, HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

export default function CTA() {
  const features = [
    {
      icon: HiSparkles,
      title: 'Presencia Digital',
      description: 'Tu negocio visible 24/7 en el mundo digital',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HiTrendingUp,
      title: 'Crecimiento Real',
      description: 'Soluciones que generan resultados medibles',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: HiLightningBolt,
      title: 'Tecnología Moderna',
      description: 'Tecnologías modernas al servicio de tu marca',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Efectos de fondo estáticos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-gradient-to-tl from-pink-500 to-orange-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
          
          <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
              >
                <HiSparkles className="w-4 h-4" />
                Transformación Digital
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Potencia la presencia digital de{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  tu negocio
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Si tu negocio no está en el mundo digital, no existe para miles de clientes potenciales.
                Transformo ideas en soluciones que trabajan para ti 24/7.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 group-hover:border-transparent transition-all">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 font-medium">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-bold">
                  Tu negocio necesita presencia, no solo existencia.
                </span>
                <br />
                Invertir en tecnología hoy es asegurar tu posición mañana.
              </p>
              
              <Link href="#contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>Hablemos de tu proyecto</span>
                  <HiArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-4 text-sm text-gray-500 dark:text-gray-400"
              >
                Tu transformación digital empieza aquí
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
