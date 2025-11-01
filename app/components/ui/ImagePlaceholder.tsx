'use client'

import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  title: string
  width?: string
  height?: string
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  title, 
  width = 'w-full', 
  height = 'h-48' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      className={`${width} ${height} bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center`}
    >
      <div className="text-center p-4">
        <div className="text-gray-400 dark:text-gray-500">
          <svg
            className="w-12 h-12 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}