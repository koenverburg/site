export type Ring = 'adopt' | 'trial' | 'assess' | 'hold'
export type Quadrant = 'techniques' | 'platforms' | 'tools' | 'languages'

export type Blip = {
  name: string
  ring: Ring
  quadrant: Quadrant
  description?: string
  isNew?: boolean
}

export const RING_LABELS: Record<Ring, string> = {
  adopt:  'Adopt',
  trial:  'Trial',
  assess: 'Assess',
  hold:   'Hold',
}

export const QUADRANT_LABELS: Record<Quadrant, string> = {
  techniques: 'Techniques',
  platforms:  'Platforms',
  tools:      'Tools',
  languages:  'Languages',
}

export const RING_COLORS: Record<Ring, string> = {
  adopt:  '#22c55e',
  trial:  '#3b82f6',
  assess: '#eab308',
  hold:   '#ef4444',
}

export const blips: Blip[] = [
  // Languages
  { name: 'TypeScript', ring: 'adopt',  quadrant: 'languages', description: 'Primary language across all projects.' },
  { name: 'Lua',        ring: 'adopt',  quadrant: 'languages', description: 'Neovim configuration and plugin development.' },
  { name: 'React',      ring: 'adopt',  quadrant: 'languages', description: 'UI framework for web projects.' },
  { name: 'Next.js',    ring: 'adopt',  quadrant: 'languages', description: 'Full-stack React framework.' },
  { name: 'Rust',       ring: 'adopt',  quadrant: 'languages', description: 'CLI tools and performance-critical code.' },
  { name: 'Go',         ring: 'adopt',  quadrant: 'languages', description: 'Backend services and tooling.' },
  { name: 'Python',     ring: 'hold',   quadrant: 'languages', description: 'Scripting and AI tooling.' },
  { name: 'Zig',        ring: 'trial',  quadrant: 'languages', description: 'Systems programming exploration.', isNew: true },
  { name: 'C#',         ring: 'hold',   quadrant: 'languages', description: '' },
  { name: 'Elixir',     ring: 'hold',   quadrant: 'languages', description: '' },

  // Techniques
  { name: 'AI-assisted development', ring: 'adopt',  quadrant: 'techniques', description: 'Using AI agents (Claude, Pi) in daily workflow.', isNew: true },
  { name: 'Event Sourcing',          ring: 'assess', quadrant: 'techniques', description: 'Evaluating for audit-trail-heavy domains.' },

  // Tools
  { name: 'Neovim',          ring: 'adopt',  quadrant: 'tools', description: 'Primary editor with custom Lua config.' },
  { name: 'Ghostty',         ring: 'adopt',  quadrant: 'tools', description: 'Terminal emulator.' },
  { name: 'Zellij',          ring: 'adopt',  quadrant: 'tools', description: 'Terminal multiplexer.' },
  { name: 'k9s',             ring: 'adopt',  quadrant: 'tools', description: 'Kubernetes TUI.' },
  { name: 'Bun',             ring: 'adopt',  quadrant: 'tools', description: 'JS runtime and package manager.' },
  { name: 'Claude Code CLI', ring: 'adopt',  quadrant: 'tools', description: 'AI coding assistant in the terminal.', isNew: true },
  { name: 'Zed',             ring: 'adopt',  quadrant: 'tools', description: 'Fast editor, great pair with Neovim.' },
  { name: 'Pi',              ring: 'adopt',  quadrant: 'tools', description: 'AI coding assistant.', isNew: true },
  { name: 'Dagger',          ring: 'adopt',  quadrant: 'tools', description: 'Portable CI/CD pipelines.' },
  { name: 'QwenCoder',       ring: 'trial',  quadrant: 'tools', description: 'Local AI coding model.', isNew: true },
  { name: 'VSCode',          ring: 'hold',   quadrant: 'tools', description: 'Replaced by Neovim.' },

  // Platforms
  { name: 'Vercel',     ring: 'adopt',  quadrant: 'platforms', description: 'Deployment platform for Next.js projects.' },
  { name: 'Kubernetes', ring: 'adopt',  quadrant: 'platforms', description: 'Container orchestration.' },
  { name: 'Node.js',    ring: 'hold',   quadrant: 'languages', description: 'Replaced by Bun.' },
]
