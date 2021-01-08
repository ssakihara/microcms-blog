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
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  return (
    <>
      <div className="html" dangerouslySetInnerHTML={{ __html: $.html() }}></div>
    </>
  )
}
export default App
