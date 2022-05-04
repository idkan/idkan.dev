import { PageSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'
import { getAllTags } from '../lib/tags'

import { Tag } from '../components'
import { kebabCase } from '../lib/utils/kebabCaseFormat'
import Link from 'next/link'

export async function getStaticProps () {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags ({ tags }) {
  console.log(tags)
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.title}`} description='Things you can find' />
      <div className='flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
        <div className='space-x-2 pt-6 pb-8 md:space-x-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14'>
            Tags
          </h1>
        </div>
        <div className='flex max-w-lg flex-wrap'>
          {Object.keys(tags).length === 0 && 'No tags found'}
          {sortedTags.map((tag) => {
            return (
              <div key={tag} className='my-2 mr-5'>
                <Tag tag={tag} />
                <Link href={`/tags/${kebabCase(tag)}`}>
                  <a className='text-gray-600 dark:text-gray-400 hover:text-gray-900'>
                    {`(${tags[tag]})`}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
