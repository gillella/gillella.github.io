'use client'

import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { articles } from '@/data/profile'

export const Articles = () => {
  return (
    <section id="articles" className="py-20 relative border-t border-white/10 bg-white/[0.02]">
      <Container>
        <FadeIn>
          <SectionTitle
            title="Recent Thoughts"
            subtitle="Sharing insights on AI, development, and the future of technology."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={index * 0.1}>
              <Card hover>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-xs text-white/50 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {article.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-cyan border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/in/arvinda-gillella/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span>Read more on LinkedIn</span>
              <span>→</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

