import { PageSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'
import ListLayout from '../layouts/ListLayout'
import { getAllFilesFrontMatter } from '../lib/mdx'

export const MAX_POSTS_PER_PAGE = 5

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, MAX_POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / MAX_POSTS_PER_PAGE)
  }

  return { props: { posts, initialDisplayPosts, pagination } }
}

export default function Blog ({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={`Blog - ${siteMetadata.description}`} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title='All Posts' />
    </>
  )
}
