import React from 'react'
import { Card } from '../components'
import { PageSEO } from '../components/analytics/SEO'
import { projectsData } from '../data/projectsData'
import { siteMetadata } from '../data/siteMetadata'

const projects = () => {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-10'>
            Projects
          </h1>
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>Some of the projects I've worked on.</p>
        </div>
        <div className='container py-12'>
          <div className='flex flex-wrap -m-4'>
            {projectsData.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                href={project.href}
                github={project.github}
                tech={project.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default projects
