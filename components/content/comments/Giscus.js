import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'

import { siteMetadata } from '../../../data/siteMetadata'

const Giscus = () => {
  const [showComments, setShowComments] = useState(true)
  const { theme, resolveTheme } = useTheme()

  const commentsTheme = siteMetadata.comment.giscusConfig.themeURL === '' ? theme === 'dark' || resolveTheme === 'dark' ? siteMetadata.comment.giscusConfig.darkTheme : siteMetadata.comment.giscusConfig.theme : siteMetadata.comment.giscusConfig.themeURL

  const COMMENTS_ID = 'comments-container'

  const loadComments = useCallback(() => {
    setShowComments(false)

    const { repo, repositoryId, category, categoryId, mapping, reactions, metadata, inputPosition, lang } = siteMetadata?.comment?.giscusConfig

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo)
    script.setAttribute('data-repo-id', repositoryId)
    script.setAttribute('data-category', category)
    script.setAttribute('data-category-id', categoryId)
    script.setAttribute('data-mapping', mapping)
    script.setAttribute('data-reactions-enabled', reactions)
    script.setAttribute('data-emit-metadata', metadata)
    script.setAttribute('data-input-position', inputPosition)
    script.setAttribute('data-lang', lang)
    script.setAttribute('data-theme', commentsTheme)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const container = document.getElementById(COMMENTS_ID)
    if (container) container.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [commentsTheme])

  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (!iframe) return
    loadComments()
  }, [loadComments])

  return (
    <div className='pt-6 pb-6 text-center text-gray-700 dark:text-gray-300'>
      {showComments && <button onClick={loadComments}>Load Comments</button>}
      <div id={COMMENTS_ID} className='giscus-frame' />
    </div>
  )
}

export default Giscus
