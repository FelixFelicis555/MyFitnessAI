import { IconSparkle, IconMeal, IconTarget, IconChat } from './icons'
import StoreButtons from './StoreButtons'

const perks = [
  { label: 'Personalized insights', Icon: IconSparkle },
  { label: 'Smart meal suggestions', Icon: IconMeal },
  { label: 'Goal tracking & reminders', Icon: IconTarget },
  { label: 'Conversational AI support', Icon: IconChat },
]

export default function CoachBanner() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 pb-14 sm:mt-14 sm:px-6 sm:pb-16 md:mt-16 md:px-8 md:pb-20 lg:px-10">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-300 via-brand-400 to-amber-300 px-5 pt-8 sm:rounded-[2rem] sm:px-8 sm:pt-10 md:rounded-[2.25rem] md:px-12 md:pt-12 lg:rounded-[2.5rem] lg:px-16">
        <svg
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-white/20"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 60 Q 50 0 100 40" stroke="currentColor" strokeWidth="2" />
        </svg>

        <div className="grid items-end gap-8 sm:gap-9 md:gap-10 lg:grid-cols-[minmax(0,260px)_1fr]">
          <div className="relative mx-auto w-full max-w-[260px]">
            <div className="relative z-10 mt-4 ml-8 mb-3 max-w-50 rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-[11px] font-medium leading-snug text-ink shadow-lg">
              Hi! I'm your AI Health Coach. Let me help you reach your fitness goals.
            </div>
            <div className="relative mx-auto w-48 sm:w-56 md:w-64">
              <img
                src="/3d_women.png"
                alt="AI Health Coach"
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="pb-12 sm:pb-13 md:pb-15 lg:pb-20">
            <h2 className="text-[24px] font-extrabold leading-[1.2] text-ink sm:text-[30px] md:text-[34px] lg:text-[38px] lg:leading-[1.15]">
              Your AI health coach
              <br />
              in your pocket
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/70">
              Get personalized tips, meal suggestions and smart insights just for you.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              {perks.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2.5 text-[14px] font-semibold text-ink">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/70 text-brand-600">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {label}
                </div>
              ))}
            </div>

            <StoreButtons size="lg" className="mt-7" />
          </div>
        </div>
      </div>
    </section>
  )
}
