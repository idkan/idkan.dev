import NextImage from 'next/image'
import { siteMetadata } from '../data/siteMetadata'

export default function PostLayout ({ frontMatter, authorDetails, prevPost, nextPost, children }) {
  const { slug, fileName, title, date, tags } = frontMatter

  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <article>
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-slate-500 dark:text-slate-400'>
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-10'>
                  {title}
                </h1>
              </div>
            </div>
          </header>
          <div className='pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6' style={{ gridTemplateRows: 'auto 1fr' }}>
            <dl className='pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700'>
              <dt className='sr-only'>Authors</dt>
              <dd>
                <ul className='flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8'>
                  {authorDetails.map((author) => (
                    <li key={author.name} className='flex items-center space-x-2'>
                      {author.avatar && (
                        <NextImage
                          src={author.avatar}
                          width={40}
                          height={40}
                          className='rounded-full'
                          alt={author.name}
                        />
                      )}
                      <dl className='text-sm font-medium leading-5 whitespace-nowrap'>
                        <dt className='sr-only'>Name</dt>
                        <dd className='text-slate-900 dark:text-slate-100'>{author.name}</dd>
                        <dt className='sr-only'>Twitter</dt>
                        <dd>
                          <a
                            href={`https://twitter.com/${author.twitter}`}
                            className='text-primary-500 dark:text-primary-600 hover:text-primary-400 dark:hover:text-primary-500'
                          >
                            {author.twitter.replace('https://twitter.com/', '@')}
                          </a>
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </article>
    </div>
  )
}
