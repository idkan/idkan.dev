import Head from 'next/head'

const posts = [{ title: 'React Testing', excerpt: 'This is a test' }, { title: 'React Testing 2', excerpt: 'This is a test 2' }]

export default function Home () {
  return (
    <div className='container mx-auto p-10 mb-8'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div key={index} className='col-span-12 lg:col-span-6'>
              <div className='bg-white rounded shadow p-6'>
                <h3 className='text-xl font-bold mb-4'>{post.title}</h3>
                <p className='text-gray-700 text-base'>{post.excerpt}</p>
              </div>
            </div>
          ))}
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8' />
          </div>
        </div>

      </div>
    </div>
  )
}
