export type StackItem = {
  label: string
  name: string
  href?: string
}

export const devStack: StackItem[] = [
  { label: 'Terminal',    name: 'Ghostty',         href: 'https://ghostty.org' },
  { label: 'Multiplexer', name: 'Zellij',          href: 'https://zellij.dev' },
  { label: 'Editor',      name: 'Neovim',          href: 'https://neovim.io' },
  { label: 'AI',          name: 'Claude Code CLI', href: 'https://claude.ai/code' },
  { label: 'Config',      name: 'Pi' },
  { label: 'Infra',       name: 'Dagger · k8s · k9s' },
]

export const langStack: StackItem[] = [
  { label: 'Language', name: 'TypeScript' },
  { label: 'Frontend', name: 'React · Next.js' },
  { label: 'Runtime',  name: 'Node.js · Bun' },
  { label: 'Backend',  name: 'Go' },
  { label: 'Payments', name: 'Stripe · Adyen' },
  { label: 'Platform', name: 'Kubernetes · Dagger' },
]
