'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillCardProps {
  title: string;
  icon: IconType;
  items: string[];
  gradient: string;
  index: number;
}

export const SkillCard = ({ title, icon: Icon, items, gradient, index }: SkillCardProps) => {
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`p-6 rounded-xl bg-gradient-to-br ${gradient} shadow-lg hover:shadow-xl transform transition-all duration-300`}
    >
      <motion.div 
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 }}
      >
        <Icon className="w-6 h-6 text-white mr-2" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </motion.div>
      <motion.ul 
        className="space-y-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            custom={itemIndex}
            variants={itemVariants}
            className="text-white/90 hover:text-white transition-colors flex items-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
              className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"
            />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};