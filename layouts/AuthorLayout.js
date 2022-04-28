import NextImage from 'next/image'
import { PageSEO } from '../components/analytics/SEO'
import SocialIcon from '../components/ui/SocialIcon'
import { experienceData } from '../data/experienceData'

export default function AuthorLayout ({ children, frontMatter }) {
  const { name, avatar, occupation, company, location, twitter, linkedin, instagram, github } = frontMatter

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
              className='h-48 w-48 rounded-full'
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>{name}</h3>
            <div className='text-gray-500 dark:text-gray-400'>{occupation}</div>
            <div className='text-gray-500 dark:text-gray-400'>{company}</div>
            <div className='text-gray-500 dark:text-gray-400'><span role='img' aria-label='location'>📍</span>{location}</div>
            <div className='flex space-x-3 pt-6'>
              <SocialIcon kind='github' href={github} />
              <SocialIcon kind='linkedin' href={linkedin} />
              <SocialIcon kind='twitter' href={twitter} />
              <SocialIcon kind='instagram' href={instagram} />
            </div>
          </div>
          <div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>{children}</div>
        </div>
        <div className='mt-10'>
          <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              Experience
            </h1>
          </div>
          <div className='py-8 max-w-none xl:col-span-2'>
            {experienceData.map((experience, index) => (
              <div key={index} className='my-3'>
                <div className='flex flex-row text-xl'>
                  <span className='text-gray-500 dark:text-gray-400'>{experience.title}</span>
                  <span className='text-gray-500 dark:text-gray-400'>&nbsp;@&nbsp;</span>
                  <span className='text-primary-500 dark:text-primary-400'>
                    <a href={experience.companyUrl} className='no-underline'>{experience.company}</a>
                  </span>
                </div>
                <div>
                  <div className='p-1 font-mono text-sm text-gray-500 dark:text-gray-400'>📅 {experience.rangeDate}</div>
                  <div className='p-1 font-mono text-sm text-gray-500 dark:text-gray-400'>📍 {experience.location}</div>
                  <div className='p-2'>
                    {experience.description.map((description, index) => (
                      <div key={index} className='flex flex-row space-x-2'>
                        <div className='text-primary-500 dark:text-primary-400 mr-2 text-lg'>
                          &#8227;
                        </div>
                        <div className='text-gray-500 dark:text-gray-400'>
                          {description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
