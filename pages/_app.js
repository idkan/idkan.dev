import '../styles/globals.scss'
import '../styles/prism.css'

import 'katex/dist/katex.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import { LayoutWrapper, ProgressBar } from '../components'
import { siteMetadata } from '../data/siteMetadata'

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme={siteMetadata.theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ProgressBar duration='0.4' />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default App
