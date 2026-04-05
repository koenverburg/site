import { experience } from '@/lib/data/profile'

export function Experience() {
  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Work
      </p>
      <div className="space-y-6">
        {experience.map((item) => (
          <div key={item.company}>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium">{item.company}</span>
              <span className="font-mono text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{item.role}</p>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
