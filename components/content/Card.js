import { BsFolder } from 'react-icons/bs'
import { Link, SocialIcon } from '..'

const Card = ({ title, description, imgSrc, href, github, tech }) => {
  return (
    <div className='p-4 md:w-1/2 max-w-xl'>
      <div className='h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700'>
        <div className='p-6'>
          <div className='flex flex-row justify-between items-center'>
            {imgSrc && (
              <div className='flex flex-row items-center'>
                <img
                  className='h-12 w-12 rounded-full'
                  src={imgSrc}
                  alt={title}
                />
              </div>
            )}
            <div className='my-2'>
              <Link href={github}>
                <BsFolder className='text-primary-500 h-10 w-10 hover:text-primary-600 dark:hover:text-primary-400' />
              </Link>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='mx-1'>
                {href ? <SocialIcon kind='external' href={href} size='6' /> : null}
              </div>
              <div className='mx-1'>
                {github ? <SocialIcon kind='github' href={github} size='6' /> : null}
              </div>
            </div>
          </div>
          <h2 className='text-2xl font-bold leading-8 tracking-tight mb-3'>{title}</h2>
          <p className='prose text-gray-500 max-w-none dark:text-gray-400 mb-3'>{description}</p>
          <div className='flex flex-row justify-between'>
            <div className='text-gray-400 text-sm font-extralight'>
              {tech.map(t =>
                <span key={t} className=''>
                  {t} &#8226;
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
