function AiPoweredDefectAnalysis(props) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <rect width="600" height="400" fill="#FFFFFF" />
      <circle cx="250" cy="220" r="170" style={{ fill: "var(--color-accent-light)" }} />
      <rect x="350" y="80" width="220" height="180" rx="40" style={{ fill: "var(--color-accent-mid)" }} />
      <circle cx="470" cy="310" r="55" style={{ fill: "var(--color-accent-full)" }} />
    </svg>
  )
}

export default AiPoweredDefectAnalysis
