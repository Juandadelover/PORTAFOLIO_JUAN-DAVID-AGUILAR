'use client';

import { motion } from 'framer-motion';

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export const GlowEffect = ({
  children,
  className = '',
  glowColor = 'rgba(66, 153, 225, 0.6)', // Color azul por defecto
  intensity = 20,
}: GlowEffectProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{
        boxShadow: `0 0 ${intensity}px ${glowColor}`,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};