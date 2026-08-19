function UnifiedTestDataDashboard(props) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <rect width="600" height="400" fill="#FFFFFF" />
      <circle cx="190" cy="230" r="150" style={{ fill: "var(--color-accent-light)" }} />
      <circle cx="350" cy="190" r="110" style={{ fill: "var(--color-accent-mid)" }} />
      <circle cx="460" cy="110" r="55" style={{ fill: "var(--color-accent-full)" }} />
    </svg>
  )
}

export default UnifiedTestDataDashboard
