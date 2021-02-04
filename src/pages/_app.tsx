import '../../styles/tailwind.css'
import '../../styles/app.css'
import '../../styles/tailwind-util.css'
import Layout from '@/layouts/main'
import * as gtag from '@/plugins/gtag'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'

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
