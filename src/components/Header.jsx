import { useState } from 'react'
import { IconMenu, IconClose } from './icons'
import StoreButtons from './StoreButtons'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-[#fdf6f1]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <img
            src="/my_fitness_logo.png"
            alt="MyFitnessAI"
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-18"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex md:gap-7 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-ink/70 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 sm:block">
          <StoreButtons size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink/80 transition hover:bg-black/5 md:hidden"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 px-4 pb-4 pt-2 sm:px-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-ink/70 transition hover:bg-black/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-2 border-t border-black/5 px-2 pt-3 sm:hidden">
            <StoreButtons size="sm" />
          </div>
        </div>
      )}
    </header>
  )
}
