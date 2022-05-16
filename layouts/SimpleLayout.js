import { Link } from '../components'
import { BlogSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'
import { formatDate } from '../lib/utils/formatDate'

export default function SimpleLayout ({ frontMatter, authorDetails, prevPost, nextPost, children }) {
  const { date, title } = frontMatter
  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
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
              <div className='flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base'>
                {prevPost && (
                  <div className='pt-4 xl:pt-8'>
                    <Link href={`/blog/${prevPost.slug}`} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                      &larr; {prevPost.title}
                    </Link>
                  </div>
                )}
                {nextPost && (
                  <div className='pt-4 xl:pt-8'>
                    <Link href={`/blog/${nextPost.slug}`} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                      {nextPost.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
