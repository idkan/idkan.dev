import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'

const components = {
  github: BsGithub,
  twitter: BsTwitter,
  linkedin: BsLinkedin,
  instagram: BsInstagram
}

const SocialIcon = ({ kind, href, size = 24 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))) { return null }

  const Icon = components[kind]

  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <span className='sr-only'>{kind}</span>
      {Icon && <Icon size={size} className='text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400' />}
    </a>
  )
}

export default SocialIcon
