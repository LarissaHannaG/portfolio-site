function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24"
    >
      <p className="text-sm font-medium tracking-wide text-neutral-500">
        Larissa Günther
      </p>

      <h1 className="mt-4 text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
        Product leadership with hands-on design and engineering depth.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
        I bridge technical, design, and business teams — not just in
        conversation, but by building alongside them.
      </p>

      <div className="mt-10 flex items-center gap-8">
        <a
          href="#projects"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero
