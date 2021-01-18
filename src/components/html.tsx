import React from 'react'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
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
      $(elm).html(
        `<span class="file-name">${name}</span>\n<div class="js-copy-${i}" onClick="${onClick}">${result.value}</div>`
      )
      $(elm).addClass('hljs pt-10 cursor-pointer')
    } else {
      const result = hljs.highlightAuto(text)
      $(elm).html(`<div class="js-copy-${i}" onClick="${onClick}">${result.value}</div>`)
      $(elm).addClass('hljs pt-10 cursor-pointer')
    }
  })

  return (
    <>
      <div className="html" dangerouslySetInnerHTML={{ __html: $.html() }}></div>
    </>
  )
}
export default App
