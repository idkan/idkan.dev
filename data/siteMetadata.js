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
  ]
}
