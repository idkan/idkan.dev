import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'

const posts = [{ title: 'React Testing', excerpt: 'This is a test' }, { title: 'React Testing 2', excerpt: 'This is a test 2' }]

export default function Home () {
  return (
    <div className='container mx-auto p-10 mb-8'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
