import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { Image, TOCInline, Link, Pre } from '../index'

export const MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../../layouts/${layout}`).default
    return <Layout {...rest} />
  }
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
