import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Content } from '../../types/content'
import { Tag } from '../../types/tag'
import axios from '../../plugins/microcms'
import { NextSeo } from 'next-seo'
import Main from '../../components/main'
import Card from '../../components/card'

interface Props {
  tag: Tag
  contents: Content[]
}
const App: React.FC<Props> = (props) => {
  return (
    <>
      <NextSeo
        title={`Tag ${props.tag.name} | ${process.env.NEXT_PUBLIC_APP_NAME}`}
        description={`Tag ${props.tag.name}`}
      />
      <Main bg="bg-top">
        <div className="flex pt-7">
          <span className="mr-2 text-3xl md:text-4xl">Tag</span>
          <span className="break-all text-3xl md:text-4xl">{props.tag.name}</span>
        </div>
        <div className="flex flex-wrap justify-between justify-center pt-7">
          {props.contents.map((content) => {
            return <Card content={content} key={content.id}></Card>
          })}
        </div>
      </Main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get('tag')
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
  const responseContent = await axios.get(`content?fields=id,emoji,title,tags.id,tags.name&filters=tags[contains]${id}`)
  const contents = responseContent.data.contents

  const responseTag = await axios.get(`tag/${id}?fields=name`)
  const tag = responseTag.data
  return {
    props: {
      contents,
      tag,
    },
  }
}

export default App
