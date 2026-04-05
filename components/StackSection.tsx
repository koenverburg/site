import type {StackGroup} from '@/lib/data/profile'

const kindLabel: Record<string, string> = {
  backend:  'be',
  both:     'fe · be',
  frontend: 'fe',
}

type Props = {
  heading: string
  items:   StackGroup[]
}

export function StackSection({heading, items}: Props) {
  return (
    <div className="mt-16">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        {heading}
      </p>
      <dl className="space-y-3">
        {items.map((group) => (
          <div key={group.label} className="flex gap-6">
            <dt className="w-28 text-sm text-muted-foreground shrink-0 pt-0.5">
              {group.label}
            </dt>
            <dd className="flex flex-col gap-1">
              {group.items.map((entry) => (
                <div key={entry.name} className="flex items-baseline gap-2">
                  {entry.href ? (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      {entry.name}
                    </a>
                  ) : (
                    <span className="text-sm">{entry.name}</span>
                  )}
                  {entry.kind && (
                    <span className="font-mono text-xs text-muted-foreground">
                      {kindLabel[entry.kind]}
                    </span>
                  )}
                </div>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
