import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteMetadata } from '../../data/siteMetadata'

const CommonSEO = ({ title, description, ogType, ogImage, twImage, canonicalUrl }) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name='robots' content='index, follow' />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={ogType} />
      <meta property='og:site_name' content={siteMetadata.title} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={description} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:secure_url' content={ogImage} />
      <meta property='og:image:url' content={ogImage} />
      <meta property='og:url' content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property='og:site_name' content={siteMetadata.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@idkandev' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={twImage} />
      <meta name='twitter:image:alt' content={description} />
      <link rel='canonical' href={canonicalUrl || `${siteMetadata.siteUrl}${router.asPath}`} />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = `${siteMetadata.siteUrl}/social-media-banner.png`
  const twImageUrl = `${siteMetadata.siteUrl}/social-media-banner.png`

  return (
    <CommonSEO
      title={title}
      description={description}
      ogType='website'
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = `${siteMetadata.siteUrl}/social-media-banner.png`
  const twImageUrl = `${siteMetadata.siteUrl}/social-media-banner.png`
  const router = useRouter()

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType='website'
        ogImage={ogImageUrl}
        twImage={twImageUrl}
        canonicalUrl={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <Head>
        <link
          rel='alternate'
          type='application/rss+xml'
          title={`${siteMetadata.title} - RSS feed`}
          href={`${siteMetadata.siteUrl}/${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}
