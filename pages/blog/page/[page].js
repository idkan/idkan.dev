import { PageSEO } from '../../../components/analytics/SEO'
import { siteMetadata } from '../../../data/siteMetadata'
import ListLayout from '../../../layouts/ListLayout'
import { getAllFilesFrontMatter } from '../../../lib/mdx'
import { MAX_POSTS_PER_PAGE } from '../../blog'

export async function getStaticPaths () {
  const totalPosts = await getAllFilesFrontMatter('blog')
  const totalPages = Math.ceil(totalPosts.length / MAX_POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ params: { page: (i + 1).toString() } }))

  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  const { page } = params
  const posts = await getAllFilesFrontMatter('blog')
  const currentPage = parseInt(page, 10)
  const initialDisplayPosts = posts.slice(MAX_POSTS_PER_PAGE * (currentPage - 1), MAX_POSTS_PER_PAGE * currentPage)
  const pagination = {
    currentPage,
    totalPages: Math.ceil(posts.length / MAX_POSTS_PER_PAGE)
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination
    }
  }
}

export default function PostPage ({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title='All Posts' />
    </>
  )
}
