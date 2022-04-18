import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a href='' className='text-gray-500 hover:text-green-500'><BsGithub size='24' />          </a>
          <a href='' className='text-gray-500 hover:text-green-500'><BsTwitter size='24' /></a>
          <a href='' className='text-gray-500 hover:text-green-500'><BsLinkedin size='24' /></a>
          <a href='' className='text-gray-500 hover:text-green-500'><BsInstagram size='24' /></a>
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>idkan.dev</div>
          <div>{' • '}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <Link href='/'>Tech Blog</Link>
        </div>
        <div className='mb-8 text-sm text-gray-500 dark:text-gray-400'>
          <Image src='/images/shiba.gif' alt='idkan.dev' height='24' width='24' className='w-8 h-8 rounded-full mr-4' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
