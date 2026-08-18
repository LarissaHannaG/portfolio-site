const projects = [
  {
    title: 'AI-Powered Defect Analysis',
    subline: 'Project Lead & Design Lead — Automotive Client, Munich',
    body: "At a large automotive client, I lead a team building an AI-powered tool to speed up analysis of vehicle software defects — a space with no existing playbook to follow. As project lead, I run stakeholder alignment, discovery, and prioritization in a highly exploratory environment, deciding where AI can create real value before a roadmap even exists. In parallel, I consult at a design-lead level across the client's broader defect-management landscape, using service blueprints and rapid AI-driven prototyping to explore how a fragmented set of tools could work as one streamlined process.",
  },
  {
    title: 'Enterprise Design System',
    subline: 'Design System Lead — Automotive Client, Stuttgart & Berlin',
    body: "Across two engagements with the same automotive client, I built and scaled a company-wide design system from scratch. At the first, 30+ teams were each building the same interfaces from scratch, in three different tech stacks, with no shared design language — I led the technical architecture and the stakeholder work to get every team to adopt it, cutting feature delivery time by 60%. At the second, I led another 18 teams through migration onto that same system, cutting time-to-production by 50%. It's since become the client's standard design system for all internal B2B applications, company-wide.",
  },
  {
    title: 'Unified Test-Data Dashboard',
    subline: 'Design Lead & Frontend Lead — Automotive Client, Gothenburg',
    body: 'On-site in Gothenburg, I led extensive user research — interviews and close collaboration with stakeholders across the organization — to design a dashboard that made sense of software quality data scattered across 20+ tools and 9 teams. The core challenge was reconciling very different use cases and mental models into one interface that worked for everyone. That single source of truth cut what used to take hours per team down to about a minute. I also owned the frontend architecture and build, while mentoring two junior developers and one junior designer.',
  },
  {
    title: 'Product & Design System Redesign',
    subline: 'UX Designer & Frontend Developer — Fasten Health, New York',
    body: "At Fasten Health, a New York health-tech startup, I own the redesign of their core product and the creation of a unified design language across their entire product suite — solo, working directly with the CEO and Head of Engineering. I led the UX research, built a new design system from scratch in Figma, and I'm now implementing it myself: a full component library in Angular, with the application migration underway. It's the clearest example of what I do best — owning design and engineering together, end to end.",
  },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-neutral-500">
        Projects
      </p>

      <div className="mt-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
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
              {project.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
