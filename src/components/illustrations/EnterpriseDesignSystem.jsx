function EnterpriseDesignSystem(props) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <rect width="600" height="400" fill="#FFFFFF" />
      <rect x="60" y="60" width="300" height="280" rx="44" style={{ fill: "var(--color-accent-light)" }} />
      <rect x="260" y="140" width="260" height="220" rx="44" style={{ fill: "var(--color-accent-mid)" }} />
      <circle cx="470" cy="110" r="60" style={{ fill: "var(--color-accent-full)" }} />
    </svg>
  )
}

export default EnterpriseDesignSystem
