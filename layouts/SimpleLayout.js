import { Tag, Link } from '../components'
import { BlogSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'
import { formatDate } from '../lib/utils/formatDate'

export default function SimpleLayout ({ frontMatter, authorDetails, prevPost, nextPost, children }) {
  const { slug, title, date, tags } = frontMatter
  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      {/* <ScrollTopAndComment /> */}
      <article>
        <div>
          <header>
            <div className='space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700'>
              <dl>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-10'>{title}</h1>
              </div>
            </div>
          </header>
          <div className='divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0' style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              <div className='prose max-w-none pt-10 pb-8 dark:prose-dark'>{children}</div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
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
