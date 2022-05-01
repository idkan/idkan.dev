import React from 'react'

import { experienceData } from '../../data/experienceData'

const Experience = () => {
  return (
    <>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Experience
        </h1>
      </div>
      <div className='pb-8 pt-4 max-w-none xl:col-span-2'>
        {experienceData.map((experience, index) => (
          <div key={index} className='my-3'>
            <div className='flex flex-row text-xl'>
              <span className='text-gray-500 dark:text-gray-400'>{experience.title}</span>
              <span className='text-gray-500 dark:text-gray-400'>&nbsp;@&nbsp;</span>
              <span className='text-primary-500 dark:text-primary-400'>
                <a href={experience.companyUrl} target='_blank' rel='noopener noreferrer' className='no-underline'>{experience.company}</a>
              </span>
            </div>
            <div>
              <div className='p-1 font-mono text-sm text-gray-500 dark:text-gray-400'>📅 {experience.rangeDate}</div>
              <div className='p-1 font-mono text-sm text-gray-500 dark:text-gray-400'>📍 {experience.location}</div>
              <div className='p-2'>
                {experience.description.map((description, index) => (
                  <div key={index} className='flex flex-row space-x-2'>
                    <div className='text-primary-500 dark:text-primary-400 mr-2 text-lg'>
                      &#8227;
                    </div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      {description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Experience
