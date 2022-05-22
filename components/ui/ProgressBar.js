import React, { useState, useEffect } from 'react'

const scrollStyle = (width, height = '3', duration = '1') => ({
  height: `${height}px`,
  width: `${width}`,
  transitionProperty: 'width',
  transitionDuration: `${duration}s`,
  transitionTimingFunction: 'ease-out'
})

const ProgressBar = ({ height, duration }) => {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', scrolling)
    return () => window.removeEventListener('scroll', scrolling)
  }, [])

  const scrolling = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100

    if (height > 0) {
      setWidth(`${scrolled}%`)
    } else {
      setWidth(null)
    }
  }

  return (
    <div className='fixed m-0 p-0 top-0 z-[99] bg-primary-500 dark:bg-primary-600' style={scrollStyle(width, height, duration)} />
  )
}

export default ProgressBar
