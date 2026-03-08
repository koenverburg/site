import { RenderPageContent } from 'components/renderPageContent'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Koen Verburg - Conrad the Programmer',
}

export default function Page() {
  return (
    <section className="md:w-1/2 m-auto flex flex-col">
      <RenderPageContent title="intro" />
    </section>
  )
}