function ProductDesignSystemRedesign(props) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <rect width="600" height="400" fill="#FFFFFF" />
      <rect x="70" y="200" width="260" height="150" rx="36" style={{ fill: "var(--color-accent-light)" }} />
      <rect x="180" y="80" width="260" height="180" rx="36" style={{ fill: "var(--color-accent-mid)" }} />
      <rect x="430" y="250" width="110" height="100" rx="28" style={{ fill: "var(--color-accent-full)" }} />
    </svg>
  )
}

export default ProductDesignSystemRedesign
