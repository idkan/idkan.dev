import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'

export const siteMetadata = {
  title: 'idkan dev 👨‍💻 | Backend, Frontend, JavaScript, Algorithms , Work Life',
  author: 'Abraham Serena',
  headerTitle: 'idkan.dev Blog',
  description: 'Web Development, Algorithms, Work Life, and more ⚡️🚀🎨',
  language: 'en-US',
  locale: 'en-US',
  theme: 'system',
  siteUrl: 'https://idkan.dev',
  siteRepo: 'https://github.com/idkan/idkan.dev',
  siteLogo: '/static/images/logo.png',
  socialMediaBanner: 'https://idkan.dev/social-media-banner.png',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/idkan/',
      icon: <BsGithub size='24' />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/idkandev',
      icon: <BsTwitter size='24' />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abraham-serena/',
      icon: <BsLinkedin size='24' />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/idkan.dev/',
      icon: <BsInstagram size='24' />
    }
  ],
  comment: {
    provider: 'giscus',
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark_dimmed',
      themeURL: ''
    }
  }
}
