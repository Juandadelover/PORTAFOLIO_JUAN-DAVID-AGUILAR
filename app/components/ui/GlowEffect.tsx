'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        boxShadow: isHovered
          ? `0 0 ${intensity}px ${glowColor}`
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute w-full h-full pointer-events-none"
        animate={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 50%)`
            : 'none',
        }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </motion.div>
  );
};