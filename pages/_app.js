import '../styles/globals.scss'

import { ThemeProvider } from 'next-theme'
import Head from 'next/head'
import ProgressBar from 'react-scroll-progress-bar'

import { Layout } from '../components'

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute='class'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ProgressBar bgcolor='#22c55e' duration='0.2' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
