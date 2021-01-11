/* eslint-disable */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { GA_TRACKING_ID } from '../plugins/gtag'

interface WithNonceProp {
  nonce: string
}
export default class MyDocument extends Document<WithNonceProp> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
    }
  }

  render() {
    const nonce = this.props.nonce
    return (
      <Html>
        <Head nonce={nonce}>
          <script data-ad-client="ca-pub-9772079497932231" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
