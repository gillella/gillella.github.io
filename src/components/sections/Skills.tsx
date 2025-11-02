'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { skills } from '@/data/profile'

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Skills & Expertise"
            subtitle="A comprehensive toolkit for building modern AI systems and cloud infrastructure."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList], index) => (
            <FadeIn key={category} delay={index * 0.1}>
              <Card>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 text-white/80 border border-white/10 text-sm hover:border-cyan hover:text-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

