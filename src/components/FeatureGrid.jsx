import { IconArrow } from './icons'

const cards = [
  {
    title: 'Steps counter',
    desc: 'Track your daily steps and stay active every day.',
    image: '/steps_counter.svg',
    tileBg: 'bg-gradient-to-br from-brand-100 to-brand-50',
  },
  {
    title: 'Water drinking tracker',
    desc: 'Stay hydrated by tracking your daily water intake.',
    image: '/water_drinking.svg',
    tileBg: 'bg-gradient-to-br from-sky-tint to-blue-50',
  },
  {
    title: 'Weight management',
    desc: 'Monitor your weight progress and set goals.',
    image: '/weight_machine.svg',
    tileBg: 'bg-gradient-to-br from-slate-200 to-slate-100',
  },
  {
    title: 'Diet food',
    desc: 'Discover healthy recipes and diet-friendly meals.',
    image: '/diet_food.svg',
    tileBg: 'bg-gradient-to-br from-leaf-100 to-leaf-50',
    badge: true,
  },
]

export default function FeatureGrid() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-14 sm:px-6 md:mt-16 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        {cards.map(({ title, desc, image, tileBg, badge }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.2)] sm:gap-5 sm:p-6 lg:p-7"
          >
            <div className={`relative grid h-20 w-20 shrink-0 place-items-center rounded-2xl sm:h-24 sm:w-24 ${tileBg}`}>
              <img src={image} alt={title} className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
              {badge && (
                <span className="absolute -bottom-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-leaf-600 text-white ring-2 ring-white">
                  <svg viewBox="0 0 14 14" width="9" height="9" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 7.3 5.4 10 11.5 3.6" />
                  </svg>
                </span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ink">{title}</h3>
              <p className="mt-1 text-base leading-relaxed text-body">{desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-leaf-600 px-4 py-2 text-sm font-semibold text-leaf-700 transition hover:bg-leaf-50">
                Explore
                <IconArrow />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
