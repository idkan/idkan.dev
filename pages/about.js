import { MDXLayoutRenderer } from '../components/content/MDXLayoutRender'
import { getFileBySlug } from '../lib/mdx'

const DEAFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps () {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About ({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  return (
    <MDXLayoutRenderer
      layout={frontMatter?.layout || DEAFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
