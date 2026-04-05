import {Page} from '.velite'

import {MarkdownRenderer} from '@/components/markdown.renderer'

export function RenderPageContent({title}: {title: string}) {
  const page = Page.find(p => p.title === title)

  return (
    <main>
      {page && <MarkdownRenderer code={page.body} />}
    </main>
  )
}
