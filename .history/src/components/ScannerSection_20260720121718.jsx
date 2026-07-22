import { IconSparkle, IconCamera, IconArrow } from './icons'

export default function ScannerSection() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
      <div className="grid items-center gap-12 rounded-[2.5rem] bg-gradient-to-b from-leaf-50 to-[#e7f1e0] p-8 lg:grid-cols-2 lg:p-14">
        <div>
          <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-leaf-600">
            <IconSparkle />
            AI Food Scanner
          </span>

          <h2 className="mt-4 text-[36px] font-extrabold leading-[1.15] text-ink sm:text-[40px]">
            See food, snap it &amp; let{' '}
            <span className="text-leaf-600">AI count calories</span>
          </h2>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body">
            Advanced AI recognizes your meal and shows detailed nutrition instantly.
          </p>

          <div className="mt-7 flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-leaf-500 to-leaf-700 px-6 py-3.5 font-semibold text-white shadow-[0_15px_30px_-12px_rgba(79,138,53,0.6)] transition hover:brightness-105">
              <IconCamera />
              Scan Food Now
            </button>
            <svg viewBox="0 0 60 40" className="h-9 w-14 text-leaf-600" fill="none">
              <path
                d="M2 8c14 0 10 26 26 26s16-20 30-20"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="1 6"
                strokeLinecap="round"
              />
              <path d="M52 10l6 4-6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center justify-center py-6">
          <img src="/ai_scan.png" alt="AI food scanner" />
        </div>
      </div>
    </section>
  )
}
