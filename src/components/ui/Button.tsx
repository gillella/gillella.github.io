import { FC, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
  external?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  external = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#cf3cff] to-[#4fd8ff] text-white shadow-[0_0_20px_rgba(127,90,255,0.45)] hover:scale-[1.02]',
    secondary: 'border border-white/20 text-white/80 hover:border-white hover:text-white hover:bg-white/5',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

