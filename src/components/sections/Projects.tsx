'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { projects } from '@/data/profile'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-20 relative">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Featured Projects"
            subtitle="Building AI systems that solve real-world problems, from enterprise voice agents to cultural preservation through language models."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Card hover>
                <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-magenta mb-3">
                  {project.tagline}
                </p>

                <p className="text-white/70 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start">
                      <span className="text-cyan mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Live Site
                    </a>
                  )}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/gillella"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span>View all {projects.length} projects on GitHub</span>
              <FaExternalLinkAlt className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

