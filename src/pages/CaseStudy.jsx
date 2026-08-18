import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function Section({ label, children }) {
  return (
    <div className="mt-10 border-t border-neutral-200 pt-10">
      <p className="text-sm font-medium tracking-wide text-neutral-500">
        {label}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-lg text-neutral-600">Project not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
        >
          ← Back
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <Link
        to="/"
        className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
      >
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-1 text-sm text-neutral-500">{project.subline}</p>

      {project.challenge && (
        <Section label="The Challenge">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.challenge}
          </p>
        </Section>
      )}

      {project.role && (
        <Section label="My Role">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.role}
          </p>
        </Section>
      )}

      {project.approach && (
        <Section label="How I Approached the Problem">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.approach}
          </p>
        </Section>
      )}

      {Array.isArray(project.outcome) ? (
        project.outcome.length > 0 && (
          <Section label="The Outcome">
            <ul className="max-w-2xl list-disc space-y-2 pl-5 text-lg leading-relaxed text-neutral-600">
              {project.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        )
      ) : (
        project.outcome && (
          <Section label="The Outcome">
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
              {project.outcome}
            </p>
          </Section>
        )
      )}

      {project.skills.length > 0 && (
        <Section label="Skills Used">
          <div className="flex flex-wrap items-center text-sm text-neutral-600">
            {project.skills.map((skill, index) => (
              <span key={skill} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-neutral-300">·</span>
                )}
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}

      {project.clientLove && (
        <Section label="What Clients Loved">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            {project.clientLove}
          </p>
        </Section>
      )}
    </section>
  )
}

export default CaseStudy
