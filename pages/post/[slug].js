import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { PostDetails, Author, Comments, CommentsForm } from '../../components'

const PostView = ({ post }) => {
  return (
    <>
      <div className='container mx-auto px-10 mb-8'>
        <div className='col-span-1 lg:col-span-10'>
          <PostDetails post={post} />
          <hr className='border-b border-gray-200 my-6' />
          <Author author={post.author} />
          <hr className='border-b border-gray-200 my-6' />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
      </div>
    </>
  )
}

export default PostView

export async function getStaticProps ({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data }
  }
}

export async function getStaticPaths () {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false
  }
}
