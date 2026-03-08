"use client"
import * as React from 'react'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime'
import Link from 'next/link'
import Plausible from "plausible-tracker";
import type { ComponentPropsWithoutRef } from 'react'

function useMDXComponent(code: string): React.ComponentType<any> {
  return React.useMemo(() => {
    const fn = new Function(code)
    return fn({ Fragment, jsx, jsxs }).default
  }, [code])
}

type MdxProps = {
  code: string
}

const { trackEvent } = Plausible({
  trackLocalhost: false,
  domain: 'conradtheprogrammer.com'
});

const handleClick = (label: string, url: string) => () =>
  trackEvent(
    "click",
    {
      props: {
        url,
        label,
      },
    },
    {
      url,
    }
  );

// Consume all of https://ui.shadcn.com/docs/components/typography

const CustomLink = ({ href, children, ...props }: ComponentPropsWithoutRef<'a'>) => {
  if (!href) return <a {...props}>{children}</a>

  if (href.startsWith('/')) {
    return (
      <Link onClick={handleClick(String(children), href)} className="font-medium text-primary underline underline-offset-4" href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a className="font-medium text-primary underline underline-offset-4" href={href} {...props}>{children}</a>
  }

  return <a onClick={handleClick(String(children), href)} className="font-medium text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer" href={href} {...props}>{children}</a>
}

function H1({ children }: ComponentPropsWithoutRef<'h1'>) {
  // Skip the anchor element prepended by rehypeAutolinkHeadings (index 0)
  const content = Array.isArray(children) ? children[1] : children;
  return (
    <h1 className="scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-3xl">
      {content}
    </h1>
  )
}

function P({ children }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}

const components = {
  a: CustomLink,
  h1: H1,
  p: P,
}

export function MarkdownRenderer({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert flex-col">
      <Component components={{ ...components }} />
    </article>
  )
}