import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl font-semibold mb-8 border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.name} href={`/category/${category.slug}`}>
          <a className='block text-gray-500 hover:text-gray-900 font-xs pb-3 mb-3'>
            {category.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Categories
