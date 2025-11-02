import { FC } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/70 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

