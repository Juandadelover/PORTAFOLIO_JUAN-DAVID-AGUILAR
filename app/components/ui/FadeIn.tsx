'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  withGlow?: boolean;
  glowColor?: string;
  scale?: number;
  rotate?: number;
  blur?: boolean;
}

export const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  duration = 0.7,
  distance = 40,
  threshold = 0.2,
  once = true,
  withGlow = false,
  glowColor = 'rgba(66, 153, 225, 0.6)',
  scale = 1,
  rotate = 0,
  blur = false,
}: FadeInProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  const getDirectionOffset = () => {
    switch (direction) {
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: scale * 0.95,
      rotate: rotate,
      filter: blur ? 'blur(10px)' : 'none',
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      scale: scale,
      rotate: 0,
      filter: 'none',
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: duration,
        delay: delay,
        bounce: 0.3,
        damping: 20,
      },
    },
  };

  const content = (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView || hasAnimated ? "visible" : "hidden"}
      variants={variants}
      className={`transform-gpu ${className}`}
      whileHover={withGlow ? {
        boxShadow: `0 0 20px ${glowColor}`,
        scale: scale * 1.05,
      } : undefined}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );

  return withGlow ? (
    <div className="relative group">
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
      {content}
    </div>
  ) : content;
};