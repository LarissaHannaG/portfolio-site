function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-4 py-24"
    >
      <p className="text-sm font-medium tracking-wide text-ink/60">
        Contact
      </p>

      <div className="mt-6 flex items-center gap-8">
        <a
          href="mailto:larissa.guenther93@gmail.com"
          className="text-lg font-medium text-accent-full underline underline-offset-4 hover:text-accent-full/70"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/larissa-g%C3%BCnther-31a03b185/"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-medium text-accent-full underline underline-offset-4 hover:text-accent-full/70"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
