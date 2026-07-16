import CrossMotif from '../components/CrossMotif.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const timeline = [
  { year: '20XX', text: 'Placeholder — the trip, conversation, or need that started this ministry.' },
  { year: '20XX', text: 'Placeholder — first partnership formed with a local church or leader.' },
  { year: '20XX', text: 'Placeholder — first clinic, school, or well completed.' },
  { year: 'Today', text: 'Placeholder — where the ministry currently works and what\u2019s next.' },
]

export default function About() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
        <SectionLabel>About us</SectionLabel>
        <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
          Rooted in the highlands, sent by a shared calling.
        </h1>
        <p className="mt-6 text-ink/70 max-w-2xl leading-relaxed text-lg">
          Placeholder introduction — describe your organization's mission, the region of
          Ethiopia you serve, and the conviction that drives the work.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-2xl text-forestDeep mb-4">Our mission</h2>
          <p className="text-ink/70 leading-relaxed">
            Placeholder — one paragraph on the mission statement itself: who you serve,
            through what means (church, health, education), and toward what end.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-forestDeep mb-4">Our approach</h2>
          <p className="text-ink/70 leading-relaxed">
            Placeholder — explain how the ministry partners with existing Ethiopian
            churches and leaders rather than operating independently of them.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-parchmentDeep">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
          <SectionLabel>Our journey</SectionLabel>
          <h2 className="font-display text-3xl text-ink mb-12">How we got here</h2>
          <ol className="space-y-10">
            {timeline.map((t, i) => (
              <li key={i} className="flex gap-6 items-start">
                <span className="font-display text-lg text-gold w-16 shrink-0">{t.year}</span>
                <p className="text-ink/70 leading-relaxed border-l border-ink/15 pl-6">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 text-center">
        <CrossMotif className="w-12 h-12 mx-auto mb-6" radiate={false} variant="forest" />
        <h2 className="font-display text-3xl text-ink mb-4">Our team</h2>
        <p className="text-ink/70 max-w-xl mx-auto">
          Placeholder — introduce founders, field staff, and Ethiopian partner leaders here,
          with photos and short bios once you have them.
        </p>
      </section>
    </div>
  )
}
