import PhoneMockup from './PhoneMockup'
import StoreButtons from './StoreButtons'
import { IconSparkle, IconCheck } from './icons'

const checklist = [
  'Snap food & get instant calorie count',
  'Track steps, water, weight & more',
  'Smart insights for a healthier you',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl scroll-mt-24 overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:px-8 md:pb-24 md:pt-12 lg:px-10 lg:pt-16"
    >
      <div className="grid items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-4 py-1.5 text-[13px] font-semibold text-brand-600">
            <IconSparkle />
            AI-Powered Health Companion
          </span>

          <h1 className="mt-6 text-[32px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[40px] sm:leading-[1.1] md:text-[46px] lg:text-[52px] lg:leading-[1.08]">
            Calorie tracking
            <br />
            made{' '}
            <span className="relative inline-block text-brand-500">
              effortless
              <svg
                className="absolute -bottom-2 left-0 w-full text-brand-500"
                viewBox="0 0 220 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9c36-10 180-10 216 0"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-4 text-base text-body sm:mt-5 sm:text-lg">Powered by conversational AI.</p>

          <ul className="mt-6 flex flex-col gap-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-ink/80">
                <IconCheck />
                {item}
              </li>
            ))}
          </ul>

          <StoreButtons size="lg" className="mt-8" />
        </div>

        <div className="relative flex min-h-90 items-center justify-center py-6 sm:min-h-110 md:min-h-125 lg:min-h-140 lg:justify-end">
          <svg
            className="absolute -right-2 bottom-4 hidden h-32 w-32 text-brand-300/60 sm:block"
            viewBox="0 0 100 100"
            fill="none"
          >
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={row * 12 + 6} cy={col * 12 + 6} r="1.6" fill="currentColor" />
              )),
            )}
          </svg>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
