import { useState } from 'react'
import { IconMail, IconPhone, IconMapPin, IconSend } from './icons'

const info = [
  { label: 'Email us', value: 'hello@myfitnessai.app', Icon: IconMail },
  { label: 'Call us', value: '+1 (555) 012-3456', Icon: IconPhone },
  { label: 'Visit us', value: 'San Francisco, CA', Icon: IconMapPin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="mx-auto mt-12 max-w-7xl scroll-mt-24 px-4 pb-14 sm:mt-14 sm:px-6 sm:pb-16 md:mt-16 md:px-8 md:pb-20 lg:px-10"
    >
      <div className="grid gap-10 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)] sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50 px-4 py-1.5 text-[13px] font-semibold text-brand-600">
            Contact
          </span>
          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.15] text-ink sm:text-[32px] md:text-[36px]">
            Get in touch with us
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-body">
            Have a question, feedback, or partnership idea? We'd love to hear from you.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {info.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <Icon />
                </span>
                <div>
                  <p className="text-[13px] text-body">{label}</p>
                  <p className="text-[15px] font-semibold text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              className="w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-brand-400 to-brand-600 px-6 py-3.5 font-semibold text-white shadow-[0_15px_30px_-12px_rgba(232,90,42,0.6)] transition hover:brightness-105"
          >
            <IconSend className="h-4 w-4" />
            Send message
          </button>

          {sent && (
            <p className="text-center text-sm font-medium text-leaf-600">
              Thanks! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
