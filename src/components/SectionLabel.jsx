export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="h-px w-10 bg-gold" />
      <span className="uppercase text-xs tracking-[0.2em] text-clay font-semibold">
        {children}
      </span>
    </div>
  )
}
