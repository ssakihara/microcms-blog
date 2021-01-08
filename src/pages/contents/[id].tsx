import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import axios from '../../plugins/microcms'
import { NextSeo } from 'next-seo'
import { Content } from '../../types/content'
import Main from '../../components/main'
import Html from '../../components/html'

interface Props {
  content: Content
}
const App: React.FC<Props> = (props) => {
  return (
    <>
      <NextSeo
        title={`${props.content.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`}
        description={`${props.content.description}`}
      />
      <Main bg="bg-contents">
        <h1 className="text-3xl py-8 px-1">{props.content.title}</h1>
        <div className="blogs pb-10">
          <Html html={props.content.body}></Html>
        </div>
      </Main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('content')
  const paths = response.data.contents.map((params) => ({
    params,
  }))
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const response = await axios.get(`content/${id}`)
  const content = response.data
  return {
    props: {
      content,
    },
  }
}
export default App
