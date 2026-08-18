import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-neutral-500">
        Projects
      </p>

      <div className="mt-6">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={
              index === 0
                ? 'py-10'
                : 'border-t border-neutral-200 py-10'
            }
          >
            <h3 className="text-2xl font-medium tracking-tight text-neutral-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              {project.subline}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {project.teaser}
            </p>
            <Link
              to={`/projects/${project.slug}`}
              className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
            >
              Read case study →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
