// Signature visual element: a stylized Ethiopian Orthodox processional cross
// with a radiating pattern, echoing Lalibela stone-carved crosses and the
// Meskel bonfire's fanning light. Used sparingly as the page's recurring anchor.
export default function CrossMotif({ className = '', variant = 'gold', radiate = true }) {
  const colors = {
    gold: '#C99A2E',
    ink: '#2A2118',
    forest: '#1E4635',
    clay: '#A85C32',
    parchment: '#F6EFE0',
  }
  const stroke = colors[variant] || colors.gold

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {radiate && (
        <g opacity="0.35" stroke={stroke} strokeWidth="1">
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16
            const rad = (angle * Math.PI) / 180
            const x1 = 100 + Math.cos(rad) * 62
            const y1 = 100 + Math.sin(rad) * 62
            const x2 = 100 + Math.cos(rad) * 96
            const y2 = 100 + Math.sin(rad) * 96
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />
          })}
        </g>
      )}
      <circle cx="100" cy="100" r="58" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
      {/* Lalibela-style interlaced cross body */}
      <g stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 44 L100 156" />
        <path d="M48 100 L152 100" />
        <path d="M70 66 L130 134" opacity="0.85" />
        <path d="M130 66 L70 134" opacity="0.85" />
        <path d="M100 44 C112 54 112 66 100 76 C88 66 88 54 100 44 Z" />
        <path d="M100 156 C112 146 112 134 100 124 C88 134 88 146 100 156 Z" />
        <path d="M48 100 C58 88 70 88 80 100 C70 112 58 112 48 100 Z" />
        <path d="M152 100 C142 88 130 88 120 100 C130 112 142 112 152 100 Z" />
      </g>
      <circle cx="100" cy="100" r="6" fill={stroke} />
    </svg>
  )
}
