const links = [
  { label: 'GitHub', href: 'https://github.com/koenverburg' },
  { label: 'Twitter', href: 'https://twitter.com/koenverburg' },
  { label: 'YouTube', href: 'https://youtube.com/@conradtheprogrammer' },
  { label: 'Instagram', href: 'https://instagram.com/conradtheprogrammer' },
  { label: 'Instagram (personal)', href: 'https://instagram.com/koenverburg' },
]

export function ProfileHeader() {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold tracking-tight">Koen Verburg</h1>
      <p className="font-mono text-sm text-muted-foreground mt-1">
        Senior Software Engineer · Amsterdam, NL
      </p>
      <div className="flex gap-4 mt-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
