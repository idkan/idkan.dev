import { siteMetadata } from '../data/siteMetadata'
import { ScrollTopAndComment, PostAuthors, PostContent, PostHeader } from '../components/'
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
      <ScrollTopAndComment />
      <article>
        <div className='xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700'>
          <PostHeader title={frontMatter.title} date={frontMatter.date} />
          <div
            className='divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <PostAuthors authorDetails={authorDetails} />
            <PostContent postData={children} tags={frontMatter.tags} prevPost={prevPost} nextPost={nextPost} />
          </div>
        </div>
      </article>
    </div>

  )
}
