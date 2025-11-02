'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { profile, social } from '@/data/profile'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Let's Build Something Amazing
                </h2>
                <p className="text-lg text-white/70">
                  Interested in collaborating on AI projects, consulting opportunities, or just want to chat about the future of AI?
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 mb-8">
                <FadeIn delay={0.1}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan hover:bg-white/10 transition-all group"
                  >
                    <FaEnvelope className="h-8 w-8 text-cyan mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-white/60 mb-1">Email</span>
                    <span className="text-white font-medium">{profile.email}</span>
                  </a>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan hover:bg-white/10 transition-all group"
                  >
                    <FaLinkedin className="h-8 w-8 text-cyan mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-white/60 mb-1">LinkedIn</span>
                    <span className="text-white font-medium">Connect with me</span>
                  </a>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan hover:bg-white/10 transition-all group"
                  >
                    <FaGithub className="h-8 w-8 text-cyan mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-white/60 mb-1">GitHub</span>
                    <span className="text-white font-medium">Follow my work</span>
                  </a>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <a
                    href="https://www.anguliyam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-magenta hover:bg-white/10 transition-all group"
                  >
                    <div className="h-8 w-8 text-magenta mb-3 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">
                      🚀
                    </div>
                    <span className="text-sm text-white/60 mb-1">Anguliyam AI</span>
                    <span className="text-white font-medium">Enterprise consulting</span>
                  </a>
                </FadeIn>
              </div>

              <FadeIn delay={0.5}>
                <div className="text-center">
                  <p className="text-white/60 text-sm">
                    Based in {profile.location} • Available for consulting and speaking engagements
                  </p>
                </div>
              </FadeIn>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

