'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number; // Amplitud del movimiento
  duration?: number; // Duración de un ciclo completo
  delay?: number;    // Retraso inicial
  className?: string;
}

export const FloatingElement = ({
  children,
  amplitude = 10,
  duration = 4,
  delay = 0,
  className = '',
}: FloatingElementProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -amplitude, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
    });
  }, [amplitude, duration, delay, controls]);

  return (
    <motion.div
      animate={controls}
      className={`relative ${className}`}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};