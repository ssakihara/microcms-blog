import cheerio from 'cheerio'
import hljs from 'highlight.js'
import React from 'react'
import 'highlight.js/styles/hybrid.css'

interface Props {
  html: string
}

const App: React.FC<Props> = (props) => {
  const $ = cheerio.load(props.html)
  $('pre code').each((i, elm) => {
    const text = $(elm).text()
    const onClick = `const copy = document.getElementsByClassName('js-copy-${i}'); navigator.clipboard.writeText(copy[0].textContent)`
    if (/^file:(.*?)\n/.test($(elm).text())) {
      const [_, name, text] = $(elm) // eslint-disable-line @typescript-eslint/no-unused-vars
        .text()
        .match(/^file:(.*?)\n([\s\S]*)/)

      const result = hljs.highlightAuto(text)
      const filenameTextClass = `<div class="filename_text">${name}</div>`
      const flexClass = `<div class="flex">${filenameTextClass}</div>`
      const filenameContainerClass = `<div class="filename container mx-auto">${flexClass}</div>`
      $(elm).html(`${filenameContainerClass}<div class="js-copy-${i} p-4" onClick="${onClick}">${result.value}</div>`)
    } else {
      const result = hljs.highlightAuto(text)
      $(elm).html(`<div class="js-copy-${i} p-4" onClick="${onClick}">${result.value}</div>`)
    }
    $(elm).addClass('hljs cursor-pointer')
  })

  return (
    <>
      <div className="html" dangerouslySetInnerHTML={{ __html: $.html() }}></div>
    </>
  )
}
export default App
