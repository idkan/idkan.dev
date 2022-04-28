import React, { useState } from 'react'

import Typewriter from 'typewriter-effect'

import { siteMetadata } from '../data/siteMetadata'
import { ThemeSwitcher } from '../components'
import { useRouter } from 'next/router'
import { headerNavLinks } from '../data/headerNavLinks'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const router = useRouter()

  const toggleNav = () => {
    setShowNav(!showNav)
    document.querySelector('.menu-wrapper').classList.toggle('open')
    if (showNav) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <header className='flex items-center justify-between py-6'>
      <div>
        <a href='/' aria-label={siteMetadata.headerTitle}>
          <div className='flex items-center justify-between'>
            <div className='text-xl mr-3 flex justify-center'>
              <span className='text-primary-500 dark:text-primary-600'>
                {'~/'}{' '}
              </span>
              <Typewriter options={{ strings: [router.asPath.substring(1), 'idkan.dev'], autoStart: true, loop: true, delay: 100 }} />
            </div>
          </div>
        </a>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {headerNavLinks.map((link, index) => (
            <a key={index} href={link.href} className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:text-primary-600 dark:hover:text-primary-400'>
              {link.text}
            </a>
          ))}
        </div>
        <ThemeSwitcher />
        <div className='sm:hidden'>
          <button type='button' className='menu-wrapper mx-1 h-6 w-6 flex flex-col justify-between cursor-pointer' aria-label='Toggle menu' onClick={toggleNav}>
            <span className='line-menu half start bg-gray-900 dark:bg-gray-100' />
            <span className='line-menu bg-gray-900 dark:bg-gray-100' />
            <span className='line-menu half end bg-gray-900 dark:bg-gray-100' />
          </button>
          <div className={`fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
            <button type='button' aria-label='toggle modal' className='fixed h-full w-full cursor-auto focus:outline-none' onClick={toggleNav} />
            <nav className='fixed mt-8 h-full w-full'>
              {headerNavLinks.map((link, index) => (
                <div key={index} className='px-12 py-4 text-center'>
                  <a href={link.href} className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400'>
                    {link.text}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
