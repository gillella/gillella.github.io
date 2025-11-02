import { Container } from '@/components/ui/Container'
import { profile } from '@/data/profile'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-white/10">
      <Container>
        <div className="text-center">
          <p className="text-white/60 text-sm mb-2">
            © {currentYear} {profile.name}. Built with Next.js & deployed on GitHub Pages.
          </p>
          <p className="text-white/40 text-xs">
            Designed with ❤️ and inspired by Anguliyam AI
          </p>
        </div>
      </Container>
    </footer>
  )
}

