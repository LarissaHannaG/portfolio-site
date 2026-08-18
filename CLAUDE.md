# Portfolio Site — Larissa Günther

## Stack
- React + Tailwind CSS
- No backend/CMS — static site
- Keep dependencies minimal; avoid adding libraries unless clearly needed

## Design direction
- Minimal, clean aesthetic — generous whitespace, restrained color palette,
  strong typography over heavy visual decoration
- Should feel professional and confident, not flashy or trend-chasing

## Who this is for
- Primarily recruiters/hiring managers evaluating me for Technical PM /
  Product Owner / Team Lead roles, and Design Engineer (design + frontend)
  roles — my two main job search tracks
- Secondary audience: potential clients/collaborators

## Core positioning
- I'm a bridge between tech, design, and business — genuinely understand
  all three, not just able to speak about them. Get real client feedback
  for resolving friction between these groups and translating technical
  complexity for non-technical people. This should come through in how
  the site is written, not just stated as a claim.

## Content source
- My job search background doc has full project details, achievements,
  and metrics — I'll provide specific project content to feature as we
  build. Don't invent placeholder achievements or metrics.

## Working style
- Always propose a short plan before generating code for a new section —
  wait for my approval before writing
- Build section by section (hero, about, projects, contact) rather than
  generating the whole site at once
- Keep commits small and scoped to one section/change at a time

## CSS conventions
- Use relative units (rem, em, %, or Tailwind spacing scale) instead of
  fixed px values for spacing, sizing, and typography — needed for proper
  responsiveness and accessibility (respecting user font-size settings)
- Test/consider mobile breakpoints for every section, not just desktop


## Site architecture update
- Site is now multi-page, not single-page: main page + one linked case
  study page per project (4 total)
- Requires React Router (or equivalent) for client-side routing —
  still a static site, no backend/CMS
- Main page: keeps short project teasers with a "Read case study →" link
  to each project's dedicated page
- Case study pages: each follows this consistent 6-section template,
  in this order:
  1. The Challenge — problem statement
  2. My Role — what I specifically did
  3. How I Approached the Problem — approach/process
  4. The Outcome — the solution built AND its results/metrics together
  5. Skills Used — tools/skills, more plainly stated than the narrative
     sections
  6. What Clients Loved — client feedback described in my own words,
     never as direct quotes (confidentiality)
- Keep the same minimal, typography-led visual language across case
  study pages as the main site — no cards/heavy chrome
