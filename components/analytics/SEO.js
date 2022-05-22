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
      <meta charset='UTF-8' />
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

export const BlogSEO = ({ authorDetails, title, summary, date, lastModified, url, images = [], canonicalUrl }) => {
  const router = useRouter()
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastModified || date).toISOString()

  const imagesArray = images.length === 0 ? [siteMetadata.socialMediaBanner] : typeof images === 'string' ? [images] : images
  const featuredImages = imagesArray.map(image => {
    return {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}${image}`
    }
  })

  let authorList
  if (authorDetails) {
    authorList = authorDetails.map(author => {
      return {
        '@type': 'Person',
        name: author.name
      }
    })
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author
    }
  }

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url || `${siteMetadata.siteUrl}${router.asPath}`
    },
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.title,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}/${siteMetadata.siteLogo}`
      }
    },
    description: summary
  }

  const twImageUrl = featuredImages[0].url

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType='article'
        ogImage={featuredImages}
        twImage={twImageUrl}
        canonicalUrl={canonicalUrl || `${siteMetadata.siteUrl}${router.asPath}`}
      />
      <Head>
        {date && <meta property='article:published_time' content={publishedAt} />}
        {lastModified && <meta property='article:modified_time' content={modifiedAt} />}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }} />
      </Head>
    </>
  )
}
