type ExperienceItem = {
  company:     string
  role:        string
  period:      string
  description: string
}

export type Project = {
  name:        string
  href:        string
  description: string
  tags:        string[]
}

export type ArchivedProject = {
  name: string
  href: string
  year: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Adidas',
    description:
      'Part of the team that works on the Payment Experience for the global webshop. Mainly focusing on implementing new Payment Service Providers (PSPs). And setting up agentic workflows for faster turn-a-round.',
    period: '2021 — Present',
    role:   'Senior Software Engineer',
  },
  {
    company: 'Personal',
    description:
      // eslint-disable-next-line @stylistic/max-len
      'Tinkering with Neovim configs and plugins, contributing to open-source projects, and building AI workflows and orchestration for Claude and Pi. Designing and building AI agents focused on automation and decision-making rather than code generation.',
    period: '2020 — Present',
    role:   'Open Source & AI Tinkerer',
  },
]


export const activeProjects: Project[] = [
  {
    name:        'Pi Code Agent',
    href:        'https://pi.dev',
    description: 'An AI-powered coding assistant built for seamless development workflows.',
    tags:        ['AI', 'TypeScript', 'Automation'],
  },
  {
    name:        'Neovim Config',
    href:        'https://github.com/koenverburg/nvim',
    description: 'A highly optimized Neovim configuration focusing on speed and developer experience.',
    tags:        ['Lua', 'Neovim', 'DX'],
  },
  {
    name:        'AI Workflows',
    href:        '#',
    description: 'Orchestration and automation tools for Claude, Pi, and other AI agents.',
    tags:        ['AI', 'TypeScript', 'Automation'],
  },
]

export const archivedProjects: ArchivedProject[] = [
  {
    name: 'minimal-tmux',
    href: 'https://github.com/koenverburg/minimal-tmux',
    year: '2023',
  },
  {
    name: 'peregrine',
    href: 'https://github.com/koenverburg/peregrine',
    year: '2022',
  },
  {
    name: 'tuisky',
    href: 'https://github.com/koenverburg/tuisky',
    year: '2022',
  },
]

