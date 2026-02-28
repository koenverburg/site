import { defineCollection, defineConfig, s } from 'velite'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const Page = defineCollection({
  name: 'Page',
  pattern: '**/*.page.mdx',
  schema: s.object({
    title: s.string(),
    headline: s.string(),
    description: s.string(),
    seoDescription: s.string(),
    published: s.boolean(),
    publishedAt: s.isodate(),
    image: s.string().optional(),
    category: s.array(s.string()).optional(),
    tags: s.array(s.string()).optional(),
    slug: s.path(),
    body: s.mdx(),
  }),
})

export default defineConfig({
  collections: { Page },
  output: {
    path: '.velite',
    clean: true,
  },
  mdx: {
    gfm: true,
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className = node.properties.className || []
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
})
