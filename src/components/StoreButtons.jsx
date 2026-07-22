import { IconPlayStore, IconApple } from './icons'

const sizes = {
  sm: {
    button: 'gap-2 rounded-lg px-2.5 py-1.5',
    icon: 'h-4 w-4',
    eyebrow: 'text-[10px]',
    label: 'text-[11px]',
  },
  lg: {
    button: 'gap-2.5 rounded-xl px-5 py-3',
    icon: 'h-5 w-5',
    eyebrow: 'text-xs',
    label: 'text-sm',
  },
}

export default function StoreButtons({ size = 'lg', className = '' }) {
  const s = sizes[size]

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="https://play.google.com/store/search?q=MyFitnessAI"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center bg-ink text-white shadow-lg transition hover:brightness-110 ${s.button}`}
      >
        <IconPlayStore className={s.icon} />
        <span className="leading-tight text-left">
          <span className={`block text-white ${s.eyebrow}`}>GET IT ON</span>
          <span className={`block font-semibold ${s.label}`}>Google Play</span>
        </span>
      </a>
      <a
        href="https://apps.apple.com/search?term=MyFitnessAI"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center bg-ink text-white shadow-lg transition hover:brightness-110 ${s.button}`}
      >
        <IconApple className={s.icon} />
        <span className="leading-tight text-left">
          <span className={`block text-white ${s.eyebrow}`}>Download on the</span>
          <span className={`block font-semibold ${s.label}`}>App Store</span>
        </span>
      </a>
    </div>
  )
}
