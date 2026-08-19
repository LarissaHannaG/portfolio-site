export const projects = [
  {
    slug: 'enterprise-design-system',
    title: 'Enterprise Design System',
    subline: 'Design System Lead — Automotive Client, Stuttgart & Berlin',
    teaser:
      'Built and scaled a company-wide design system across two engagements, cutting feature delivery time by 60% and time-to-production by 50%.',
    challenge:
      'A large B2B sales application was being built by 30+ teams, with no design system in place. Each team used its own components and styles, working in three different tech stacks — Vue, React, and Angular — with essentially zero collaboration between them. The result: an inconsistent, hard-to-use product, and every team rebuilding the same components from scratch.',
    role: 'I joined as a Design Engineer, and within a few months the client created a new role specifically for me: Design System Lead. I owned the strategic direction of the design system, while staying hands-on — building the component library architecture myself, designing components (first in Sketch, later Figma), and building them in code with Stencil.js.',
    approach:
      "The hardest part wasn't technical — it was that no team wanted to give up its own tools and ways of working. I spent significant time building direct relationships with the leads of all 30+ teams, understanding what each of them actually needed and where their resistance was coming from. Rather than mandating adoption, I used those relationships to build the design system alongside the teams and give them real influence over its direction, through an active community they could actually shape. That sense of ownership, not a top-down rollout, is what got every team on board.",
    outcome: [
      'Led delivery of large scale design system from scratch',
      'Achieved 100% design system adoption across 30+ teams',
      'Cut time to implement new UI features by 60%',
      'Success drew interest beyond original department, leading to second engagement',
      'Led 18 teams through migration in second department, cutting time-to-production by 50%',
      "Became the client's standard design system for all internal B2B applications, company-wide",
    ],
    skills: [
      'Design system architecture',
      'Figma',
      'Sketch',
      'Stencil.js',
      'Framework-agnostic design (Vue/React/Angular)',
      'HTML',
      'CSS/SCSS',
      'JavaScript',
      'TypeScript',
      'Vite',
      'Jest',
      'Vitest',
      'Playwright',
      'WAI-ARIA',
      'Stakeholder and change management',
      'Community building',
      'Mentoring',
    ],
    clientLove:
      "Clients particularly valued the thought leadership I brought to how a design system should actually work at that scale — not just the components themselves, but the whole organizational and community process behind getting 30+ teams to genuinely use and shape it. It's part of why the client created the Design System Lead role specifically for me. Clients also valued that the system never felt imposed: teams adopted it because they'd helped shape it, not because they were told to — which is also why the impact outlasted my involvement, continuing to grow organically into the company-wide standard it is today.",
  },
  {
    slug: 'unified-test-data-dashboard',
    title: 'Unified Test-Data Dashboard',
    subline: 'Design Lead & Frontend Lead — Automotive Client, Gothenburg',
    teaser:
      'Designed a single dashboard that turned software quality data scattered across 20+ tools and 9 teams into one source of truth, cutting hours of work down to about a minute.',
    challenge:
      "Across this automotive client's organization, vehicle software test data was scattered and disconnected — a company-wide problem affecting many departments. My team's engagement started with one department, where 9 teams' test data was spread across 20+ different tools and spreadsheets. Each team tracked quality in its own disconnected tools, with no shared basis for release decisions and getting a report of the current software test maturity for a given week required hours of manual work collecting and summarizing data from each team individually.",
    role: 'I worked on-site in Gothenburg as both Design Lead and Frontend Lead on a small delivery team. On the design side, I owned the end-to-end design of a new dashboard application. On the frontend side, I planned the architecture and wrote much of the code myself, while mentoring two junior developers and one junior designer.',
    approach:
      "I ran extensive user research — interviews and close collaboration with stakeholders and users across the organization — to understand how differently each team thought about software quality and maturity. The real challenge wasn't visualizing data; it was reconciling genuinely different use cases and mental models into a single interface that worked for everyone, without oversimplifying any one team's needs.",
    outcome: [
      'Consolidated 20+ scattered tools and spreadsheets into one unified dashboard',
      'Cut data collection and reporting from hours of manual work per team to about a minute',
      "Tool is actively adopted and used across all 9 teams in the department",
    ],
    skills: [
      'UX research',
      'Usability testing',
      'Figma',
      'Frontend architecture',
      'React',
      'JavaScript',
      'TypeScript',
      'React Testing Library',
      'CSS',
      'WAI-ARIA',
      'Stakeholder management',
      'Mentoring',
      'Agile delivery (sprint planning, kanban)',
    ],
    clientLove:
      "Clients specifically pointed to the relationship-building and alignment work as what made the tool succeed — not just the tool itself. Getting nine teams with genuinely different priorities to agree on a shared definition of \"quality\" was, in the client's view, the harder and more valuable part of the work.",
  },
  {
    slug: 'ai-powered-defect-analysis',
    title: 'AI-Powered Defect Analysis',
    subline: 'Project Lead & Design Lead — Automotive Client, Munich',
    teaser:
      'Leading a team building an AI-powered tool to speed up vehicle software defect analysis — in a space with no existing playbook to follow.',
    challenge:
      "A large automotive client wants to make defect analysis for vehicle software faster and less manual — but there's no existing playbook for how AI can actually help. The problem space itself needs to be discovered before it can be solved: which parts of defect analysis are worth automating, and where AI can create real value, aren't yet known going in.",
    role: 'I lead a Thoughtworks delivery team building an AI-powered defect analysis tool — a chatbot interface backed by an MCP server — as Project Lead, running discovery, stakeholder alignment, and prioritization. In parallel, I consult at a design-lead level across the client\'s broader vehicle defect-management landscape, exploring how a fragmented set of B2B tools could work as one streamlined process.',
    approach:
      'With no fixed roadmap to execute, the work is about discovering where AI can create the most value in a genuinely undefined problem space — running discovery workshops, testing and benchmarking different agent-based approaches against real defect-analysis tasks, and continuously refining requirements as we learn what actually works. On the broader consulting side, I use service blueprints and rapid AI-driven prototyping to explore future-state process solutions with stakeholders quickly.',
    outcome: 'Still ongoing — results are actively unfolding, not yet finalized.',
    skills: [
      'AI/agent-based product leadership',
      'Discovery and requirements refinement',
      'Stakeholder management',
      'Service blueprinting',
      'Rapid AI-driven prototyping',
      'Design leadership',
      'Agile delivery',
    ],
    clientLove:
      'Clients specifically value the focus on real, measurable value — making sure effort goes toward outcomes that genuinely matter, rather than exploring for its own sake. The rapid, AI-supported prototyping also stands out to them: being able to quickly visualize ideas makes it much easier to discuss options concretely and decide which ones are actually worth pursuing, rather than debating in the abstract.',
  },
  {
    slug: 'accessibility-upskilling-initiative',
    title: 'Accessibility Upskilling Initiative',
    subline:
      'Accessibility Community Co-Founder & Training Program Lead — Thoughtworks, Internal Initiative',
    teaser:
      "Co-founded Thoughtworks' accessibility community from scratch — built training that's upskilled 200+ people and become standard onboarding, and helped 20 colleagues earn official accessibility certification.",
    challenge:
      'As digital accessibility became increasingly important — especially with the European Accessibility Act on the horizon — Thoughtworks needed practical, hands-on accessibility skills across the organization, not just awareness. That capability didn\'t exist yet at scale.',
    role: "I co-founded Thoughtworks' Germany Accessibility Community (since merged into a Global Accessibility Community), focused on building real accessibility capability across the organization, not just raising awareness of the topic.",
    approach:
      'I created a self-paced accessibility training program from scratch, and separately built and led a learning group specifically to guide colleagues toward official IAAP (International Association of Accessibility Professionals) certification — giving Thoughtworks credible, verifiable accessibility expertise to bring to clients.',
    outcome: [
      'Self-curated accessibility training upskilled 200+ Thoughtworkers (and clients)',
      'Accessibility training is now part of standard onboarding for all new joiners globally',
      'Guided 20 colleagues to official IAAP certification through the learning group',
      'Became first Thoughtworker globally to obtain IAAP WAS (Web Accessibility Specialist) certification',
    ],
    skills: [
      'Training design',
      'Accessibility (WCAG, WAI-ARIA)',
      'Community building',
      'Program leadership',
      'IAAP/WAS accessibility standards',
    ],
    clientLove: '',
  },
  {
    slug: 'product-design-system-redesign',
    title: 'Product Redesign',
    subline: 'UX Designer & Frontend Developer — Fasten Health, New York',
    teaser:
      "Owning the end-to-end redesign of Fasten Health's product and design system, from UX research through Angular implementation.",
    challenge:
      "Fasten Health, a New York health-tech startup, has grown without a unified design language across its product suite — the core widget, the website, and the developer portal each look and feel different, with no shared design system behind any of them. The widget in particular had real UX problems beyond just visual inconsistency: the user journey itself was disjointed and difficult to follow, not just mismatched in style.",
    role: "I'm the only UX designer and frontend developer at Fasten Health, working freelance and reporting directly to the CEO and Head of Engineering. I own the redesign of the core product widget and the creation of a unified design language across the entire product suite, end to end — research, design, and implementation.",
    approach:
      "I started with a design review grounded in UX best practices, alongside existing user feedback from bug reports and support channels — establishing where the current experience was actually falling short before proposing anything new. From there, I built a first design proposal and iterated on it through ongoing feedback from customers and users, refining the direction before building out the full design kit in Figma. I'm now implementing that system myself: a complete component library in Angular, with the application migration currently underway.",
    outcome:
      'Still ongoing — the design kit and component library are built, and the application migration is currently underway.',
    skills: [
      'UX research',
      'Customer interviews',
      'Figma',
      'Design system creation',
      'Angular',
      'Component library architecture',
      'Frontend development',
      'Solo end-to-end ownership',
    ],
    clientLove:
      'Fasten Health has specifically valued the shift toward clarity and simplicity — taking what was previously an overcrowded, complex widget and distilling it down to something clean and easy to use, without losing functionality.',
  },
]
