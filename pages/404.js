
import { PageSEO } from '../components/analytics/SEO'
import { siteMetadata } from '../data/siteMetadata'
import { Link, Image } from '../components'

export default function FourZeroFour () {
  return (
    <>
      <PageSEO title={`Page not found / ${siteMetadata.title}`} description='Page not found' />
      <div className='flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6'>
        <div className='space-x-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14'>
            <Image src='/static/images/404-not-found.webp' alt='idkan.dev' height='450' width='450' className='mr-4' />
          </h1>
        </div>
        <div className='max-w-md'>
          <p className='mb-4 text-xl font-bold leading-normal md:text-2xl'>
            Sorry we couldn't find this page.
          </p>
          <p className='mb-8 text-sm text-gray-500 dark:text-gray-400' />
          <p className='mb-8'>But dont worry, you can find plenty of other things on homepage.</p>
          <Link href='/'>
            <button className='focus:shadow-outline-blue inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-500'>
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </>

  )
}
