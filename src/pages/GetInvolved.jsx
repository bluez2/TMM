import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel.jsx'

const ways = [
  {
    title: 'Give',
    body: 'Placeholder — monthly or one-time gifts fund clinics, wells, and school supplies directly.',
    cta: 'Donate',
  },
  {
    title: 'Pray',
    body: 'Placeholder — sign up for a monthly prayer update from the field.',
    cta: 'Join the prayer list',
  },
  {
    title: 'Go',
    body: 'Placeholder — join a short-term team traveling to Ethiopia to serve alongside our partners.',
    cta: 'See upcoming trips',
  },
]

export default function GetInvolved() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
        <SectionLabel>Get involved</SectionLabel>
        <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
          There's a place for you in this work.
        </h1>
        <p className="mt-6 text-ink/70 max-w-2xl leading-relaxed text-lg">
          Placeholder — a sentence inviting the reader into partnership, whatever form
          that takes for them.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 grid md:grid-cols-3 gap-8">
        {ways.map((w) => (
          <div key={w.title} className="bg-white/50 border border-ink/10 p-8 flex flex-col">
            <h2 className="font-display text-2xl text-forestDeep mb-3">{w.title}</h2>
            <p className="text-ink/70 text-sm leading-relaxed flex-1">{w.body}</p>
            <Link
              to="/contact"
              className="mt-6 inline-block text-sm font-semibold text-wine border-b-2 border-wine w-fit hover:opacity-70"
            >
              {w.cta} →
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-forest text-parchment">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <h2 className="font-display text-3xl mb-4">Not sure where to start?</h2>
          <p className="text-parchment/70 max-w-lg mx-auto mb-8">
            Placeholder — reassure a first-time visitor that reaching out costs nothing
            and they'll be pointed toward whatever fits them best.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-ink px-8 py-3 font-semibold hover:bg-goldSoft transition-colors"
          >
            Contact our team
          </Link>
        </div>
      </section>
    </div>
  )
}
