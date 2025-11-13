'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from 'framer-motion';
import { 
  HiCode, 
  HiChip, 
  HiOutlineArrowRight, 
  HiDownload,
  HiCheckCircle,
  HiLightningBolt,
  HiStar,
  HiChevronDown
} from 'react-icons/hi';
import { 
  SiFlutter, 
  SiSupabase, 
  SiNextdotjs, 
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAvailable, setIsAvailable] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Detectar preferencia de movimiento reducido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Tracking del mouse para efectos de iluminación
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax suave con spring physics
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Tecnologías con iconos y experiencia
  const technologies = [
    { name: 'Flutter', icon: SiFlutter, color: '#02569B', experience: '3 años' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', experience: '2 años' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', experience: '2 años' },
    { name: 'React', icon: SiReact, color: '#61DAFB', experience: '3 años' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', experience: '2 años' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', experience: '2 años' }
  ];

  // Estadísticas animadas con iconos y colores
  const stats = [
    { 
      value: 25, 
      label: 'Proyectos', 
      suffix: '+',
      icon: HiCode,
      color: 'from-blue-500 to-purple-500' 
    },
    { 
      value: 3, 
      label: 'Años Exp.', 
      suffix: '+',
      icon: HiStar,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      value: 15, 
      label: 'Clientes', 
      suffix: '+',
      icon: HiCheckCircle,
      color: 'from-pink-500 to-blue-500'
    }
  ];

  // Variantes de animación para stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Animación de escritura para el nombre
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Juan David Aguilar';
  
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(fullText);
      return;
    }
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1C]"
      aria-label="Hero section"
    >
      {/* Grid de fondo animado con efecto de profundidad */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#080B14_1px,transparent_1px),linear-gradient(to_bottom,#080B14_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#080B14_1px,transparent_1px),linear-gradient(to_bottom,#080B14_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>
      
      {/* Efectos de iluminación dinámica mejorados siguiendo el cursor */}
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(59, 130, 246, 0.15),
              rgba(139, 92, 246, 0.15),
              transparent 40%
            ),
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(236, 72, 153, 0.1),
              transparent 40%
            )
          `
        }}
      />

      {/* Gradientes de fondo estáticos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      {/* Contenido principal */}
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Columna izquierda - Contenido */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          >
            {/* Badge de estado disponible */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: prefersReducedMotion ? 1 : [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-gray-700/50 shadow-lg shadow-blue-500/10"
              >
                <motion.div
                  animate={{ 
                    scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
                    opacity: prefersReducedMotion ? 1 : [1, 0.5, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                />
                <span className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-medium">
                  Disponible para proyectos
                </span>
              </motion.div>
            </motion.div>

            {/* Badge de rol con efecto mejorado */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-gray-700/50 shadow-xl">
                  <span className="relative flex items-center gap-2 text-sm sm:text-base font-semibold">
                    <HiCode className="w-5 h-5 text-blue-400" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Desarrollador de Software
                    </span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Título con efecto de escritura */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.5rem)'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 inline-block">
                Juan David Aguilar - Desarrollador Full Stack
                <motion.span
                  animate={{ opacity: prefersReducedMotion ? 0 : [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-10 sm:h-12 lg:h-16 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 ml-1 align-middle"
                />
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)'
              }}
            >
              Desarrollador móvil especializado en Flutter y Supabase. 
              Creando soluciones digitales innovadoras y experiencias de usuario excepcionales 
              con código limpio y arquitectura escalable.
            </motion.p>

            {/* Estadísticas */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 py-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                    className="relative group"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-xl`}
                    />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-lg">
                      <Icon className={`w-8 h-8 mb-2 mx-auto bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                      <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        <CountUp end={stat.value} duration={2000} />
                        {stat.suffix}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Botones CTA */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.a
                href="#proyectos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 min-h-[44px] flex items-center justify-center"
                aria-label="Ver proyectos"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                  Ver proyectos
                  <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%', skewX: -20 }}
                  animate={{ x: '200%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: 'linear',
                    repeatDelay: 2
                  }}
                />
              </motion.a>
              
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white rounded-xl font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center shadow-lg"
                aria-label="Contactar"
              >
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <HiDownload className="w-5 h-5 group-hover:animate-bounce" />
                  Contactar
                </span>
              </motion.a>
            </motion.div>

            {/* Tecnologías con iconos mejorados */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-6"
            >
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: `0 10px 30px -10px ${tech.color}40`
                    }}
                    className="group relative px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl transition-all duration-300 cursor-pointer min-h-[44px] flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">{tech.name}</span>
                    </div>
                    
                    {/* Tooltip con experiencia */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    >
                      {tech.experience}
                    </motion.div>
                    
                    {/* Efecto de glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `radial-gradient(circle at center, ${tech.color}15, transparent 70%)`
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen de perfil mejorada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: 'spring',
              stiffness: 100
            }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-square">
              
              {/* Círculos orbitales estáticos */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-700/30 border-dashed" />
              <div className="absolute inset-6 rounded-full border border-gray-700/20" />
              <div className="absolute inset-12 rounded-full border border-gray-700/10" />

              {/* Contenedor principal de la imagen con glassmorphism */}
              <div className="absolute inset-16 sm:inset-20">
                <motion.div 
                  className="relative w-full h-full rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Borde estático con gradiente */}
                  <div
                    className="absolute inset-0 rounded-full p-1.5"
                    style={{
                      background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gray-900" />
                  </div>

                  {/* Imagen */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-blue-500/30 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
                    <Image
                      src="/img/FotoJuanda.webp"
                      alt="Juan David Aguilar - Desarrollador de Software"
                      fill
                      priority
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />
                    
                    {/* Overlay de brillo al hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-pink-500/0 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 transition-all duration-500"
                    />
                  </div>

                  {/* Sombra de neón estática */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 60px rgba(59, 130, 246, 0.5)' }}
                  />
                </motion.div>
              </div>

              {/* Iconos orbitales estáticos con tooltips */}
              <div className="absolute inset-0">
                {[
                  { Icon: HiCode, rotation: 0, label: 'Código limpio' },
                  { Icon: HiLightningBolt, rotation: 72, label: 'Alto rendimiento' },
                  { Icon: HiStar, rotation: 144, label: 'Mejor calidad' },
                  { Icon: HiCheckCircle, rotation: 216, label: 'Probado' },
                  { Icon: HiChip, rotation: 288, label: 'Tecnología' }
                ].map(({ Icon, rotation, label }, index) => (
                  <div
                    key={rotation}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      transform: `rotate(${rotation}deg) translateY(-${window.innerWidth < 640 ? '140px' : '180px'}) rotate(-${rotation}deg)`
                    }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/80 backdrop-blur-md border border-gray-700/50 flex items-center justify-center shadow-lg cursor-pointer">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{
                        background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }} />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll animado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: prefersReducedMotion ? 0 : [0, 10, 0] 
        }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 group-hover:border-blue-500 flex items-start justify-center p-2 transition-colors">
            <motion.div
              animate={{ y: prefersReducedMotion ? 0 : [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Componente de contador animado
const CountUp: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default Hero;