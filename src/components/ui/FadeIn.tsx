'use client'

import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const FadeIn: FC<FadeInProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

