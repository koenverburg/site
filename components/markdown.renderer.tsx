'use client'
import type {ComponentPropsWithoutRef} from 'react'

import Link from 'next/link'
import * as React from 'react'
import {Fragment, jsx, jsxs} from 'react/jsx-runtime'

type MdxProps = {
  code: string
}

function useMDXComponent(code: string): React.ComponentType<any> {
  return React.useMemo(() => {
    const fn = new Function(code)

    return fn({Fragment, jsx, jsxs}).default
  }, [code])
}

const CustomLink = ({children, href, ...props}: ComponentPropsWithoutRef<'a'>) => {
  if (!href) return <a {...props}>{children}</a>

  if (href.startsWith('/')) {
    return (
      <Link className="font-medium text-primary underline underline-offset-4" href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a className="font-medium text-primary underline underline-offset-4" href={href} {...props}>{children}</a>
  }

  return <a className="font-medium text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer" href={href} {...props}>{children}</a>
}

function H1({children}: ComponentPropsWithoutRef<'h1'>) {
  const content = Array.isArray(children) ? children[1] : children

  return (
    <h1 className="scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-3xl">
      {content}
    </h1>
  )
}

function P({children}: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}

const components = {
  a:  CustomLink,
  h1: H1,
  p:  P,
}

/* eslint-disable react-hooks/static-components */
export function MarkdownRenderer({code}: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert flex-col">
      <Component components={{...components}} />
    </article>
  )
}
/* eslint-enable react-hooks/static-components */
