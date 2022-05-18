import { ScrollTopAndComment, PostHeader, PostContent } from '../components'
import { BlogSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'

export default function SimpleLayout ({ frontMatter, authorDetails, prevPost, nextPost, children }) {
  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <PostHeader title={frontMatter.title} date={frontMatter.date} />
          <div className='divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0' style={{ gridTemplateRows: 'auto 1fr' }}>
            <PostContent postData={children} tags={frontMatter.tags} prevPost={prevPost} nextPost={nextPost} />
          </div>
        </div>
      </article>
    </div>
  )
}
