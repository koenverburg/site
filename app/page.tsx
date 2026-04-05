import type {Metadata} from 'next'

import {StackSection} from '@/components/stack.section'
import {ProfileHeader} from '@/components/profile.header'
import {Experience} from '@/components/experience.component'
import {devStack, langStack} from '@/components/profile.data'
import {RenderPageContent} from '@/components/render.page.content'

export const metadata: Metadata = {
  title: 'Koen Verburg',
}

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto w-full flex flex-col py-16">
      <ProfileHeader />
      <div className="border-t border-border" />
      <div className="mt-10">
        <RenderPageContent title="intro" />
      </div>
      <Experience />
      <StackSection heading="dev environment" items={devStack} />
      <StackSection heading="stack" items={langStack} />
    </section>
  )
}
