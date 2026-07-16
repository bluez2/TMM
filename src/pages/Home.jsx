import { Link } from 'react-router-dom'
import CrossMotif from '../components/CrossMotif.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const pillars = [
  {
    title: 'Church Partnership',
    body: 'We work alongside Ethiopian pastors and elders already rooted in their communities, rather than starting from outside them.',
  },
  {
    title: 'Community Health',
    body: 'Basic clinics and clean-water projects in highland villages where the nearest hospital can be a day\u2019s walk away.',
  },
  {
    title: 'Education & Discipleship',
    body: 'Literacy programs for children and leadership training for young pastors, taught in Amharic and local languages.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden grain-bg">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <SectionLabel>Selam Mission · Ethiopia</SectionLabel>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink">
              Faith takes root where the church already stands.
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">
              We're a ministry serving highland communities across Ethiopia — placeholder
              copy for your story of how this work began and who it serves.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="bg-wine text-parchment px-6 py-3 font-semibold hover:bg-wine/90 transition-colors"
              >
                Get involved
              </Link>
              <Link
                to="/about"
                className="border border-ink/20 text-ink px-6 py-3 font-semibold hover:border-ink/50 transition-colors"
              >
                Our story
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end" aria-hidden="true">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full bg-gold/10 blur-2xl" />
            </div>
            <CrossMotif className="relative w-64 h-64 md:w-80 md:h-80 animate-[spin_60s_linear_infinite]" variant="forest" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <SectionLabel>What we do</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl text-ink max-w-xl">
          Three commitments that shape every project we take on.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-gold pt-5">
              <h3 className="font-display text-xl text-forestDeep mb-2">{p.title}</h3>
              <p className="text-ink/70 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / fellowship moment */}
      <section className="bg-forest text-parchment">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
          <CrossMotif className="w-10 h-10 mx-auto mb-6" radiate={false} variant="parchment" />
          <p className="font-display text-2xl md:text-3xl leading-snug">
            "Like a coffee ceremony — nothing here is rushed. We sit with people, three
            rounds deep, until trust is real."
          </p>
          <p className="mt-6 text-parchment/60 text-sm uppercase tracking-[0.2em]">
            Placeholder quote — a founder, partner pastor, or team member
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-5">
          Join what God is already doing in Ethiopia.
        </h2>
        <p className="text-ink/70 max-w-xl mx-auto mb-8">
          Whether through giving, praying, or going — there's a place for you in this work.
        </p>
        <Link
          to="/get-involved"
          className="inline-block bg-gold text-ink px-8 py-3 font-semibold hover:bg-goldSoft transition-colors"
        >
          See how to help
        </Link>
      </section>
    </div>
  )
}
