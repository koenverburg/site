import { RenderPageContent } from 'components/renderPageContent'
import { StackSection } from 'components/StackSection'
import { devStack, langStack } from '@/lib/data/profile'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koen Verburg - Conrad the Programmer',
}

export default function Page() {
  return (
    <section className="md:w-1/2 m-auto flex flex-col py-16">
      <RenderPageContent title="intro" />
      <StackSection heading="dev environment" items={devStack} />
      <StackSection heading="stack" items={langStack} />
    </section>
  )
}