import { exec } from 'child_process'
import { getOptions } from 'lib/chromium/options'
import core from 'puppeteer-core'
let _page: core.Page | null

function setFontConfig(): Promise<any> {
  return new Promise((resolve, reject) => {
    process.env.HOME = process.env.LAMBDA_TASK_ROOT
    const command = `fc-cache -v ${process.env.HOME}.fonts`
    exec(command, (error) => {
      if (error) {
        return reject(error)
      }
      resolve(0)
    })
  })
}

async function getPage(isDev: boolean) {
  if (_page) {
    return _page
  }
  const options = await getOptions(isDev)
  const browser = await core.launch(options)
  _page = await browser.newPage()
  return _page
}

export async function getScreenshot(html: string, isDev: boolean): Promise<any> {
  await setFontConfig()
  const page = await getPage(isDev)
  await page.setViewport({ width: 2048, height: 1170 })
  await page.setContent(html)
  const file = await page.screenshot({ type: 'png' })
  return file
}
