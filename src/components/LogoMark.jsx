const logoColors = {
  forest: '#1E4635',
  ink: '#2A2118',
  gold: '#C99A2E',
}

export default function LogoMark({ className = '', variant = 'forest' }) {
  const stroke = logoColors[variant] || logoColors.forest

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="56" fill="#F6EFE0" stroke={stroke} strokeWidth="3" />
      <path d="M60 28 V92" stroke={stroke} strokeWidth="10" strokeLinecap="round" />
      <path d="M34 60 H86" stroke={stroke} strokeWidth="10" strokeLinecap="round" />
      <circle cx="60" cy="60" r="6" fill={stroke} />
      <text
        x="60"
        y="106"
        textAnchor="middle"
        fontSize="16"
        fontFamily="Work Sans, sans-serif"
        fill={stroke}
        fontWeight="700"
      >
        TMM
      </text>
    </svg>
  )
}
