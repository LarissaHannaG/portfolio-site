import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { illustrations } from "../components/illustrations";

function Section({ label, children, spacing = "mt-10 pt-10" }) {
  return (
    <div className={spacing}>
      <p className="text-sm font-medium tracking-wide text-accent-full">{label}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function AtAGlance({ outcome }) {
  if (Array.isArray(outcome)) {
    if (outcome.length === 0) return null;
    return (
      <div className="mt-6 flex flex-col items-start gap-3">
        {outcome.map((item) => (
          <span
            key={item}
            className="inline-block w-fit bg-accent-full px-2 py-1 text-sm font-medium leading-relaxed text-white"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (!outcome) return null;

  return (
    <div className="mt-6">
      <span className="inline-block w-fit bg-accent-full px-2 py-1 text-sm font-medium leading-relaxed text-white">
        Ongoing
      </span>
    </div>
  );
}

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const Illustration = illustrations[slug];

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24">
        <p className="text-lg text-ink/80">Project not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block text-sm font-medium text-accent-full underline underline-offset-4 hover:text-accent-full/70"
        >
          ← Back
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-24">
      <Link
        to="/"
        className="text-sm font-medium text-accent-full underline underline-offset-4 hover:text-accent-full/70"
      >
        ← Back
      </Link>

      {Illustration && (
        <div className="mt-8">
          <Illustration className="w-full h-auto" />
        </div>
      )}

      <h1 className="mt-6 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-1 text-sm text-ink/60">{project.subline}</p>

      <AtAGlance outcome={project.outcome} />

      {project.challenge && (
        <Section label="The Challenge" spacing="mt-10">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            {project.challenge}
          </p>
        </Section>
      )}

      {project.role && (
        <Section label="My Role">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            {project.role}
          </p>
        </Section>
      )}

      {project.approach && (
        <Section label="How I Approached the Problem">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            {project.approach}
          </p>
        </Section>
      )}

      {project.clientLove && (
        <Section label="What Clients Loved">
          <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
            {project.clientLove}
          </p>
        </Section>
      )}

      {project.skills.length > 0 && (
        <Section label="Skills Used">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="bg-accent-light px-2 py-1 text-sm text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      )}
    </section>
  );
}

export default CaseStudy;
