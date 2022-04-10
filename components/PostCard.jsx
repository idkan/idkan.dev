import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white rounded shadow p-6'>
      <h3 className='text-xl font-bold mb-4'>{post.title}</h3>
      <p className='text-gray-700 text-base'>{post.excerpt}</p>
    </div>
  )
}

export default PostCard
