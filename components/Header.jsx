import Link from 'next/link'
import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  console.log(categories)
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-black'>
              idkan.dev
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map(category => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
