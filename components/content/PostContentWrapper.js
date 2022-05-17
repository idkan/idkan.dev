import { Tag, Link } from '..'

export default function Post ({ postData, tags, prevPost, nextPost }) {
  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
        <div className='prose max-w-none pt-10 pb-8 dark:prose-dark'>{postData}</div>
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
    </>
  )
}
