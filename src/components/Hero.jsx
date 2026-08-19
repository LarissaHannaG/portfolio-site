function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24"
    >
      <p className="text-sm font-medium tracking-wide text-ink/60">
        Hi! I'm Larissa, I am a
      </p>

      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Software Project Lead with hands-on design and engineering depth.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
        I bridge technical, design, and business teams — not just in
        conversation, but by building alongside them.
      </p>

      <div className="mt-10 flex items-center gap-8">
        <a
          href="#projects"
          className="text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/70"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/70"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero
