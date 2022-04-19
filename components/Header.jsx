import React, { useState, useEffect } from 'react'

import { siteMetadata } from '../data/siteMetadata'
import { getCategories } from '../services'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

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
            <a key={category.id} href={`/category/${category.slug}`} className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 hover:text-primary dark:hover:text-primary'>
              {category.name}
            </a>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header
