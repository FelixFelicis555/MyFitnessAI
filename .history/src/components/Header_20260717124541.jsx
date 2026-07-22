import { IconLogo } from './icons'

const links = ['Features', 'How it works', 'Benefits', 'Blog', 'Contact']

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#fdf6f1]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <IconLogo />
          <span className="text-lg font-bold tracking-tight text-ink">
            My<span className="text-brand-500">FitnessAi</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[15px] font-medium text-ink/70 transition hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="rounded-full bg-gradient-to-b from-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_-8px_rgba(232,90,42,0.7)] transition hover:brightness-105"
        >
          Download App
        </a>
      </div>
    </header>
  )
}
