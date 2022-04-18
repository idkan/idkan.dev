import '../styles/globals.scss'
import React from 'react'
import { Layout } from '../components'
import ProgressBar from 'react-scroll-progress-bar'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <ProgressBar bgcolor='#22c55e' duration='0.2' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
