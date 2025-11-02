'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedText } from '../components/ui/AnimatedText';
import { FadeIn } from '../components/ui/FadeIn';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <FadeIn delay={0.2}>
          <motion.div
            className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-blue-500/30 shadow-md shadow-blue-500/30"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src="/img/FotoJuanda.png"
              alt="Juan David Aguilar"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </FadeIn>

        <AnimatedText 
          text="Juan David Aguilar"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        />

        <FadeIn direction="up" delay={0.4}>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4"
            whileHover={{ scale: 1.01 }}
          >
            Desarrollador de Software
          </motion.p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4"
          >
            <motion.a
              href="#contact"
              className="px-6 py-2.5 text-sm sm:text-base bg-blue-600/90 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contáctame
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-2.5 text-sm sm:text-base bg-transparent border border-blue-600/50 text-white rounded-full font-medium hover:bg-blue-600/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
