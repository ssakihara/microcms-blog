import React from 'react'
import ReactMarkDown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'

type MarkDownRenderProps = {
  source: string
}
type PrismRenderProps = {
  value: string
  language: string
}

const PrismRender: React.FC<PrismRenderProps> = ({ value, language }) => (
  <Prism language={language} style={okaidia}>
    {value}
  </Prism>
)

const MarkDownRender: React.FC<MarkDownRenderProps> = ({ source }) => {
  return (
    <div>
      <ReactMarkDown source={source} renderers={{ code: PrismRender }} />
    </div>
  )
}
export default MarkDownRender
