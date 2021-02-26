import Ogp from '@/components/ogp'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as playwright from 'playwright-aws-lambda'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const isDev = process.env.NODE_ENV !== 'production'

async function getLaunchOptions() {
  if (isDev) {
    return {
      args: [],
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true,
    }
  } else {
    return {}
  }
}

function getHtml({ title }): string {
  const doctype = `<!doctype html>`
  const element = React.createElement(Ogp, { title })
  const markup = ReactDOMServer.renderToStaticMarkup(element)

  return `${doctype}${markup}`
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const title = req.query.title
  // const options = await getLaunchOptions()
  // const browser = await playwright.launchChromium(options)
  const browser = await playwright.launchChromium()
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  })
  const html = getHtml({ title })

  await page.setContent(html, { waitUntil: 'domcontentloaded' })
  await page.evaluateHandle('document.fonts.ready')

  const data = await page.screenshot({ type: 'png' })
  await browser.close()

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')

  res.end(data)
}
