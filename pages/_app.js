import '../styles/globals.scss'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import ProgressBar from 'react-scroll-progress-bar'

import { LayoutWrapper } from '../components'
import { siteMetadata } from '../data/siteMetadata'

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme={siteMetadata.theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ProgressBar bgcolor='#22c55e' duration='0.2' />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default App
