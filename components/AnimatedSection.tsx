'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 50 }
      case 'down': return { opacity: 0, y: -50 }
      case 'left': return { opacity: 0, x: 50 }
      case 'right': return { opacity: 0, x: -50 }
      case 'none': return { opacity: 0 }
      default: return { opacity: 0, y: 50 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}