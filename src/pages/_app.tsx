import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '../../styles/tailwind.css'
import '../../styles/app.css'
import '../../styles/tailwind-util.css'
import React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/layout'
import * as gtag from '../plugins/gtag'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
