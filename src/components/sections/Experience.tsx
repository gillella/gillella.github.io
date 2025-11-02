'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { experience, certifications } from '@/data/profile'

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-white/10 bg-white/[0.02]">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Experience"
            subtitle="Building AI systems and leading teams to deliver real-world impact."
          />
        </FadeIn>

        <div className="space-y-8 mb-20">
          {experience.map((exp, index) => (
            <FadeIn key={exp.company} delay={index * 0.1}>
              <Card>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-cyan mb-2">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-sm text-white/50">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <p className="text-white/70 mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start">
                      <span className="text-magenta mr-2 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <SectionTitle
            title="Certifications"
            subtitle="Continuously learning and staying at the forefront of cloud and AI technologies."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.name} delay={index * 0.1}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {cert.name}
                    </h3>
                    <div className="text-sm text-white/60">
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

