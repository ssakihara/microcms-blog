import React from 'react'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

interface Props {
  html: string
}

const App: React.FC<Props> = (props) => {
  const $ = cheerio.load(props.html)
  $('pre code').each((_, elm) => {
    const text = $(elm).text()
    if (/^file:(.*?)\n/.test($(elm).text())) {
      const [_, name, text] = $(elm)
        .text()
        .match(/^file:(.*?)\n([\s\S]*)/)

      const result = hljs.highlightAuto(text)
      $(elm).html(result.value)
      $(elm).addClass('hljs pt-10')
      $(elm).before('<div class="file-name">' + name + '</div>\n')
    } else {
      const result = hljs.highlightAuto(text)
      $(elm).html(result.value)
      $(elm).addClass('hljs pt-10')
    }
  })

  return (
    <>
      <div className="html" dangerouslySetInnerHTML={{ __html: $.html() }}></div>
    </>
  )
}
export default App
