import Link from 'next/link'

import { Tag } from '../components/index'
import { PageSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'
import { getAllFilesFrontMatter } from '../lib/mdx'
import { formatDate } from '../lib/utils/formatDate'

const MAX_POSTS_PER_PAGE = 5

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home ({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className='divide-y divide-gray-200 dark:dive-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <div className='gap-y-3 gradient text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-12'>
            <span className='md:text-9xl text-6xl block'>Blog.</span>
            <span className='md:text-9xl text-6xl block'>Portfolio.</span>
            <span className='md:text-9xl text-6xl block'>Tech.</span>
          </div>
          <p className='text-lg pt-10 leading-7 text-gray-500 dark:text-gray-400'>
            {siteMetadata.description}
          </p>
        </div>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
            {!posts.length && 'No posts found'}
            {posts.slice(0, MAX_POSTS_PER_PAGE).map((post, index) => {
              const { slug, title, summary, date, tags } = post
              return (
                <li key={index} className='py-12'>
                  <article>
                    <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                      <dl>
                        <dt className='sr-only'>Published on</dt>
                        <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className='space-y-5 xl:col-span-3'>
                        <div className='space-y-2'>
                          <div>
                            <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                              <Link href={`/blog/${slug}`} className='text-gray-900 dark:text-gray-100'>
                                {title}
                              </Link>
                            </h2>
                            <div className='flex flex-wrap'>
                              {tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                              ))}
                            </div>
                          </div>
                          <div className='max-w-none text-gray-500 dark:text-gray-400'>
                            {summary}
                          </div>
                        </div>
                        <div className='text-base font-medium leading-6'>
                          <Link href={`/blog/${slug}`} className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' aria-label={`Read "${title}`}>
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </>
  )
}
