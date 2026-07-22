import { IconArrow } from './icons'

const features = [
  {
    title: 'Track every step',
    desc: 'Count steps. Boost energy. Walk your health forward.',
    image: '/walking.png',
    tint: 'bg-brand-50',
  },
  {
    title: 'Hydrate smarter',
    desc: 'Log water. Stay refreshed. Thrive all day.',
    image: '/water.png',
    tint: 'bg-sky-tint',
  },
  {
    title: 'Balance your weight',
    desc: 'Manage weight with daily smart tracking habits.',
    image: '/weight.png',
    tint: 'bg-leaf-50',
  },
]

export default function FeatureStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] sm:grid-cols-3 sm:gap-6 sm:p-7 md:gap-8 md:p-8">
        {features.map(({ title, desc, image, tint }) => (
          <div key={title} className="flex h-full flex-col gap-3">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tint}`}>
              <img src={image} alt={title} className="h-7 w-7 object-contain" />
            </span>
            <h3 className="text-xl font-bold text-ink">{title}</h3>
            <p className="text-base leading-relaxed text-body">{desc}</p>
            <button className="mt-auto grid h-8 w-8 place-items-center rounded-full border border-black/10 text-ink/60 transition hover:border-brand-500 hover:text-brand-500">
              <IconArrow />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
