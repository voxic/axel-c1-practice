export function ProgressRing({
  value,
  label,
  size = 88,
}: {
  value: number | null
  label: string
  size?: number
}) {
  const stroke = 7
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = value ?? 0
  const offset = c - (pct / 100) * c

  return (
    <div className="ring-wrap">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={value === null ? `${label}: no attempts yet` : `${label}: ${value} percent`}
      >
        <circle
          className="ring-track"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="ring-value"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={value === null ? c : offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="ring-num">
          {value === null ? '—' : `${value}`}
        </text>
      </svg>
      <span className="ring-label">{label}</span>
    </div>
  )
}
