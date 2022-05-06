import { TagSEO } from '../../components/analytics/SEO'
import { siteMetadata } from '../../data/siteMetadata'
import ListLayout from '../../layouts/ListLayout'
import { getAllFilesFrontMatter } from '../../lib/mdx'
import { getAllTags } from '../../lib/tags'
import { kebabCase } from '../../lib/utils/kebabCaseFormat'

const root = process.cwd()

export async function getStaticPaths (type) {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter((post) =>
    post.draft !== true && post.tags.map((tag) => kebabCase(tag)).includes(params.tag)
  )

  // TODO: Add RSS generator

  return {
    props: {
      posts: filteredPosts,
      tag: params.tag
    }
  }
}

export default function Tags ({ posts, tag }) {
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  return (
    <>
      <TagSEO title={`${tag} - ${siteMetadata.author}`} description={`${tag} tags - ${siteMetadata.author}`} />
      <ListLayout posts={posts} title={`Posts tagged as ${title}`} />
    </>

  )
}