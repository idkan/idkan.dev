import Link from 'next/link'
import { kebabCase } from '../../lib/utils/kebabCaseFormat'

const Tag = ({ tag }) => {
  return (
    <Link href={`/tags/${kebabCase(tag)}`}>
      <a className='mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
        {tag}
      </a>
    </Link>
  )
}

export default Tag
