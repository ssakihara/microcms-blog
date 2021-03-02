import { getScreenshot } from 'lib/chromium/chromium'
import { NextApiRequest, NextApiResponse } from 'next'

function getCss() {
  return `
  body {
    background-color: #ebf5ff;
    height: 100vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .heading {
    font-family: 'Inter', sans-serif;
    font-size: 64px;
    font-style: normal;
    line-height: 1.8;
  }
  `
}

function getHtml(title: string) {
  return `<!DOCTYPE html>
  <html>
      <meta charset="utf-8">
      <title>Generated Image</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
          ${getCss()}
      </style>
      <body>
          <div class="container">
              <div class="heading">${title}</div>
          </div>
      </body>
  </html>`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  try {
    const title: any = req.query.title
    const html = getHtml(title)
    const isDev = process.env.NODE_ENV !== 'production'
    const file = await getScreenshot(html, isDev)
    res.statusCode = 200
    res.setHeader('Content-Type', `image/png`)
    res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
    console.error(e)
  }
}
