import NextImage from 'next/image'
import { siteMetadata } from '../data/siteMetadata'
import { Tag, Link } from '../components/'
import { BlogSEO } from '../components/analytics/SEO'

export default function PostLayout ({ frontMatter, authorDetails, prevPost, nextPost, children }) {
  const { slug, fileName, title, date, tags } = frontMatter

  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      {/* <ScrollTopAndComment /> */}
      <article>
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
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
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-10'>{title}</h1>
              </div>
            </div>
          </header>
          <div
            className='divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className='pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700'>
              <dt className='sr-only'>Authors</dt>
              <dd>
                <ul className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
                  {authorDetails.map((author) => (
                    <li className='flex items-center space-x-2' key={author.name}>
                      {author.avatar && (
                        <NextImage
                          src={author.avatar}
                          width='38px'
                          height='38px'
                          alt='avatar'
                          className='h-10 w-10 rounded-full'
                        />
                      )}
                      <dl className='whitespace-nowrap text-sm font-medium leading-5'>
                        <dt className='sr-only'>Name</dt>
                        <dd className='text-gray-900 dark:text-gray-100'>{author.name}</dd>
                        <dt className='sr-only'>Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link href={author.twitter} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              <div className='prose max-w-none pt-10 pb-8 dark:prose-dark'>{children}</div>
              <div className='pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300'>
                {/* <Link href={discussUrl(slug)} rel='nofollow'>
                  Discuss on Twitter
                </Link> */}
                {' • '}
                {/* <Link href={editUrl(fileName)}>View on GitHub</Link> */}
              </div>
              {/* <Comments frontMatter={frontMatter} /> */}
            </div>
            <div className='footer'>
              <div className='divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                {tags && (
                  <div className='py-4 xl:py-8'>
                    <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                      Tags
                    </h2>
                    <div className='flex flex-wrap'>
                      {tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(nextPost || prevPost) && (
                  <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
                    {prevPost && (
                      <div>
                        <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                          Previous Article
                        </h2>
                        <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                          <Link href={`/blog/${prevPost.slug}`}>{prevPost.title}</Link>
                        </div>
                      </div>
                    )}
                    {nextPost && (
                      <div>
                        <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                          Next Article
                        </h2>
                        <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                          <Link href={`/blog/${nextPost.slug}`}>{nextPost.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className='pt-4 xl:pt-8'>
                <Link href='/blog' className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>&larr; Back to the blog</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

  )
}
