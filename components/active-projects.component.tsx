'use client'

import {useState} from 'react'
import {activeProjects, archivedProjects} from '@/components/profile.data'
import {cn} from '@/components/cn.utils'

export function ActiveProjects() {
  const [showOlder, setShowOlder] = useState(false)

  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Active Projects
      </p>
      <div className="space-y-6">
        {activeProjects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {project.name}
              </span>
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    'text-xs px-2 py-0.5 rounded-full',
                    'bg-muted text-muted-foreground'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => setShowOlder((v) => !v)}
        className="mt-6 text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        {showOlder ? 'hide older projects' : 'older projects'}
      </button>

      {showOlder && (
        <div className="mt-4 space-y-3">
          {archivedProjects.map((project) => (
            <div key={project.name} className="flex items-baseline justify-between">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {project.name}
              </a>
              <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
