import type {Metadata} from 'next'

import {StackSection} from '@/components/stack.section'
import {devStack, langStack} from '@/components/profile.data'
import {RadarChart} from '@/components/radar/radar-chart.component'

export const metadata: Metadata = {
  title: 'Tech Radar — Koen Verburg',
  description: 'Personal tech radar: what I adopt, trial, assess, and hold.',
}

export default function RadarPage() {
  return (
    <section className="max-w-2xl mx-auto w-full flex flex-col py-16">
      <div className="mb-10">
        <h1 className="text-sm font-medium">Tech Radar</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Technologies I use, explore, or avoid — organised by quadrant and ring.
        </p>
      </div>
      <RadarChart />
      <StackSection heading="dev environment" items={devStack} />
      <StackSection heading="stack" items={langStack} />
    </section>
  )
}
