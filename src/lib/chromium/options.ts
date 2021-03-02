import chrome from 'chrome-aws-lambda'
const exePath =
  process.platform === 'win32'
    ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

interface Options {
  args: string[]
  executablePath: string
  headless: boolean
}

export async function getOptions(isDev: boolean): Promise<any> {
  chrome.font(
    'https://rawcdn.githack.com/minoryorg/Noto-Sans-CJK-JP/7fbcb560ac433b37f7f0e65507e78924b717f7a7/fonts/NotoSansCJKjp-Bold.ttf'
  )
  chrome.font(
    'https://rawcdn.githack.com/minoryorg/Noto-Sans-CJK-JP/7fbcb560ac433b37f7f0e65507e78924b717f7a7/fonts/NotoSansCJKjp-Regular.ttf'
  )

  let options: Options
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    }
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    }
  }
  return options
}
