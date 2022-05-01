import Link from 'next/link'
import Image from 'next/image'

import { siteMetadata } from '../data/siteMetadata'
import { getCurrentDayName } from '../lib/utils/formatDate'

const Footer = () => {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          {siteMetadata.socialMedia.map((item, key) => (
            <a key={key} href={item.url} target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-primary-600'>
              {item.icon}
            </a>
          ))}
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <Link href='/'>
            <a className='hover:text-primary-600'>{siteMetadata.author}</a>
          </Link>
          <div>{' • '}</div>
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <div>{`Have a nice ${getCurrentDayName()}!`}</div>
        </div>
        <div className='mb-8 text-sm text-gray-500 dark:text-gray-400'>
          <Image src='/static/images/shiba.gif' alt='idkan.dev' height='24' width='24' className='w-8 h-8 rounded-full mr-4' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
