function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl px-6 py-24"
    >
      <p className="text-sm font-medium tracking-wide text-neutral-500">
        Contact
      </p>

      <div className="mt-6 flex items-center gap-8">
        <a
          href="mailto:larissa.guenther93@gmail.com"
          className="text-lg font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/larissa-g%C3%BCnther-31a03b185/"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
