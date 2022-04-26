import NextImage from 'next/image'
import { PageSEO } from '../components/analytics/SEO'
import SocialIcon from '../components/ui/SocialIcon'

export default function AuthorLayout ({ children, frontMatter }) {
  const { name, avatar, occupation, company, location, email, twitter, linkedin, instagram, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className='divide-y'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            About
          </h1>
        </div>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8'>
            <NextImage
              src={avatar}
              alt='avatar'
              width='192px'
              height='192px'
              className='rounded-full xl:rounded-lg'
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>{name}</h3>
            <div className='text-gray-500 dark:text-gray-400'>{occupation}</div>
            <div className='text-gray-500 dark:text-gray-400'>{company}</div>
            <div className='text-gray-500 dark:text-gray-400'>
              <span role='img' aria-label='location'>
                📍
              </span>
              {location}
            </div>
            <div className='flex space-x-4 pt-6'>
              <SocialIcon kind='email' href={`mailto:${email}`} />
              <SocialIcon kind='twitter' href={twitter} />
              <SocialIcon kind='linkedin' href={linkedin} />
              <SocialIcon kind='github' href={github} />
              <SocialIcon kind='instagram' href={instagram} />
            </div>
          </div>
          <div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>{children}</div>
        </div>
      </div>
    </>
  )
}
