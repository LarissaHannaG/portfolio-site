function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-24"
    >
      <p className="text-sm font-medium tracking-wide text-ink/60">
        Hi! I'm Larissa.
      </p>

      <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Software Project Lead with <span className="text-accent">hands-on</span> design and engineering depth.
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-ink/80">
        I bridge technical, design, and business teams — not just in
        conversation,
        <br />
        but by building alongside them.
      </p>

      <div className="mt-10 flex items-center gap-8">
        <a
          href="#projects"
          className="text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/70"
        >
          View Selected Works
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
