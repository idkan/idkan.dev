import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div class='flex w-full items-center font-sans px-4 py-12'>
      <Image src={author.photo.url} unoptimized alt={author.name} height='40px' width='40px' className='w-10 h-10 rounded-full mr-4' />
      <div class='flex-1 px-2'>
        <p class='text-base font-bold md:text-xl leading-none mb-2'>{author.name}</p>
        <p class='text-gray-600 text-xs md:text-base'>{author.bio}</p>
      </div>
      {author?.social && (
        <div class='justify-end'>
          <a class='bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full' href={author.social} target='_blank' rel='noreferrer'>Follow</a>
        </div>
      )}
    </div>
  )
}

export default Author
