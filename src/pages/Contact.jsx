import { useState } from 'react'
import SectionLabel from '../components/SectionLabel.jsx'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: This form has no backend yet. Wire it up to a service like
    // Formspree, EmailJS, or your own API endpoint before going live.
    setSubmitted(true)
  }

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
          We'd love to hear from you.
        </h1>
        <p className="mt-6 text-ink/70 max-w-2xl leading-relaxed text-lg">
          Placeholder — invite questions, partnership inquiries, or simple hellos.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-24 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-xl text-forestDeep mb-4">Reach us directly</h2>
          <ul className="space-y-3 text-ink/70 text-sm">
            <li><span className="font-semibold text-ink">Email</span><br />hello@selammission.org</li>
            <li><span className="font-semibold text-ink">Phone</span><br />+251 00 000 0000</li>
            <li><span className="font-semibold text-ink">Address</span><br />Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        <div>
          {submitted ? (
            <div className="border border-forest bg-forest/5 p-6">
              <h2 className="font-display text-xl text-forestDeep mb-2">Message sent</h2>
              <p className="text-ink/70 text-sm">
                Thanks for reaching out — placeholder confirmation text. Wire this form up
                to your email service to actually receive submissions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-ink/20 bg-white/60 px-4 py-2.5 focus:border-gold outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-ink/20 bg-white/60 px-4 py-2.5 focus:border-gold outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-ink/20 bg-white/60 px-4 py-2.5 focus:border-gold outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-wine text-parchment px-6 py-3 font-semibold hover:bg-wine/90 transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
