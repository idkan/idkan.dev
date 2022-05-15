import fs from 'fs'

import generateRss from '../../lib/rss'

import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '../../lib/mdx'
import { MDXLayoutRenderer } from '../../components/content/MDXComponents'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths () {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const post = await getFileBySlug('blog', params.slug.join('/'))

  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prevPost = allPosts[postIndex + 1] || null
  const nextPost = allPosts[postIndex - 1] || null

  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return { props: { post, authorDetails, prevPost, nextPost } }
}

export default function Blog ({ post, authorDetails, prevPost, nextPost }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true
        ? (
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            toc={toc}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
            authorDetails={authorDetails}
            prevPost={prevPost}
            nextPost={nextPost}
          />
          )
        : (
          <div className='mt-24 text-center'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-10'>
              This post is under construction <span role='img' aria-label='roadwork sign'>🚧</span>
            </h1>
          </div>
          )}
    </>
  )
}
