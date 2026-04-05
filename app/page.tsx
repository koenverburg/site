import { RenderPageContent } from 'components/renderPageContent'
import { ProfileHeader } from 'components/ProfileHeader'
import { Experience } from 'components/Experience'
import { StackSection } from 'components/StackSection'
import { devStack, langStack } from '@/lib/data/profile'
import type { Metadata } from 'next'

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