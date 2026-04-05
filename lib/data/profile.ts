export type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Adidas',
    role: 'Senior Software Engineer',
    period: '2021 — Present',
    description:
      'Payment Experience for the global webshop. Implementing new Payment Service Providers (PSPs), Building using AI agents',
  },
]

export type StackEntry = {
  name: string
  href?: string
  kind?: 'frontend' | 'backend' | 'both'
}

export type StackGroup = {
  label: string
  items: StackEntry[]
}

export const devStack: StackGroup[] = [
  {
    label: 'Terminal',
    items: [{ name: 'Ghostty', href: 'https://ghostty.org' }],
  },
  {
    label: 'Multiplexer',
    items: [{ name: 'Zellij', href: 'https://zellij.dev' }],
  },
  {
    label: 'Editor',
    items: [
      { name: 'Neovim', href: 'https://neovim.io' },
      { name: 'Zed', href: 'https://zed.dev' },
    ],
  },
  {
    label: 'AI',
    items: [
      { name: 'Claude Code CLI', href: 'https://claude.ai/code' },
      { name: 'Pi', href: 'https://pi.dev' },
    ],
  },
  {
    label: 'Infra',
    items: [
      { name: 'Dagger', href: 'https://dagger.io' },
      { name: 'Kubernetes', href: 'https://kubernetes.io' },
      { name: 'k9s', href: 'https://k9scli.io' },
    ],
  },
]

export const langStack: StackGroup[] = [
  {
    label: 'Language',
    items: [
      { name: 'TypeScript', kind: 'both' },
      { name: 'Rust', kind: 'backend' },
      { name: 'Go', kind: 'backend' },
      { name: 'Lua', kind: 'backend' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
    ],
  },
  {
    label: 'Runtime',
    items: [
      { name: 'Node.js' },
      { name: 'Bun' },
    ],
  },
  {
    label: 'Platform',
    items: [
      { name: 'Kubernetes' },
      { name: 'Dagger' },
    ],
  },
]
