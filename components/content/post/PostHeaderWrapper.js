import { formatDate } from '../../../lib/utils/formatDate'

export default function Header ({ date, title }) {
  return (
    <div className='header'>
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
    </div>
  )
}
