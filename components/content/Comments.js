import { siteMetadata } from '../../data/siteMetadata'
import dynamic from 'next/dynamic'

const GiscusComponent = dynamic(
  () => {
    return import('./comments/Giscus.js')
  },
  { ssr: false }
)

export default function Comments () {
  const comment = siteMetadata?.comment
  if (!comment || Object.keys(comment).length === 0) return <></>

  return (
    <div id='comments'>
      {siteMetadata.comment && (
        <GiscusComponent />
      )}
    </div>
  )
}
