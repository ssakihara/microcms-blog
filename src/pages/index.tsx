import React from 'react'
import { GetStaticProps } from 'next'
import { Content } from '@/types/content'
import { getContents, Response } from '@/plugins/microcms'
import { NextSeo } from 'next-seo'
import Main from '@/components/main'
import Card from '@/components/card'

interface Props {
  contents: Content[]
}
const App: React.FC<Props> = (props) => {
  return (
    <>
      <NextSeo title={process.env.NEXT_PUBLIC_APP_NAME} description={process.env.NEXT_PUBLIC_APP_DESCRIPTION} />
      <Main class="px-1 bg-top">
        <div className="flex pt-7">
          <span className="text-4xl">Contents</span>
        </div>
        <div className="flex flex-wrap justify-between pt-7">
          {props.contents.map((content) => {
            return <Card content={content} key={content.id}></Card>
          })}
        </div>
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getContents<Response<Content[]>>('content', {
    fields: 'id,title,createdAt,tags.id,tags.name',
  })
  const props = response.data
  return {
    props,
  }
}

export default App
