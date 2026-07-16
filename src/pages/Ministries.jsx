import SectionLabel from '../components/SectionLabel.jsx'
import CrossMotif from '../components/CrossMotif.jsx'

const ministries = [
  {
    name: 'Church Planting & Discipleship',
    desc: 'Placeholder — supporting new and existing congregations with training, resources, and mentorship for local pastors.',
  },
  {
    name: 'Community Health',
    desc: 'Placeholder — mobile clinics, maternal health support, and clean-water wells for villages far from medical care.',
  },
  {
    name: 'Education',
    desc: 'Placeholder — primary school support, literacy programs, and scholarships for students who couldn\u2019t otherwise continue.',
  },
  {
    name: 'Orphan & Family Care',
    desc: 'Placeholder — family-based care programs, foster support, and resources for vulnerable children.',
  },
  {
    name: 'Agriculture & Livelihoods',
    desc: 'Placeholder — sustainable farming training and micro-enterprise support so communities can provide for themselves.',
  },
  {
    name: 'Short-Term Teams',
    desc: 'Placeholder — organized trips for visiting teams to serve alongside local partners for one to two weeks.',
  },
]

export default function Ministries() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14">
        <SectionLabel>Ministries</SectionLabel>
        <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
          Six ways we work alongside the local church.
        </h1>
        <p className="mt-6 text-ink/70 max-w-2xl leading-relaxed text-lg">
          Placeholder — a short framing sentence on how these ministries connect to one
          another and to the churches you partner with.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-10 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {ministries.map((m) => (
            <div
              key={m.name}
              className="group relative bg-white/40 border border-ink/10 p-8 hover:border-gold transition-colors"
            >
              <CrossMotif
                className="w-8 h-8 mb-5 opacity-70 group-hover:opacity-100 transition-opacity"
                radiate={false}
                variant="clay"
              />
              <h2 className="font-display text-xl text-forestDeep mb-2">{m.name}</h2>
              <p className="text-ink/70 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
