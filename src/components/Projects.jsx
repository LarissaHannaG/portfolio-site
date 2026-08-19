import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-ink/60">
        Projects
      </p>

      <div className="mt-6">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={
              index === 0
                ? 'py-10'
                : 'border-t border-ink/10 py-10'
            }
          >
            <h3 className="text-2xl font-medium tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-ink/60">
              {project.subline}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
              {project.teaser}
            </p>
            <Link
              to={`/projects/${project.slug}`}
              className="mt-4 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/70"
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
