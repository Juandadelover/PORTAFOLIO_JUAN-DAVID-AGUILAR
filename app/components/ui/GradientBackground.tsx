'use client';

import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const GradientBackground = ({
  children,
  className = '',
  colors = [
    'rgba(59, 130, 246, 0.1)', // blue-500
    'rgba(99, 102, 241, 0.1)', // indigo-500
    'rgba(139, 92, 246, 0.1)', // purple-500
  ],
  speed = 20,
}: GradientBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: colors.map((color, index) => 
            `radial-gradient(circle at ${(index * 50) + 25}% ${50 + Math.sin(index * Math.PI / 2) * 20}%, ${color} 0%, transparent 50%)`
          ).join(', '),
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        animate={{
          filter: ['blur(40px)', 'blur(60px)', 'blur(40px)'],
        }}
        transition={{
          duration: speed * 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};