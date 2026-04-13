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
  { name: 'TypeScript',  ring: 'adopt',  quadrant: 'languages',  description: 'Primary language across all projects.' },
  { name: 'Lua',         ring: 'adopt',  quadrant: 'languages',  description: 'Neovim configuration and plugin development.' },
  { name: 'Rust',        ring: 'trial',  quadrant: 'languages',  description: 'CLI tools and performance-critical code.' },
  { name: 'Go',          ring: 'trial',  quadrant: 'languages',  description: 'Backend services and tooling.' },
  { name: 'Python',      ring: 'assess', quadrant: 'languages',  description: 'Scripting and AI tooling.' },
  { name: 'Zig',         ring: 'assess', quadrant: 'languages',  description: 'Systems programming exploration.', isNew: true },

  // Techniques
  { name: 'AI-assisted development', ring: 'adopt',  quadrant: 'techniques', description: 'Using AI agents (Claude, Cursor) in daily workflow.', isNew: true },
  { name: 'Trunk-based development', ring: 'adopt',  quadrant: 'techniques', description: 'Short-lived branches, frequent integration.' },
  { name: 'TDD',                     ring: 'trial',  quadrant: 'techniques', description: 'Test-driven development for critical paths.' },
  { name: 'Event Sourcing',          ring: 'assess', quadrant: 'techniques', description: 'Evaluating for audit-trail-heavy domains.' },
  { name: 'Micro-frontends',         ring: 'hold',   quadrant: 'techniques', description: 'Complexity outweighs benefits at current scale.' },

  // Tools
  { name: 'Neovim',       ring: 'adopt',  quadrant: 'tools', description: 'Primary editor with custom Lua config.' },
  { name: 'Bun',          ring: 'adopt',  quadrant: 'tools', description: 'JS runtime and package manager.' },
  { name: 'tmux',         ring: 'adopt',  quadrant: 'tools', description: 'Terminal multiplexer for session management.' },
  { name: 'Nix',          ring: 'trial',  quadrant: 'tools', description: 'Reproducible dev environments.', isNew: true },
  { name: 'Zed',          ring: 'assess', quadrant: 'tools', description: 'Evaluating as a Neovim alternative.' },
  { name: 'VSCode',       ring: 'hold',   quadrant: 'tools', description: 'Replaced by Neovim.' },

  // Platforms
  { name: 'Vercel',              ring: 'adopt',  quadrant: 'platforms', description: 'Deployment platform for Next.js projects.' },
  { name: 'Cloudflare Workers', ring: 'trial',  quadrant: 'platforms', description: 'Edge functions for low-latency APIs.', isNew: true },
  { name: 'Railway',             ring: 'assess', quadrant: 'platforms', description: 'Evaluating for containerized services.' },
  { name: 'AWS',                 ring: 'hold',   quadrant: 'platforms', description: 'Overkill for personal projects.' },
]
