import { siteMetadata } from '../data/siteMetadata'
import { Link, Image, PostContent, PostHeader } from '../components/'
import { BlogSEO } from '../components/analytics/SEO'

export default function PostLayout ({ frontMatter, authorDetails, prevPost, nextPost, children }) {
  const { fileName } = frontMatter

  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      {/* <ScrollTopAndComment /> */}
      <article>
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <PostHeader title={frontMatter.title} date={frontMatter.date} />
          <div
            className='divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className='pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700'>
              <dt className='sr-only'>Authors</dt>
              <dd>
                <ul className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
                  {authorDetails.map((author) => (
                    <li className='flex items-center space-x-2' key={author.name}>
                      {author.avatar && (
                        <Image
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
            <PostContent postData={children} tags={frontMatter.tags} prevPost={prevPost} nextPost={nextPost} />
          </div>
        </div>
      </article>
    </div>

  )
}
