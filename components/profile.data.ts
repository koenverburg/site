type ExperienceItem = {
  company:     string
  role:        string
  period:      string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Adidas',
    description:
      'Part of the team that works on the Payment Experience for the global webshop. Mainly focusing on implementing new Payment Service Providers (PSPs) and setting update agentic workflows',
    period: '2021 — Present',
    role:   'Senior Software Engineer',
  },
  {
    company: 'Personal',
    description:
      // eslint-disable-next-line @stylistic/max-len
      'Tinkering with Neovim configs and plugins, contributing to open-source projects, and building AI workflows and orchestration for Claude and Pi. Designing and building AI agents focused on automation and decision-making rather than code generation.',
    period: '2023 — Present',
    role:   'Open Source & AI Tinkerer',
  },
]

export type StackEntry = {
  name:  string
  href?: string
  kind?: 'frontend' | 'backend' | 'both'
}

export type StackGroup = {
  label: string
  items: StackEntry[]
}

export const devStack: StackGroup[] = [
  {
    items: [{href: 'https://ghostty.org', name: 'Ghostty'}],
    label: 'Terminal',
  },
  {
    items: [{href: 'https://zellij.dev', name: 'Zellij'}],
    label: 'Multiplexer',
  },
  {
    items: [
      {href: 'https://neovim.io', name: 'Neovim'},
      {href: 'https://zed.dev', name: 'Zed'},
    ],
    label: 'Editor',
  },
  {
    items: [
      {href: 'https://claude.ai/code', name: 'Claude Code CLI'},
      {href: 'https://pi.dev', name: 'Pi'},
    ],
    label: 'AI',
  },
  {
    items: [
      {href: 'https://dagger.io', name: 'Dagger'},
      {href: 'https://kubernetes.io', name: 'Kubernetes'},
      {href: 'https://k9scli.io', name: 'k9s'},
    ],
    label: 'Infra',
  },
]

export const langStack: StackGroup[] = [
  {
    items: [
      {kind: 'both', name: 'TypeScript'},
      {kind: 'backend', name: 'Rust'},
      {kind: 'backend', name: 'Go'},
      {kind: 'backend', name: 'Lua'},
    ],
    label: 'Language',
  },
  {
    items: [
      {name: 'React'},
      {name: 'Next.js'},
    ],
    label: 'Frontend',
  },
  {
    items: [
      {name: 'Node.js'},
      {name: 'Bun'},
    ],
    label: 'Runtime',
  },
  {
    items: [
      {name: 'Kubernetes'},
      {name: 'Dagger'},
    ],
    label: 'Platform',
  },
]
