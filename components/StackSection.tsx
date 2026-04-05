import type { StackItem } from '@/lib/data/profile'

type Props = {
  heading: string
  items: StackItem[]
}

export function StackSection({ heading, items }: Props) {
  return (
    <div className="mt-16">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        {heading}
      </p>
      <dl className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex gap-6">
            <dt className="w-28 text-sm text-muted-foreground shrink-0">{item.label}</dt>
            <dd className="text-sm text-foreground">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
