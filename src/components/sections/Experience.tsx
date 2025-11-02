'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { experience, certifications, achievements } from '@/data/profile'
import { useState } from 'react'

export const Experience = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedExperience = showAll ? experience : experience.slice(0, 5)

  return (
    <section id="experience" className="py-20 relative border-t border-white/10 bg-white/[0.02]">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Professional Experience"
            subtitle="27+ years of technical leadership across Fortune 500 companies and innovative startups."
          />
        </FadeIn>

        {/* Career Timeline Stats */}
        <FadeIn delay={0.1}>
          <div className="grid gap-6 md:grid-cols-4 mb-16">
            <Card className="text-center">
              <div className="text-3xl font-bold text-cyan mb-2">27+</div>
              <div className="text-sm text-white/60">Years Experience</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-magenta mb-2">10+</div>
              <div className="text-sm text-white/60">Companies</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-cyan mb-2">8</div>
              <div className="text-sm text-white/60">Leadership Roles</div>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-magenta mb-2">5</div>
              <div className="text-sm text-white/60">Fortune 500</div>
            </Card>
          </div>
        </FadeIn>

        <div className="space-y-8 mb-12">
          {displayedExperience.map((exp, index) => (
            <FadeIn key={`${exp.company}-${exp.period}`} delay={index * 0.05}>
              <Card>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-cyan mb-2">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-sm text-white/50 lg:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <p className="text-white/70 mb-4 text-sm">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start">
                      <span className="text-cyan mr-2 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>

        {experience.length > 5 && (
          <FadeIn>
            <div className="text-center mb-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/80 hover:border-white hover:text-white hover:bg-white/5 transition-all"
              >
                {showAll ? 'Show Less' : `Show All ${experience.length} Roles`}
                <span className={`transition-transform ${showAll ? 'rotate-180' : ''}`}>↓</span>
              </button>
            </div>
          </FadeIn>
        )}

        {/* Key Achievements */}
        <FadeIn>
          <SectionTitle
            title="Key Achievements"
            subtitle="Delivering impact at scale across industries."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 mb-20">
          {achievements.map((achievement, index) => (
            <FadeIn key={achievement.title} delay={index * 0.1}>
              <Card>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan">
                    {achievement.company}
                  </div>
                  <div className="text-xs text-white/40">{achievement.year}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-white/60">
                  {achievement.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
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
