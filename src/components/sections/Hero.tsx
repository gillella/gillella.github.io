'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-12 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,216,255,0.18)_0,_rgba(8,5,26,0)_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(207,60,255,0.16)_0,_rgba(8,5,26,0)_70%)] blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                {profile.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {profile.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-2xl sm:text-3xl font-medium mb-6">
              <span className="gradient-text">{profile.title}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg text-white/60 mb-10 max-w-2xl">
              {profile.bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-white hover:text-white hover:bg-white/5"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-white hover:text-white hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-white hover:text-white hover:bg-white/5"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

