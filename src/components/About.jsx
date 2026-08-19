function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-4 py-24"
    >
      <p className="text-sm font-medium tracking-wide text-ink/60">
        About
      </p>

      <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink/80">
        <p>
          With 9+ years in software, I've grown from hands-on frontend
          engineering and UX design work into leading both. Now at
          Thoughtworks as a Lead Consultant, that means owning delivery,
          business alignment, and stakeholder relationships on complex
          client engagements — alongside leading design and frontend
          direction: setting technical and design strategy, building
          things myself when it matters, and guiding the engineers and
          designers around me to do their best work. Currently also
          freelancing part-time for a health tech startup, leading their
          design system and frontend rebuild.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium tracking-wide text-ink/60">
          Specialties
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            'Design Systems',
            'Web Accessibility',
            'Stakeholder & Change Management',
          ].map((specialty) => (
            <span
              key={specialty}
              className="bg-accent-light px-2 py-1 text-sm text-ink"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium tracking-wide text-ink/60">
          Tools
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            'React',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS/SCSS',
            'Tailwind',
            'Storybook',
            'Node.js',
            'Figma',
          ].map((tool) => (
            <span
              key={tool}
              className="bg-accent-light px-2 py-1 text-sm text-ink"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
