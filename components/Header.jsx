import React, { useState, useEffect } from 'react'

import { siteMetadata } from '../data/siteMetadata'
import { getCategories } from '../services'
import { ThemeSwitcher } from '../components'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

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
    <header className='flex items-center justify-between py-10'>
      <div>
        <a href='/' aria-label={siteMetadata.headerTitle}>
          <div className='flex items-center justify-between'>
            <div className='mr-3'>
              LOGO
            </div>
            <div className='hidden h-6 text-2xl font-semibold sm:block'>
              {siteMetadata.headerTitle}
            </div>
          </div>
        </a>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {categories.map((category) => (
            <a key={category.id} href={`/category/${category.slug}`} className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:text-primary-600 dark:hover:text-primary-600'>
              {category.name}
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
          <div
            className={`fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          showNav ? 'translate-x-0' : 'translate-x-full'
        }`}
          >
            <button type='button' aria-label='toggle modal' className='fixed h-full w-full cursor-auto focus:outline-none' onClick={toggleNav} />
            <nav className='fixed mt-8 h-full w-full'>
              {categories.map((category) => (
                <div key={category.id} className='px-12 py-4 text-center'>
                  <a href={`/category/${category.slug}`} className='text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-600'>
                    {category.name}
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
