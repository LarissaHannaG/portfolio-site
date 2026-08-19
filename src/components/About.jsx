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

        <p>
          One client credited the successful adoption of a shared
          software-quality standard across nine competing teams directly
          to my stakeholder alignment and change management. The problem:
          each team tracked quality in its own disconnected spreadsheets,
          with no shared basis for release decisions. I led the design,
          research, and stakeholder work behind a unified dashboard —
          turning nine conflicting definitions of "quality" into one
          standard the whole organization actually adopted.
        </p>
      </div>

      <div className="mt-8 space-y-1 text-sm text-ink/60">
        <p>Specialties: Design Systems, Web Accessibility.</p>
        <p>Tools: Figma, React, TypeScript, and everything in between.</p>
      </div>
    </section>
  )
}

export default About
