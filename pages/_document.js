import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='19x19' href='/static/favicon/favicon-base.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon/favicon-16x16.png' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='theme-color' content='#000000' />
          <link rel='alternate' type='application/rss+xml' title='RSS' href='/rss.xml' />
        </Head>
        <body className='bg-gray-100 text-black antialiased dark:bg-gray-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
