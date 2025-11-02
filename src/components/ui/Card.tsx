import { FC, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card: FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`
        rounded-3xl border border-white/10 bg-white/[0.04] p-6 
        backdrop-blur-lg shadow-[0_20px_45px_rgba(8,5,26,0.45)]
        ${hover ? 'transition-transform duration-300 hover:scale-[1.02] hover:border-white/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

