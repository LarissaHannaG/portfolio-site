import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { illustrations } from './illustrations'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-4 py-24">
      <p className="text-sm font-medium tracking-wide text-ink/60">
        Selected Works
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
        {projects.map((project) => {
          const Illustration = illustrations[project.slug]

          return (
            <article key={project.slug}>
              {Illustration && (
                <div className="mb-6 w-full overflow-hidden">
                  <Illustration className="h-full w-full" />
                </div>
              )}

              <h3 className="text-2xl font-medium tracking-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-ink/60">
                {project.subline}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {project.teaser}
              </p>
              <Link
                to={`/projects/${project.slug}`}
                className="mt-4 inline-block text-sm font-medium text-accent-full underline underline-offset-4 hover:text-accent-full/70"
              >
                Read case study →
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
